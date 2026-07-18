export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(249,115,22,0.06), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 mask-fade-b opacity-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(10,15,20,0.9) 100%)",
        }}
      />
    </div>
  );
}
