
import ImageCarousel from "./ImageCarousel";

const eventImages = [
  {
    src: "public/lovable-uploads/bfd71402-1307-4f8c-8b39-b114d83e993f.png",
    alt: "Madhwa Community Event",
    caption: "Annual Madhwa Community Gathering"
  },
  {
    src: "public/lovable-uploads/bd17618b-08ad-4e33-9708-139e56aab9be.png",
    alt: "Ritual Ceremony",
    caption: "Traditional Ritual Ceremony"
  },
  {
    src: "public/lovable-uploads/eef25478-79f3-4eaf-ad1d-898f840341b2.png",
    alt: "Festival Celebration",
    caption: "Celebration of Sacred Festivals"
  }
];

const EventGallery = () => {
  return (
    <section className="section-padding bg-madhwa-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-header inline-block">Community Events Gallery</h2>
          <p className="text-madhwa-deep-purple/80 max-w-3xl mx-auto mt-4">
            Glimpses of our vibrant community gatherings, ritual ceremonies, and festival celebrations that keep the Madhwa traditions alive.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <ImageCarousel images={eventImages} />
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
