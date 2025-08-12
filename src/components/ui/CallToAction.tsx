import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-blue-900 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Keluarga Kami</h2>
        <p className="text-lg mb-6">Daftarkan diri Anda sebagai jemaat melalui aplikasi kami.</p>
        <Link
          href="/app"
          className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          Aplikasi Pendaftaran Jemaat
        </Link>
      </div>
    </section>
  );
}
