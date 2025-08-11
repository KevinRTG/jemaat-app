export default function AboutSection() {
  return (
    <section id="tentang" className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Tentang Kami</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Gereja kami didirikan pada tahun 19XX dengan visi untuk menjadi terang di tengah-tengah masyarakat.
          </p>
          <p className="text-gray-700 text-lg mt-4 leading-relaxed">
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
