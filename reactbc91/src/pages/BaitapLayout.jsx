import React from "react";
import BaitapHeader from "../components/BaitapHeader";
import BaitapNavigation from "../components/BaitapNavigation";
import BaitapAlbum from "../components/BaitapAlbum";
import BaitapFooter from "../components/BaitapFooter";

const BaitapLayout = () => {
  return (
    <>
      <BaitapHeader />
      <div className="gap-0">
        <main>
          <div className="m-0 p-0">
            <BaitapNavigation />
          </div>
          <div className="m-0 p-0">
            <BaitapAlbum />
          </div>
        </main>
        <BaitapFooter />
      </div>
    </>
  );
};

export default BaitapLayout