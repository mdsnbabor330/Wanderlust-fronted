import Link from "next/link";
import Image from "next/image";
import CTA from "@/assets/CTA.png";

const CtaSection = () => {
  return (
    <section className="relative min-h-[320px] flex items-center justify-center text-center overflow-hidden font-sans">
      {/* Background image */}
      <Image
        src={CTA}
        alt="Ready to travel"
        fill
        className="object-cover object-center z-0"
        quality={85}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#031e32]/75 z-10" />

      {/* Content */}
      <div className="relative z-20 text-white px-6 py-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
          Ready To Start Your Journey?
        </h2>
        <p className="text-white/75 text-base mb-8 leading-relaxed">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link
          href="/destinations"
          className="inline-flex items-center bg-transparent text-white border-2 border-white px-8 py-3.5 rounded font-bold text-sm tracking-widest hover:bg-white hover:text-[#031e32] transition-colors duration-200"
        >
          BOOK YOUR TRIP TODAY &nbsp;→
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
