import {
  Calendar,
  FileText,
  ListCheck,
  ListChecks,
  LucideIcon,
  PenBox,
} from "lucide-react";
import { useState } from "react";

export interface news {
  category: string;
  title: string;
  description: string;
  date: string;
}

export const useformdata = () => {
  const [formdata, setFormData] = useState<news>({
    category: "",
    title: "",
    description: "",
    date: "",
  });

  return {formdata,setFormData}
};

export interface datatype {
  label: string;
  name: keyof news;
  type: string;
  icon: LucideIcon;
  placeholder: string;
}

export const datatypes: datatype[] = [
  {
    label: "category",
    name: "category",
    type: "text",
    icon: ListChecks,
    placeholder: "e.g Achievement, Sports",
  },
  {
    label: "title",
    name: "title",
    type: "text",
    icon: PenBox,
    placeholder: "Enter title of the news",
  },
  {
    label: "description",
    name: "description",
    type: "text",
    icon: FileText,
    placeholder: "Enter brief description of the News",
  },
  {
    label: "date",
    name: "date",
    type: "text",
    icon: Calendar,
    placeholder: "e.g September 20, 2028",
  },
];
