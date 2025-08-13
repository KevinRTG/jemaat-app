// src/components/ui/VisiMisi.tsx
import SectionTitle from "./SectionTitle";

export default function VisiMisi() {
  return (
    <section className="my-8 px-4 sm:px-6 lg:px-8">
      <SectionTitle>Visi & Misi</SectionTitle>

      <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
        <p>
          <strong>Visi:</strong> Menjadi komunitas yang bertumbuh dalam iman dan kasih, menjadi berkat bagi sesama dan kemuliaan bagi nama Tuhan.
        </p>

        <p>
          <strong>Misi:</strong> Melalui ibadah, persekutuan, pelayanan, dan kesaksian, kami bertekad untuk:
        </p>

        <ul className="list-disc list-inside ml-4 sm:ml-6">
          <li>Menyembah Tuhan dengan sepenuh hati.</li>
          <li>Mengajarkan Firman Tuhan untuk menumbuhkan iman.</li>
          <li>Membangun persekutuan yang erat antar jemaat.</li>
          <li>Melayani kaum yang membutuhkan.</li>
        </ul>
      </div>
    </section>
  );
}
