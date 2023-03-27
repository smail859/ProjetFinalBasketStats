import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

export const MenuDataBis = [
  {
    title: "Acceuil",
    url: "/dashBoardLogin",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Entrainements",
    url: "/calendarTraining",
    icon: <SportsBasketballOutlinedIcon />,
  },
  {
    title: "Messagerie",
    url: "/Messaging",
    icon: <CalendarMonthOutlinedIcon />,
  },
  {
    title: "Parametres",
    url: "/settings",
    icon: <ManageAccountsOutlinedIcon />,
  },
];
