
'use client';

import React from 'react';

interface YouTubeBackgroundProps {
  videoId: string;
}

const YouTubeBackground: React.FC<YouTubeBackgroundProps> = ({ videoId }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0&fs=0&disablekb=1&cc_load_policy=0`}
        frameBorder="0"
        allow="autoplay; encrypted-media;"
        allowFullScreen={false}
        title="YouTube Background Video"
        className="absolute top-1/2 left-1/2 w-[calc(100%_+_200px)] h-[calc(100%_+_200px)] min-w-[calc(100%_+_200px)] min-h-[calc(100%_+_200px)] object-cover transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          // Ensure the video covers the area, aspect ratio might make it larger than viewport
          // This is a common approach to achieve a 'cover' effect for iframes
        }}
      />
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default YouTubeBackground;
