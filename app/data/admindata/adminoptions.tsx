import {
  LayoutDashboardIcon,
  LucideIcon,
  Newspaper,
  PlusCircle,
  User,
} from "lucide-react";

import Addfeaturednews from "@/app/admin/adminoptions/Addfeaturednews/Addfeaturednews";
import Addnews from "@/app/admin/adminoptions/Addnews/Addnews";
import Dashboard from "@/app/admin/adminoptions/Dashboard/Dashboard";
import Enquiry from "@/app/admin/adminoptions/Enquiry/Enquiry";

export interface adminoptions {
  id: number;
  page: React.ReactNode;
  alt: string;
}

export const adminpages = [
  { id: 1, page: <Addfeaturednews />, alt: "Add featuredNews" },
  { id: 2, page: <Addnews />, alt: "Add News" },
  { id: 3, page: <Dashboard />, alt: "Dashboard" },
  { id: 4, page: <Enquiry />, alt: "Enquiry" },
];

export type adminoption =
  | "Dashboard"
  | "Add News"
  | "Add featuredNews"
  | "Enquiry";

interface adminpanel {
  id: number;
  options: adminoption;
  styling: React.ReactNode;
  icon: LucideIcon;
}

export const styling =
  "px-2 py-4 rounded-md hover:text-white hover:bg-[#32048f] ";

export const options: adminpanel[] = [
  { id: 1, options: "Dashboard", styling: styling, icon: LayoutDashboardIcon },
  { id: 2, options: "Enquiry", styling: styling, icon: User },
  { id: 3, options: "Add featuredNews", styling: styling, icon: Newspaper },
  { id: 4, options: "Add News", styling: styling, icon: PlusCircle },
];
