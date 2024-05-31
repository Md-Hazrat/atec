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
      <div className="container rounded-lg shadow-md dark:border">
        <p className="flex flex-row-reverse mt-4">{icon}</p>
        <div className="pb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{price}</p>
          <p className="text-sm text-green-500">{description}</p>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
