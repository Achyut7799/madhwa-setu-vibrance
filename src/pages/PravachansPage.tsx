
import { Play } from 'lucide-react';

const pravachans = [
  {
    id: 1,
    title: "Introduction to Dvaita Philosophy",
    duration: "3 minutes",
    thumbnail: "public/lovable-uploads/bd17618b-08ad-4e33-9708-139e56aab9be.png",
    category: "Philosophy"
  },
  {
    id: 2,
    title: "Understanding the Five Differences",
    duration: "4 minutes",
    thumbnail: "public/lovable-uploads/eef25478-79f3-4eaf-ad1d-898f840341b2.png",
    category: "Philosophy"
  },
  {
    id: 3,
    title: "Daily Rituals and Their Significance",
    duration: "5 minutes",
    thumbnail: "public/lovable-uploads/bfd71402-1307-4f8c-8b39-b114d83e993f.png",
    category: "Rituals"
  }
];

const PravachansPage = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-header inline-block">Pravachans</h1>
          <p className="text-madhwa-deep-purple/80 max-w-3xl mx-auto mt-4">
            Short-form spiritual content designed for the modern seeker. Explore Dvaita philosophy and Madhwa traditions in bite-sized videos.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-madhwa-deep-purple mb-6">Categories</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="bg-madhwa-purple text-white px-4 py-2 rounded-full">All</button>
            <button className="bg-madhwa-light-gray text-madhwa-deep-purple px-4 py-2 rounded-full hover:bg-madhwa-purple hover:text-white transition-colors">Philosophy</button>
            <button className="bg-madhwa-light-gray text-madhwa-deep-purple px-4 py-2 rounded-full hover:bg-madhwa-purple hover:text-white transition-colors">Rituals</button>
            <button className="bg-madhwa-light-gray text-madhwa-deep-purple px-4 py-2 rounded-full hover:bg-madhwa-purple hover:text-white transition-colors">Festivals</button>
            <button className="bg-madhwa-light-gray text-madhwa-deep-purple px-4 py-2 rounded-full hover:bg-madhwa-purple hover:text-white transition-colors">Daily Practices</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pravachans.map((pravachan) => (
            <div key={pravachan.id} className="spiritual-card overflow-hidden group">
              <div className="relative">
                <img 
                  src={pravachan.thumbnail} 
                  alt={pravachan.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-madhwa-purple text-white rounded-full p-3 transform hover:scale-110 transition-transform">
                    <Play />
                  </button>
                </div>
                <div className="absolute top-2 right-2 bg-madhwa-purple text-white text-xs px-2 py-1 rounded">
                  {pravachan.duration}
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-madhwa-purple font-medium">{pravachan.category}</span>
                <h3 className="text-lg font-semibold text-madhwa-deep-purple mt-1">{pravachan.title}</h3>
                <button className="mt-3 text-madhwa-purple hover:text-madhwa-dark-purple text-sm font-medium">
                  Watch Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-secondary">
            Load More Pravachans
          </button>
        </div>

        <div className="mt-16 spiritual-card p-8 bg-madhwa-light-gray text-center">
          <h2 className="text-2xl font-semibold text-madhwa-deep-purple mb-4">Join the Movement</h2>
          <p className="text-madhwa-deep-purple/80 max-w-2xl mx-auto mb-6">
            Be part of our mission to make Madhwa philosophy accessible to the younger generation and diaspora.
          </p>
          <button className="btn-primary">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PravachansPage;
