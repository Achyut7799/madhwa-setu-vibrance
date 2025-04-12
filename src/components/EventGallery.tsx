
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
          <Carousel className="w-full">
            <CarouselContent>
              {[1, 2, 3].map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="spiritual-card overflow-hidden h-[200px] flex items-center justify-center bg-madhwa-purple/10">
                      <p className="text-madhwa-purple text-center px-4">Event {index + 1} - Gallery photos coming soon</p>
                    </div>
                    <div className="text-center mt-2 text-sm text-madhwa-deep-purple/80">
                      Community Event {index + 1}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
