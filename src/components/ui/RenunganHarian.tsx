'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx'; // untuk mempermudah conditional class

interface VideoItem {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: { medium: { url: string } };
  };
}

export default function RenunganHarian() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [currentVideo, setCurrentVideo] = useState<VideoItem | null>(null);
  const [fadeKey, setFadeKey] = useState(0); // untuk trigger animasi fade

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = 'UCKzoFLF0ONDD38izTNiqaDg';
  const MAX_RESULTS = 10;

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = await res.json();
        if (data.items) {
          const filtered = data.items.filter((item: any) => item.id.kind === 'youtube#video');
          setVideos(filtered);
          setCurrentVideo(filtered[0]);
        }
      } catch (error) {
        console.error('Gagal memuat video:', error);
      }
    }
    fetchVideos();
  }, []);

  const handleSelectVideo = (video: VideoItem) => {
    setCurrentVideo(video);
    setFadeKey((prev) => prev + 1); // ganti key untuk trigger animasi fade
  };

  if (!currentVideo) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-lg animate-pulse">Memuat renungan harian...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            Renungan Harian 4M
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Saksikan renungan harian terbaru dari OFFICIAL SINODE GKO untuk menguatkan iman dan pengharapan Anda.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Highlight Video */}
          <div
            key={fadeKey}
            className="lg:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden animate-fadeIn"
          >
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
                title={currentVideo.snippet.title}
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {currentVideo.snippet.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(currentVideo.snippet.publishedAt).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {currentVideo.snippet.description || 'Tidak ada deskripsi.'}
              </p>
            </div>
          </div>

          {/* List Video Lain */}
          <div className="space-y-4">
            {videos
              .filter((v) => v.id.videoId !== currentVideo.id.videoId)
              .slice(0, 6)
              .map((video) => (
                <button
                  key={video.id.videoId}
                  onClick={() => handleSelectVideo(video)}
                  className={clsx(
                    'flex items-start space-x-4 rounded-xl shadow transition-all overflow-hidden w-full text-left hover:shadow-lg',
                    currentVideo.id.videoId === video.id.videoId
                      ? 'bg-blue-100 border-l-4 border-blue-600'
                      : 'bg-white'
                  )}
                >
                  <div className="w-32 flex-shrink-0">
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <h4 className="text-md font-semibold text-gray-800 line-clamp-2">
                      {video.snippet.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(video.snippet.publishedAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </button>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-full shadow hover:bg-red-600 transition duration-300"
          >
            Lihat Semua Renungan
          </a>
        </div>
      </div>
    </section>
  );
}
