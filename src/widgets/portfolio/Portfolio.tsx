import { PortfolioCard } from "./ui/PortfolioCard";
import { portfolioList } from "@shared/assets/data";
import { useStore } from "@shared/model";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    modules: [Autoplay, EffectCards],
    spaceBetween: 0,
    effect: "cards",
    centeredSlides: true,
    autoplay: {
      delay: 2500,
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
