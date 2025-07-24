'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    title: 'Conflict and Development in the Myanmar-China Border Region',
    description:
      'The Asia, a dynamic and forward-thinking organization, is strategically headquartered in San Francisco. Surrounded by the innovative energy of Silicon Valley...',
    image: '/bg.png',
  },
  {
    title: 'Promoting Women’s Entrepreneurship in Bangladesh',
    description:
      'Headquartered in San Francisco, with an office in Washington, DC, The Asia.',
    image: '/bg.png',
  },
  {
    title: '2022 Tatoli! Public Perception Survey',
    description:
      'Headquartered in San Francisco, with an office in Washington, DC, The Asia.',
    image: '/bg.png',
  },
];

export default function NewsEventsSection() {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-24">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-sky-800">News & Events</h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            The leadership and staff play key roles in implementing its programs and projects throughout Asia.
          </p>
        </div>
        <button className="text-teal-700 hover:underline flex items-center gap-1 whitespace-nowrap">
          See All <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
