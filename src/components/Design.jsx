import "../components/Design";
import { useState } from "react";
import Process from "../images/Process.png"
import Ellipse from "../images/Ellipse.png";
import Autolayout from "../images/Autolayout.png";
import Frame from "../images/Frame.png";
import Frame1 from "../images/Frame1.png";
import Frame2 from "../images/Frame2.png";
import Frame3 from "../images/Frame3.png";
import Client from "../images/Client.png";
import Clients from "../images/Clients.png";
import Project from "../images/Project.png";
import Project2 from "../images/Project2.png";
import Project3 from "../images/Project3.png";
import Navbar from "../images/Navbar.png";
import Navbar1 from "../images/Navbar1.png";
import AutoLayoutHorizontal from "../images/AutoLayoutHorizontal.png";
import Merque from "../images/Merque.png";

export default function Design() {
    return (
        <>
        <div className="Design-Container">
            <div className="Card-container">
            <div className="heads">
            <img src={Navbar1} alt="" />
        </div>
        <div className="horizontal">
                <img src={AutoLayoutHorizontal} alt="" />
    </div>
    <div className="merque"> 
        <img src={Merque} alt="" />
    </div>
        <div className="process">
            
            <img src={Process} alt="" />
        </div>

        <div className="step">
            <img src={Autolayout} alt="" />
            
        </div>

        <div className="img">
            <div className="img1">
                <img src={Frame} alt="" />
            </div>
            
            <div className="img-con">
                <img src={Frame1} alt="" />
                <img src={Frame2} alt="" />
                <img src={Frame3} alt="" />
            </div>
                </div>
        
                <div className="client">
                <img src={Client} alt="" />
        </div>
        
        
         <div className="clients">
         <img src={Clients} alt="" />
        </div>
        

                <div className="projects">
                    <div className="project1"><img src={Project} alt="" /></div>
                    <div className="project2"><img src={Project2} alt="" /></div>
                    <div className="project3"><img src={Project3} alt="" /></div>
                    
                </div>
                <div className="Nav">
                    <img src={Navbar} alt="" />
                    
                </div>
                </div>
                </div>
        </>
    )
}