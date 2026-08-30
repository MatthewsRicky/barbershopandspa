interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-4xl leading-tight text-neutral-950 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}
