import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BusinessIcon from "@mui/icons-material/Business";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


export default function DashboardLayout() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);


  const handleClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >


      {/* Sidebar */}

      <aside
        style={{
          width: "250px",
          background: "#1E293B",
          color: "white",
          padding: "20px",
        }}
      >

        <h2>
          ReviewIQ AI
        </h2>


        <hr />


        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >


          <NavLink to="/" style={linkStyle}>
            <DashboardIcon />
            Dashboard
          </NavLink>


          <NavLink to="/upload" style={linkStyle}>
            <UploadFileIcon />
            Upload Reviews
          </NavLink>


          <NavLink to="/aspects" style={linkStyle}>
            <AnalyticsIcon />
            Aspect Analysis
          </NavLink>


          <NavLink to="/branches" style={linkStyle}>
            <BusinessIcon />
            Branches
          </NavLink>


          <NavLink to="/trends" style={linkStyle}>
            <ShowChartIcon />
            Trend Analysis
          </NavLink>


          <NavLink
            to="/recommendations"
            style={linkStyle}
          >
            <LightbulbIcon />
            Recommendations
          </NavLink>


          <NavLink
            to="/settings"
            style={linkStyle}
          >
            <SettingsIcon />
            Settings
          </NavLink>


        </nav>

      </aside>




      {/* Main Content */}

      <div
        style={{
          flex: 1,
        }}
      >


        {/* Navbar */}

        <header
          style={{
            height: "70px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            fontWeight: "bold",
            background: "white",
          }}
        >


          <span>
            Customer Review Intelligence Platform
          </span>



          {/* Admin Menu */}

          <div>

            <IconButton onClick={handleClick}>

              <AccountCircleIcon />


              <span
                style={{
                  marginLeft: "5px",
                  fontSize: "15px",
                }}
              >
                Admin
              </span>


            </IconButton>



            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >


              <MenuItem
                onClick={() => {
                  navigate("/profile");
                  handleClose();
                }}
              >
                Profile
              </MenuItem>



              <MenuItem
                onClick={() => {
                  navigate("/settings");
                  handleClose();
                }}
              >
                Settings
              </MenuItem>



              <MenuItem
                onClick={() => {
                  handleClose();
                  alert("Logged out");
                }}
              >
                Logout
              </MenuItem>


            </Menu>


          </div>


        </header>





        {/* Page Content */}

        <main
          style={{
            padding: "20px",
            background: "#f8fafc",
            minHeight: "calc(100vh - 70px)",
          }}
        >

          <Outlet />

        </main>


      </div>


    </div>
  );
}




const linkStyle = (
  { isActive }: { isActive: boolean }
) => ({

  color: "white",

  textDecoration: "none",

  display: "flex",

  alignItems: "center",

  gap: "10px",

  padding: "12px",

  borderRadius: "8px",

  fontSize: "15px",

  backgroundColor:
    isActive ? "#334155" : "transparent",

  fontWeight:
    isActive ? "bold" : "normal",

});