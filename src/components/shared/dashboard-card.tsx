import React from "react";
import { FaceIcon } from "@radix-ui/react-icons";

type DashboardCardProps = {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
};

const DashboardCard = ({
  icon,
  title,
  price,
  description,
}: DashboardCardProps) => {
  return (
    <>
      <div className="p-2 m-2 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{price}</p>
        <p className="text-sm text-green-500">{description}</p>
        <h1 className="flex items-end flex-row-reverse">{icon}</h1>
      </div>
    </>
  );
};

export default DashboardCard;
