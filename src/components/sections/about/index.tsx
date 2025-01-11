"use client";
import { useAppContext } from "@/components/context/AppContext";
import { useEffect, useState } from "react";
import { useScramble } from "use-scramble";

const About = () => {
  const { label, scrollButton } = useAppContext();

  return (
    <section>
      <div className="relative flex h-[--about-heading--height] flex-col justify-center pl-[2.29rem] md:pl-[4.38rem]">
        <Heading />
        <div className="mt-[0.62rem] flex justify-between pb-5">
          <p className="sm invisible" ref={label} />
          <button
            className="invisible absolute bottom-10 right-6 text-sm"
            ref={scrollButton}
          />
        </div>
      </div>
      <div className="pt-[3.12rem] lg:mb-[400px]">
        <p className="paragraph-1 p-[0.63rem] md:p-[1.25rem]">
          I am passionate about creating user-friendly designs that enhance user
          experiences.
        </p>
        <p className="paragraph-1 mb-[40px] p-[0.63rem] md:p-[1.25rem] lg:mb-[300px]">
          My focus is on intuitive and accessible interfaces that make
          interacting with digital products enjoyable and straightforward.
        </p>
      </div>
    </section>
  );
};

export default About;

const Heading = () => {
  const { startSecondaryHeadingScramble } = useAppContext();
  const [displayText, setDisplayText] = useState("Harold Cano");
  const { ref } = useScramble({
    text: displayText,
  });

  useEffect(() => {
    if (startSecondaryHeadingScramble) {
      // Remove invisible class to show the heading when scrambling starts
      if (ref.current) {
        ref.current.classList.remove("invisible");
      }

      // Array of sentences to cycle through
      const texts = ["Harold Cano", "UI/UX Designer", "Web Development"];
      let currentIndex = 0; // Start from the first sentence

      const interval = setInterval(() => {
        // Move to the next sentence in the array
        currentIndex = (currentIndex + 1) % texts.length;
        setDisplayText(texts[currentIndex]);
      }, 4000); // Change sentence every 6000ms (6 seconds)

      // Cleanup interval on component unmount or when dependency changes
      return () => clearInterval(interval);
    }
  }, [startSecondaryHeadingScramble, ref]);

  return <h2 className="title invisible" ref={ref} />;
};
