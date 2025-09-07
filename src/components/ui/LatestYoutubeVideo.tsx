'use client';

import { useEffect, useState } from 'react';

interface VideoItem {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: { medium: { url: string } };
  };
}

export default function LatestYoutubeVideo() {
  const [video, setVideo] = useState<VideoItem | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = 'UCKPz6nfOk7DJT1PfsrVbZlw';
  const MAX_RESULTS = 1;

  useEffect(() => {
    async function fetchLatestVideo() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setVideo(data.items[0]);
        }
      } catch (error) {
        console.error('Gagal memuat video:', error);
      }
    }
    fetchLatestVideo();
  }, []);

  if (!video) {
    return (
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 animate-pulse">Memuat video terbaru...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
            Video Terbaru dari Channel Kami
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Saksikan pesan terbaru dan kegiatan pelayanan kami langsung dari YouTube.
          </p>
        </div>

        {/* Video */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="w-full" style={{ aspectRatio: '16 / 9' }}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Info Video */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            {video.snippet.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {video.snippet.description
              ? video.snippet.description
              : 'Tidak ada deskripsi yang tersedia untuk video ini.'}
          </p>
          <p className="text-sm text-gray-500">
            Dipublikasikan pada{' '}
            {new Date(video.snippet.publishedAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <a
            href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-900 text-white font-semibold rounded-full shadow hover:bg-red-600 transition-colors duration-300"
          >
            Lihat Semua Video
          </a>
        </div>
      </div>
    </section>
  );
}
