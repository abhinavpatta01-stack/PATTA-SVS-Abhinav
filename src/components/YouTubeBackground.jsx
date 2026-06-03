import { useEffect, useRef, useCallback, useState } from 'react';

const YOUTUBE_VIDEO_ID = 'X-XZx1o_w-A';

/**
 * YouTubeBackground — Full-screen YouTube video background with audio.
 * Scroll speed controls the playback rate.
 * Requires user click to start (browser autoplay policy).
 */
export default function YouTubeBackground({ isReady }) {
  const playerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const currentRate = useRef(1);
  const rafRef = useRef(null);
  const targetRate = useRef(1);

  const [isPlaying, setIsPlaying] = useState(false);

  // Smooth rate interpolation
  const smoothRate = useCallback(() => {
    const diff = targetRate.current - currentRate.current;
    if (Math.abs(diff) > 0.05) {
      currentRate.current += diff * 0.08;
      if (playerRef.current && playerRef.current.setPlaybackRate) {
        // YouTube supports: 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2
        const clamped = Math.max(0.25, Math.min(2, currentRate.current));
        const snapped = Math.round(clamped * 4) / 4; // snap to 0.25 increments
        try { playerRef.current.setPlaybackRate(snapped); } catch(e) {}
      }
    }
    rafRef.current = requestAnimationFrame(smoothRate);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('yt-player', {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 0,
          controls: 0,
          showinfo: 0,
          rel: 0,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          modestbranding: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(50);
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            }
            // If video ends, replay
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(0);
              event.target.playVideo();
            }
          }
        }
      });
    };

    // Start smooth rate animation
    rafRef.current = requestAnimationFrame(smoothRate);

    // Scroll → playback rate mapping
    const handleScroll = () => {
      const now = Date.now();
      const dy = Math.abs(window.scrollY - lastScrollY.current);
      const dt = now - lastScrollTime.current;
      const velocity = dt > 0 ? dy / dt : 0; // px/ms

      lastScrollY.current = window.scrollY;
      lastScrollTime.current = now;

      // Map velocity to rate: idle = 1x, fast scroll = 2x
      if (velocity > 0.3) {
        targetRate.current = Math.min(2, 1 + velocity * 1.5);
      }

      // Reset rate after scrolling stops
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        targetRate.current = 1;
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeoutRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isReady, smoothRate]);

  if (!isReady) return null;

  return (
    <div className="video-background" style={{ opacity: isPlaying ? 1 : 0, transition: 'opacity 1.5s ease' }}>
      <div id="yt-player" />
    </div>
  );
}
