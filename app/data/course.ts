export interface program{
id:number;
title:string;
category:string;
description:string;
image:string
}


export const bachelorPrograms: program[] = [
  {
    id: 1,
    title: "Bachelor of Business Studies",
    category: "Management",
    description:
      "Develop strong foundations in business, management, finance, marketing, and entrepreneurship.",
    image: "/bbs.png",
  },
  {
    id: 2,
    title: "Bachelor of Arts in Social Work",
    category: "Social Work",
    description:
      "Build professional knowledge and practical skills for social welfare, community development, and social services.",
    image: "/Basw.webp",
  },
  {
    id: 3,
    title: "Bachelor of Computer Applications",
    category: "Computer Science",
    description:
      "Gain practical knowledge in programming, software development, databases, networking, and modern computing.",
    image: "/bca.jpg",
  },
  {
    id: 4,
    title: "Bachelor of Arts",
    category: "Humanities",
    description:
      "Explore humanities, social sciences, culture, communication, and critical thinking through interdisciplinary learning.",
    image: "/ba.webp",
  },
  {
    id: 5,
    title: "Bachelor of Education",
    category: "Education",
    description:
      "Develop the knowledge and skills required for teaching, educational practice, and academic development.",
    image: "/bed.png",
  },
];


export const masterPrograms:program[] = [
  {
    id: 1,
    title: "Master of Business Studies",
    category: "Management",
    description:
      "Advance your expertise in business management, finance, marketing, leadership, and strategic decision-making.",
    image: "/mbs.jpg",
  },
  {
    id: 2,
    title: "Master of Education",
    category: "Education",
    description:
      "Develop advanced knowledge in education, teaching methodologies, educational leadership, and research.",
    image: "/med.jpg",
  },
];