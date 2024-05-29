export interface NavItemFooter {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

// types.ts (Type Definition)
export interface UserData {
  cadetNo: string;
  confirmPassword: string;
  email: string;
}

// types.ts
export interface UserData {
  cadetNo: string;
  confirmPassword: string;
}

export interface FrequentlyAskedQuestion {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  title: string;
  body: string;
  name: string;
  role: string;
  avatar: string;
}

export interface EventType {
  id: string;
  title: string;
  date: Date;
  time: string;
  description: string;
  location: string;
  image: string;
}
// types.ts
export interface ExecutiveType {
  id: string;
  name: string;
  position: string;
  ccr: string;
  session: string;
  image: string;
}

export interface GalleryType {
  title: string;
  image: string;
}

export interface ImageType {
  title: string;
  image: string;
}

export interface SessionData {
  userId?: string;
  username?: string;
  email?: string;
  image?: string;
  isLoggedIn: boolean;
}

export interface SideNavItem {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
}

export type SideNavItemGroup = {
  title: string;
  menuList: SideNavItem[];
};

export interface EventContactType {
  name: string;
  designation: string;
  phone: 0;
  img: string;
};

export interface DashboardType {
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
}