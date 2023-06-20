import { BiHomeAlt } from "react-icons/bi";
import { BiFridge } from "react-icons/bi";
import { BiListCheck } from "react-icons/bi";
import { BiBarChartAlt } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";

import {Link, useLocation } from "react-router-dom"

import React from 'react';

const BottomNavbar = () => {

  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
      <div className="container">
        <div className="row justify-content-center">

          <div className="col text-center">
            <div className="navbar-icon">
              <BiHomeAlt className="navbar-icon-image" />
              <span className="navbar-icon-name">Home</span>
            </div>
          </div>

          <div className="col text-center">
            <div className="navbar-icon">
              <BiFridge className="navbar-icon-image" />
              <span className="navbar-icon-name">Food</span>
            </div>
          </div>

          <div className="col text-center">
            <div className="navbar-icon">
              <BiListCheck className="navbar-icon-image" />
              <span className="navbar-icon-name">Recipes</span>
            </div>
          </div>

          <div className="col text-center">
            <div className="navbar-icon">
              <BiBarChartAlt className="navbar-icon-image" />
              <span className="navbar-icon-name">Shopping</span>
            </div>
          </div>

          <div className="col text-center">
            <div className="navbar-icon">
              <BiBookOpen className="navbar-icon-image" />
              <span className="navbar-icon-name">Breakdown</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default BottomNavbar;

