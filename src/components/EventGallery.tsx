
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EventGallery = () => {
  return (
    <section className="py-16 md:py-20 bg-[#f8f3eb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1F2C] mb-6 relative inline-block">
            Community Events Gallery
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#1A1F2C]/80 rounded-full"></span>
          </h2>
          <p className="text-[#1A1F2C]/80 max-w-3xl mx-auto mt-4">
            Glimpses of our vibrant community gatherings, ritual ceremonies, and festival celebrations that keep the Madhwa traditions alive.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {[1, 2, 3].map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden h-[200px] flex items-center justify-center bg-[#f8f3eb] border border-[#1A1F2C]/10 rounded-lg">
                      <p className="text-[#1A1F2C] text-center px-4">Event {index + 1} - Gallery photos coming soon</p>
                    </div>
                    <div className="text-center mt-2 text-sm text-[#1A1F2C]/80">
                      Community Event {index + 1}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-[#f8f3eb] border border-[#1A1F2C]/20 text-[#1A1F2C]" />
            <CarouselNext className="right-0 bg-[#f8f3eb] border border-[#1A1F2C]/20 text-[#1A1F2C]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
