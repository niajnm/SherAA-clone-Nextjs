"use client";

import React from "react";
import { useVideoSection } from "@/hooks/useVideoSection";

export default function VideoHero() {
  const { data, isLoading, isError } = useVideoSection();

  // Pick the first video node
  const video = data?.landingVideos.nodes[1]?.landingVideoFields;

  if (isLoading || isError || !video) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center">
        <p className="text-white">Loading video...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {video.title}
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            {video.description}
          </p>
        </div>

        {/* Main Image / Video Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              {/* If YouTube link */}
              {video.youtubeLink ? (
                <iframe
                  className="w-full h-full rounded-2xl"
                  src={video.youtubeLink.replace("watch?v=", "embed/")}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                // If uploaded video
                <video
                  controls
                  className="w-full h-full object-cover rounded-2xl"
                  src={video.videoFile?.node?.mediaItemUrl || ""}
                />
              )}
            </div>
          </div>
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
