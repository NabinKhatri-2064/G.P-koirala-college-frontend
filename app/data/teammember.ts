export interface TeamMember {
    id:number;
    starting:string;
    Firstparagraph:string;
    Secondparagraph:string;
    membername:string;
    position:string;
    picture:string;
}


export const teammembers: TeamMember[] = [
  {
    id: 1,
    starting: "Dear Students, Parents, and Well-wishers,",
    Firstparagraph:
      "Welcome to G.P. Koirala Memorial College. Established to honor the legacy of the late national leader Girija Prasad Koirala, this institution stands as a premier community college dedicated to providing high-quality, research-driven higher education at affordable fees. We believe that financial constraints should never stand in the way of academic excellence and a bright future",

    Secondparagraph:
      "Our college is committed to nurturing the next generation of leaders, innovators, and responsible citizens. We offer a diverse range of programs designed to equip students with the knowledge, skills, and values necessary to thrive in an ever-changing global landscape. Our faculty members are not only experts in their respective fields but also passionate educators who are dedicated to fostering a supportive and engaging learning environment.",

    membername: "Er. Dhurba Thapa",
    position: "Chairman",
    picture: "/chairman.jpg",
  },
  {
    id: 2,
    starting: "Greetings to All,",
    Firstparagraph:
      "It is with great pride and honor that I serve as Patron of G.P. Koirala Memorial College. This institution carries forward the visionary ideals of our beloved national leader, creating a space where students from all backgrounds can access world-class education without financial barriers. We firmly believe in the transformative power of education and its ability to uplift communities and strengthen our nation.",

    Secondparagraph:
      "Our institution thrives on the principles of excellence, integrity, and inclusive growth. We are committed to building bridges between tradition and modernity, ensuring that our students are grounded in cultural values while equipped with contemporary skills. I encourage all students to embrace this unique opportunity to become architects of positive change in society.",

    membername: "Sujata Koirala",
    position: "Patron",
    picture: "/patron.jpg",
  },
  {
    id: 3,
    starting: "Dear Academic Community,",
    Firstparagraph:
      "As Principal of G.P. Koirala Memorial College, I am dedicated to fostering an environment of academic rigor, innovation, and holistic development. Our curriculum is carefully designed to balance theoretical knowledge with practical applications, ensuring that graduates are not only well-informed but also industry-ready. We believe in empowering students to think critically, question assumptions, and contribute meaningfully to society.",

    Secondparagraph:
      "The success of our institution lies in the collaborative efforts of our experienced faculty, engaged students, and supportive parents. We continuously strive to enhance our teaching methodologies, upgrade our facilities, and create opportunities for research and experiential learning. ",

    membername: "Shiva Parsad Adhikari",
    position: "Principal",
    picture: "/principalsir.jpg",
  },
];