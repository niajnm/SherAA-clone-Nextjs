
import { useVideoSection } from "@/hooks/useVideoSection";

export default function VideoSection() {
  const { data, isLoading, isError } = useVideoSection();

  if (isLoading) {
    return (
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 text-center">
        <p className="text-gray-500 animate-pulse">Loading videos...</p>
      </section>
    );
  }

  if (isError || !data?.landingVideos.nodes.length) {
    return (
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 text-center">
        <p className="text-gray-500">No videos found.</p>
      </section>
    );
  }

  const videos = data.landingVideos.nodes;

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Watch Our Videos
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore inspiring stories and updates from our initiatives.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => {
          const fields = video.landingVideoFields;

          return (
            <article
              key={video.databaseId}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              {/* Show YouTube embed if link available, otherwise show uploaded file */}
              {fields.youtubeLink ? (
                <div className="relative w-full h-64">
                  <iframe
                    className="w-full h-full"
                    src={fields.youtubeLink.replace("watch?v=", "embed/")}
                    title={fields.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : fields.videoFile?.node?.mediaItemUrl ? (
                <video
                  controls
                  className="w-full h-64 object-cover"
                  src={fields.videoFile.node.mediaItemUrl}
                />
              ) : null}

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {fields.title}
                </h3>
                <p className="text-gray-600 text-sm">{fields.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
