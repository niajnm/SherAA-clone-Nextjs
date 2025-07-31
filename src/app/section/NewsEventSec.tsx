

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useNewsEventList } from '@/hooks/useNewsEventList';

export default function NewsEventsSection() {
  const { data, isLoading, isError } = useNewsEventList(10, '', '', '');

  if (isLoading) return <p className="px-6 py-12">Loading...</p>;
  if (isError) return <p className="px-6 py-12 text-red-500">Failed to load news events.</p>;

  const newsItems = data?.newsEvents.nodes || [];

  return (
    <section className="px-6 py-12 md:px-12 lg:px-24   ">
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
        {newsItems.map((item) => (
          <div key={item.databaseId} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src={item.newsEventFields.image?.node?.sourceUrl || '/placeholder.png'}
              alt={item.newsEventFields.image?.node?.caption || item.newsEventFields.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
        <div className="p-4">
  <h3 className="font-semibold text-black mb-2">{item.newsEventFields.title}</h3>
  <div
    className="text-gray-600 line-clamp-3  text-sm"
    dangerouslySetInnerHTML={{ __html: item.newsEventFields.description }}
  />
</div>

          </div>
        ))}
      </div>
    </section>
  );
}
