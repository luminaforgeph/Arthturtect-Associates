export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-8 md:p-16 max-w-6xl mx-auto">
      <header className="flex justify-between items-baseline border-b border-neutral-800 pb-6">
        <h1 className="text-xl md:text-2xl font-light tracking-widest uppercase">
          Arthurtect Associates
        </h1>
        <span className="text-xs uppercase tracking-widest text-neutral-500">
          Foundation Phase
        </span>
      </header>

      <section className="my-auto py-20">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
          Architecture & Strategic Design Practice
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight max-w-3xl">
          Crafting architectural space with cinematic pacing and material intent.
        </h2>
        <div className="mt-8 pt-8 border-t border-neutral-800 text-sm text-neutral-400 max-w-md">
          Technical foundation established. System architecture ready for design system and experience implementation.
        </div>
      </section>

      <footer className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-neutral-500 border-t border-neutral-800 pt-6 gap-4">
        <div>&copy; {new Date().getFullYear()} Arthurtect Associates. All rights reserved.</div>
        <div className="flex gap-6 uppercase tracking-wider">
          <span>London</span>
          <span>&mdash;</span>
          <span>Zurich</span>
          <span>&mdash;</span>
          <span>Tokyo</span>
        </div>
      </footer>
    </main>
  );
}
