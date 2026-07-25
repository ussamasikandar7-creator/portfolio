import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mist/70">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React, Tailwind &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
