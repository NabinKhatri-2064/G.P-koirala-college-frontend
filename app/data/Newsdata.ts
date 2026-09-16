interface news {
id:number;
category: string;
title:string;
description: string;
image: string;
date: string;
}

export const News:news[] = [
  {
    id: 1,
    category: "Achievement",
    title: "Our Students Shine at the National Level",
    description:
      "Our talented students have achieved remarkable results in a national-level competition, bringing pride and recognition to the college.",
    image: "/achievements.webp",
    date: "September 8, 2026",
  },
  {
    id: 2,
    category: "Sports",
    title: "Annual Sports Week 2026 Begins with Great Enthusiasm",
    description:
      "The college has officially kicked off its Annual Sports Week with students participating in a variety of exciting sporting events and competitions.",
    image: "/sports-week.jpg",
    date: "September 5, 2026",
  },
  {
    id: 3,
    category: "Technology",
    title: "Students Explore the Future of Technology",
    description:
      "A technology workshop introduced students to emerging technologies and provided valuable hands-on learning experiences.",
    image: "/workshop.webp",
    date: "September 2, 2026",
  },
  {
    id: 4,
    category: "Academic",
    title: "New Academic Session Begins Successfully",
    description:
      "The new academic session has officially begun, welcoming students back to campus for another year of learning and growth.",
    image: "/academic-session.jpg",
    date: "August 28, 2026",
  },
  {
    id: 5,
    category: "Event",
    title: "College Welcomes New Students with Orientation Program",
    description:
      "A special orientation program was organized to welcome new students and introduce them to the college environment and academic journey.",
    image: "/orientation.jpg",
    date: "August 25, 2026",
  },
  {
    id: 6,
    category: "Community",
    title: "Students Take Part in Community Service Initiative",
    description:
      "Students participated in a community service initiative focused on teamwork, social responsibility, and making a positive impact.",
    image: "/community.jpg",
    date: "August 20, 2026",
  },
  {
    id: 7,
    category: "Announcement",
    title: "College Announces New Student Development Programs",
    description:
      "The college has introduced new development programs designed to help students strengthen their academic, professional, and personal skills.",
    image: "/competition.avif",
    date: "August 16, 2026",
  },
  {
    id: 8,
    category: "Campus Life",
    title: "New Facilities Added to Improve Campus Experience",
    description:
      "New facilities and improvements have been introduced across campus to provide students with a better environment for learning and collaboration.",
    image: "/library.jpg",
    date: "August 12, 2026",
  },
];