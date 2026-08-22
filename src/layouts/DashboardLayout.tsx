import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
  Button,
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

type Language = "en" | "ar";

const translations = {
  en: {
    workspace: "Workspace",

    dashboard: "Dashboard",
    upload: "Upload Reviews",
    aspects: "Aspect Analysis",
    branches: "Branches",
    trends: "Trend Analysis",
    recommendations: "Recommendations",
    settings: "Settings",

    projectName: "Smart Customer",
    projectName2: "Feedback Analytics",

    intelligence: "Smart Feedback Intelligence",
    intelligenceText:
      "Turn customer feedback into actionable insights.",

    headerTitle: "Smart Customer Feedback Analytics",
    headerSubtitle:
      "Analyze feedback. Discover insights. Improve performance.",

    admin: "Admin",
    administrator: "Administrator",

    profile: "Profile",
    logout: "Logout",

    language: "العربية",
  },

  ar: {
    workspace: "مساحة العمل",

    dashboard: "لوحة التحكم",
    upload: "رفع التقييمات",
    aspects: "تحليل الجوانب",
    branches: "الفروع",
    trends: "تحليل الاتجاهات",
    recommendations: "التوصيات",
    settings: "الإعدادات",

    projectName: "تحليلات",
    projectName2: "ملاحظات العملاء الذكية",

    intelligence: "ذكاء ملاحظات العملاء",
    intelligenceText:
      "حوّل ملاحظات العملاء إلى رؤى قابلة للتنفيذ.",

    headerTitle: "تحليلات ملاحظات العملاء الذكية",
    headerSubtitle:
      "حلّل آراء العملاء. اكتشف الرؤى. حسّن الأداء.",

    admin: "المسؤول",
    administrator: "مدير النظام",

    profile: "الملف الشخصي",
    logout: "تسجيل الخروج",

    language: "English",
  },
};

export default function DashboardLayout() {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [language, setLanguage] =
    useState<Language>(() => {
      const savedLanguage =
        localStorage.getItem("reviewiq-language");

      return savedLanguage === "ar" ? "ar" : "en";
    });

  const navigate = useNavigate();

  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const open = Boolean(anchorEl);

  const t = translations[language];

  const isArabic = language === "ar";

  /*
  =========================================================
  LANGUAGE SWITCH
  =========================================================
  */

  const handleLanguageChange = () => {
    const newLanguage: Language =
      language === "en" ? "ar" : "en";

    setLanguage(newLanguage);

    localStorage.setItem(
      "reviewiq-language",
      newLanguage
    );

    document.documentElement.lang = newLanguage;

    document.documentElement.dir =
      newLanguage === "ar" ? "rtl" : "ltr";

    document.body.dir =
      newLanguage === "ar" ? "rtl" : "ltr";

    /*
      Notify the rest of the application.
      Other pages can listen for this event later.
    */
    window.dispatchEvent(
      new CustomEvent("reviewiq-language-change", {
        detail: newLanguage,
      })
    );
  };

  /*
  =========================================================
  INITIAL LANGUAGE
  =========================================================
  */

  useEffect(() => {
    document.documentElement.lang = language;

    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";

    document.body.dir =
      language === "ar" ? "rtl" : "ltr";
  }, [language]);

  /*
  =========================================================
  ADMIN MENU
  =========================================================
  */

  const handleClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
  };

  /*
  =========================================================
  MOBILE DRAWER
  =========================================================
  */

  const handleDrawerToggle = () => {
    setMobileOpen((previous) => !previous);
  };

  /*
  =========================================================
  NAVIGATION ITEMS
  =========================================================
  */

  const navigationItems = [
    {
      label: t.dashboard,
      path: "/",
      icon: <DashboardIcon />,
    },
    {
      label: t.upload,
      path: "/upload",
      icon: <UploadFileIcon />,
    },
    {
      label: t.aspects,
      path: "/aspects",
      icon: <AnalyticsIcon />,
    },
    {
      label: t.branches,
      path: "/branches",
      icon: <BusinessIcon />,
    },
    {
      label: t.trends,
      path: "/trends",
      icon: <ShowChartIcon />,
    },
    {
      label: t.recommendations,
      path: "/recommendations",
      icon: <LightbulbIcon />,
    },
    {
      label: t.settings,
      path: "/settings",
      icon: <SettingsIcon />,
    },
  ];

  /*
  =========================================================
  DRAWER CONTENT
  =========================================================
  */

  const drawerContent = (
    <Box
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        height: "100%",

        display: "flex",
        flexDirection: "column",

        background:
          "linear-gradient(180deg, #17130B 0%, #211B0D 50%, #2A2415 100%)",

        color: "#FFFFFF",
      }}
    >
      {/* =====================================================
          BRAND
      ===================================================== */}

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
          {/* LOGO */}

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

              border:
                "1px solid rgba(218,174,58,0.35)",

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

          {/* PROJECT NAME */}

          <Box
            sx={{
              minWidth: 0,
              textAlign: isArabic
                ? "right"
                : "left",
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
              {t.projectName}
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
              {t.projectName2}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider
        sx={{
          borderColor:
            "rgba(218,174,58,0.16)",
        }}
      />

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

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

            textAlign: isArabic
              ? "right"
              : "left",
          }}
        >
          {t.workspace}
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

                  textAlign: isArabic
                    ? "right"
                    : "left",
                },

                /* HOVER */

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

                /* ACTIVE */

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

      {/* =====================================================
          SIDEBAR FOOTER
      ===================================================== */}

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

              textAlign: isArabic
                ? "right"
                : "left",
            }}
          >
            {t.intelligence}
          </Typography>

          <Typography
            sx={{
              fontSize: 11,

              color: "#A99C7A",

              mt: 0.5,

              lineHeight: 1.5,

              textAlign: isArabic
                ? "right"
                : "left",
            }}
          >
            {t.intelligenceText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  /*
  =========================================================
  RETURN
  =========================================================
  */

  return (
    <Box
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        display: "flex",

        minHeight: "100vh",

        background:
          "linear-gradient(135deg, #F8F3E7 0%, #F5EBD2 100%)",
      }}
    >
      {/* =====================================================
          MOBILE MENU BUTTON
      ===================================================== */}

      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",

            top: 12,

            /*
              Keep the menu button on the correct side
            */

            [isArabic ? "right" : "left"]: 12,

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

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

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

      {/* =====================================================
          MAIN AREA
      ===================================================== */}

      <Box
        sx={{
          flexGrow: 1,

          minWidth: 0,

          display: "flex",

          flexDirection: "column",
        }}
      >
        {/* ===================================================
            HEADER
        =================================================== */}

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

              gap: 2,
            }}
          >
            {/* HEADER TITLE */}

            <Box
              sx={{
                flexGrow: 1,

                /*
                  Space for mobile menu
                */

                [isArabic
                  ? "mr"
                  : "ml"]: {
                  xs: 6,
                  md: 0,
                },

                textAlign: isArabic
                  ? "right"
                  : "left",
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
                {t.headerTitle}
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
                {t.headerSubtitle}
              </Typography>
            </Box>

            {/* =================================================
                LANGUAGE BUTTON
            ================================================= */}

            <Button
              onClick={handleLanguageChange}
              variant="outlined"
              size="small"
              sx={{
                minWidth: 82,

                height: 38,

                borderRadius: 2.5,

                border:
                  "1px solid rgba(201,162,39,0.45)",

                color: "#8B6D16",

                backgroundColor:
                  "rgba(201,162,39,0.05)",

                fontSize: 12,

                fontWeight: 800,

                textTransform: "none",

                "&:hover": {
                  borderColor:
                    "#C9A227",

                  backgroundColor:
                    "rgba(201,162,39,0.12)",
                },
              }}
            >
              {t.language}
            </Button>

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
                    ml: isArabic ? 0 : 1,

                    mr: isArabic ? 1 : 0,

                    display: {
                      xs: "none",
                      sm: "block",
                    },

                    textAlign: isArabic
                      ? "right"
                      : "left",
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
                    {t.admin}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,

                      color: "#81755D",

                      lineHeight: 1.2,
                    }}
                  >
                    {t.administrator}
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

                    textAlign: isArabic
                      ? "right"
                      : "left",

                    "&:hover": {
                      backgroundColor:
                        "rgba(201,162,39,0.10)",
                    },
                  }}
                >
                  {t.profile}
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

                    textAlign: isArabic
                      ? "right"
                      : "left",

                    "&:hover": {
                      backgroundColor:
                        "rgba(201,162,39,0.10)",
                    },
                  }}
                >
                  {t.settings}
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

                    alert(
                      isArabic
                        ? "تم تسجيل الخروج"
                        : "Logged out"
                    );
                  }}
                  sx={{
                    py: 1.2,

                    borderRadius: 1,

                    mx: 0.5,

                    color: "#B94A48",

                    textAlign: isArabic
                      ? "right"
                      : "left",

                    "&:hover": {
                      backgroundColor:
                        "rgba(185,74,72,0.08)",
                    },
                  }}
                >
                  {t.logout}
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* ===================================================
            PAGE CONTENT
        =================================================== */}

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