import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Slide {
  image: string;
  caption: string;
}

export default function Activities() {
  const { t } = useTranslation();
  const slides = t("activities.slides", { returnObjects: true }) as Slide[];

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif text-3xl font-normal text-gray-900 mb-10 text-center">
          {t("activities.title")}
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-[50vh] md:h-[60vh] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-sm md:text-base font-medium text-center">
                    {slide.caption}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
