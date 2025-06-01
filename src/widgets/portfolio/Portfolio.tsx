import { PortfolioCard } from "./ui/PortfolioCard";
import { portfolioList } from "@shared/assets/data";
import { useStore } from "@shared/model";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export function Portfolio() {
  const { setRef } = useStore((state) => state);
  const skillsSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsSection) {
      setRef(skillsSection);
    }
  }, []);

  const swiperParams = {
    modules: [Autoplay, Navigation],
    spaceBetween: 0,
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    navigation: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="text-center fw-bold display-6">Портфолио</h2>
        </div>
      </div>
      <div ref={skillsSection}>
        <Swiper {...swiperParams}>
          {portfolioList.map((card, index) => (
            <SwiperSlide key={index}>{PortfolioCard(card)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
