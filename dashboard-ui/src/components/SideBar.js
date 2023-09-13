import React, { useState } from "react";
import styles from "../styles/SideBar.module.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { HiLightningBolt } from "react-icons/hi";
import {
  MdEnergySavingsLeaf,
  MdDataExploration,
  MdSettings,
  MdDashboard,
} from "react-icons/md";
import { GiBatteryPack } from "react-icons/gi";
import "../index.css";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/ess-monitor",
      name: "ESS Monitor",
      icon: <GiBatteryPack />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <MdSettings />,
    },
  ];

  return (
    <div
      style={{ width: isOpen ? "200px" : "70px" }}
      className={styles.SideBar}
    >
      <div
        className={styles.MenuHeader}
        style={{ width: isOpen ? "200px" : "70px" }}
      >
        <HiLightningBolt onClick={toggleSidebar} />
        <h4 style={{ display: isOpen ? "block" : "none" }}>Name</h4>
      </div>
      <nav className={styles.SideMenu}>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className={styles.SideLink}>
            <div className={styles.Icon}>{item.icon}</div>
            <motion.span
              style={{ display: isOpen ? "block" : "none" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.3, ease: "easeIn" }}
            >
              {item.name}
            </motion.span>
          </NavLink>
        ))}
      </nav>
      <div className={styles.MenuFooter}>
        <p>Footer</p>
      </div>
    </div>
  );
};

export default SideBar;
