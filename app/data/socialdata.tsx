import { ClipboardClock, LucideLocationEdit, Mail, Phone } from "lucide-react";

export type applicationfields=
 | "name"
  |"mobilenumber"
  |"email"
  |"interestedin"


export interface inputfield {
  id: number;
  name:applicationfields;
  label: string;
  placeholder: string;
  type: string;
}

export interface urldefining {
  id: number;
  url: string;
}

export interface card {
  id: number;
  icons: React.ReactNode;
  name: string;
  description: string;
  additionaldescription?: string;
}

export const urls: urldefining[] = [
  { id: 1, url: "https://facebook.com" },
  { id: 2, url: "https://whatsapp.com" },
  { id: 3, url: "https://viber.com" },
  { id: 4, url: "https://youtube.com" },
];

export const cards: card[] = [
  {
    id: 1,
    icons: <LucideLocationEdit className="text-current" />,
    name: "College Address",
    description: "G.P Koirala Memorial College",
    additionaldescription: "Sifal,Kathmandu",
  },
  {
    id: 2,
    icons: <Phone className="text-current" />,
    name: "Call us",
    description: "+977 9828224543",
  },
  {
    id: 3,
    icons: <Mail className="text-current" />,
    name: "College Mail",
    description: "nabin.7038212@gpkmc.edu.np",
  },
  {
    id: 4,
    icons: <ClipboardClock className="text-current" />,
    name: "Office Hours",
    description: "Sunday-Friday",
    additionaldescription: "6:00AM - 8:00PM",
  },
];

export const inputfields: inputfield[] = [
  { id: 1,name:"name", label: "Name", placeholder: "eg.Nabin Khatri" ,type:"text"},
  { id: 2,name:"mobilenumber", label: "Mobile number", placeholder: "eg.9828224543" ,type:"text"},
  { id: 3,name:"email", label: "Email", placeholder: "eg.nabin.7038212@gpkmc.edu.np" ,type:"email"},
  { id: 4,name:"interestedin", label: "Intrested In", placeholder: "eg.BCA" ,type:"text"},
];
