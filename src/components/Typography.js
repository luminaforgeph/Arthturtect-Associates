export function DisplayText({ children, className = "", as: Component = "h1" }) {
  return (
    <Component
      className={`font-light tracking-tight text-[var(--color-paper)] leading-[1.05] ${className}`}
      style={{ fontSize: "var(--font-display)" }}
    >
      {children}
    </Component>
  );
}

export function Heading({ level = 2, children, className = "" }) {
  const levelStyles = {
    1: { fontSize: "var(--font-heading-1)", font: "font-light tracking-tight leading-[1.1]" },
    2: { fontSize: "var(--font-heading-2)", font: "font-light tracking-tight leading-[1.2]" },
    3: { fontSize: "var(--font-heading-3)", font: "font-normal tracking-normal leading-[1.3]" },
  };

  const Component = `h${level}`;
  const style = levelStyles[level] || levelStyles[2];

  return (
    <Component
      className={`${style.font} text-[var(--color-paper)] ${className}`}
      style={{ fontSize: style.fontSize }}
    >
      {children}
    </Component>
  );
}

export function BodyText({ size = "base", children, className = "", as: Component = "p" }) {
  const sizeStyles = {
    lg: { fontSize: "var(--font-body-lg)", color: "text-[var(--color-paper-muted)]" },
    base: { fontSize: "var(--font-body)", color: "text-[var(--color-muted)]" },
    caption: { fontSize: "var(--font-caption)", color: "text-[var(--color-muted)]" },
  };

  const style = sizeStyles[size] || sizeStyles.base;

  return (
    <Component
      className={`leading-relaxed ${style.color} ${className}`}
      style={{ fontSize: style.fontSize }}
    >
      {children}
    </Component>
  );
}

export function MetaText({ children, className = "", as: Component = "span" }) {
  return (
    <Component
      className={`uppercase tracking-[0.2em] font-mono font-medium text-[var(--color-muted)] ${className}`}
      style={{ fontSize: "var(--font-meta)" }}
    >
      {children}
    </Component>
  );
}
