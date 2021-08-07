import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {

    return (
        <motion.div 
            className="navigation">
            <NavLink exact to="/home" className="nav-link" activeClassName="nav-active">
            <sup>01<span class="slider"></span></sup>accueil
            </NavLink>
            <NavLink exact to="/about" className="nav-link" activeClassName="nav-active">
            <sup>02<span class="slider"></span></sup>à propos
            </NavLink>
            <NavLink exact to="/web" className="nav-link" activeClassName="nav-active">
            <sup>03<span class="slider"></span></sup>web
            </NavLink>
            <NavLink exact to="/doodles" className="nav-link" activeClassName="nav-active">
            <sup>04<span class="slider"></span></sup>doodles
            </NavLink>
            <NavLink exact to="/stickers" className="nav-link" activeClassName="nav-active">
            <sup>05<span class="slider"></span></sup>stickers
            </NavLink>
        </motion.div>
    )
}

export default Navigation;