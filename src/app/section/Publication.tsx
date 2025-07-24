'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Publication {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const publications: Publication[] = [
  {
    id: 'tatoli-2022',
    title: '2022 Tatoli! Public Perception Survey',
    description:
      'Headquartered in San Francisco, with an office in Washington, DC, The Asia.',
    imageSrc: '/bg.png',
  },
  {
    id: 'conflict-myanmar-china',
    title: 'Conflict and Development in the Myanmar–China Border Region',
    description:
      'Headquartered in San Francisco, with an office in Washington, DC, The Asia.',
    imageSrc: '/bg.png',
  },
  {
    id: 'women-entrepreneurship-bd',
    title: 'Promoting Women’s Entrepreneurship in Bangladesh',
    description:
      'Headquartered in San Francisco, with an office in Washington, DC, The Asia.',
    imageSrc: '/bg.png',
  },
  {
    id: 'tatoli-2022-duplicate',
    title: '2022 Tatoli! Public Perception Survey',
    description:
      'Headquartered in San Francisco, with an office in Washington, DC, The Asia.',
    imageSrc: '/bg.png',
  },
];

export default function PublicationsSection() {
  return (
    <section className="bg-red-50 px-6 py-12 md:px-12 lg:px-24">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-red-400 text-opacity-50">
            Publications
          </h2>
          <p className="mt-2 max-w-lg font-medium text-black">
            The leadership and staff play key roles in implementing its programs and projects throughout Asia.
          </p>
        </div>
        <Link
          href="/publications"
          className="inline-flex items-center gap-1 text-black text-opacity-50 hover:text-opacity-100 transition"
        >
          All Publications <ArrowRight size={16} />
        </Link>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {publications.map(({ id, imageSrc, title, description }) => (
          <article
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={240}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-black mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
