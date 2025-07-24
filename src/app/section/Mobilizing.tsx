'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MobilizingSection() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/bg.png"
        alt="Women working in field"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark teal overlay */}
      <div className="absolute inset-0 bg-teal-900/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 lg:px-24">
        {/* Logo as plain <img> */}
        <img
          src="/logo.svg"
          alt="Coalition Logo"
          className="w-16 h-16 mb-6"
        />

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug max-w-3xl">
          Join the Women’s Climate Change Coalition
          <br />
          and make a difference!
        </h1>

        {/* Sub‑text */}
        <p className="mt-4 text-base md:text-lg text-white max-w-2xl">
          Embark on a journey of impact: Join the Women’s Climate Change Coalition,
          empower women, and together let’s make a lasting difference for our planet!
        </p>

        {/* CTA Button */}
        <Link
          href="/reports"
          className="mt-8 inline-block px-6 py-3 border border-white rounded-md text-white font-medium 
                     hover:bg-white hover:text-teal-900 transition"
        >
          Reports
        </Link>
      </div>
    </section>
  );
}
