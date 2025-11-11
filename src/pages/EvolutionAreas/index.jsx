import { useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

// Componentes de cada área
import HealthAndWellness from "./HealthAndWellness";
import Business from "./Business";
import PersonalAndSpiritual from "./PersonalAndSpiritual";
import Dreams from "./Dreams";

const AREAS = [
  { key: "wellness",  title: "Salud y Bienestar",     Component: HealthAndWellness },
  { key: "business",  title: "Negocios",              Component: Business },
  { key: "spiritual", title: "Personal y Espiritual", Component: PersonalAndSpiritual },
  { key: "dreams",    title: "Sueños",                Component: Dreams },
];

const indexByKey = AREAS.reduce((a, r, i) => ((a[r.key] = i), a), {});

export default function EvolutionAreasPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const areaParam = params.get("area");
  const initialIndex = useMemo(
    () => (Number.isFinite(indexByKey[areaParam]) ? indexByKey[areaParam] : 0),
    [areaParam]
  );

  useEffect(() => {
    if (!areaParam) {
      navigate(`/areas-de-evolucion?area=${AREAS[initialIndex].key}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSlideChange = (swiper) => {
    const i = swiper.activeIndex ?? 0;
    const key = AREAS[i]?.key ?? "wellness";
    navigate(`/areas-de-evolucion?area=${key}`, { replace: true });
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <section className="ea-root">
      <button className="ea-nav ea-prev" aria-label="Anterior" />
      <button className="ea-nav ea-next" aria-label="Siguiente" />

      <Swiper
        modules={[Navigation, Keyboard, Mousewheel, A11y]}
        className="ea-swiper"
        navigation={{ prevEl: ".ea-prev", nextEl: ".ea-next" }}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
        slidesPerView={1}
        spaceBetween={0}
        loop={false}
        autoHeight
        initialSlide={initialIndex}
        onSlideChange={onSlideChange}
        a11y={{ prevSlideMessage: "Anterior", nextSlideMessage: "Siguiente" }}
      >
        {AREAS.map(({ key, title, Component }) => (
          <SwiperSlide key={key}>
            <div className="ea-slide">
              <Container maxWidth="lg" className="ea-slide-inner">
                <Component title={title} />
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
