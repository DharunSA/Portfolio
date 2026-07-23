import { useState, useEffect } from 'react';

type SpotifyState = {
  isPlaying: boolean;
  track: string | null;
  artist: string | null;
  url: string | null;
  imageUrl: string | null;
};

// Spotify green SVG icon
function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-[#1DB954]" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
      <path d="M6.8 9.2c3.9-1.2 8.1-.9 11.4 1" fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7.6 12c3.3-1 6.8-.7 9.7.8" fill="none" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.5 14.6c2.7-.8 5.4-.6 7.7.6" fill="none" stroke="#111" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// Audio-reactive equalizer bars
function EqBars({ active }: { active: boolean }) {
  return (
    <div className="flex items-end gap-[2px] shrink-0" style={{ height: 18 }}>
      <span className={`w-[3px] rounded-sm bg-[#1DB954] ${active ? 'eq-bar-1' : 'opacity-30'}`} style={{ height: active ? 14 : 5 }} />
      <span className={`w-[3px] rounded-sm bg-[#1DB954] ${active ? 'eq-bar-2' : 'opacity-30'}`} style={{ height: active ? 18 : 8 }} />
      <span className={`w-[3px] rounded-sm bg-[#1DB954] ${active ? 'eq-bar-3' : 'opacity-30'}`} style={{ height: active ? 10 : 4 }} />
      <span className={`w-[3px] rounded-sm bg-[#1DB954] ${active ? 'eq-bar-4' : 'opacity-30'}`} style={{ height: active ? 16 : 7 }} />
    </div>
  );
}

export default function SpotifyNowPlaying({ className = '' }: { className?: string }) {
  // Default: show a demo track while waiting for live data / if offline
  const [spotify, setSpotify] = useState<SpotifyState>({
    isPlaying: true,
    track: 'Starboy',
    artist: 'The Weeknd ft. Daft Punk',
    url: 'https://open.spotify.com',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734718e24124519962a41b182d',
  });

  useEffect(() => {
    // Live fetch via Lanyard Discord–Spotify integration
    const fetchSpotify = async () => {
      try {
        const res = await fetch('https://api.lanyard.rest/v1/users/1463091630033604721');
        if (!res.ok) return;
        const json = await res.json();
        if (json?.data?.spotify) {
          const s = json.data.spotify;
          setSpotify({
            isPlaying: true,
            track: s.song,
            artist: s.artist,
            url: `https://open.spotify.com/track/${s.track_id}`,
            imageUrl: s.album_art_url,
          });
        }
      } catch {
        // Keep demo/fallback state
      }
    };

    fetchSpotify();
    const id = setInterval(fetchSpotify, 12_000);
    return () => clearInterval(id);
  }, []);

  const isOnline = spotify.isPlaying && Boolean(spotify.track);

  return (
    <div className={`flex items-center gap-3 overflow-hidden font-instrumentsans ${className}`.trim()}>

      {/* Rotating Vinyl Disc / Album Art */}
      <div className="relative h-7 w-7 shrink-0 flex items-center justify-center">
        {spotify.imageUrl ? (
          <>
            <img
              src={spotify.imageUrl}
              alt={spotify.track ?? 'Album cover'}
              className={`h-7 w-7 rounded-full object-cover border border-border-primary ${isOnline ? 'vinyl-spin' : ''}`}
            />
            {/* Vinyl centre hole */}
            <span className="absolute h-2 w-2 rounded-full bg-bg-primary border border-border-primary/40 pointer-events-none" />
          </>
        ) : (
          <SpotifyIcon />
        )}
      </div>

      {/* Equalizer Visualizer */}
      <EqBars active={isOnline} />

      {/* Label + Track info */}
      <div className="min-w-0 flex-1 text-xs truncate text-text-secondary">
        {isOnline ? (
          <a
            href={spotify.url ?? 'https://open.spotify.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-text-primary transition-colors inline-flex flex-wrap items-center gap-1 truncate"
            title={`${spotify.track} by ${spotify.artist}`}
          >
            <span className="font-semibold text-[#1DB954]">Now Playing</span>
            <span className="opacity-30">·</span>
            <span className="text-text-primary">{spotify.track}</span>
            {spotify.artist && <span className="opacity-60 truncate">by {spotify.artist}</span>}
          </a>
        ) : (
          <span className="opacity-50">Offline</span>
        )}
      </div>
    </div>
  );
}
