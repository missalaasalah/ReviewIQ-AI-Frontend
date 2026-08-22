import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BusinessIcon from "@mui/icons-material/Business";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 270;

const navigationItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    label: "Upload Reviews",
    path: "/upload",
    icon: <UploadFileIcon />,
  },
  {
    label: "Aspect Analysis",
    path: "/aspects",
    icon: <AnalyticsIcon />,
  },
  {
    label: "Branches",
    path: "/branches",
    icon: <BusinessIcon />,
  },
  {
    label: "Trend Analysis",
    path: "/trends",
    icon: <ShowChartIcon />,
  },
  {
    label: "Recommendations",
    path: "/recommendations",
    icon: <LightbulbIcon />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];

export default function DashboardLayout() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
  };

  const handleDrawerToggle = () => {
    setMobileOpen((previous) => !previous);
  };

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",

        background:
          "linear-gradient(180deg, #17130B 0%, #211B0D 50%, #2A2415 100%)",

        color: "#FFFFFF",
      }}
    >
      {/* =========================================================
          BRAND
      ========================================================= */}

      <Box
        sx={{
          px: 2.5,
          py: 2.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {/* Logo */}

          <Box
            sx={{
              width: 54,
              height: 54,

              borderRadius: "15px",

              overflow: "hidden",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              backgroundColor: "#FFFFFF",

              border: "1px solid rgba(218,174,58,0.35)",

              boxShadow:
                "0 8px 24px rgba(218,174,58,0.25)",

              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Smart Customer Feedback Analytics"
              sx={{
                width: "100%",
                height: "100%",

                objectFit: "contain",

                display: "block",
              }}
            />
          </Box>

          {/* Project Name */}

          <Box
            sx={{
              minWidth: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 800,
                lineHeight: 1.2,

                color: "#F1CD68",

                letterSpacing: "-0.2px",
              }}
            >
              Smart Customer
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 600,
                lineHeight: 1.35,

                color: "#FFFFFF",

                mt: 0.3,
              }}
            >
              Feedback Analytics
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider
        sx={{
          borderColor: "rgba(218,174,58,0.16)",
        }}
      />

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <Box
        sx={{
          px: 1.5,
          py: 2,

          flex: 1,
        }}
      >
        <Typography
          sx={{
            px: 1.5,
            mb: 1,

            fontSize: 11,
            fontWeight: 700,

            color: "#A99B76",

            letterSpacing: 1.2,

            textTransform: "uppercase",
          }}
        >
          Workspace
        </Typography>

        <List
          disablePadding
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.7,
          }}
        >
          {navigationItems.map((item) => (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              onClick={() => {
                if (isMobile) {
                  setMobileOpen(false);
                }
              }}
              sx={{
                minHeight: 49,

                borderRadius: 2.5,

                px: 1.5,

                color: "#D3CBB8",

                transition:
                  "all 0.2s ease",

                "& .MuiListItemIcon-root": {
                  minWidth: 40,

                  color: "#A99C7A",

                  transition:
                    "all 0.2s ease",
                },

                "& .MuiListItemText-primary": {
                  fontSize: 14,

                  fontWeight: 500,

                  transition:
                    "all 0.2s ease",
                },

                /* =========================
                   HOVER
                ========================= */

                "&:hover": {
                  backgroundColor:
                    "rgba(218,174,58,0.10)",

                  color: "#FFF9E8",

                  transform:
                    "translateX(3px)",

                  "& .MuiListItemIcon-root": {
                    color: "#E5C76B",
                  },
                },

                /* =========================
                   ACTIVE
                ========================= */

                "&.active": {
                  background:
                    "linear-gradient(90deg, #C9A227 0%, #E5C76B 100%)",

                  color: "#17130B",

                  boxShadow:
                    "0 8px 24px rgba(201,162,39,0.25)",

                  "& .MuiListItemIcon-root": {
                    color: "#17130B",
                  },

                  "& .MuiListItemText-primary": {
                    fontWeight: 800,
                  },

                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #B88E19 0%, #E5C76B 100%)",
                  },
                },
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.label}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* =========================================================
          SIDEBAR FOOTER
      ========================================================= */}

      <Box
        sx={{
          px: 2,
          py: 2,

          borderTop:
            "1px solid rgba(218,174,58,0.12)",
        }}
      >
        <Box
          sx={{
            p: 1.5,

            borderRadius: 2.5,

            background:
              "linear-gradient(135deg, rgba(201,162,39,0.12), rgba(255,255,255,0.03))",

            border:
              "1px solid rgba(218,174,58,0.16)",
          }}
        >
          <Typography
            sx={{
              fontSize: 12,

              fontWeight: 800,

              color: "#E5C76B",
            }}
          >
            Smart Feedback Intelligence
          </Typography>

          <Typography
            sx={{
              fontSize: 11,

              color: "#A99C7A",

              mt: 0.5,

              lineHeight: 1.5,
            }}
          >
            Turn customer feedback into
            actionable insights.
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",

        minHeight: "100vh",

        background:
          "linear-gradient(135deg, #F8F3E7 0%, #F5EBD2 100%)",
      }}
    >
      {/* =========================================================
          MOBILE MENU BUTTON
      ========================================================= */}

      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",

            top: 12,
            left: 12,

            zIndex: 1400,

            width: 42,
            height: 42,

            color: "#17130B",

            background:
              "linear-gradient(135deg, #C9A227, #E5C76B)",

            boxShadow:
              "0 6px 18px rgba(201,162,39,0.30)",

            "&:hover": {
              background:
                "linear-gradient(135deg, #B88E19, #D9B85E)",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* =========================================================
          SIDEBAR
      ========================================================= */}

      <Box
        component="nav"
        sx={{
          width: {
            md: drawerWidth,
          },

          flexShrink: {
            md: 0,
          },
        }}
      >
        <Drawer
          variant={
            isMobile
              ? "temporary"
              : "permanent"
          }
          open={
            isMobile
              ? mobileOpen
              : true
          }
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,

              boxSizing: "border-box",

              border: "none",

              boxShadow:
                "5px 0 28px rgba(35,29,14,0.18)",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* =========================================================
          MAIN AREA
      ========================================================= */}

      <Box
        sx={{
          flexGrow: 1,

          minWidth: 0,

          display: "flex",

          flexDirection: "column",
        }}
      >
        {/* =======================================================
            HEADER
        ======================================================= */}

        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor:
              "rgba(255,252,245,0.94)",

            backdropFilter:
              "blur(12px)",

            borderBottom:
              "1px solid rgba(201,162,39,0.18)",

            color: "#242018",
          }}
        >
          <Toolbar
            sx={{
              minHeight:
                "72px !important",

              px: {
                xs: 2,
                sm: 3,
                md: 4,
              },
            }}
          >
            {/* Header Title */}

            <Box
              sx={{
                flexGrow: 1,

                ml: {
                  xs: 6,
                  md: 0,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 15,
                    sm: 17,
                  },

                  fontWeight: 800,

                  color: "#302A1C",
                }}
              >
                Smart Customer Feedback
                Analytics
              </Typography>

              <Typography
                sx={{
                  fontSize: 12,

                  color: "#81755D",

                  mt: 0.3,

                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                Analyze feedback. Discover
                insights. Improve performance.
              </Typography>
            </Box>

            {/* =================================================
                ADMIN
            ================================================= */}

            <Box>
              <IconButton
                onClick={handleClick}
                sx={{
                  px: 1,

                  borderRadius: 2.5,

                  color: "#403A2C",

                  "&:hover": {
                    backgroundColor:
                      "rgba(201,162,39,0.10)",
                  },
                }}
              >
                <AccountCircleIcon
                  sx={{
                    fontSize: 32,

                    color: "#B28D1E",
                  }}
                />

                <Box
                  sx={{
                    ml: 1,

                    display: {
                      xs: "none",
                      sm: "block",
                    },

                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,

                      fontWeight: 800,

                      lineHeight: 1.2,

                      color: "#302A1C",
                    }}
                  >
                    Admin
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,

                      color: "#81755D",

                      lineHeight: 1.2,
                    }}
                  >
                    Administrator
                  </Typography>
                </Box>
              </IconButton>

              {/* =================================================
                  ADMIN MENU
              ================================================= */}

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  paper: {
                    elevation: 6,

                    sx: {
                      mt: 1,

                      minWidth: 180,

                      borderRadius: 2.5,

                      border:
                        "1px solid rgba(201,162,39,0.22)",

                      backgroundColor:
                        "#FFFDF8",

                      boxShadow:
                        "0 12px 30px rgba(50,40,15,0.14)",
                    },
                  },
                }}
              >
                <MenuItem
                  onClick={() =>
                    handleNavigation(
                      "/profile"
                    )
                  }
                  sx={{
                    py: 1.2,

                    borderRadius: 1,

                    mx: 0.5,

                    "&:hover": {
                      backgroundColor:
                        "rgba(201,162,39,0.10)",
                    },
                  }}
                >
                  Profile
                </MenuItem>

                <MenuItem
                  onClick={() =>
                    handleNavigation(
                      "/settings"
                    )
                  }
                  sx={{
                    py: 1.2,

                    borderRadius: 1,

                    mx: 0.5,

                    "&:hover": {
                      backgroundColor:
                        "rgba(201,162,39,0.10)",
                    },
                  }}
                >
                  Settings
                </MenuItem>

                <Divider
                  sx={{
                    my: 0.5,

                    borderColor:
                      "rgba(201,162,39,0.15)",
                  }}
                />

                <MenuItem
                  onClick={() => {
                    handleClose();

                    alert("Logged out");
                  }}
                  sx={{
                    py: 1.2,

                    borderRadius: 1,

                    mx: 0.5,

                    color: "#B94A48",

                    "&:hover": {
                      backgroundColor:
                        "rgba(185,74,72,0.08)",
                    },
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* =======================================================
            PAGE CONTENT
        ======================================================= */}

        <Box
          component="main"
          sx={{
            flexGrow: 1,

            p: {
              xs: 2,
              sm: 3,
              md: 4,
            },

            background:
              "linear-gradient(135deg, #F8F3E7 0%, #F5EBD2 100%)",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}