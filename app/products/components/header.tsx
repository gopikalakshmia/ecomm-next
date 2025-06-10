'use client';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <header className="bg-[#F8F4E1] text-black px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Left: Text Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          📖 Whispering Pages 🕊️
        </h1>
        <p className="text-lg md:text-xl mb-6 text-[#BF9264]">
          Discover stories that whisper to your soul — from timeless classics to today’s treasures.
        </p>
 
      </div>

      {/* Right: Single Image Section */}
      <div className="md:w-1/2 w-full max-w-md relative h-64 md:h-80 rounded-lg overflow-hidden">
        <Image
          src="/Images/header1.png"
          alt="Books and Reading"
          fill
          className="object-cover"
          priority
        />
      </div>
    </header>
  );
};

export default HeroSection;
