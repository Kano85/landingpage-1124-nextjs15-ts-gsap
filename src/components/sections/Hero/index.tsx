// src/components/sections/Hero/index.tsx
import HeroArrow from './heroArrow';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="position: sticky items -z-1 top-[var(--navbar-height)] h-[var(--hero-section--height)] bg-hero-dark text-details-white"
    >
      <h1 className="display-heading absolute bottom-9 left-[2.29rem] md:left-[4.38rem]">
        <HeroArrow /> <span>Create an Impact</span>
      </h1>
    </section>
  );
};

export default Hero;
