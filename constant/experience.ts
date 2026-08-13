export interface ExperienceDate {
  dd: number;
  mm: string;
  yyyy: number;
}

export interface BaseExperience {
  role: string;
  startDate: ExperienceDate;
  description: string[];
  company: string;
  companySite: string;
  technologies: string[];
}

export type Experience =
  | (BaseExperience & {
    current: true;
    // endDate?: never;
  })
  | (BaseExperience & {
    current?: false;
    endDate: ExperienceDate;
  });

export const experience: Experience[] = [
  {
    role: "Freelance ",
    startDate: {
      dd: 1,
      mm: "May",
      yyyy: 2026,
    },
    current: true,
    description: [
      "Developed and integrated n8n-based automation workflows with REST APIs and a custom CMS while gaining practical experience in AI automation and API integration.",
      "Created an AI-assisted workflow to help generate and validate vendor assignments, reducing manual processing time by approximately 60–70%.",
      "Enhanced front-end UI components to surface the new workflow system, streamlining vendor-facing task flows.",
      "Managed CI/CD pipelines via Git and Jenkins, maintaining consistent deployments across environments.",
      "Collaborated remotely on software tasks while developing practical experience with software development, debugging, automation, and deployment workflows.",
    ],
    company: "Software Developer",
    companySite: "",
    technologies: ["n8n", "REST APIs", "Git", "Jenkins", "AI Automation", "CMS"],
  },
];

