import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
const Header = () => {
    return (
    <AppBar 
        sx={{bgcolor: "transparent", position: "static", boxShadow: "none"}}
    >
        <ToolBar sx={{display: "flex"}}>
        </ToolBar>
        <Logo />
    </AppBar>
    );
};

export default Header;