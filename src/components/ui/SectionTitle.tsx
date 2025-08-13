// src/components/ui/SectionTitle.tsx
interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-semibold text-blue-900 mb-4">{children}</h2>
  );
}
