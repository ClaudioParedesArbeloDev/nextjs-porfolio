// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between md:justify-around p-4 bg-[#0d0d0f] border-b border-[#1e1e24]">
    
      <div className="flex items-center gap-3.5 py-4">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="hidden md:block"/>
        <div>
          <p className="text-[1em] font-mono text-[#f0f0f4] tracking-wide">
            Claudio Paredes Arbelo
          </p>
          <p className="font-mono text-[.7em] tracking-[4px] uppercase  text-[#9c9ca7] flex items-center gap-1.5">
            Fullstack Developer
          </p>
        </div>
      </div>

      <nav className="hidden md:flex md:items-center md:gap-1">
        {[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Skills", href: "/skills" },
          { label: "Contact", href: "/contact" },
        ].map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-[1em] text-[#7a7a92] hover:text-[#f0f0f4] hover:bg-[#1a1a22] px-3.5 py-1.5 rounded-md transition-all duration-200 tracking-wide"
          >
            {label}
          </Link>
        ))}
      </nav>
      <Menu />
    </header>
  );
}