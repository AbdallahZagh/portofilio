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

export default function App() {
  const { toggle } = useTheme();

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0b0f] dark:text-gray-100">
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
