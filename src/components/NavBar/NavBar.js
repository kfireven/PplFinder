import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NavBar = () => {
  var history = useHistory();
  const [value, setValue] = useState(0);

  useEffect(() => {
    value === 0 ? history.push('/') : history.push('/Favorites');
  }, [value]);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} />
        <Tab label="Favorites" index={1} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
