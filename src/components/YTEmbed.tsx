'use client';

import React from "react";
import YouTube from "react-youtube";

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
      <div className="w-full h-full my-5 aspect-video">
        <YouTube
          videoId={videoId}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: { autoplay: 0, rel: 0 },
          }}
          className="w-full h-full"
        />
      </div>
  );
}
