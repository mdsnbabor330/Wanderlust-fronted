import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-6 pt-28 pb-24 max-w-3xl mx-auto">
        <p className="text-sky-300 text-sm font-semibold tracking-[0.18em] mb-4 uppercase">
          ✈ Your Journey Begins Here
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-5 drop-shadow-lg">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-base md:text-xl text-white/85 leading-relaxed mb-10">
          Explore breathtaking destinations and create unforgettable memories
          <br className="hidden md:block" /> with our curated travel experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/destinations"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm tracking-widest px-8 py-3.5 rounded transition-colors duration-200"
          >
            EXPLORE NOW &nbsp;→
          </Link>
          <Link
            href="/destinations"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white font-bold text-sm tracking-widest px-8 py-3.5 rounded transition-colors duration-200"
          >
            VIEW DESTINATION
          </Link>
        </div>
      </div>

      {/* Search / Filter Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col md:flex-row items-stretch md:items-center bg-white/15 backdrop-blur-md border-t border-white/20 min-h-16">
        {/* Location */}
        <div className="flex-1 flex flex-col px-5 py-3 cursor-pointer hover:bg-white/10 transition-colors">
          <span className="text-white text-xs font-bold tracking-wide">📍 Location</span>
          <span className="text-white/70 text-xs mt-0.5">Address, City or Zip</span>
        </div>

        {/* Dividers */}
        <div className="hidden md:block w-px h-9 bg-white/30 shrink-0" />
        <div className="md:hidden w-full h-px bg-white/30 shrink-0" />

        {/* Date */}
        <div className="flex-1 flex flex-col px-5 py-3 cursor-pointer hover:bg-white/10 transition-colors">
          <span className="text-white text-xs font-bold tracking-wide">📅 Date / Duration</span>
          <span className="text-white/70 text-xs mt-0.5">Anytime / 3 Days</span>
        </div>

        {/* Dividers */}
        <div className="hidden md:block w-px h-9 bg-white/30 shrink-0" />
        <div className="md:hidden w-full h-px bg-white/30 shrink-0" />

        {/* Budget */}
        <div className="flex-1 flex flex-col px-5 py-3 cursor-pointer hover:bg-white/10 transition-colors">
          <span className="text-white text-xs font-bold tracking-wide">💰 Budget</span>
          <span className="text-white/70 text-xs mt-0.5">$0 – $3,000</span>
        </div>

        {/* Dividers */}
        <div className="hidden md:block w-px h-9 bg-white/30 shrink-0" />
        <div className="md:hidden w-full h-px bg-white/30 shrink-0" />

        {/* People */}
        <div className="flex-1 flex flex-col px-5 py-3 cursor-pointer hover:bg-white/10 transition-colors">
          <span className="text-white text-xs font-bold tracking-wide">👥 People</span>
          <span className="text-white/70 text-xs mt-0.5">5 – 10</span>
        </div>

        {/* Search Button */}
        <Link
          href="/destinations"
          className="flex items-center justify-center px-8 py-4 md:py-0 self-stretch bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm tracking-widest transition-colors duration-200"
        >
          Search
        </Link>
      </div>
    </section>
  );
};

export default Banner;