import React from "react";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./components/ThemeProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function PortfolioApp() {
  const { toggle } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a85e5ebb] via-[#ffffff22] to-[#d390ffd0] dark:from-[#0a0b10] dark:via-[#0b0f17] dark:to-[#0d0a12] text-gray-900 dark:text-gray-100 relative">
      {/* Ambient neon fields */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-10 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_top,_rgba(255,77,90,0.18),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_bottom,_rgba(139,92,246,0.18),transparent_65%)] blur-2xl" />
      </div>

      <Toaster position="top-center" toastOptions={{ duration: 1800 }} />
      <Header onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
