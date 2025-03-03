import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-yellow-500">Jacob</h1>
        <h2 className="text-xl text-gray-300 mt-2">
          Web  Developer | Game developer
        </h2>
        <p className="text-gray-400 mt-6 leading-relaxed">
          I am a passionate Software Engineer with a strong interest in Game development, website development, 
          and a Graphic developer. I specialize in building interactive game in unity
          and enjoy exploring secure design and building things. I love solving technical challenges and continuously improving my skills.
        </p>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-400">Skills</h3>
          <p className="text-gray-300 mt-2">
            Next.js, React, JavaScript, Game Development, html, Python,CSS,Blender,unity
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
          <p className="text-gray-300 mt-2">jacobniilanteibaddoo6@gmail.com</p>
          <p className="text-gray-300">0268237447</p>
        </div>
      </div>
    </section>
  );
};

export default About; 