import React from "react";
import { NavLink, } from "react-router-dom";
import {Menu, Dropdown, Button} from "semantic-ui-react"



const Navbar = () => (
  <Menu>
    <NavLink exact activeStyle={styles.active} to="/">
      <Menu.Item>Home</Menu.Item>
    </NavLink>
    <NavLink exact activeStyle={styles.active} to="/about">
      <Menu.Item>About</Menu.Item>
    </NavLink>
    <NavLink exact activeStyle={styles.active} to="/categories">
      <Menu.Item>Categories</Menu.Item>
    </NavLink>
    <Menu.Menu position="right">
    <Dropdown item icon='wrench' simple>
        <Dropdown.Menu>
          <Dropdown.Item>
            <NavLink exact activeStyle={styles.active} to="/categories/new">
              New Category
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink exact activeStyle={styles.active} to="/jcards/new">
              New Card
            </NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
)

const styles = {
  active: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  }
};

export default Navbar;