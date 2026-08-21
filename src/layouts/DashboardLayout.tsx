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
          "linear-gradient(180deg, #171717 0%, #202020 55%, #292929 100%)",
        color: "#FFFFFF",
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
          {/* ReviewIQ Logo */}
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, #C9A227 0%, #E5C87B 100%)",
              boxShadow: "0 8px 24px rgba(201, 162, 39, 0.28)",
            }}
          >
            <AutoGraphIcon
              sx={{
                color: "#171717",
                fontSize: 26,
              }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: 21,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              color: "#FFFDF8",
            }}
          >
            Review
            <Box
              component="span"
              sx={{
                color: "#D5B34A",
              }}
            >
              IQ
            </Box>
          </Typography>
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
            color: "#9A9282",
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
                color: "#C9C3B6",
                transition: "all 0.2s ease",

                "& .MuiListItemIcon-root": {
                  minWidth: 40,
                  color: "#918B7D",
                  transition: "all 0.2s ease",
                },

                "& .MuiListItemText-primary": {
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                },

                "&:hover": {
                  backgroundColor: "rgba(201,162,39,0.10)",
                  color: "#FFFDF8",
                  transform: "translateX(3px)",

                  "& .MuiListItemIcon-root": {
                    color: "#D5B34A",
                  },
                },

                "&.active": {
                  background:
                    "linear-gradient(90deg, rgba(201,162,39,0.96), rgba(229,200,123,0.78))",
                  color: "#171717",
                  boxShadow:
                    "0 8px 22px rgba(201,162,39,0.20)",

                  "& .MuiListItemIcon-root": {
                    color: "#171717",
                  },

                  "& .MuiListItemText-primary": {
                    fontWeight: 700,
                  },

                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #C9A227, #E5C87B)",
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
            background:
              "linear-gradient(135deg, rgba(201,162,39,0.10), rgba(255,255,255,0.03))",
            border: "1px solid rgba(201,162,39,0.14)",
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 700,
              color: "#E5C87B",
            }}
          >
            Review Intelligence
          </Typography>

          <Typography
            sx={{
              fontSize: 11,
              color: "#918B7D",
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
        backgroundColor: "#F5EFE0",
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
            color: "#171717",
            background:
              "linear-gradient(135deg, #C9A227, #E5C87B)",
            boxShadow: 3,

            "&:hover": {
              background:
                "linear-gradient(135deg, #B89420, #D9B968)",
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
              boxShadow:
                "4px 0 24px rgba(23,23,23,0.14)",
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
            backgroundColor: "rgba(255,253,248,0.94)",
            backdropFilter: "blur(12px)",
            borderBottom:
              "1px solid rgba(201,162,39,0.18)",
            color: "#242424",
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
                  color: "#242424",
                }}
              >
                Customer Review Intelligence
              </Typography>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#786F60",
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
                  color: "#403B33",

                  "&:hover": {
                    backgroundColor: "rgba(201,162,39,0.10)",
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
                      fontWeight: 700,
                      lineHeight: 1.2,
                      color: "#242424",
                    }}
                  >
                    Admin
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#786F60",
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
                      border:
                        "1px solid rgba(201,162,39,0.20)",
                      backgroundColor: "#FFFDF8",
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
                    color: "#B94A48",
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
            backgroundColor: "#F5EFE0",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}