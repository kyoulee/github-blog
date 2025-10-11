import { NavList } from "@primer/react";

function GlobalLayoutNav() {
  return (
    <NavList aria-label="Main navigation">
      <NavList.Item href="#">Profile</NavList.Item>
      <NavList.Item href="#" aria-current="page">
        Account
      </NavList.Item>
      <NavList.Item href="#">Emails</NavList.Item>
      <NavList.Item href="#">Notifications</NavList.Item>
    </NavList>
  );
}

export default GlobalLayoutNav;