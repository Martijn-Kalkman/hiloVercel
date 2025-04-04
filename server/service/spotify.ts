import axios from 'axios';
import { useRuntimeConfig } from '#imports';
import { encodeBase64 } from '~~/shared/utils/base64';

interface Song {
  name: string;
  image: string;
  preview_url: string;
}


const getSpotifyToken = async (): Promise<string> => {
  const config = useRuntimeConfig();
  const clientId = config.public.spotifyClientId;
  const clientSecret = config.public.spotifyClientSecret;
  console.log(clientSecret)
  console.log(clientId)
  const authResponse = await axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + encodeBase64(clientId + ':' + clientSecret)
    },
    data: 'grant_type=client_credentials'
  });
  console.log("Encoded auth:", encodeBase64(clientId + ':' + clientSecret));


  return authResponse.data.access_token;
};

const getLatestSongs = async (artistId: string): Promise<Song[]> => {
  const token = await getSpotifyToken();

  const artistResponse = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    params: {
      limit: 6,
    }
  });

  const albums = artistResponse.data.items;

  const songsPromises = albums.map(async (album: any) => {
    const trackResponse = await axios.get(`https://api.spotify.com/v1/albums/${album.id}/tracks`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        limit: 1,
        market: 'US'
      }
    });

    const track = trackResponse.data.items[0];
    console.log(album)
    let artists = track.artists.map((element:any) => element.name).join(', ');

    return {
      name: track.name,
      image: album.images[0].url,
      preview_url: track.preview_url,
      release_date: album.release_date,
      artists: artists,
      album_type: album.album_type,
    };
  });

  const songs = await Promise.all(songsPromises);

  return songs;
};

export { getLatestSongs };