import Image from "next/image";
import ShieldCheck from "@/assets/ShieldCheck.png";
import MapTrifold from "@/assets/MapTrifold.png";
import Headset from "@/assets/Headset.png";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    desc: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: MapTrifold,
    title: "Expert Guides",
    desc: "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    desc: "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-sky-50 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Why Choose Wanderlust
        </h2>
        <p className="text-gray-500 text-sm mb-14">
          Your trusted partner for exceptional travel experiences
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-9 shadow-sm border border-sky-100 text-left hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center mb-6">
                <Image src={f.icon} alt={f.title} width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
