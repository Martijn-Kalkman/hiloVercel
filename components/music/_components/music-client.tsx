'use client';
import { useState } from 'react';
import { YoutubePlaylistDto } from '@/app/types/youtube';
import VideoPlayer from './video-player';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface MusicClientProps {
    djset: YoutubePlaylistDto;
}

export default function MusicClient({ djset }: MusicClientProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState('');

    const openVideoPopup = (videoId: string) => {
        setCurrentVideoId(videoId);
        setIsVideoPlaying(true);
    };

    const closePlayer = () => {
        setIsVideoPlaying(false);
        setCurrentVideoId('');
    };

    const validVideos = djset.items.filter(
        (video) =>
            video.snippet.thumbnails?.default?.url && video.snippet.resourceId?.videoId
    );

    return (
        <>
            <div className="bg-[#045A6A] lg:w-[40vw] w-[93vw] p-4 rounded-xl overflow-scroll lg:h-[850px] no-scrollbar">
                <div className="flex flex-row justify-between mb-4">
                    <div>
                        <h3 className="lg:text-4xl my-auto text-4xl font-bold">LIVE SETS</h3>
                    </div>
                    <div>
                        <a
                            target="_blank"
                            href="https://www.youtube.com/playlist?list=PLoVPdGdbdII0a3kQnlZXG95LlUBup1EUL"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                            aria-label="YouTube Playlist"
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
                <div className="space-y-2">
                    {validVideos.length === 0 ? (
                        <p className="text-white/70 text-center py-8">No videos available</p>
                    ) : (
                        validVideos.map((video) => (
                            <div
                                key={video.id}
                                onClick={() => openVideoPopup(video.snippet.resourceId.videoId)}
                                className="flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-700 rounded-lg p-2 transition-all duration-200"
                            >
                                <Image
                                    src={video.snippet.thumbnails.default!.url}
                                    alt={video.snippet.title}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                                />
                                <div className="flex-1 pl-4 flex items-center min-w-0">
                                    <p className="text-white text-sm font-medium overflow-hidden text-ellipsis line-clamp-2 mr-2">
                                        {video.snippet.title}
                                    </p>
                                </div>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        ))
                    )}
                </div>
            </div>

            <VideoPlayer
                videoId={currentVideoId}
                isOpen={isVideoPlaying}
                onClose={closePlayer}
            />
        </>
    );
}

