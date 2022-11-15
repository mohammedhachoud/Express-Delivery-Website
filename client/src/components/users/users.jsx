import React, { Component } from "react";
import {Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import photo from "./images/img.svg";
import "./style2.css";
import photo2 from "./images/Untitled-1.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";


const Dashboard = () => {
    return(
      <div className="contain">
        
        <div className="div1">
        <div>
            <img src={photo2} alt="" height={200} width={400}/>
          </div>
          <div className="text">
          <h2> Welcome </h2>
            <p>
            To your Express Delivery WebSite, Send or Receive your Parcel Faster and Safer. <br className="br"/>
           <Link to="/login">
            <button className="btn" id="sign-up-btn">
              Next 
            </button>
            </Link>
            </p>
           
          </div>
        
        </div>
       
        <div className="div2">
           <img className="img" src={photo}/>
        </div>
      </div>
      
    );
}
export default Dashboard;