/**
  * Mobile-first responsive Container primitive.
  */
export function Container({ children, size = "xl", className = "" }) {
  const sizeClasses = {
    sm: "max-w-[var(--container-sm)]",
    md: "max-w-[var(--container-md)]",
    lg: "max-w-[var(--container-lg)]",
    xl: "max-w-[var(--container-xl)]",
    "2xl": "max-w-[var(--container-2xl)]",
    full: "max-w-full",
  };

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 ${sizeClasses[size] || sizeClasses.xl} ${className}`}
    >
      {children}
    </div>
  );
}
