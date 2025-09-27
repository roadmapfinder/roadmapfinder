"use client"
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock,
  BookOpen,
  Briefcase,
  DollarSign,
  Users,
  Award,
} from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id, qIndex) => {
    if (openFAQ?.id === id && openFAQ?.qIndex === qIndex) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ({ id, qIndex });
    }
  };

  const faqData = [
    {
      id: 1,
      category: "Getting Started",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      questions: [
        {
          question: "How long does it take to complete this graphic design roadmap?",
          answer:
            "The timeline varies based on your commitment and prior experience. Typically:\n• **Beginner (Level 1-2)**: 3-6 months with consistent daily practice\n• **Intermediate (Level 3-4)**: 6-12 months of focused learning\n• **Advanced (Level 5)**: 12+ months for mastery and specialization\n\nRemember, becoming proficient is an ongoing journey. Most designers see significant improvement within 6-12 months of dedicated practice.",
        },
        {
          question: "Do I need expensive software to start graphic design?",
          answer:
            "No! You can start with free alternatives:\n• **Free options**: GIMP (Photoshop alternative), Inkscape (Illustrator alternative), Canva (templates), Figma (UI/UX)\n• **Budget-friendly**: Affinity Designer/Photo (one-time purchase)\n• **Adobe Creative Suite**: Consider student discounts or monthly subscriptions once you're committed\n\nStart with free tools to learn fundamentals, then invest in professional software as you progress.",
        },
        {
          question: "What equipment do I need to begin?",
          answer:
            "**Minimum requirements**:\n• Computer (Mac or PC) with decent specs\n• Internet connection for online resources\n• Basic mouse (graphics tablet optional initially)\n\n**Recommended upgrades**:\n• Graphics tablet (Wacom Intuos or similar)\n• High-resolution monitor with good color accuracy\n• Comfortable chair and ergonomic setup\n\nStart minimal and upgrade as your skills and commitment grow.",
        },
        {
          question: "Should I focus on print or digital design first?",
          answer:
            "**Start with digital design** because:\n• Lower barrier to entry (no printing costs)\n• Easier to share and get feedback\n• More job opportunities in digital markets\n• Skills transfer well to print later\n\n**Print knowledge becomes important** for:\n• Professional branding projects\n• Marketing materials\n• Publication design\n\nLearn digital fundamentals first, then expand to print in Level 2-3.",
        },
      ],
    },
    {
      id: 2,
      category: "Skills & Tools",
      icon: Award,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      questions: [
        {
          question: "Which Adobe Creative Suite apps should I learn first?",
          answer:
            "**Priority order for beginners**:\n1. **Photoshop**: Essential for photo editing, digital painting, web graphics\n2. **Illustrator**: Vector graphics, logos, icons, scalable designs\n3. **InDesign**: Layout design, brochures, magazines, multi-page documents\n4. **After Effects**: Motion graphics and animation (Level 3+)\n\n**Learning approach**:\n• Master Photoshop basics first (2-3 months)\n• Add Illustrator for vector work (1-2 months)\n• Learn InDesign for layout projects (1 month)\n• Explore After Effects for motion design later\n\n**Alternative tools**:\n• Figma for UI/UX design\n• Canva for quick social media graphics\n• Affinity Suite as budget-friendly Adobe alternative",
        },
        {
          question: "How important is learning to draw by hand?",
          answer:
            "**Hand drawing benefits**:\n• **Ideation**: Fastest way to explore concepts and iterate\n• **Understanding form**: Better grasp of shape, proportion, and composition\n• **Creative flow**: Direct connection between brain and hand\n• **Client meetings**: Quick sketches for communication\n• **Foundation skills**: Improves digital work quality\n\n**How much to focus**:\n• **10-20% of practice time** for sketching and ideation\n• **Not mandatory** for all design paths (UI/UX less dependent)\n• **More important** for illustration, logo design, and concept development\n\n**Practical approach**:\n• Start each project with rough sketches\n• Practice basic shapes, typography, and icon sketching\n• Use sketching for brainstorming and wireframing\n• Don't worry about artistic perfection—focus on communication",
        },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Graphic Design Roadmap – FAQ
          </h2>
          <p className="mt-2 text-gray-600">
            Common questions about learning graphic design, tools, and career path.
          </p>
        </header>

        <div className="space-y-8">
          {faqData.map((section) => (
            <div key={section.id}>
              <div
                className={`flex items-center gap-2 mb-4 ${section.color}`}
              >
                <section.icon className="w-6 h-6" />
                <h3 className="text-xl font-semibold">{section.category}</h3>
              </div>
              <div
                className={`rounded-xl border ${section.borderColor} ${section.bgColor} divide-y`}
              >
                {section.questions.map((q, index) => (
                  <div key={index} className="p-4">
                    <button
                      onClick={() => toggleFAQ(section.id, index)}
                      className="flex justify-between items-center w-full text-left"
                    >
                      <span className="font-medium text-gray-800">
                        {q.question}
                      </span>
                      {openFAQ?.id === section.id &&
                      openFAQ?.qIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openFAQ?.id === section.id &&
                      openFAQ?.qIndex === index && (
                        <p className="mt-3 text-sm text-gray-600 whitespace-pre-line">
                          {q.answer}
                        </p>
                      )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
