import { LayoutDashboardIcon, LucideIcon, Newspaper, PlusCircle, User } from "lucide-react";
import Addfeaturednews from "../../admin/adminoptions/Addfeaturednews";
import Addnews from "../../admin/adminoptions/Addnews";
import Dashboard from "../../admin/adminoptions/Dashboard";
import Listusers from "../../admin/adminoptions/Listusers";

export interface adminoptions {
  id: number;
  page: React.ReactNode;
  alt: string;
}


export const adminpages = [
  { id: 1, page: <Addfeaturednews/>, alt: "Add featuredNews" },
  { id: 2, page: <Addnews/>, alt: "Add News" },
  { id: 3, page: <Dashboard/>, alt: "Dashboard" },
  { id: 4, page: <Listusers/>, alt: "ListUsers" },
];



export type adminoption = "Dashboard" | "Add News" | "Add featuredNews" | "ListUsers";



interface adminpanel {
  id: number;
  options: adminoption;
  styling: React.ReactNode;
  icon: LucideIcon;
}

export const styling =
  "px-2 py-4 rounded-md hover:text-white hover:bg-[#32048f] ";

export const options: adminpanel[] = [
  { id: 1, options: "Dashboard", styling: styling , icon: LayoutDashboardIcon },
  { id: 2, options: "ListUsers", styling: styling,icon: User },
  { id: 3, options: "Add featuredNews", styling: styling,icon:Newspaper },
  { id: 4, options: "Add News", styling: styling, icon:PlusCircle },
];
