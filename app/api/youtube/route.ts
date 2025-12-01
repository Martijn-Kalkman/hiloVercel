import { NextResponse } from 'next/server';
import { getYoutubePlaylists } from '@/app/services/youtube.service';

export async function GET() {
  try {
    const playlists = await getYoutubePlaylists();
    return NextResponse.json(playlists, { status: 200 });
  } catch (error) {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error in YouTube Route Handler:', error);
    }
    return NextResponse.json(
      { message: 'Failed to retrieve YouTube data.' },
      { status: 500 }
    );
  }
}