"use client";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styles from "./Drawer.module.css";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../../public/home.svg";
import FlashkIcon from "../../public/flash.svg";
import ShoppingCartIcon from "../../public/shopping-cart.svg";
import MenuIcon from "../../public/menu-2.svg";
import { HotNowShowcase } from "./HotNow";
import ItemRepository from "../item/repository";
import Item from "../item/model";
import { itemsFetch } from "../page";
import { useRouter } from "next/navigation";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  marginTop: "100px",

  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: "#0f0f0f",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  backgroundColor: "#0f0f0f",
}));

export default function PersistentDrawerLeft() {
  const router = useRouter();
  const [items, setItems] = React.useState<Item[]>([]);

  React.useEffect(() => {
    itemsFetch().then((items) => {
      setItems(items);
    });
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const logoURL =
    "https://firebasestorage.googleapis.com/v0/b/odin-cloth-wear-sever-dev.appspot.com/o/admin%2Fassets%2Fnobglogowhite.png?alt=media&token=5633e5d7-cb3f-40e7-8677-1b6afa135fab";
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar open={open} className={styles.appbarContainer}>
        <Toolbar className={styles.appbarHeader}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <Image
              src={MenuIcon}
              alt="Menu Icon"
              width={24}
              height={24}
              className={styles.menuIcon}
            />
          </IconButton>

          <Image
            src={logoURL}
            alt="Odin Cloth Wear Logo"
            width={331 / 4}
            height={208 / 4}
            loading="lazy"
          />
          <Link href={"/cart"}>
            <Image
              src={ShoppingCartIcon}
              alt="Shopping Cart Icon"
              width={24}
              height={24}
              className={styles.shoppingCartIcon}
            />
          </Link>
        </Toolbar>
        <div className={styles.appbarSearchContainer}>
          <input
            type="text"
            placeholder="Search"
            className={styles.appbarSearch}
          />
        </div>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0f0f0f",
            color: "#f0f0f0",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon
              style={{
                color: "#f0f0f0",
              }}
            />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          >
            <ListItemIcon style={{ cursor: "pointer" }}>
              <Image
                src={HomeIcon}
                alt="Home Icon"
                width={24}
                height={24}
                className={styles.homeIcon}
              />
            </ListItemIcon>
            <ListItemText primary={"Home"} style={{ cursor: "pointer" }} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Image
                src={FlashkIcon}
                alt="Hot Now Icon"
                width={24}
                height={24}
                className={styles.hotNowIcon}
                color="#f0e68c"
              />
            </ListItemIcon>
            <ListItemText primary={"Hot Now"} />
          </ListItem>
          <HotNowShowcase items={items} />
        </List>
      </Drawer>
      <Main open={open}></Main>
    </Box>
  );
}
