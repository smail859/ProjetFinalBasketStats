// MATERIAL ICONS
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export const MenuDataBis = [
  {
    title: "Acceuil",
    url: "/dashBoardLogin",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Calendrier",
    url: "/calendarTraining",
    icon: <CalendarMonthOutlinedIcon />,
  },
  {
    title: "Entrainements",
    url: "/dashboardSignUp",
    icon: <SportsBasketballOutlinedIcon />,
  },
  {
    title: "Messagerie",
    url: "/Messaging",
    icon: <NotificationsActiveIcon />,
  },
  {
    title: "Parametres",
    url: "/settings",
    icon: <ManageAccountsOutlinedIcon />,
  },
];
