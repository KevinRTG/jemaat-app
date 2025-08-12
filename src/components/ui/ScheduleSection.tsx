export default function ScheduleSection() {
  const schedules = [
    { title: 'Ibadah Umum Minggu', time: 'Minggu, pukul 08.00 & 10.00 WIB' },
    { title: 'Ibadah Sekolah Minggu', time: 'Minggu, pukul 07.00 WIB' },
    { title: 'Ibadah Pem & Rem', time: 'Minggu, pukul 14.00 WIB' },
    { title: 'Ibadah PW', time: 'Selasa Ke-2 & Ke-4, pukul 17.00 WIB' },
    { title: 'Ibadah Lansia', time: 'Sabtu Ke-1 & Ke-4, pukul 16.00 WIB' },
    { title: 'Ibadah Pelpri', time: 'Sabtu, pukul 19.00 WIB (Minggu ke-2)' },
  ];

  return (
    <section id="jadwal" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Jadwal Ibadah</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedules.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-blue-50 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
