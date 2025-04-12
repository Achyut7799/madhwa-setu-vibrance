
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="section-header">About MadhwaSetu</h2>
            <p className="text-madhwa-deep-purple/80 mb-4">
              MadhwaSetu is a bridge connecting the ancient wisdom of Madhwa philosophy with the modern digital world. 
              We aim to make the rich traditions and rituals of the Madhwa community accessible to all, 
              especially the younger generation and diaspora who may find it challenging to engage with their heritage.
            </p>
            <p className="text-madhwa-deep-purple/80 mb-6">
              Our platform offers bite-sized pravachans, visual ritual guides, festival alerts, 
              and community connections through Seva and Pandit services - all designed with a 
              modern UI while respecting our traditional roots.
            </p>
            <div className="mb-8">
              <Link to="/seva-registration" className="btn-primary">
                Join the Movement
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="spiritual-card p-6 bg-madhwa-light-gray">
                <h3 className="text-xl font-semibold text-madhwa-purple mb-2">Our Vision</h3>
                <p className="text-sm text-madhwa-deep-purple/80">
                  To make the sacred searchable, the complex clear, and the spiritual scrollable.
                </p>
              </div>
              <div className="spiritual-card p-6">
                <h3 className="text-xl font-semibold text-madhwa-purple mb-2">Our Approach</h3>
                <p className="text-sm text-madhwa-deep-purple/80">
                  Deliver spiritual content in bite-sized formats with visual, contextual guidance.
                </p>
              </div>
              <div className="spiritual-card p-6">
                <h3 className="text-xl font-semibold text-madhwa-purple mb-2">Inclusivity</h3>
                <p className="text-sm text-madhwa-deep-purple/80">
                  Focus on multilingual support and regional variations to serve all Madhwas.
                </p>
              </div>
              <div className="spiritual-card p-6 bg-madhwa-light-gray">
                <h3 className="text-xl font-semibold text-madhwa-purple mb-2">Community</h3>
                <p className="text-sm text-madhwa-deep-purple/80">
                  Keep the community connected through timely event alerts and engagement opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
