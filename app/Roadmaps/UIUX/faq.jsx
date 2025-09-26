import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, Target, Users, Lightbulb, Book, Briefcase, Award, Globe } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <Lightbulb className="text-yellow-500" size={20} />,
      questions: [
        {
          question: "How long does it take to complete this UX roadmap?",
          answer: "The timeline varies greatly depending on your current background, available study time, and learning pace. Generally:\n\n• **Complete beginner (career change)**: 12-18 months of consistent study (10-15 hours/week)\n• **Designer transitioning to UX**: 6-9 months\n• **Developer learning UX**: 8-12 months\n• **Part-time learners**: 18-24 months\n\nRemember, learning UX is ongoing. The roadmap gets you industry-ready, but continuous learning is essential in this field."
        },
        {
          question: "Do I need a design background to start this roadmap?",
          answer: "No design background is required! This roadmap is designed for complete beginners. We start with foundational concepts like design thinking, visual design basics, and UX principles.\n\nHowever, having some background can help:\n• **Art/Visual Design**: You'll progress faster through visual design sections\n• **Psychology**: Understanding human behavior gives you an advantage in UX research\n• **Technology**: Helps with prototyping and developer collaboration\n• **Business**: Valuable for understanding product strategy and metrics\n\nThe most important qualities are curiosity, empathy, and willingness to learn."
        },
        {
          question: "What equipment/software do I need to get started?",
          answer: "**Essential Software (Free):**\n• Figma (free plan sufficient for learning)\n• FigJam for workshops and ideation\n• Google Analytics (free)\n• Browser developer tools\n\n**Recommended Hardware:**\n• Computer with good screen resolution (preferably 15+ inches)\n• Reliable internet connection\n• Optional: Drawing tablet for sketching\n\n**Budget-friendly alternatives:**\n• Use free alternatives like Canva for basic design\n• Practice with pen and paper for wireframing\n• Use free usability testing tools like Maze or Useberry\n\nYou can start with just a computer and Figma!"
        },
        {
          question: "Should I follow the roadmap levels in order?",
          answer: "Yes, following the levels in order is highly recommended because:\n\n• **Progressive skill building**: Each level builds on previous knowledge\n• **Logical learning flow**: Concepts are introduced when you're ready\n• **Portfolio development**: Early projects inform later, more complex work\n• **Industry expectations**: The sequence mirrors real-world UX career progression\n\n**Exceptions where you might skip ahead:**\n• You already have strong skills in a specific area\n• Your current job requires immediate knowledge of advanced topics\n• You're focusing on a specialization (like UX Research)\n\nEven if you skip ahead, consider reviewing earlier levels to fill knowledge gaps."
        }
      ]
    },
    {
      title: "Learning & Practice",
      icon: <Book className="text-blue-500" size={20} />,
      questions: [
        {
          question: "How can I practice UX skills without a job or real projects?",
          answer: "There are many ways to build UX skills through practice projects:\n\n**Self-initiated projects:**\n• Redesign apps you use daily (identify pain points and solutions)\n• Create case studies for local businesses or nonprofits\n• Design solutions for personal problems you've experienced\n\n**Community projects:**\n• Volunteer for nonprofits needing design help\n• Participate in design challenges (Daily UI, UX Mastery challenges)\n• Join hackathons and design sprints\n\n**Learning exercises:**\n• Conduct usability tests on existing apps with friends/family\n• Create journey maps for experiences you've had\n• Practice information architecture with card sorting exercises\n• Write UX audits of popular websites\n\n**Online communities:**\n• Join Figma Community for practice files\n• Participate in design feedback groups\n• Contribute to open-source design projects"
        },
        {
          question: "What are the best resources for learning UX design?",
          answer: "**Free Resources:**\n• **YouTube**: The Futur, AJ&Smart, Flux, CharliMarieTV\n• **Blogs**: Nielsen Norman Group, Smashing Magazine, UX Planet\n• **Podcasts**: Design Better, User Defenders, What is Wrong with UX\n• **Free Courses**: Coursera (audit mode), freeCodeCamp UX courses\n\n**Paid Resources:**\n• **Structured Programs**: Google UX Certificate, Designlab, CareerFoundry\n• **Books**: \"Don't Make Me Think\" by Steve Krug, \"The Design of Everyday Things\" by Don Norman\n• **Platforms**: Interaction Design Foundation (affordable courses)\n\n**Practice Platforms:**\n• Figma Community templates and resources\n• Adobe XD free starter packs\n• Sketch App Sources for inspiration\n\n**Communities:**\n• IxDA (Interaction Design Association)\n• Local UX meetups and design groups\n• Designer Hangout Slack community"
        },
        {
          question: "How do I build a UX portfolio without professional experience?",
          answer: "Building a strong portfolio without professional experience is definitely possible:\n\n**Portfolio Structure (3-5 case studies):**\n• Process-focused case studies showing your thinking\n• Before/after comparisons showing impact\n• Variety of project types (mobile app, website, service design)\n• Clear problem statements and user research insights\n• Design process documentation with iterations\n\n**Case Study Ideas:**\n• Redesign a poorly designed app you use\n• Create a solution for a personal pain point\n• Design for a local business or nonprofit\n• Participate in design challenges and document your process\n• Conduct user research on existing products and propose improvements\n\n**Portfolio Tips:**\n• Focus on process over final designs\n• Include user research and testing results\n• Show your problem-solving approach\n• Explain design decisions and trade-offs\n• Keep it concise but comprehensive\n• Make it mobile-friendly and accessible"
        },
        {
          question: "What's the difference between UI and UX design?",
          answer: "**UX Design (User Experience):**\n• Focuses on the overall experience and user journey\n• Research-driven: user interviews, testing, analytics\n• Information architecture and user flows\n• Problem-solving and strategy\n• Wireframing and prototyping functionality\n• Measures success through user satisfaction and business metrics\n\n**UI Design (User Interface):**\n• Focuses on visual design and interface aesthetics\n• Typography, color, layout, and visual hierarchy\n• Icon design and visual consistency\n• Interaction design and micro-animations\n• High-fidelity mockups and design systems\n• Measures success through usability and visual appeal\n\n**In Reality:**\n• Many roles combine both UX and UI responsibilities\n• UX designers often do UI work, especially at smaller companies\n• Strong UX designers understand visual design principles\n• The best solutions come from considering both UX and UI together\n\n**Career Paths:**\n• UX/UI Designer (hybrid role, most common)\n• UX Designer (research and strategy focus)\n• UI Designer (visual design focus)\n• UX Researcher (research specialist)\n• Product Designer (strategic, business-focused)"
        }
      ]
    },
    {
      title: "Career & Job Search",
      icon: <Briefcase className="text-green-500" size={20} />,
      questions: [
        {
          question: "How do I get my first UX job without experience?",
          answer: "Landing your first UX job requires a strategic approach:\n\n**Build Your Foundation:**\n• Complete this roadmap systematically\n• Create a strong portfolio with 3-5 detailed case studies\n• Practice UX skills through personal projects and redesigns\n• Learn industry-standard tools (Figma, research methods, analytics)\n\n**Gain Relevant Experience:**\n• Volunteer for nonprofits needing design help\n• Freelance small projects for local businesses\n• Participate in design challenges and hackathons\n• Contribute to open-source projects\n• Intern or apprentice with design agencies\n\n**Network and Learn:**\n• Join local UX meetups and design communities\n• Connect with UX professionals on LinkedIn\n• Attend design conferences and workshops\n• Find a mentor in the UX field\n• Share your learning journey on social media\n\n**Job Search Strategy:**\n• Look for junior, associate, or entry-level positions\n• Consider adjacent roles (product designer, marketing designer)\n• Apply to startups and smaller companies\n• Use your transferable skills from previous roles\n• Be persistent and keep improving your portfolio"
        },
        {
          question: "What salary can I expect as a UX designer?",
          answer: "UX design salaries vary significantly by location, experience, and company size:\n\n**Entry Level (0-2 years):**\n• USA: $50,000 - $80,000\n• Major cities (SF, NYC, Seattle): $70,000 - $95,000\n• Europe: €35,000 - €55,000\n• Remote/smaller markets: $40,000 - $65,000\n\n**Mid-Level (3-5 years):**\n• USA: $80,000 - $120,000\n• Major cities: $100,000 - $140,000\n• Europe: €50,000 - €75,000\n• Senior IC level: $90,000 - $130,000\n\n**Senior Level (5+ years):**\n• USA: $120,000 - $180,000+\n• FAANG/Top Tech: $150,000 - $250,000+\n• Europe: €70,000 - €100,000+\n• Leadership roles: $180,000 - $300,000+\n\n**Factors Affecting Salary:**\n• Company size and funding stage\n• Industry (tech, healthcare, finance pay more)\n• Specialized skills (UX research, systems design)\n• Location and cost of living\n• Negotiation skills and market demand"
        },
        {
          question: "Should I freelance or work full-time as a new UX designer?",
          answer: "For new UX designers, full-time employment is generally recommended first:\n\n**Full-time Benefits:**\n• Mentorship and learning from experienced designers\n• Structured feedback and career development\n• Access to real user data and research resources\n• Team collaboration and cross-functional experience\n• Steady income while building skills\n• Professional network development\n\n**When Freelancing Makes Sense:**\n• You have strong business/client management skills\n• You're in a location with limited full-time opportunities\n• You want to build a diverse portfolio quickly\n• You have savings to support income variability\n• You're transitioning from another freelance career\n\n**Hybrid Approach:**\n• Start with full-time to build foundation\n• Take on small freelance projects on the side\n• Build client relationships gradually\n• Transition to freelance after 2-3 years of experience\n\n**Freelancing Challenges for Beginners:**\n• Limited mentorship and feedback\n• Need to handle business operations\n• Inconsistent income and project flow\n• Difficulty accessing user research resources\n• Client education about UX value"
        },
        {
          question: "How do I transition to UX from another career?",
          answer: "Career transitions to UX are very common and successful with the right approach:\n\n**Leverage Your Background:**\n• **Business/Marketing**: User research, analytics, customer insights\n• **Psychology**: User behavior understanding, research methods\n• **Engineering**: Technical constraints, feasibility, prototyping\n• **Graphic Design**: Visual design, design principles, tools\n• **Project Management**: Process organization, stakeholder management\n\n**Transition Strategy:**\n1. **Learn while employed**: Study UX part-time while keeping current job\n2. **Internal transition**: Look for UX opportunities within current company\n3. **Adjacent roles**: Product manager, marketing designer, front-end developer\n4. **Volunteer projects**: Build portfolio while maintaining income\n5. **Bootcamp/courses**: Intensive learning with career support\n\n**Timeline and Expectations:**\n• 6-18 months of learning and portfolio building\n• May need to take a temporary salary reduction\n• Entry-level positions despite previous career experience\n• Transferable skills are valuable but UX-specific skills needed\n\n**Success Tips:**\n• Network with UX professionals in your current industry\n• Start applying UX thinking to current role\n• Document your learning journey\n• Be patient with the process"
        }
      ]
    },
    {
      title: "Tools & Technical Skills",
      icon: <Target className="text-purple-500" size={20} />,
      questions: [
        {
          question: "Is Figma the only tool I need to learn?",
          answer: "While Figma is the industry standard and covers most needs, UX designers use various tools:\n\n**Design & Prototyping:**\n• **Figma** (primary): Design, prototyping, collaboration\n• **Sketch** (Mac only): Still used in some companies\n• **Adobe XD**: Adobe ecosystem integration\n• **Framer**: Advanced prototyping and interactions\n\n**Research & Testing:**\n• **Miro/FigJam**: Workshops, journey mapping, ideation\n• **Maze/UserTesting**: Remote usability testing\n• **Hotjar**: Heatmaps and session recordings\n• **Google Analytics**: User behavior data\n\n**Documentation & Handoff:**\n• **Notion/Confluence**: Documentation and specs\n• **Zeplin/Avocode**: Design-to-development handoff\n• **Storybook**: Component documentation\n\n**Specialization Tools:**\n• **Principle/ProtoPie**: Complex prototyping\n• **After Effects**: Motion design\n• **InVision**: Prototyping and feedback (less common now)\n\n**Learning Priority:**\n1. Master Figma first (covers 80% of needs)\n2. Learn research tools as you advance\n3. Pick up specialized tools based on job requirements\n4. Stay curious about new tools but don't chase every trend"
        },
        {
          question: "Do I need to learn coding as a UX designer?",
          answer: "Coding isn't required for UX designers, but technical knowledge is increasingly valuable:\n\n**Benefits of Learning Code:**\n• Better communication with developers\n• Understanding technical constraints and feasibility\n• Ability to create functional prototypes\n• More competitive in the job market\n• Can contribute to design systems and documentation\n\n**What to Learn (Priority Order):**\n1. **HTML/CSS basics**: Structure and styling fundamentals\n2. **JavaScript basics**: Interactions and dynamic content\n3. **React/Vue basics**: Modern frontend frameworks\n4. **Design tokens**: CSS custom properties, theming\n5. **APIs**: Understanding data and backend integration\n\n**When Coding Helps Most:**\n• Working on design systems\n• Prototyping complex interactions\n• Collaborating closely with frontend developers\n• Working at tech companies\n• Transitioning to product design roles\n\n**Alternative Approach:**\n• Focus on understanding technical concepts without coding\n• Learn to read code and understand architecture\n• Use no-code tools for prototyping\n• Partner closely with developers\n\n**Bottom Line:**\n• Not required but increasingly valuable\n• Start with HTML/CSS basics\n• Focus on UX skills first, coding second\n• Consider your career goals and work environment"
        },
        {
          question: "How important is it to learn design systems?",
          answer: "Design systems are extremely important in modern UX design:\n\n**Why Design Systems Matter:**\n• **Consistency**: Unified user experience across products\n• **Efficiency**: Faster design and development process\n• **Scalability**: Support for growing product teams\n• **Collaboration**: Common language between design and development\n• **Quality**: Reduced errors and improved accessibility\n\n**Career Impact:**\n• **High demand**: Most companies are building or improving systems\n• **Senior skills**: Systems thinking required for advancement\n• **Specialization opportunity**: Design systems roles are growing\n• **Cross-functional value**: Bridges design, development, and product\n\n**What to Learn:**\n• **Atomic design principles**: Components, patterns, templates\n• **Design tokens**: Colors, typography, spacing systems\n• **Component libraries**: Figma variants, documentation\n• **Governance**: Guidelines, contribution processes\n• **Technical understanding**: How systems work in code\n\n**Learning Path:**\n1. Start with personal component libraries in Figma\n2. Study existing design systems (Material, Human Interface Guidelines)\n3. Practice creating and documenting components\n4. Learn about design tokens and automation\n5. Understand development implementation\n\n**When to Focus on Systems:**\n• After mastering basic UX/UI skills (Level 3-4 in roadmap)\n• When working on products with multiple interfaces\n• If interested in senior or specialized roles\n• When collaborating closely with development teams"
        }
      ]
    },
    {
      title: "Specializations & Growth",
      icon: <Award className="text-orange-500" size={20} />,
      questions: [
        {
          question: "Should I specialize in UX research or stay generalist?",
          answer: "The choice between specialization and generalist depends on your interests and career goals:\n\n**UX Research Specialist Benefits:**\n• **Deep expertise**: Become the go-to research authority\n• **High demand**: Companies need dedicated researchers\n• **Better compensation**: Specialists often earn more\n• **Clear career path**: Research operations, principal researcher roles\n• **Intellectual stimulation**: Focus on methodology and insights\n\n**Generalist UX Designer Benefits:**\n• **Versatility**: Handle end-to-end design process\n• **More opportunities**: Broader job market\n• **Entrepreneurial**: Better for freelancing or startups\n• **Product understanding**: See full product lifecycle\n• **Creative variety**: Mix of research, design, and strategy\n\n**Market Reality:**\n• **Large companies**: Prefer specialists (Google, Facebook, Netflix)\n• **Startups/SMBs**: Need generalists who can wear multiple hats\n• **Career progression**: Often requires some specialization eventually\n• **Geographic factors**: Major cities have more specialist roles\n\n**Decision Framework:**\n• What energizes you most in UX work?\n• Do you prefer depth or breadth?\n• What's the job market like in your area?\n• What are your long-term career goals?\n\n**Recommended Path:**\n1. Start as generalist to understand the field\n2. Identify your strongest interests and skills\n3. Gradually specialize while maintaining broad competency\n4. Reassess every few years as you grow"
        },
        {
          question: "What's the career progression for UX designers?",
          answer: "UX career progression varies by company, but common paths include:\n\n**Individual Contributor (IC) Track:**\n• **Junior UX Designer** (0-2 years): Learning fundamentals, executing designs\n• **UX Designer** (2-4 years): Independent project ownership\n• **Senior UX Designer** (4-6 years): Complex projects, mentoring juniors\n• **Staff/Principal Designer** (6+ years): Strategic leadership, system design\n• **Distinguished Designer** (8+ years): Industry expertise, thought leadership\n\n**Management Track:**\n• **Design Manager** (4-6 years): Team leadership, hiring, strategy\n• **Senior Design Manager** (6-8 years): Multiple teams, organizational impact\n• **Design Director** (8+ years): Department leadership, executive collaboration\n• **VP of Design/Chief Design Officer** (10+ years): Company-wide design leadership\n\n**Specialized Paths:**\n• **UX Research**: Researcher → Senior Researcher → Research Manager → Research Director\n• **Design Systems**: Systems Designer → Principal Systems Designer → Design Systems Lead\n• **Product Design**: Product Designer → Senior Product Designer → Design Partner\n\n**Factors Affecting Progression:**\n• Company size and structure\n• Industry and market conditions\n• Individual performance and skills\n• Leadership and communication abilities\n• Specialization and expertise depth\n\n**Progression Tips:**\n• Build both design and soft skills\n• Seek mentorship and feedback\n• Take on leadership opportunities\n• Develop business acumen\n• Stay current with industry trends"
        },
        {
          question: "How do I stay current with UX trends and best practices?",
          answer: "Staying current in UX requires consistent learning and community engagement:\n\n**Daily Learning Sources:**\n• **Newsletters**: UX Design Weekly, Nielsen Norman Group, UX Planet\n• **Podcasts**: Design Better, What is Wrong with UX, User Defenders\n• **Social Media**: Follow UX leaders on Twitter, LinkedIn, Instagram\n• **Blogs**: Medium publications, company design blogs, personal blogs\n\n**Weekly Deep Dives:**\n• **Case studies**: Read detailed project breakdowns\n• **Design systems**: Study how major companies approach systems\n• **Research papers**: Academic and industry research\n• **Tool updates**: Stay current with Figma, Adobe, and new tool features\n\n**Monthly Activities:**\n• **Meetups**: Local UX groups and design communities\n• **Webinars**: Company talks, conference presentations\n• **Courses**: Short courses on new methods or tools\n• **Portfolio updates**: Apply new learnings to personal projects\n\n**Annual Investments:**\n• **Conferences**: UX Week, Interaction, Config, Design+Research\n• **Workshops**: Intensive learning on specialized topics\n• **Books**: Read 6-12 UX books per year\n• **Certifications**: Nielsen Norman Group, Google UX certificates\n\n**Community Engagement:**\n• Join Designer Hangout Slack\n• Participate in design challenges\n• Share your work and get feedback\n• Mentor newer designers\n• Contribute to open source projects\n\n**Curate Your Learning:**\n• Focus on 2-3 main sources to avoid information overload\n• Set aside dedicated time for learning\n• Apply new learnings immediately\n• Share insights with others to reinforce learning"
        }
      ]
    },
    {
      title: "Industry & Future",
      icon: <Globe className="text-indigo-500" size={20} />,
      questions: [
        {
          question: "How is AI affecting the UX design field?",
          answer: "AI is significantly impacting UX design, creating both opportunities and challenges:\n\n**AI Tools Enhancing UX Work:**\n• **Design assistance**: Figma AI, Adobe Sensei for layout and content\n• **Content generation**: AI for copywriting, image generation, prototyping\n• **Research automation**: AI-powered user interview analysis, survey insights\n• **Accessibility**: Automated accessibility testing and recommendations\n• **Personalization**: AI-driven user experience customization\n\n**Skills Becoming More Important:**\n• **Strategic thinking**: Understanding business goals and user needs\n• **Human empathy**: What AI cannot replicate\n• **AI collaboration**: Knowing how to work with AI tools effectively\n• **Ethical design**: Ensuring AI recommendations align with user values\n• **Critical evaluation**: Assessing AI-generated solutions\n\n**New Opportunities:**\n• **AI UX specialist**: Designing AI-powered experiences\n• **Prompt engineering**: Crafting effective AI interactions\n• **AI ethics**: Ensuring responsible AI implementation\n• **Conversational design**: Voice and chat interfaces\n• **Data visualization**: Making AI insights accessible\n\n**Preparing for AI Future:**\n• Learn to use AI tools as design assistants\n• Focus on uniquely human skills (empathy, creativity, strategy)\n• Understand AI capabilities and limitations\n• Stay curious about emerging AI applications\n• Develop comfort with rapid change and continuous learning\n\n**Reality Check:**\n• AI augments designers rather than replacing them\n• Human judgment and creativity remain essential\n• Complex problem-solving still requires human insight\n• Client relationships and stakeholder management are irreplaceable"
        },
        {
          question: "Is UX design a stable long-term career choice?",
          answer: "UX design offers good long-term stability with some important considerations:\n\n**Positive Indicators:**\n• **Growing demand**: Digital transformation continues across industries\n• **Essential function**: User-centered design is now business critical\n• **Diverse applications**: UX needed in healthcare, finance, education, IoT\n• **Evolution capacity**: Field adapts to new technologies and platforms\n• **Economic resilience**: Good design becomes more important during downturns\n\n**Market Realities:**\n• **Competitive entry**: Popular field with many newcomers\n• **Economic sensitivity**: Some UX roles cut during recessions\n• **Skill evolution**: Continuous learning required to stay relevant\n• **Geographic variation**: Stronger in tech hubs, growing in other markets\n• **Company maturity**: Established companies value UX more than early startups\n\n**Long-term Opportunities:**\n• **Leadership roles**: Management and strategic positions\n• **Specialization**: Research, systems, accessibility expertise\n• **Consulting**: Independent practice and agency work\n• **Adjacent fields**: Product management, design operations, research ops\n• **Education**: Teaching and mentoring next generation\n\n**Success Factors:**\n• **Continuous learning**: Stay current with trends and tools\n• **Business acumen**: Understand impact on company goals\n• **Soft skills**: Communication, collaboration, leadership\n• **Adaptability**: Embrace new technologies and methods\n• **Network building**: Strong professional relationships\n\n**Bottom Line:**\n• Stable for skilled, adaptable practitioners\n• Requires ongoing professional development\n• Multiple career paths and specializations\n• Strong fundamentals in human psychology and design thinking remain valuable\n• Consider geographic and industry factors in your market"
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="text-purple-600 mr-2" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
        </div>
        <p className="text-gray-600 text-lg">
          Common questions about the UX Design Development Roadmap and career journey
        </p>
      </div>

      {faqCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <div className="flex items-center mb-4 pb-2 border-b border-gray-200">
            {category.icon}
            <h2 className="text-xl font-semibold text-gray-900 ml-2">{category.title}</h2>
          </div>

          <div className="space-y-3">
            {category.questions.map((item, itemIndex) => {
              const globalIndex = `${categoryIndex}-${itemIndex}`;
              const isOpen = openItems.has(globalIndex);

              return (
                <div key={itemIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(globalIndex)}
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                  >
                    <span className="text-gray-900 font-medium pr-4">{item.question}</span>
                    {isOpen ? (
                      <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <HelpCircle className="text-purple-600 mr-2" size={24} />
          Still have questions?
        </h2>
        <p className="text-gray-700 mb-4">
          If you couldn't find the answer you were looking for, here are some additional resources:
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-purple-600 mb-2">🌐 Communities</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Designer Hangout Slack</li>
              <li>• UX Mastery Community</li>
              <li>• Local IxDA chapters</li>
              <li>• Reddit r/userexperience</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-600 mb-2">📚 Learning Resources</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Nielsen Norman Group</li>
              <li>• Interaction Design Foundation</li>
              <li>• UX Planet on Medium</li>
              <li>• CareerFoundry Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;