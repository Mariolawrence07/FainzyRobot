import { Bell, Menu } from "react-feather";
import Container from "common/Container";
// import Badge from "common/Badge";x/
import IconButton from "common/IconButton";
import useMediaQuery from "hooks/useMediaQuery";
import { MediaQueryBreakpointEnum } from "common/Constants";
import useNavigationSidebar from "admin/hooks/useNavigationSidebar";
import { NAV_SIDEBAR_FULL_WIDTH } from "./Constants";
import SearchInput from "common/SearchInput";
import { Avatar, Badge } from "@mui/material";

function Header(props) {
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);

  const { toggleAdminNavigationSidebar } = useNavigationSidebar();

  return (
    <>
      <div
        className="fixed inset-0 bottom-auto z-appBar"
        style={{
          left: islg ? NAV_SIDEBAR_FULL_WIDTH : 0,
        }}
      >
        <Container
          className="flex items-center gap-4 py-4"
          style={{ height: 64 }}
        >
          {!islg && (
            <IconButton onClick={toggleAdminNavigationSidebar}>
              <Menu />
            </IconButton>
          )}
          <SearchInput />
          <div className="flex-1" />
          <IconButton>
            <Badge>
              <Bell />
            </Badge>
          </IconButton>
          <Avatar variant="rounded" />
        </Container>
      </div>
    </>
  );
}

export default Header;
