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
    <div className="container rounded-lg shadow-md dark:border p-4">
     <div className="flex justify-between"> 
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2">{icon}</p>
        </div>
      <div className="">
        <p className="text-2xl font-bold">{price}</p>
        <p className="text-sm text-green-500">{description}</p>
      </div>
      </div>
    </>
  );
};

export default DashboardCard;
