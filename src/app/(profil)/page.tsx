// src/app/(profil)/page.tsx

export default function ProfilHomePage() {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center my-12">
        <h1 className="text-5xl font-bold text-blue-800">Selamat Datang di Gereja Jemaat App</h1>
        <p className="text-xl mt-4 text-gray-600">
          Melayani dengan kasih dan sukacita untuk kemuliaan nama Tuhan.
        </p>
        [Image of a welcoming church facade]
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Tentang Kami</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700">
              Gereja kami didirikan pada tahun 19XX dengan visi untuk menjadi terang di tengah-tengah masyarakat. Kami percaya bahwa setiap jemaat adalah bagian dari keluarga besar yang saling mendukung.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Misi kami adalah menyebarkan Injil, menumbuhkan iman, dan melayani sesama dengan tulus.
            </p>
          </div>
          <div className="flex justify-center items-center">
            [Image of a church community gathering]
          </div>
        </div>
      </section>

      <section className="my-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Jadwal Ibadah</h2>
        <ul className="space-y-4 text-center">
          <li className="text-lg">
            <span className="font-bold">Ibadah Raya Minggu:</span> Pukul 09.00 WIB
          </li>
          <li className="text-lg">
            <span className="font-bold">Persekutuan Doa:</span> Setiap Rabu, Pukul 19.00 WIB
          </li>
          <li className="text-lg">
            <span className="font-bold">Sekolah Minggu:</span> Pukul 09.00 WIB (Bersamaan dengan Ibadah Raya)
          </li>
        </ul>
      </section>
    </div>
  );
}