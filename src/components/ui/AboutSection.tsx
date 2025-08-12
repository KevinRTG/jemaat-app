export default function AboutSection() {
  return (
    <section id="tentang" className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Tentang Kami</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Gereja kami didirikan pada 28 Oktober 1988 begitu juga dengan Diresmikan dan Peneguhan Majelis Pertama pada 3 November 1988
          </p>
           <p className="text-gray-700 text-lg mt-4 leading-relaxed text-justify">
            Visi untuk menjadi terang di tengah-tengah masyarakat.
          </p>
          <p className="text-gray-700 text-lg mt-4 leading-relaxed text-justify">
            Misi kami adalah menyebarkan Injil, menumbuhkan iman, dan melayani sesama dengan tulus.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/gerejagko.png"
            alt="Komunitas Gereja"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
