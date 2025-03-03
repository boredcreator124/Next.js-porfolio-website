import React from 'react';
//import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white px-6">
      {/* Profile Image */}
      {/* <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <Image src="/images/profile.jpg" alt="Jacob Baddoo" width={192} height={192} className="object-cover" />
      </div> */}

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Hi, I&apos;m <span className="text-blue-500">Jacob Baddoo</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300 leading-relaxed">
        A Software Engineer passionate about 
        <span className="text-blue-400 font-semibold"> Web Development</span>, 
        <span className="text-blue-400 font-semibold"> Game development</span>, and 
        <span className="text-blue-400 font-semibold"> Graphic designer</span>.  
        I love solving complex problems and building ineractive applications and games.
      </p>

      {/* CTA Button */}
      <a 
        href="#projects"
        className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-md text-lg font-medium 
        hover:bg-red-600 transition duration-300 shadow-lg"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;