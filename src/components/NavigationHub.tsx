import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Slide {
  image: string;
  caption: string;
}

const joynerLink = "text-[#5BC0DE] hover:text-[#4aa8c4] font-semibold text-base md:text-lg transition-colors";

export default function NavigationHub() {
  const { t } = useTranslation();
  const slides = t("activities.slides", { returnObjects: true }) as Slide[];

  const left = [
    { to: "/education", titleKey: "nav.education", blurbKey: "navigationHub.educationBlurb" },
    { to: "/experience", titleKey: "nav.workExperience", blurbKey: "navigationHub.workExperienceBlurb" },
    { to: "/research", titleKey: "nav.research", blurbKey: "navigationHub.researchBlurb" },
  ] as const;

  const right: ReadonlyArray<{ to: string; titleKey: string; blurbKey: string; isAnchor?: boolean }> = [
    { to: "/projects", titleKey: "nav.projects", blurbKey: "navigationHub.projectsBlurb" },
    { to: "#publications", titleKey: "nav.publications", blurbKey: "navigationHub.publicationsBlurb", isAnchor: true },
    { to: "#awards", titleKey: "nav.awards", blurbKey: "navigationHub.awardsBlurb", isAnchor: true },
  ];

  return (
    <section className="bg-white py-16 md:py-20 border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl md:text-3xl font-serif font-normal text-gray-700 mb-12 md:mb-16 tracking-tight">
          {t("navigationHub.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-10 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-10 lg:gap-12 order-2 lg:order-1">
            {left.map((item) => (
              <div key={item.to} className="lg:text-right">
                <Link to={item.to} className={`${joynerLink} inline-block`}>
                  {t(item.titleKey)}:
                </Link>
                <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed text-gray-600 lg:text-right">
                  {t(item.blurbKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Center carousel */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px] overflow-hidden rounded-md shadow-lg ring-1 ring-black/5">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="aspect-[4/3]"
              >
                {slides.map((slide, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative h-full">
                      <img
                        src={slide.image}
                        alt={slide.caption}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-3 pt-8">
                        <p className="text-white text-xs font-medium text-center leading-snug">
                          {slide.caption}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-10 lg:gap-12 order-3">
            {right.map((item) => (
              <div key={item.to} className="lg:text-left">
                {item.isAnchor ? (
                  <a href={item.to} className={`${joynerLink} inline-block`}>
                    {t(item.titleKey)}:
                  </a>
                ) : (
                  <Link to={item.to} className={`${joynerLink} inline-block`}>
                    {t(item.titleKey)}:
                  </Link>
                )}
                <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed text-gray-600">
                  {t(item.blurbKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
