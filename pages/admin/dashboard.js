import React from "react";

// components
import CardPageVisits from "components/Cards/CardPageVisits.js";


// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
