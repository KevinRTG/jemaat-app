import Head from 'next/head';
import { CalendarDays, Users, Heart, Church } from 'lucide-react'; // contoh ikon

export default function JadwalPage() {
  const schedules = [
    { title: 'Ibadah Umum Minggu', time: 'Minggu, pukul 09.00 & 17.00 WIB', icon: <Church className="w-8 h-8 text-blue-600" /> },
    { title: 'Ibadah Sekolah Minggu', time: 'Minggu, pukul 07.00 WIB', icon: <Users className="w-8 h-8 text-yellow-500" /> },
    { title: 'Ibadah Pem & Rem', time: 'Minggu, pukul 14.00 WIB', icon: <Users className="w-8 h-8 text-pink-500" /> },
    { title: 'Ibadah PW', time: 'Selasa Ke-2 & Ke-4, pukul 17.00 WIB', icon: <Heart className="w-8 h-8 text-red-500" /> },
    { title: 'Ibadah Lansia', time: 'Sabtu Ke-1 & Ke-4, pukul 16.00 WIB', icon: <Heart className="w-8 h-8 text-green-500" /> },
    { title: 'Ibadah Pelpri', time: 'Sabtu, pukul 19.00 WIB (Minggu ke-2)', icon: <CalendarDays className="w-8 h-8 text-purple-500" /> },
  ];

  return (
    <>
      <Head>
        <title>Jadwal Ibadah | GKO Cibitung</title>
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Selamat Datang di GKO Cibitung</h1>
          <p className="mb-6 max-w-xl mx-auto animate-fadeIn delay-200">
            Supaya Semua Menjadi Satu.
          </p>
            <a
              href="#jadwal"
              className="bg-blue-900 px-6 py-3 rounded-full shadow-lg shadow-blue-900/30
                        transform transition-all duration-500 ease-out
                        hover:bg-blue-950 hover:scale-105 hover:shadow-xl
                        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                        animate-fadeInUp delay-100"
            >
              Lihat Jadwal Ibadah
            </a>
        </div>
      </section>

      {/* Jadwal Section */}
      <section id="jadwal" className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Jadwal Ibadah GKO Cibitung</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {schedules.map((item, i) => (
              <div
                key={i}
                className="p-8 bg-blue-50 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
