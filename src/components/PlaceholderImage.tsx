import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "accent" | "muted";
  aspect?: string;
  src?: string;
  alt?: string;
  objectPosition?: string;
}

/**
 * Image block. Renders a real photo when `src` is provided,
 * otherwise falls back to a stylized themed placeholder.
 */
const PlaceholderImage = ({
  label = "Photo",
  className,
  variant = "secondary",
  aspect = "aspect-[4/5]",
  src,
  alt,
  objectPosition = "center",
}: PlaceholderImageProps) => {
  const variants = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/20 text-secondary",
    muted: "bg-muted text-muted-foreground",
  };

  if (src) {
    return (
      <div className={cn("relative overflow-hidden bg-secondary/30", aspect, className)}>
        <img
          src={src}
          alt={alt ?? label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center",
        aspect,
        variants[variant],
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 14px), repeating-linear-gradient(-45deg, currentColor 0 1px, transparent 1px 14px)",
        }}
        aria-hidden
      />
      <div className="relative text-center px-3">
        <div className="font-serif text-xs uppercase tracking-[0.25em] opacity-70">Wickipura Leos</div>
        <div className="font-serif font-semibold text-sm mt-1">{label}</div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
