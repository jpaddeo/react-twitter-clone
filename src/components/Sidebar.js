import React from "react";

import TiwtterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { Button } from "@material-ui/core";

import SidebarOption from "./SidebarOption";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <TiwtterIcon className="Sidebar__TwiterIcon" />

      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PersonOutlineIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />

      <Button variant="outlined" className="Sidebar__Tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
