export interface Project {
  name: string;
  description: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
}

export const selected_works: Project[] = [
  {
    name: "WorkLink",
    description:
      "Developed a responsive services marketplace platform for Sri Lanka, enabling users to discover and connect with skilled and semi-skilled service providers.",
    technologies: [
      "TypeScript",
      "React 18",
      "Tailwind CSS",
      "Radix UI",
      "Lucide React",
      "React Hook Form",
      "Vercel AI SDK",
      "Prisma",
      "Neon",
    ],
    links: {
      live: "https://work-link-website.vercel.app/",
      github: "https://github.com/Muhfees/WorkLink-Website",
    },
  },
  {
    name: "Next Flow",
    description:
      "A workflow automation platform inspired by n8n, featuring a visual node-based workflow builder, asynchronous task execution, AI integrations, and persistent workflow state.",
    technologies: [
      "React",
      "React Flow",
      "Zustand",
      "Trigger.dev",
      "Gemini API",
      "Transloadit",
      "Neon",
      "PostgreSQL",
      "Prisma",
    ],
    links: {
      live: "https://next-flow-automation.vercel.app/",
      github: "https://github.com/Muhfees/next-flow",
    },
  },
  {
    name: "Student ML Pipeline",
    description:
      "Developed an end-to-end machine learning pipeline covering data ingestion, data validation, preprocessing, model training, and evaluation using Python and Scikit-learn.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "CodeLlama",
      "Tree-sitter",
      "RAG",
    ],
    links: {
      github: "https://github.com/Muhfees/student-ml-pipeline",
    },
  },
  {
    name: "Inventory Management System",
    description:
      "A Inventory Management System for a hardware store.",
    technologies: ["Next.js", "TypeScript", "Convex", "BlockNote"],
    links: {
      github: "https://github.com/Muhfees/inventory-management-system"
    },
  },
];

export const works: Project[] = [
  {
    name: "VidyaMarg",
    description:
      "A full-stack AI-powered learning path generator that creates personalized, structured learning roadmaps with graph-based topic relationships and an interactive visual learning experience.",
    technologies: [
      "Next.js",
      "FastAPI",
      "LLaMA 3.1 70B",
      "Groq",
      "NetworkX",
      "React Flow",
      "Supabase",
    ],
    links: {},
  },

  {
    name: "Curely",
    description:
      "A real-time voice AI medical assistant that enables natural voice conversations through speech recognition, intelligent multi-model routing, and low-latency AI responses.",
    technologies: [
      "VAPI",
      "Whisper",
      "Gemini",
      "OpenRouter",
      "LLM",
      "Voice AI",
    ],
    links: {},
  },
  {
    name: "Orphia",
    description:
      "An AI-powered text-to-music generation platform that transforms natural language prompts into generated music using deep learning-based music generation models.",
    technologies: [
      "Next.js",
      "Python",
      "Meta MusicGen",
      "PyTorch",
      "Hugging Face",
    ],
    links: {},
  },
];
