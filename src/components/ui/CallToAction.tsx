import Link from 'next/link';
import Button from '@/components/Button';

export default function CallToAction() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-2xl font-bold mb-4 leading-snug">
            Bergabunglah dengan Keluarga Kami
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Daftarkan diri Anda sebagai jemaat melalui aplikasi kami.
          </p>
        </div>
        <Button href="/daftarjemaat">Pendaftaran Jemaat</Button>
      </div>
    </section>
  );
}
