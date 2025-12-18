// ===============================
// ANDRE-STYLE MINIMAL PORTFOLIO UI
// For MERN / Next.js Developer (Marish)
// Style: Clean, editorial, whitespace-heavy
// Tech: Next.js App Router + TailwindCSS
// ===============================

// ===============================
// FILE: app/page.tsx
// ===============================
// import Image from "next/image";
// import TechBackground from "@/components/TechBackground";
// import DevBackground from "@/components/DevBackground";
import DevStickerBackground from "@/components/DevStickerBackground";
// import RetroBackground from "@/components/RetroBackground";

export default function Home() {
  return (
    <>
      {/* <TechBackground /> */}
      {/* <DevBackground /> */}
      <DevStickerBackground />
      {/* <RetroBackground /> */}
      <main className="relative z-10 bg-transparent">
        {/* HEADER */}
        <header className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center">
          <h1 className="text-xl font-semibold flex justify-between items-center">
            Marish
            <img
              src="https://cdn.prod.website-files.com/684243f1563d71aee92b4762/684243f1563d71aee92b4896_Partner-Pin_mockup-1%201.avif"
              className="w-6 h-6 object-contain"
              alt="Verified"
            />
          </h1>
          <nav className="flex gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-black">
              About
            </a>
            <a href="#work" className="hover:text-black">
              Work
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-32">
          <h2 className="text-5xl md:text-6xl font-light leading-tight max-w-5xl">
            I’m a <span className="font-medium">MERN Stack Developer</span>
            <br /> who builds clean, scalable web applications and products.
          </h2>

          <p className="mt-8 text-gray-600 max-w-2xl">
            Specialized in Next.js, Node.js, and MongoDB. I focus on clarity,
            performance, and real‑world problem solving through code.
          </p>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="max-w-6xl mx-auto px-6 py-24 border-t border-black/12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-medium mb-4">About</h3>
              <p className="text-gray-700 leading-relaxed">
                I’m a developer with a product mindset. I enjoy building systems
                that help teams work better — from authentication systems and
                dashboards to full SaaS platforms like JD‑ZUM.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                I care deeply about clean architecture, maintainability, and
                thoughtful user experience.
              </p>
            </div>
            <div className="text-sm text-gray-600">
              <p>
                <strong>Stack</strong>
              </p>
              <p className="mt-2">Next.js · React · Node.js · MongoDB</p>
              <p className="mt-4">
                <strong>Tools</strong>
              </p>
              <p className="mt-2">TypeScript · Tailwind · Git · Vercel</p>
              <p className="mt-4">
                <strong>Focus</strong>
              </p>
              <p className="mt-2">SaaS · Dashboards · APIs · Auth Systems</p>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section
          id="work"
          className="max-w-6xl mx-auto px-6 py-24 border-t border-black/12"
        >
          <h3 className="text-2xl font-medium mb-12">Selected Work</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="border rounded-lg p-6 hover:shadow-md transition">
              <h4 className="font-medium">JD‑ZUM</h4>
              <p className="text-sm text-gray-600 mt-2">
                Business management SaaS for teams.
              </p>
              <p className="text-xs text-gray-500 mt-3">
                Next.js · Node · TypeScript · MongoDB
              </p>
            </article>

            <article className="border rounded-lg p-6 hover:shadow-md transition">
              <h4 className="font-medium">E‑commerce Platform</h4>
              <p className="text-sm text-gray-600 mt-2">
                Full‑stack MERN store with payments.
              </p>
              <p className="text-xs text-gray-500 mt-3">
                React · Node · Stripe
              </p>
            </article>

            <article className="border rounded-lg p-6 hover:shadow-md transition">
              <h4 className="font-medium">Realtime Chat App</h4>
              <p className="text-sm text-gray-600 mt-2">
                Scalable realtime messaging system.
              </p>
              <p className="text-xs text-gray-500 mt-3">Socket.io · Express</p>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="max-w-6xl mx-auto px-6 py-32 border-t border-black/12"
        >
          <h3 className="text-2xl font-medium">Let’s work together</h3>
          <p className="mt-4 text-gray-600 max-w-xl">
            If you’re looking for a developer to build or improve a product,
            feel free to reach out.
          </p>

          <div className="mt-6 text-sm">
            <p>
              Email: <span className="text-gray-800">rishzberri@gmail.com</span>
            </p>
            <p className="mt-2">
              {" "}
              <a
                href="https://github.com/arish-web"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <span className="px-1">·</span>
              <a
                href="https://www.linkedin.com/in/mariswarakannana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Marish
        </footer>
      </main>
    </>
  );
}

// ===============================
// NOTES
// - Add Tailwind to globals.css
// - Replace text with real details
// - Optional: add Framer Motion fade‑ins
// ===============================
