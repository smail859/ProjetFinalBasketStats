import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

export const MenuData = [
  {
    title: "Acceuil",
    url: "./pages/DashBoardLogin",
    cName: "nav-links",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Entrainements",
    url: "./pages/Dashboard",
    cName: "nav-links",
    icon: <SportsBasketballOutlinedIcon />,
  },
  {
    title: "Calendrier",
    url: "#",
    cName: "nav-links",
    icon: <CalendarMonthOutlinedIcon />,
  },
  {
    title: "Parametres",
    url: "#",
    cName: "nav-links",
    icon: <ManageAccountsOutlinedIcon />,
  },
];
