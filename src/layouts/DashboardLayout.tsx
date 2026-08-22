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
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";

import { useLanguage } from "../i18n/LanguageContext";

const drawerWidth = 270;

export default function DashboardLayout() {
  const navigate = useNavigate();

  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  /*
   * ============================================================
   * LANGUAGE
   * ============================================================
   */

  const {
    language,
    toggleLanguage,
  } = useLanguage();

  const isArabic = language === "ar";

  /*
   * ============================================================
   * STATES
   * ============================================================
   */

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const menuOpen = Boolean(anchorEl);

  /*
   * ============================================================
   * LANGUAGE TEXT
   * ============================================================
   */

  const text = isArabic
    ? {
        brandTitle: "تحليلات ملاحظات العملاء الذكية",
        brandShort: "تحليلات",
        workspace: "مساحة العمل",

        dashboard: "لوحة التحكم",
        upload: "رفع التقييمات",
        aspects: "تحليل الجوانب",
        branches: "الفروع",
        trends: "تحليل الاتجاهات",
        recommendations: "التوصيات",
        settings: "الإعدادات",

        profile: "الملف الشخصي",
        admin: "المسؤول",
        administrator: "مدير النظام",

        english: "English",
        arabic: "العربية",

        switchToEnglish: "English",
        switchToArabic: "العربية",

        intelligenceTitle:
          "ذكاء ملاحظات العملاء",

        intelligenceDescription:
          "حوّل ملاحظات العملاء إلى رؤى قابلة للتنفيذ.",

        headerTitle:
          "تحليلات ملاحظات العملاء الذكية",

        headerSubtitle:
          "حلّل آراء العملاء، اكتشف الرؤى، حسّن الأداء.",

        logout: "تسجيل الخروج",

        profileSettings: "إعدادات الحساب",
      }
    : {
        brandTitle:
          "Smart Customer Feedback Analytics",

        brandShort: "Analytics",

        workspace: "WORKSPACE",

        dashboard: "Dashboard",
        upload: "Upload Reviews",
        aspects: "Aspect Analysis",
        branches: "Branches",
        trends: "Trend Analysis",
        recommendations: "Recommendations",
        settings: "Settings",

        profile: "Profile",
        admin: "Admin",
        administrator: "Administrator",

        english: "English",
        arabic: "العربية",

        switchToEnglish: "English",
        switchToArabic: "العربية",

        intelligenceTitle:
          "Smart Feedback Intelligence",

        intelligenceDescription:
          "Turn customer feedback into actionable insights.",

        headerTitle:
          "Smart Customer Feedback Analytics",

        headerSubtitle:
          "Analyze feedback. Discover insights. Improve performance.",

        logout: "Logout",

        profileSettings: "Account Settings",
      };

  /*
   * ============================================================
   * NAVIGATION
   * ============================================================
   */

  const navigationItems = [
    {
      label: text.dashboard,
      path: "/",
      icon: <DashboardIcon />,
    },
    {
      label: text.upload,
      path: "/upload",
      icon: <UploadFileIcon />,
    },
    {
      label: text.aspects,
      path: "/aspects",
      icon: <AnalyticsIcon />,
    },
    {
      label: text.branches,
      path: "/branches",
      icon: <BusinessIcon />,
    },
    {
      label: text.trends,
      path: "/trends",
      icon: <ShowChartIcon />,
    },
    {
      label: text.recommendations,
      path: "/recommendations",
      icon: <LightbulbIcon />,
    },
    {
      label: text.settings,
      path: "/settings",
      icon: <SettingsIcon />,
    },
  ];

  /*
   * ============================================================
   * ADMIN MENU
   * ============================================================
   */

  const handleAdminClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAdminClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleAdminClose();
  };

  /*
   * ============================================================
   * MOBILE DRAWER
   * ============================================================
   */

  const handleDrawerToggle = () => {
    setMobileOpen(
      (previous) => !previous
    );
  };

  /*
   * ============================================================
   * DRAWER
   * ============================================================
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
      {/* ======================================================
          BRAND
      ====================================================== */}

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

            flexDirection: "row",
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
              alt={text.brandTitle}
              sx={{
                width: "100%",
                height: "100%",

                objectFit: "contain",

                display: "block",
              }}
            />
          </Box>

          {/* BRAND NAME */}

          <Box
            sx={{
              minWidth: 0,

              textAlign:
                isArabic
                  ? "right"
                  : "left",
            }}
          >
            <Typography
              sx={{
                fontSize: 14,

                fontWeight: 800,

                lineHeight: 1.3,

                color: "#F1CD68",

                letterSpacing:
                  isArabic
                    ? 0
                    : "-0.2px",
              }}
            >
              {isArabic
                ? "تحليلات"
                : "Smart Customer"}
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
              {isArabic
                ? "ملاحظات العملاء الذكية"
                : "Feedback Analytics"}
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

      {/* ======================================================
          WORKSPACE
      ====================================================== */}

      <Box
        sx={{
          px: 1.5,
          py: 2,

          flex: 1,

          overflowY: "auto",
        }}
      >
        <Typography
          sx={{
            px: 1.5,

            mb: 1,

            fontSize: 11,

            fontWeight: 700,

            color: "#A99B76",

            letterSpacing:
              isArabic
                ? 0
                : 1.2,

            textTransform:
              isArabic
                ? "none"
                : "uppercase",

            textAlign:
              isArabic
                ? "right"
                : "left",
          }}
        >
          {text.workspace}
        </Typography>

        <List
          disablePadding
          sx={{
            display: "flex",

            flexDirection: "column",

            gap: 0.7,
          }}
        >
          {navigationItems.map(
            (item) => (
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

                  justifyContent:
                    "flex-start",

                  transition:
                    "all 0.2s ease",

                  "& .MuiListItemIcon-root":
                    {
                      minWidth: 40,

                      color: "#A99C7A",

                      transition:
                        "all 0.2s ease",

                      justifyContent:
                        "center",
                    },

                  "& .MuiListItemText-primary":
                    {
                      fontSize: 14,

                      fontWeight: 500,

                      transition:
                        "all 0.2s ease",

                      textAlign:
                        isArabic
                          ? "right"
                          : "left",
                    },

                  "&:hover":
                    {
                      backgroundColor:
                        "rgba(218,174,58,0.10)",

                      color: "#FFF9E8",

                      transform:
                        isArabic
                          ? "translateX(-3px)"
                          : "translateX(3px)",

                      "& .MuiListItemIcon-root":
                        {
                          color:
                            "#E5C76B",
                        },
                    },

                  "&.active":
                    {
                      background:
                        "linear-gradient(90deg, #C9A227 0%, #E5C76B 100%)",

                      color: "#17130B",

                      boxShadow:
                        "0 8px 24px rgba(201,162,39,0.25)",

                      "& .MuiListItemIcon-root":
                        {
                          color:
                            "#17130B",
                        },

                      "& .MuiListItemText-primary":
                        {
                          fontWeight: 800,
                        },

                      "&:hover":
                        {
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
                  primary={
                    item.label
                  }
                />
              </ListItemButton>
            )
          )}
        </List>
      </Box>

      {/* ======================================================
          FOOTER
      ====================================================== */}

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

            textAlign:
              isArabic
                ? "right"
                : "left",
          }}
        >
          <Typography
            sx={{
              fontSize: 12,

              fontWeight: 800,

              color: "#E5C76B",
            }}
          >
            {text.intelligenceTitle}
          </Typography>

          <Typography
            sx={{
              fontSize: 11,

              color: "#A99C7A",

              mt: 0.5,

              lineHeight: 1.5,
            }}
          >
            {text.intelligenceDescription}
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  /*
   * ============================================================
   * RETURN
   * ============================================================
   */

  return (
    <Box
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        display: "flex",

        minHeight: "100vh",

        direction:
          isArabic
            ? "rtl"
            : "ltr",

        background:
          "linear-gradient(135deg, #F8F3E7 0%, #F5EBD2 100%)",
      }}
    >
      {/* ======================================================
          MOBILE MENU BUTTON
      ====================================================== */}

      {isMobile && (
        <IconButton
          onClick={
            handleDrawerToggle
          }
          aria-label={
            isArabic
              ? "فتح القائمة"
              : "Open menu"
          }
          sx={{
            position: "fixed",

            top: 12,

            [isArabic
              ? "right"
              : "left"]: 12,

            zIndex: 1400,

            width: 42,

            height: 42,

            color: "#17130B",

            background:
              "linear-gradient(135deg, #C9A227, #E5C76B)",

            boxShadow:
              "0 6px 18px rgba(201,162,39,0.30)",

            "&:hover":
              {
                background:
                  "linear-gradient(135deg, #B88E19, #D9B85E)",
              },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* ======================================================
          SIDEBAR
      ====================================================== */}

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
          anchor={
            isArabic
              ? "right"
              : "left"
          }
          open={
            isMobile
              ? mobileOpen
              : true
          }
          onClose={
            handleDrawerToggle
          }
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper":
              {
                width:
                  drawerWidth,

                boxSizing:
                  "border-box",

                border: "none",

                boxShadow:
                  isArabic
                    ? "-5px 0 28px rgba(35,29,14,0.18)"
                    : "5px 0 28px rgba(35,29,14,0.18)",
              },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* ======================================================
          MAIN
      ====================================================== */}

      <Box
        sx={{
          flexGrow: 1,

          minWidth: 0,

          display: "flex",

          flexDirection:
            "column",
        }}
      >
        {/* ====================================================
            HEADER
        ==================================================== */}

        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor:
              "rgba(255,252,245,0.96)",

            backdropFilter:
              "blur(12px)",

            borderBottom:
              "1px solid rgba(201,162,39,0.18)",

            color: "#242018",

            zIndex: 1200,
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

              gap: 1.5,

              flexDirection:
                "row",
            }}
          >
            {/* =================================================
                HEADER TITLE
            ================================================= */}

            <Box
              sx={{
                flexGrow: 1,

                minWidth: 0,

                textAlign:
                  isArabic
                    ? "right"
                    : "left",

                ml:
                  isMobile
                    ? 6
                    : 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 14,
                    sm: 17,
                  },

                  fontWeight: 800,

                  color: "#302A1C",

                  whiteSpace:
                    {
                      xs: "normal",
                      sm: "nowrap",
                    },
                }}
              >
                {text.headerTitle}
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
                {text.headerSubtitle}
              </Typography>
            </Box>

            {/* =================================================
                HEADER ACTIONS
            ================================================= */}

            <Box
              sx={{
                display: "flex",

                alignItems:
                  "center",

                gap: 1,

                flexShrink: 0,
              }}
            >
              {/* LANGUAGE BUTTON */}

              <Button
                onClick={
                  toggleLanguage
                }
                variant="outlined"
                startIcon={
                  <LanguageIcon
                    sx={{
                      fontSize:
                        20,
                    }}
                  />
                }
                sx={{
                  minWidth:
                    {
                      xs: 42,
                      sm: 105,
                    },

                  height: 40,

                  px: {
                    xs: 1,
                    sm: 1.5,
                  },

                  borderRadius: 2.5,

                  borderColor:
                    "rgba(201,162,39,0.45)",

                  color:
                    "#806515",

                  backgroundColor:
                    "rgba(201,162,39,0.06)",

                  fontWeight: 800,

                  "&:hover":
                    {
                      borderColor:
                        "#C9A227",

                      backgroundColor:
                        "rgba(201,162,39,0.14)",
                    },

                  "& .MuiButton-startIcon":
                    {
                      margin:
                        0,
                    },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "inline",
                    },
                  }}
                >
                  {isArabic
                    ? "English"
                    : "العربية"}
                </Box>
              </Button>

              {/* SETTINGS BUTTON */}

              <IconButton
                onClick={() =>
                  navigate(
                    "/settings"
                  )
                }
                aria-label={
                  text.settings
                }
                sx={{
                  width: 42,

                  height: 42,

                  borderRadius: 2.5,

                  color:
                    "#806515",

                  backgroundColor:
                    "rgba(201,162,39,0.07)",

                  border:
                    "1px solid rgba(201,162,39,0.18)",

                  "&:hover":
                    {
                      backgroundColor:
                        "rgba(201,162,39,0.15)",
                    },
                }}
              >
                <SettingsIcon />
              </IconButton>

              {/* PROFILE BUTTON */}

              <IconButton
                onClick={
                  handleAdminClick
                }
                aria-label={
                  text.profile
                }
                sx={{
                  width: 42,

                  height: 42,

                  borderRadius: 2.5,

                  color:
                    "#403A2C",

                  backgroundColor:
                    "rgba(201,162,39,0.07)",

                  border:
                    "1px solid rgba(201,162,39,0.18)",

                  "&:hover":
                    {
                      backgroundColor:
                        "rgba(201,162,39,0.15)",
                    },
                }}
              >
                <AccountCircleIcon
                  sx={{
                    fontSize: 32,

                    color:
                      "#B28D1E",
                  }}
                />
              </IconButton>

              {/* ADMIN TEXT - DESKTOP */}

              <Box
                onClick={
                  handleAdminClick
                }
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },

                  flexDirection:
                    "column",

                  cursor:
                    "pointer",

                  textAlign:
                    isArabic
                      ? "right"
                      : "left",

                  minWidth: 70,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 13,

                    fontWeight: 800,

                    lineHeight: 1.2,

                    color:
                      "#302A1C",
                  }}
                >
                  {text.admin}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11,

                    color:
                      "#81755D",

                    lineHeight:
                      1.2,
                  }}
                >
                  {text.administrator}
                </Typography>
              </Box>

              {/* =================================================
                  PROFILE MENU
              ================================================= */}

              <Menu
                anchorEl={
                  anchorEl
                }
                open={
                  menuOpen
                }
                onClose={
                  handleAdminClose
                }
                anchorOrigin={{
                  vertical:
                    "bottom",

                  horizontal:
                    isArabic
                      ? "left"
                      : "right",
                }}
                transformOrigin={{
                  vertical:
                    "top",

                  horizontal:
                    isArabic
                      ? "left"
                      : "right",
                }}
                slotProps={{
                  paper:
                    {
                      elevation: 6,

                      sx: {
                        mt: 1,

                        minWidth: 210,

                        borderRadius:
                          2.5,

                        border:
                          "1px solid rgba(201,162,39,0.22)",

                        backgroundColor:
                          "#FFFDF8",

                        boxShadow:
                          "0 12px 30px rgba(50,40,15,0.14)",

                        direction:
                          isArabic
                            ? "rtl"
                            : "ltr",
                      },
                    },
                }}
              >
                {/* PROFILE */}

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

                    gap: 1,

                    "&:hover":
                      {
                        backgroundColor:
                          "rgba(201,162,39,0.10)",
                      },
                  }}
                >
                  <PersonIcon
                    sx={{
                      color:
                        "#B28D1E",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize:
                        14,

                      fontWeight:
                        600,
                    }}
                  >
                    {text.profile}
                  </Typography>
                </MenuItem>

                {/* SETTINGS */}

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

                    gap: 1,

                    "&:hover":
                      {
                        backgroundColor:
                          "rgba(201,162,39,0.10)",
                      },
                  }}
                >
                  <SettingsIcon
                    sx={{
                      color:
                        "#B28D1E",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize:
                        14,

                      fontWeight:
                        600,
                    }}
                  >
                    {text.settings}
                  </Typography>
                </MenuItem>

                <Divider
                  sx={{
                    my: 0.5,

                    borderColor:
                      "rgba(201,162,39,0.15)",
                  }}
                />

                {/* LOGOUT */}

                <MenuItem
                  onClick={() => {
                    handleAdminClose();

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

                    color:
                      "#B94A48",

                    "&:hover":
                      {
                        backgroundColor:
                          "rgba(185,74,72,0.08)",
                      },
                  }}
                >
                  {text.logout}
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* ====================================================
            PAGE CONTENT
        ==================================================== */}

        <Box
          component="main"
          sx={{
            flexGrow: 1,

            minWidth: 0,

            p: {
              xs: 2,
              sm: 3,
              md: 4,
            },

            background:
              "linear-gradient(135deg, #F8F3E7 0%, #F5EBD2 100%)",

            direction:
              isArabic
                ? "rtl"
                : "ltr",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}