import { getYoutubePlaylists } from '@/app/services/youtube.service';
import MusicClient from './_components/music-client';
import { unstable_cache } from 'next/cache';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpotify, faApple, faYoutube, faSoundcloud} from '@fortawesome/free-brands-svg-icons';

// --- Constants for better maintainability ---

const SPOTIFY_ARTIST_EMBED_SRC = "https://open.spotify.com/embed/artist/0ETJQforv5OXgDgidQv9qd?utm_source=generator";

// 2. Define social links in a clean array
const SOCIAL_LINKS = [
  {
    href: "https://open.spotify.com/artist/0ETJQforv5OXgDgidQv9qd",
    ariaLabel: "Spotify (HI-LO)",
    icon: faSpotify,
  },
  {
    href: "https://soundcloud.com/official-hilo",
    ariaLabel: "Apple Music (HI-LO)",
    icon: faSoundcloud,
  },
  {
    href: "https://music.apple.com/us/artist/oliver-heldens/608826395",
    ariaLabel: "Apple Music (Oliver Heldens)",
    icon: faApple, // Re-using Apple icon for consistency
  },
  {
    href: "https://www.youtube.com/@HILOofficial",
    ariaLabel: "YouTube (HI-LO)",
    icon: faYoutube,
  },
];

// --- Caching Logic (Kept as is) ---

const getCachedYoutubePlaylists = unstable_cache(
  async () => {
    try {
      const playlists = await getYoutubePlaylists();
      return playlists;
    } catch (error) {
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to fetch YouTube playlists:', error);
      }
      return {
        djset: {
          kind: 'youtube#playlistItemListResponse',
          etag: '',
          items: [],
          pageInfo: { totalResults: 0, resultsPerPage: 0 },
        },
        heldeep: {
          kind: 'youtube#playlistItemListResponse',
          etag: '',
          items: [],
          pageInfo: { totalResults: 0, resultsPerPage: 0 },
        },
      };
    }
  },
  ['youtube-playlists-data'],
  { revalidate: 3600 }
);

// --- Component ---

export default async function MusicSection() {
  const { djset } = await getCachedYoutubePlaylists();

  return (
    <section
      id="releases"
      className="relative px-4 py-12 bg-[url('/images/releasesbg.webp')] bg-cover text-white flex flex-col min-h-screen"
    >
      <div className="lg:w-11/12 mx-auto w-full">
        {/* Header and Social Links Container */}
        <div className="flex flex-col lg:flex-row justify-between mb-8 lg:mb-12">

          <h2 className="lg:text-7xl text-4xl font-bold mb-6 lg:mb-0">
            MUSIC
          </h2>

          {/* Social Links - Simplified layout */}
          <div className="flex justify-center lg:justify-end gap-4 flex-wrap">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.ariaLabel}
                target="_blank"
                href={link.href}
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label={link.ariaLabel}
              >
                {/* 3. Use FontAwesomeIcon */}
                <FontAwesomeIcon
                  icon={link.icon}
                  className="lg:h-16 lg:w-16 h-12 w-12"
                />
              </a>
            ))}
          </div>

        </div>

        {/* Content Section: Embeds and Client Component */}
        <div className="w-full items-center mx-auto flex flex-col lg:flex-row lg:mt-0 gap-8 lg:gap-12 transition-all duration-300">

          {/* Spotify embed for an artist */}
          <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start transition-all duration-300">
            <div className="w-full lg:w-auto mx-auto rounded-xl">
              <iframe
                src={SPOTIFY_ARTIST_EMBED_SRC}
                className="lg:w-[40vw] w-[93vw] rounded-xl h-[850px] border-0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Artist Embed"
                style={{ border: 'none' }}
              />
            </div>
          </div>

          {/* DJset Playlist */}
          <MusicClient djset={djset} />
        </div>
      </div>
    </section>
  );
}