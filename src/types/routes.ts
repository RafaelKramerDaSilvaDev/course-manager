import { ComponentType } from "react";

export type Routes = {
  name: string;
  path?: string;
  icon: string;
  page?: ComponentType;
  children?: {
    name: string;
    path?: string;
    icon: string;
    page: ComponentType;
  }[];
}[];
