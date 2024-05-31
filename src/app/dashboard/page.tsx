import React from "react";
import DashboardCard from "@/components/shared/dashboard-card";
import { dashboard } from "@/data/dashboard";
import { DashboardType } from "@/types";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";

export function DashboardPage() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-wrap">
        {dashboard?.map((item: DashboardType, index: any) => (
          <div key={index} className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 p-2">
            <DashboardCard
              title={item.title}
              price={item.price}
              description={item.description}
              icon={item.icon}
            />
          </div>
        ))}
      </div>

      <div className="md:flex lg:flex gap-4">
        <div className="w-full shadow-2xl mt-3">
          <Overview />
        </div>
        <div className="w-full shadow-2xl mt-3">
          <RecentSales />
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;
