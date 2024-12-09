// components/VideoPlayer.tsx
import React from "react";

interface VideoPlayerProps {
  videoUrl: string; // URL for the video (local or external)
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className="relative aspect-w-16 aspect-h-9">
      <video controls width="100%" height="100%">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
