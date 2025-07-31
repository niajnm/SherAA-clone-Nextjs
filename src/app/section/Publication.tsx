

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { usePublicationList } from '@/hooks/usePublicationList';

type UiPublication = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

function getPublicationImageSrc(pub: any): string {
  // Try multiple places safely; never touch `.node` without guards
  const fields = pub?.publicationFields ?? {};

  // 1) Featured/ACF image (if your query includes publicationFields.image)
  const imgFromFields =
    fields?.image?.node?.sourceUrl ||
    fields?.featuredImage?.node?.sourceUrl || // in case you used featuredImage
    '';

  // 2) As a last resort, if a document is actually an image (rare)
  const doc1 = fields?.documentFileNo1?.node?.mediaItemUrl || '';
  const doc2 = fields?.documentFileNo2?.node?.mediaItemUrl || '';
  const doc3 = fields?.documentFileNo3?.node?.mediaItemUrl || '';

  const candidate =
    imgFromFields ||
    (doc1.endsWith('.png') || doc1.endsWith('.jpg') || doc1.endsWith('.jpeg') ? doc1 : '') ||
    (doc2.endsWith('.png') || doc2.endsWith('.jpg') || doc2.endsWith('.jpeg') ? doc2 : '') ||
    (doc3.endsWith('.png') || doc3.endsWith('.jpg') || doc3.endsWith('.jpeg') ? doc3 : '');

  return candidate || '/bg.png';
}

export default function PublicationsSection() {
  const { data, isLoading, isError } = usePublicationList();

  // Flatten to the exact UI shape with full null-safety
  const publications: UiPublication[] = Array.isArray(data?.publications?.nodes)
    ? data!.publications.nodes.map((pub) => ({
      id: String(pub?.databaseId ?? ''),
      title: pub?.publicationFields?.title ?? 'Untitled',
      // If your description is HTML, you can keep it as plain text here to avoid any node issues.
      description: pub?.publicationFields?.description ?? '',
      imageSrc: getPublicationImageSrc(pub),
    }))
    : [];

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
        {isLoading || isError
          ? [1, 2, 3, 4].map((n) => (
            <article
              key={n}
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse h-72"
            />
          ))
          : publications.map(({ id, imageSrc, title, description }) => (
            <article
              key={id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <Image
                src={imageSrc || '/bg.png'}
                alt={title}
                width={400}
                height={300}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-black mb-2">{title}</h3>
                <div
                  className="text-gray-600 line-clamp-3  text-sm"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                {/* <p className="text-gray-600 line-clamp-3  text-sm">{description}</p> */}
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
