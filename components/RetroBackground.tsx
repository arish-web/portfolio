export default function RetroBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Gradient base */}
      <div className="absolute inset-0 background-image: linear-gradient(var(--tw-gradient-stops)); from-[#0f1021] via-[#1b1f3b] to-[#3a0ca3]" />

      {/* Neon glow blobs */}
      <div className="absolute -top-40 -left-40 w-[600] h-[600] rounded-full bg-pink-500 opacity-30 blur-[160px]" />
      <div className="absolute top-1/4 -right-40 w-[600] h-[600] rounded-full bg-cyan-400 opacity-30 blur-[160px]" />
      <div className="absolute bottom-0 left-1/3 w-[500] h-[500] rounded-full bg-purple-500 opacity-30 blur-[140px]" />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
