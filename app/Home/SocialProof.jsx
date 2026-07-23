"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function SocialProof() {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Ex-Teacher → Frontend Dev",
      quote: `"I was lost in tutorial hell for 6 months. RoadmapFinder gave me a 90-day plan and I landed my first junior role 2 weeks after finishing."`,
      initials: "SJ",
      bgColor: "bg-blue-600",
    },
    {
      name: "Marcus T.",
      role: "Computer Science Student",
      quote: `"My university curriculum was 10 years behind. RoadmapFinder helped me learn the modern stack I needed for my internship."`,
      initials: "MT",
      bgColor: "bg-indigo-600",
    },
    {
      name: "David R.",
      role: "Ex-Retail Manager → Fullstack",
      quote: `"The XP system kept me motivated when things got hard. It's the first time I've actually felt like I was 'leveling up' my life."`,
      initials: "DR",
      bgColor: "bg-teal-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#191c1e] text-white overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
        <ScrollReveal direction="up" duration={0.6}>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold text-center mb-16">
            Join 10,000+ career switchers.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.15} direction="up">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between hover:border-white/30 transition-all hover:-translate-y-1 h-full">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full ${item.bgColor} flex items-center justify-center font-bold text-white text-lg font-['Space_Grotesk'] border-2 border-[#004ac6] shadow-md`}>
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-bold text-base font-['Inter']">{item.name}</p>
                    <p className="text-xs text-white/60 font-['Inter']">{item.role}</p>
                  </div>
                </div>
                <p className="italic text-base text-white/90 font-['Inter'] leading-relaxed">
                  {item.quote}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
