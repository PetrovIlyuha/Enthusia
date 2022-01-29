import MarketHeader from "@components/ui/marketplace/MarketHeader";
import OrderCard from "@components/ui/order/Card";
import React from "react";

const ManageCourses = () => {
  return (
    <div className="fit-page-shell">
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="fit">
            <MarketHeader />
            <section className="grid grid-cols-1">
              <OrderCard />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
