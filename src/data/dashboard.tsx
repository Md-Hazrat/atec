import { DashboardType } from "@/types";
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'

export const dashboard: DashboardType[] = [
  {
    title: "Total Revenue",
    price: "$45,231.89",
    description: "+20.1% from last month",
    icon:  <FaceIcon className="h-10 w-10 text-green-500"/>,
  },

  {
    title: "Subscriptions",
    price: "+2350",
    description: "+180.1% from last month",
    icon: <SunIcon className="h-10 w-10 text-green-500"/>
  },

  {
    title: "Sales",
    price: " +12,234",
    description: "+19% from last month",
    icon: <ImageIcon className="h-10 w-10 text-green-500"/>
  },

  {
    title: "Active Now",
    price: "+573",
    description: "+201 since last hour",
    icon: <FaceIcon className="h-10 w-10 text-green-500" />,
  },
];
