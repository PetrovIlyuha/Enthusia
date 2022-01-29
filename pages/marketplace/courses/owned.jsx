import MarketHeader from "@components/ui/marketplace/MarketHeader";
import React from "react";

const OwnedProducts = () => {
  return (
    <div className="fit-page-shell">
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="fit">
            <MarketHeader />
            <section className="grid grid-cols-1">
              {[1, 2, 3].map((course) => (
                <div key={course}>{course}</div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnedProducts;
