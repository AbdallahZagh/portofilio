import React from "react";
import { Mail, Phone, Github, Facebook, Instagram } from "lucide-react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Section from "./Section";
import { BRAND } from "../data/brand";

export default function Contact() {
  const copy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Open to freelance, full-time roles, and ambitious collaborations."
    >
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="grid sm:grid-cols-2 gap-6"
      >
        <ContactCard
          icon={Mail}
          label="Email"
          value={BRAND.email}
          onCopy={() => copy(BRAND.email, "Email")}
          href={`mailto:${BRAND.email}`}
        />
        <ContactCard
          icon={Phone}
          label="Phone"
          value={BRAND.phone}
          onCopy={() => copy(BRAND.phone, "Phone")}
          href={`tel:${BRAND.phone}`}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap items-center gap-4 justify-center"
      >
        <SocialButton href={BRAND.socials.github} icon={Github} label="GitHub" />
        <SocialButton href={BRAND.socials.facebook} icon={Facebook} label="Facebook" />
        <SocialButton href={BRAND.socials.instagram} icon={Instagram} label="Instagram" />
      </motion.div>
    </Section>
  );
}

function ContactCard({ icon: Icon, label, value, href, onCopy }) {
  return (
    <a
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/70 dark:bg-white/[0.04] p-6 shadow-md hover:shadow-[0_0_28px_rgba(255,77,90,0.25)] transition-all"
    >
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(255,77,90,0.35)]" />
      </div>
      <div className="flex items-start gap-3">
        <Icon className="h-6 w-6 text-[#ff4d5a]" />
        <div>
          <p className="text-xs uppercase text-gray-600 dark:text-gray-400 tracking-widest">
            {label}
          </p>
          <p className="font-semibold text-gray-900 dark:text-white break-all">
            {value}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            onCopy();
          }}
          className="ml-auto text-xs px-3 py-1 rounded-md border border-white/15 text-gray-900 dark:text-gray-200 hover:bg-white/10 transition"
        >
          Copy
        </button>
      </div>
    </a>
  );
}

function SocialButton({ href, icon: Icon, label }) {
  return (
    <motion.a
      whileHover={{ scale: 1.06 }}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-900 dark:text-gray-200 bg-white/60 dark:bg-white/[0.04] hover:bg-white/70 dark:hover:bg-white/10 transition"
    >
      <Icon className="h-4 w-4" />
      {label}
    </motion.a>
  );
}

