'use client';

import { useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface VideoPlayerProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoPlayer({ videoId, isOpen, onClose }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape, handleClickOutside]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/90 p-4">
      
      <div 
        ref={containerRef} 
        className="relative w-full max-w-7xl mx-auto aspect-video rounded-xl shadow-2xl overflow-hidden"
      >
        
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          title="YouTube video player"
        />
        <button
          onClick={onClose}
          className="absolute md:-top-8 mt-8 right-0 text-white text-xl bg-red-600/90 hover:bg-red-700 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-xl border-2 border-white/50 focus:outline-none focus:ring-4 focus:ring-red-300"
          aria-label="Close video player"
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}