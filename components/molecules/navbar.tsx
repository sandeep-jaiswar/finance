import Box from "@mui/material/Box";
import Icon from "../atoms/icon";

const Navbar = () => {
    return (
      <Box component={"nav"} className="flex flex-col py-3">
        <Box component={"ul"} className="flex justify-between align-middle">
          <Box component={"li"}>Investment Dashboard | Home</Box>
          <Box component="div" className="flex justify-center">
            <Icon name="notifications" />
          </Box>
        </Box>
      </Box>
    );
};

export default Navbar;
