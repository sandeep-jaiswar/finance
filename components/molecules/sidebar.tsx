'use client'

import Logo from "@/components/atoms/logo";
import Box from "@mui/material/Box";
import Icon from "@/components/atoms/icon";
import  Divider  from "@mui/material/Divider";
import { useTheme } from "@mui/material";

const SideBar = () => {
  const theme = useTheme();
  return (
    <Box
      component="aside"
      className="flex flex-col w-16 h-full gap-4 cursor-pointer p-3"
      sx={{
        background: theme.palette.primary.dark,
      }}
    >
      <Box component="div" className="flex justify-center">
        <Logo />
      </Box>
      <Divider />
      <Box component="div" className="flex justify-center">
        <Icon name="search" />
      </Box>
      <Box component="div" className="flex justify-center">
        <Icon name="monitoring" />
      </Box>
    </Box>
  );
};

export default SideBar;
