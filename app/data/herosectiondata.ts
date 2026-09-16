import {
  BookCheck,
  Earth,
  GraduationCap,
  Trees,
  LucideIcon,
} from "lucide-react";

export interface HeroFeature {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export interface HeroButton {
  id: number;
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface HeroSectionData {
  affiliation: {
    text: string;
    icon: LucideIcon;
  };

  heading: {
    firstLine: string;
    secondLine: string;
    highlightedText: string;
  };

  description: {
    firstLine: string;
    secondLine: string;
  };

  features: HeroFeature[];

  buttons: HeroButton[];

  image: {
    src: string;
    alt: string;
  };
}

export const heroSectionData: HeroSectionData = {
  affiliation: {
    text: "Affiliated to Tribhuvan University",
    icon: GraduationCap,
  },

  heading: {
    firstLine: "EMPOWERING FUTURES,",
    secondLine: "INSPIRING",
    highlightedText: "EXCELLENCE",
  },

  description: {
    firstLine: "Empowering students through quality education,",
    secondLine:
      "innovation, discipline, and opportunities for lifelong success.",
  },

  features: [
    {
      id: 1,
      title: "Quality",
      subtitle: "Education",
      icon: GraduationCap,
    },
    {
      id: 2,
      title: "Experienced",
      subtitle: "Faculty",
      icon: Earth,
    },
    {
      id: 3,
      title: "Practical",
      subtitle: "Learning",
      icon: BookCheck,
    },
    {
      id: 4,
      title: "Holistic",
      subtitle: "Development",
      icon: Trees,
    },
  ],

  buttons: [
    {
      id: 1,
      label: "Explore Programs",
      href: "/admission",
      variant: "primary",
    },
    {
      id: 2,
      label: "Learn More",
      href: "/admission",
      variant: "secondary",
    },
  ],

  image: {
    src: "/sujan sir.png",
    alt: "Students",
  },
};