'use client';

import dynamic from 'next/dynamic';

const GlobeComponent = dynamic(
  () => import('./globe'),
  { 
    ssr: false,
    loading: () => <p className="text-gray-400 text-center">Loading 3D Globe...</p> 
  }
);

export default function GlobeWrapper() {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center">
      <GlobeComponent />
    </div>
  );
}