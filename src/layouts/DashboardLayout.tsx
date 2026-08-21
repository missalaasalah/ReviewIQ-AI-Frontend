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
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const drawerWidth = 260;

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
          "linear-gradient(180deg, #172033 0%, #1E293B 55%, #24344D 100%)",
        color: "#fff",
      }}
    >
      {/* Brand */}
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
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)",
              boxShadow: "0 8px 20px rgba(25, 118, 210, 0.35)",
            }}
          >
            <AutoGraphIcon
              sx={{
                color: "#fff",
                fontSize: 25,
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 19,
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.3px",
              }}
            >
              ReviewIQ
            </Typography>

            <Typography
              sx={{
                fontSize: 11,
                color: "#94A3B8",
                fontWeight: 600,
                mt: 0.3,
                letterSpacing: 1,
              }}
            >
              AI INSIGHTS
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider
        sx={{
          borderColor: "rgba(255,255,255,0.08)",
        }}
      />

      {/* Navigation */}
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
            color: "#64748B",
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
                minHeight: 48,
                borderRadius: 2.5,
                px: 1.5,
                color: "#CBD5E1",
                transition: "all 0.2s ease",

                "& .MuiListItemIcon-root": {
                  minWidth: 40,
                  color: "#94A3B8",
                  transition: "color 0.2s ease",
                },

                "& .MuiListItemText-primary": {
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                },

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.07)",
                  color: "#fff",
                  transform: "translateX(3px)",

                  "& .MuiListItemIcon-root": {
                    color: "#60A5FA",
                  },
                },

                "&.active": {
                  background:
                    "linear-gradient(90deg, rgba(37,99,235,0.95), rgba(25,118,210,0.75))",
                  color: "#fff",
                  boxShadow:
                    "0 8px 20px rgba(25,118,210,0.25)",

                  "& .MuiListItemIcon-root": {
                    color: "#fff",
                  },

                  "& .MuiListItemText-primary": {
                    fontWeight: 700,
                  },

                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(37,99,235,1), rgba(25,118,210,0.85))",
                  },
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>

              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Sidebar Footer */}
      <Box
        sx={{
          px: 2,
          py: 2,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Box
          sx={{
            p: 1.5,
            borderRadius: 2.5,
            backgroundColor: "rgba(255,255,255,0.05)",
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 700,
              color: "#E2E8F0",
            }}
          >
            Review Intelligence
          </Typography>

          <Typography
            sx={{
              fontSize: 11,
              color: "#64748B",
              mt: 0.5,
            }}
          >
            Turn customer feedback into insights.
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
        backgroundColor: "#F5F7FB",
      }}
    >
      {/* Mobile Menu Button */}
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
            color: "#fff",
            backgroundColor: "#1E293B",
            boxShadow: 3,

            "&:hover": {
              backgroundColor: "#334155",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar */}
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
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              border: "none",
              boxShadow: "4px 0 20px rgba(15,23,42,0.08)",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main Area */}
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid #E2E8F0",
            color: "#0F172A",
          }}
        >
          <Toolbar
            sx={{
              minHeight: "72px !important",
              px: {
                xs: 2,
                sm: 3,
                md: 4,
              },
            }}
          >
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
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Customer Review Intelligence
              </Typography>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#64748B",
                  mt: 0.3,
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                Analyze feedback. Discover insights. Improve performance.
              </Typography>
            </Box>

            {/* Admin */}
            <Box>
              <IconButton
                onClick={handleClick}
                sx={{
                  px: 1,
                  borderRadius: 2.5,
                  color: "#334155",

                  "&:hover": {
                    backgroundColor: "#F1F5F9",
                  },
                }}
              >
                <AccountCircleIcon
                  sx={{
                    fontSize: 32,
                    color: "#64748B",
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
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    Admin
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#94A3B8",
                      lineHeight: 1.2,
                    }}
                  >
                    Administrator
                  </Typography>
                </Box>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  paper: {
                    elevation: 6,
                    sx: {
                      mt: 1,
                      minWidth: 170,
                      borderRadius: 2.5,
                      border: "1px solid #E2E8F0",
                    },
                  },
                }}
              >
                <MenuItem
                  onClick={() => handleNavigation("/profile")}
                  sx={{
                    py: 1.2,
                    borderRadius: 1,
                    mx: 0.5,
                  }}
                >
                  Profile
                </MenuItem>

                <MenuItem
                  onClick={() => handleNavigation("/settings")}
                  sx={{
                    py: 1.2,
                    borderRadius: 1,
                    mx: 0.5,
                  }}
                >
                  Settings
                </MenuItem>

                <Divider sx={{ my: 0.5 }} />

                <MenuItem
                  onClick={() => {
                    handleClose();
                    alert("Logged out");
                  }}
                  sx={{
                    py: 1.2,
                    borderRadius: 1,
                    mx: 0.5,
                    color: "#DC2626",
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: {
              xs: 2,
              sm: 3,
              md: 4,
            },
            backgroundColor: "#F5F7FB",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}