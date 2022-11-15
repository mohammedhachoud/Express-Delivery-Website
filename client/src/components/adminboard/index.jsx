import React, { Component } from "react";
import Sidebar from "./sidebar/Sidebar";
import{useState, useEffect} from'react';
import ResponsiveAppBar from "./appbar/appbar";
import {Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./style3.css";
import axios from "../../api/axios";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Card from "./card";
import photo from "./Untitled.svg"


const Adminboard = () => {
    

   
    const [data, setData] = useState([]);
    const email = JSON.parse(localStorage.getItem('user')).user.email
  
    useEffect(() => {
      console.log(email)
        axios.get('/api/colis', {
            email:email,
          }).then((res) => {
            if (res.status == 200) {
                
               setData(res.data)
            
            }
          })
          console.log(data[1])
      }, [data])
    
    return(
       <div>
           <div>
               <ResponsiveAppBar/>
           </div>
           <div className="column">
               {data.map((item, i)=>(
                <Card style={{ width: "350px", display: "inline-block" }} 
              
        image={photo}
        title= {item.user_email}
        location={item.telephone}
        description={"Wilaya of Residence: "+item.wilaya1}
        description1={"Destination Wilaya: "+item.wilaya}
        description2={"Destination Town: "+item.commune}
        description3={"Delivery Type: "+item.type_denvoie}
        description4={"Parcel Weight: "+item.poids+" KG" }
        description5={"Amount: "+item.total+".00 DA"}
        
      />
))}
       </div>
      </div> 
    );
}
export default Adminboard;

