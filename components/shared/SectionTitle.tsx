import { cn } from "@/lib/utils"

interface SectionTitleProps {
  eyebrow?: string
  title: string
  titleItalic?: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export default function SectionTitle({
  eyebrow,
  title,
  titleItalic,
  description,
  className,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C4622D] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-[#2D2416]">
        {title}
        {titleItalic && (
          <>
            {" "}
            <em className="italic font-light text-[#4A7A56]">{titleItalic}</em>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base text-[#5C4033] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
