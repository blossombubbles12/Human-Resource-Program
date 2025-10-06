import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetailHero from "@/components/ProgramDetail/ProgramDetailHero";
import ProgramDetailOverview from "@/components/ProgramDetail/ProgramDetailOverview";
import ProgramDetailCurriculum from "@/components/ProgramDetail/ProgramDetailCurriculum";
import ProgramDetailInstructors from "@/components/ProgramDetail/ProgramDetailInstructors";
import ProgramDetailTestimonials from "@/components/ProgramDetail/ProgramDetailTestimonials";
import ProgramDetailPricing from "@/components/ProgramDetail/ProgramDetailPricing";
import ProgramDetailFAQ from "@/components/ProgramDetail/ProgramDetailFAQ";
import ProgramDetailCTA from "@/components/ProgramDetail/ProgramDetailCTA";

// Program data - in a real app this would come from a database or CMS
const programsData = {
  "hr-analytics-certificate": {
    id: "hr-analytics-certificate",
    title: "HR Analytics & People Data Certificate",
    subtitle: "Master data-driven HR decision making with Python, predictive modeling, and advanced analytics",
    type: "Certificate Program",
    duration: "6 months",
    level: "Intermediate",
    format: "100% Online",
    price: 2499,
    originalPrice: 3499,
    rating: 4.9,
    students: 2850,
    nextStart: "November 15, 2025",
    category: "certification",
    badge: "Most Popular",
    color: "from-blue-500 to-cyan-500",
    overview: {
      description: "Transform your HR career with our comprehensive HR Analytics Certificate program. Learn to harness the power of data to make strategic workforce decisions, predict trends, and drive organizational success through evidence-based HR practices.",
      highlights: [
        "Learn Python programming for HR applications",
        "Master predictive modeling and statistical analysis",
        "Build interactive dashboards and visualizations",
        "Develop workforce planning and forecasting skills",
        "Create data-driven recruitment strategies",
        "Understand HR metrics and KPI development"
      ],
      outcomes: [
        "Analyze workforce data to identify trends and patterns",
        "Build predictive models for turnover and performance",
        "Create compelling data visualizations for executives",
        "Develop strategic workforce plans based on analytics",
        "Implement data-driven talent acquisition processes",
        "Design and track meaningful HR metrics"
      ]
    },
    curriculum: {
      modules: [
        {
          title: "Foundations of HR Analytics",
          duration: "3 weeks",
          lessons: [
            "Introduction to HR Analytics and Business Intelligence",
            "HR Data Sources and Quality Management",
            "Statistical Foundations for HR Professionals",
            "Excel for HR Analytics"
          ]
        },
        {
          title: "Python Programming for HR",
          duration: "4 weeks",
          lessons: [
            "Python Fundamentals and Environment Setup",
            "Data Manipulation with Pandas",
            "Data Visualization with Matplotlib and Seaborn",
            "Working with HR Databases and APIs"
          ]
        },
        {
          title: "Statistical Analysis and Modeling",
          duration: "4 weeks",
          lessons: [
            "Descriptive and Inferential Statistics",
            "Correlation and Regression Analysis",
            "Predictive Modeling Techniques",
            "A/B Testing for HR Initiatives"
          ]
        },
        {
          title: "Workforce Analytics Applications",
          duration: "4 weeks",
          lessons: [
            "Employee Turnover Prediction Models",
            "Performance Analytics and Talent Identification",
            "Compensation Analysis and Pay Equity",
            "Recruitment Analytics and Sourcing Optimization"
          ]
        },
        {
          title: "Dashboard Development",
          duration: "3 weeks",
          lessons: [
            "Business Intelligence Tools (Tableau/Power BI)",
            "Creating Executive HR Dashboards",
            "Real-time Reporting and Automation",
            "Data Storytelling for HR Leaders"
          ]
        },
        {
          title: "Capstone Project",
          duration: "4 weeks",
          lessons: [
            "Project Planning and Data Collection",
            "Analysis and Model Development",
            "Dashboard Creation and Testing",
            "Final Presentation and Peer Review"
          ]
        }
      ]
    },
    instructors: [
      {
        name: "Dr. Sarah Chen",
        title: "Lead Instructor",
        credentials: "PhD in Industrial Psychology, Former Director of People Analytics at Google",
        bio: "Dr. Chen has over 15 years of experience in people analytics and has led data science teams at major tech companies. She's published extensively on predictive HR modeling and workforce optimization.",
        expertise: ["Predictive Modeling", "Python Programming", "Workforce Planning"],
        image: "/images/instructors/sarah-chen.jpg"
      },
      {
        name: "Michael Rodriguez",
        title: "Technical Instructor",
        credentials: "MS in Data Science, Senior People Analytics Manager at Microsoft",
        bio: "Michael specializes in translating complex HR data into actionable business insights. He's an expert in Python, SQL, and modern BI tools with a focus on HR applications.",
        expertise: ["Data Visualization", "SQL", "Business Intelligence"],
        image: "/images/instructors/michael-rodriguez.jpg"
      }
    ],
    testimonials: [
      {
        name: "Jennifer Walsh",
        role: "Senior HR Analyst",
        company: "Salesforce",
        quote: "This program completely transformed how I approach HR challenges. The Python skills I learned allowed me to automate reports that used to take days and now take hours.",
        results: "Reduced reporting time by 75% and identified key retention factors",
        image: "/images/testimonials/jennifer-walsh.jpg"
      },
      {
        name: "David Kim",
        role: "Director of People Operations",
        company: "Spotify",
        quote: "The predictive modeling techniques helped us reduce turnover by 30% in our engineering teams. The ROI on this program was immediate and substantial.",
        results: "30% reduction in engineering turnover, $2M cost savings",
        image: "/images/testimonials/david-kim.jpg"
      }
    ],
    pricing: {
      standard: {
        price: 2499,
        originalPrice: 3499,
        savings: 1000,
        features: [
          "24 weeks of online instruction",
          "Live weekly sessions with instructors",
          "Access to Python programming environment",
          "Real HR datasets for practice",
          "Capstone project mentorship",
          "Certificate of completion",
          "6 months post-graduation support"
        ]
      },
      premium: {
        price: 3499,
        originalPrice: 4499,
        savings: 1000,
        features: [
          "Everything in Standard plan",
          "1-on-1 mentoring sessions",
          "Priority career placement assistance",
          "Access to exclusive alumni network",
          "Advanced project portfolio review",
          "LinkedIn profile optimization",
          "Interview preparation sessions"
        ]
      }
    },
    faq: [
      {
        question: "Do I need programming experience to enroll?",
        answer: "No prior programming experience is required. We start with Python fundamentals and build up gradually. However, basic Excel skills and familiarity with data concepts are helpful."
      },
      {
        question: "What software will I need?",
        answer: "All necessary software is provided through our online learning platform. You'll get access to Python environments, datasets, and collaboration tools. A computer with internet access is all you need."
      },
      {
        question: "How much time should I dedicate per week?",
        answer: "We recommend 8-10 hours per week, including live sessions, self-paced learning, and project work. The program is designed for working professionals with flexible scheduling."
      },
      {
        question: "Will this help me get a promotion or new job?",
        answer: "Our alumni report an 85% career advancement rate within 12 months. HR analytics skills are in high demand, and this certification demonstrates your commitment to data-driven HR practices."
      }
    ]
  },
  "strategic-hr-diploma": {
    id: "strategic-hr-diploma",
    title: "Strategic Human Resources Management Diploma",
    subtitle: "Develop advanced HR leadership skills to drive organizational transformation and strategic business outcomes",
    type: "Diploma Program",
    duration: "12 months",
    level: "Advanced",
    format: "Hybrid Learning",
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    students: 1750,
    nextStart: "January 8, 2026",
    category: "diploma",
    badge: "Executive Track",
    color: "from-purple-500 to-pink-500",
    overview: {
      description: "Elevate your HR career to the strategic level with our comprehensive diploma program. Learn to align HR initiatives with business strategy, lead organizational change, and develop high-performing teams in today's dynamic business environment.",
      highlights: [
        "Strategic HR planning and execution",
        "Change management and organizational development",
        "Leadership development and succession planning",
        "Global HR practices and cultural intelligence",
        "Employee engagement and performance optimization",
        "HR technology and digital transformation"
      ],
      outcomes: [
        "Design and implement strategic HR initiatives",
        "Lead organizational change and transformation projects",
        "Develop comprehensive talent management strategies",
        "Build and manage high-performing HR teams",
        "Create data-driven business cases for HR investments",
        "Navigate complex global HR challenges"
      ]
    },
    // Additional curriculum, instructors, etc. would be defined here
    curriculum: {
      modules: [
        {
          title: "Strategic HR Foundations",
          duration: "4 weeks",
          lessons: [
            "HR Strategy and Business Alignment",
            "Organizational Design and Structure",
            "HR Metrics and Analytics for Strategy",
            "Stakeholder Management and Influence"
          ]
        },
        {
          title: "Talent Management Excellence",
          duration: "6 weeks",
          lessons: [
            "Talent Acquisition Strategy",
            "Performance Management Systems",
            "Leadership Development Programs",
            "Succession Planning and Career Pathing"
          ]
        }
        // More modules would be added
      ]
    },
    instructors: [
      {
        name: "Prof. Michael Torres",
        title: "Program Director",
        credentials: "PhD in Organizational Psychology, Former VP of HR at Fortune 500 companies",
        bio: "Professor Torres has led HR transformations at multiple global organizations and is recognized as a thought leader in strategic HR management.",
        expertise: ["Strategic Planning", "Change Management", "Leadership Development"],
        image: "/images/instructors/michael-torres.jpg"
      }
    ],
    testimonials: [
      {
        name: "Lisa Chen",
        role: "VP of Human Resources",
        company: "Adobe",
        quote: "This program gave me the strategic framework to completely transform our HR function. We went from reactive to proactive, and the business impact has been tremendous.",
        results: "Led company-wide HR transformation, 40% improvement in employee engagement",
        image: "/images/testimonials/lisa-chen.jpg"
      }
    ],
    pricing: {
      standard: {
        price: 4999,
        originalPrice: 6999,
        savings: 2000,
        features: [
          "12 months of comprehensive instruction",
          "Monthly in-person workshops",
          "Executive coaching sessions",
          "Global case study projects",
          "Diploma certificate",
          "Alumni network access"
        ]
      }
    },
    faq: [
      {
        question: "What's the difference between this and the certificate programs?",
        answer: "This diploma program is more comprehensive and strategic in nature, designed for HR professionals with 5+ years of experience who want to move into senior leadership roles."
      }
    ]
  },
  "diversity-inclusion-certificate": {
    id: "diversity-inclusion-certificate",
    title: "Diversity, Equity & Inclusion Certificate",
    subtitle: "Build inclusive workplaces and drive organizational culture change",
    category: "Certificate Program",
    duration: "4 months",
    level: "Beginner",
    format: "100% Online",
    price: 2299,
    originalPrice: 2999,
    rating: 4.7,
    totalRatings: 623,
    students: 3200,
    language: "English",
    certificate: true,
    cpdPoints: 20,
    badge: "Hot Topic",
    heroImage: "/images/programs/dei-hero.jpg",
    shortDescription: "Develop expertise in creating inclusive workplaces through evidence-based DEI strategies and practical implementation frameworks.",
    highlights: [
      "Unconscious Bias Training",
      "Inclusive Leadership",
      "DEI Metrics & Analytics",
      "Cultural Competency Framework",
      "Policy Development",
      "Change Management for Inclusion"
    ],
    skills: [
      "Inclusive Leadership",
      "Cultural Intelligence",
      "DEI Strategy Development",
      "Bias Mitigation",
      "Data-Driven DEI",
      "Change Management"
    ],
    overview: {
      description: "Transform your organization's culture and drive meaningful change with our comprehensive Diversity, Equity & Inclusion Certificate. This program equips you with the knowledge, tools, and frameworks needed to create truly inclusive workplaces that drive innovation and business results.",
      whatYoullLearn: [
        "Design and implement comprehensive DEI strategies",
        "Identify and mitigate unconscious bias in all HR processes",
        "Create inclusive leadership development programs",
        "Measure and analyze DEI progress with meaningful metrics",
        "Build cultural competency across diverse teams",
        "Navigate difficult conversations about diversity and inclusion"
      ],
      careerOutcomes: [
        "DEI Program Manager",
        "Chief Diversity Officer",
        "Inclusion Consultant",
        "Organizational Development Specialist",
        "Culture & Engagement Manager",
        "Training & Development Manager"
      ]
    },
    curriculum: {
      totalModules: 8,
      totalLessons: 24,
      practicalProjects: 6,
      modules: [
        {
          number: 1,
          title: "Foundations of Diversity, Equity & Inclusion",
          duration: "2 weeks",
          description: "Understanding the business case for DEI and foundational concepts",
          lessons: [
            "The Business Case for DEI",
            "Understanding Privilege and Power Dynamics",
            "Historical Context and Systemic Barriers",
            "Legal Frameworks and Compliance"
          ]
        },
        {
          number: 2,
          title: "Unconscious Bias and Inclusive Decision Making",
          duration: "2 weeks",
          description: "Identifying and mitigating bias in organizational processes",
          lessons: [
            "Types of Unconscious Bias",
            "Bias in Recruitment and Selection",
            "Performance Evaluation Bias",
            "Inclusive Decision-Making Frameworks"
          ]
        },
        {
          number: 3,
          title: "Inclusive Leadership Development",
          duration: "2 weeks",
          description: "Building leadership capabilities for inclusive cultures",
          lessons: [
            "Characteristics of Inclusive Leaders",
            "Psychological Safety and Trust",
            "Leading Diverse Teams",
            "Difficult Conversations and Conflict Resolution"
          ]
        },
        {
          number: 4,
          title: "DEI Metrics and Data Analytics",
          duration: "2 weeks",
          description: "Measuring progress and impact of DEI initiatives",
          lessons: [
            "Key DEI Metrics and KPIs",
            "Data Collection and Analysis",
            "Reporting and Storytelling with Data",
            "Continuous Improvement Strategies"
          ]
        }
      ]
    },
    instructors: [
      {
        name: "Dr. Aisha Patel",
        title: "Program Director",
        credentials: "PhD in Social Psychology, Certified DEI Practitioner",
        bio: "Dr. Patel is a renowned expert in diversity and inclusion with over 15 years of experience helping organizations build inclusive cultures.",
        expertise: ["Unconscious Bias", "Inclusive Leadership", "Cultural Intelligence"],
        image: "/images/instructors/aisha-patel.jpg"
      }
    ],
    testimonials: [
      {
        name: "Marcus Johnson",
        role: "Head of Diversity & Inclusion",
        company: "Microsoft",
        quote: "This program gave me the practical tools and confidence to lead meaningful change in our organization. The framework is actionable and results-driven.",
        results: "Increased representation in leadership by 35%, improved inclusion scores by 40%",
        image: "/images/testimonials/marcus-johnson.jpg"
      }
    ],
    pricing: {
      standard: {
        price: 2299,
        originalPrice: 2999,
        savings: 700,
        features: [
          "4 months of comprehensive instruction",
          "Interactive workshops and simulations",
          "DEI assessment tools and templates",
          "Real-world case studies",
          "Professional certificate",
          "Ongoing community access"
        ]
      }
    },
    faq: [
      {
        question: "Is this program suitable for beginners?",
        answer: "Yes, this program is designed for professionals at all levels who want to develop expertise in diversity, equity, and inclusion. No prior DEI experience is required."
      },
      {
        question: "Will I learn how to measure DEI progress?",
        answer: "Absolutely. A significant portion of the program focuses on DEI metrics, data collection, and analysis to help you demonstrate the impact of your initiatives."
      }
    ]
  }
  // Additional programs would be added here
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = programsData[params.slug as keyof typeof programsData];
  
  if (!program) {
    return {
      title: "Program Not Found",
    };
  }

  return {
    title: `${program.title} - GIHCR`,
    description: program.subtitle,
    keywords: `${program.type}, ${program.title}, HR education, professional development, GIHCR`,
  };
}

export async function generateStaticParams() {
  return Object.keys(programsData).map((slug) => ({
    slug,
  }));
}

export default function ProgramDetailPage({ params }: Props) {
  const program = programsData[params.slug as keyof typeof programsData];

  if (!program) {
    notFound();
  }

  return (
    <main>
      <ProgramDetailHero program={program} />
      <ProgramDetailOverview program={program} />
      <ProgramDetailCurriculum program={program} />
      <ProgramDetailInstructors program={program} />
      <ProgramDetailTestimonials program={program} />
      <ProgramDetailPricing program={program} />
      <ProgramDetailFAQ program={program} />
      <ProgramDetailCTA program={program} />
    </main>
  );
}