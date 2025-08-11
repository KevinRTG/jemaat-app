// src/app/(profil)/tentang/page.tsx

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 my-8">Tentang Kami</h1>

      <section className="my-8">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Visi & Misi</h2>
        <p className="text-lg text-gray-700 mb-4">
          **Visi:** Menjadi komunitas yang bertumbuh dalam iman dan kasih, menjadi berkat bagi sesama dan kemuliaan bagi nama Tuhan.
        </p>
        <p className="text-lg text-gray-700">
          **Misi:** Melalui ibadah, persekutuan, pelayanan, dan kesaksian, kami bertekad untuk...
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>Menyembah Tuhan dengan sepenuh hati.</li>
            <li>Mengajarkan Firman Tuhan untuk menumbuhkan iman.</li>
            <li>Membangun persekutuan yang erat antar jemaat.</li>
            <li>Melayani kaum yang membutuhkan.</li>
          </ul>
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Sejarah Gereja</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Gereja Jemaat App bermula dari sekelompok kecil keluarga yang memiliki kerinduan untuk bersekutu pada tahun 19XX. Dengan anugerah Tuhan, komunitas ini bertumbuh dan diresmikan sebagai gereja. Sejak saat itu, kami terus berupaya untuk menjadi tempat di mana setiap orang dapat menemukan rumah rohani dan bertumbuh dalam Kristus.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Gembala & Pengurus</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            [Image of a pastor leading a service]
            <h3 className="text-xl font-bold mt-2">Pdt. John Doe</h3>
            <p className="text-gray-600">Gembala Sidang</p>
          </div>
          {/* Tambahkan pengurus lain di sini */}
        </div>
      </section>
    </div>
  );
}