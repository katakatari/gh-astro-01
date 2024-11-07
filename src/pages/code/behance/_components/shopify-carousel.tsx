import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  UnstyledCarouselNext,
  UnstyledCarouselPrevious,
} from "@/components/ui/carousel";
import Icon from "@components/ui/icon";
import Autoplay from "embla-carousel-react";
import React from "react";

const ShopifyCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      setApi={setApi}
      className="w-full max-w-5xl mx-auto px-8"
    >
      <CarouselContent className="gap-12 ml-10 py-20">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="border-4 border-primary/20 md:basis-[47%] rounded-md flex flex-col p-6"
          >
            <header>
              <img
                src="https://i.pravatar.cc/300?img=51"
                alt=""
                className="relative -left-[15%] -top-[50%] float-left aspect-square w-32 rounded-full"
              />
              <div className="relative -left-[10%]">
                <h4>John Doe</h4>
                <p className="text-sm text-foreground/70">Founder</p>
                <span className="flex text-orange-300 gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon name="star" key={index} />
                  ))}
                </span>
              </div>
            </header>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              error asperiores, blanditiis reprehenderit velit impedit suscipit
              deleniti esse, necessitatibus placeat facere nemo. Eligendi
              nesciunt provident tempore explicabo. Exercitationem, nam fugiat.
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ShopifyCarousel;
