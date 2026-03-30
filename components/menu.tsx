"use client";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
    
        <button
            onClick={toggleMenu}
            className="lg:hidden p-3 text-2xl text-foreground hover:text-primary transition-colors z-50"
            aria-label="Toggle menu"
        >
            <i className={`fa-solid transition-transform duration-300 ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

      
        <div
            className={`fixed inset-0 bg-background z-40 lg:hidden transition-all duration-300 ease-in-out ${
                isOpen 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-full pointer-events-none"
            }`}
        >
            <div className="flex flex-col h-full pt-20 px-8">
          
          
            <div className="mb-12">
                <h2 className="text-xl font-bold font-mono">Claudio Paredes Arbelo</h2>
                <p className="text-text-secondary tracking-[.4em]">Fullstack Developer</p>
            </div>

          
            <nav className="flex flex-col gap-8 text-2xl font-mono">
                <Link 
                    href="/" 
                    onClick={closeMenu}
                    className="hover:text-primary transition-colors py-3 border-b border-gray-200 dark:border-gray-800"
                >
                    Home
                </Link>
                <Link 
                    href="/projects"
                    onClick={closeMenu}
                    className="hover:text-primary transition-colors py-3 border-b border-gray-200 dark:border-gray-800"
                >
                    Projects
                </Link>
                <Link 
                    href="/skills"
                    onClick={closeMenu}
                    className="hover:text-primary transition-colors py-3 border-b border-gray-200 dark:border-gray-800"
                >
                    Skills
                </Link>
                <Link 
                    href="/contact"
                    onClick={closeMenu}
                    className="hover:text-primary transition-colors py-3 border-b border-gray-200 dark:border-gray-800"
                >
                    Contact
                </Link>
            </nav>

          
            <div className="mt-auto pb-12 text-center text-sm text-text-secondary">
                <p>© 2026 Claudio Paredes Arbelo</p>
            </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}