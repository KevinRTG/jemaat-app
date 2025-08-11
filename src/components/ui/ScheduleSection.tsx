export default function ScheduleSection() {
  return (
    <section id="jadwal" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Jadwal Ibadah</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          {[
            { title: 'Ibadah Raya Minggu', time: 'Pukul 09.00 WIB' },
            { title: 'Persekutuan Doa', time: 'Setiap Rabu, Pukul 19.00 WIB' },
            { title: 'Sekolah Minggu', time: 'Pukul 09.00 WIB (bersamaan dengan Ibadah Raya)' },
          ].map((item, i) => (
            <div key={i} className="flex-1 p-8 bg-blue-50 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
