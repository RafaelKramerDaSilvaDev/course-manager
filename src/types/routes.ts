export type Routes = {
  name: string;
  path: string;
  icon: string;
  children?: {
    name: string;
    path: string;
    icon: string;
  }[];
}[];
