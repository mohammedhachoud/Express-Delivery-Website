import React, { Component } from "react";

import{useState, useEffect} from'react';

import {Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./style3.css";
import axios from "../../api/axios";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Card from "./card";
import photo from "./Untitled.svg"

const Userss = () => {
    const [data, setData] = useState([]);
    const email = JSON.parse(localStorage.getItem('user')).user.email
  
    useEffect(() => {
      console.log(email)
        axios.get('/api/users/userss', {
            
          }).then((res) => {
            if (res.status == 200) {
                
               setData(res.data.users)
            
            }
          })
          console.log(data)
      }, [data])
    const handle = (e) => {
        e.preventDefault();
    }

    return(
       <div>
           
           <div>
           </div>
           
           <div className="column">
               {data.map((item, i)=>(
                <Card style={{ width: "350px", display: "inline-block" }} 
                
        image={photo}
        title= {item.email}
        description={"Firstname: "+item.firstName}
        description1={"Lastname: "+item.lastName}
      />
))}
       </div>            
                   
                
        </div >
    );
}

export default Userss;