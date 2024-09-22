'use client';

import { useTheme } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";

export type IconProps = BoxProps & {
  name: string;
};

const Icon = ({ name, ...rest }: IconProps) => {
  const theme = useTheme();
  return (
    <Box className="material-symbols-outlined cursor-pointer" sx={{color: theme.palette.primary.contrastText}} {...rest}>
      {name}
    </Box>
  );
};

export default Icon;
