import {
  GraduationCap,
  Building2,
  Users,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

interface whychooseus {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyChooseUs: whychooseus[] = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description: "Learn from experienced faculty and industry experts.",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description: "Well-equipped classrooms, library and digital resources.",
  },
  {
    icon: Users,
    title: "Supportive Environment",
    description: "A friendly community that helps you grow.",
  },
  {
    icon: TrendingUp,
    title: "Better Opportunities",
    description: "Access to internships, placements and career guidance.",
  },
  {
    icon: Lightbulb,
    title: "Holistic Development",
    description: "Build your skills, confidence and leadership abilities.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Legacy",
    description: "Years of excellence in education and service.",
  },
];
