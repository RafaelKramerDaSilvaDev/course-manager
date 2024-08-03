import { ComponentType } from "react";

export type Routes = {
  name: string;
  link?: string;
  icon: string;
  page?: ComponentType;
  children?: {
    name: string;
    link?: string;
    icon: string;
    page: ComponentType;
  }[];
}[];
