import React from "react";
import { Mail, Phone, Github, Facebook, Instagram } from "lucide-react";
import { toast } from "react-hot-toast";
import Section from "./Section";
import { BRAND } from "../data/brand";

export default function Contact() {
  const copy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied`);
  };

  return (
    <Section id="contact" title="Contact" subtitle="Let's build something users will love.">
      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${BRAND.email}`}
          className="group flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-white/10 transition"
        >
          <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {BRAND.email}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              copy(BRAND.email, "Email");
            }}
            className="ml-auto text-xs px-2 py-1 rounded-md border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300"
          >
            Copy
          </button>
        </a>

        <a
          href={`tel:${BRAND.phone}`}
          className="group flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-white/10 transition"
        >
          <Phone className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {BRAND.phone}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              copy(BRAND.phone, "Phone");
            }}
            className="ml-auto text-xs px-2 py-1 rounded-md border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300"
          >
            Copy
          </button>
        </a>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <a
          href={BRAND.socials.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>

        <a
          href={BRAND.socials.facebook}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10"
        >
          <Facebook className="h-4 w-4" /> Facebook
        </a>

        <a
          href={BRAND.socials.instagram}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10"
        >
          <Instagram className="h-4 w-4" /> Instagram
        </a>
      </div>
    </Section>
  );
}
