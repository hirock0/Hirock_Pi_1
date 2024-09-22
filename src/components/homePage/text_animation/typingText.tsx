"use client";
import Typewriter from "typewriter-effect";
const TypingText = () => {
  return (
    <div className=" text-7xl max-lg:text-6xl max-md:text-4xl max-sm:text-2xl font-semibold text-red-600">
      <Typewriter
        options={{
          strings: ["Web developer", "Business"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypingText;
