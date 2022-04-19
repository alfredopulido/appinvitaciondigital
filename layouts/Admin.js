import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import { useRouter } from 'next/router'

const Admin = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        { (router.pathname=='/admin/dashboard') ?
          <HeaderStats />
          :
          <div className="relative bg-blueGray-800 md:pt-16 pb-32 pt-12"></div>
        }
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

export default Admin;