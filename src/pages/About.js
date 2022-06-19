import React, { Component } from 'react'
import "./About.css";
import croppedprofile from "../assets/croppedprofile.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          alt="Profile Pic"
           src = {croppedprofile}
          >

          </img>
      </div>
    </div>
    <div className="split right">
     <div className="centered">
	        <div className="name_title">AVA HATFIELD</div>
        <div className="brief_description">
          Hello! My name is Ava Hatfield and I am a rising junior at Grove City College. I am currently
          majoring in Computer Science with minors in design and mobile development. My hometown is Hershey, Pennsylvania.
          Some of my favorite hobbies include reading, biking, working on crafts, and hanging out with friends.
          I am excited to be apart of this program to sharpen my skills as a developer!
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}