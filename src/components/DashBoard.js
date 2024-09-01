import React from "react";
import { useState } from 'react';
import "./DashBoard.css"

import OnlineCard from './OnlineCard'
import VolumeCard from './VolumeCard'
import SoundQualityCard from "./SoundQualityCard";

function DashBoard (props) {
  const {username} = props

  const [isOffline, setIsOffline] = useState(false)
  const [volumeLevel, setVolume] = useState(0)
  const [isTooLoud, setIsTooLoud] = useState(false)
  const [soundQuality, setSoundQuality] = useState("medium")
  const [isLowQuality, setIsLowQuality] = useState(false)

  const [notifications, updateNotifications] = useState([])


  const toggleIsOffline = () => {
    if (isOffline) {
      setIsOffline(false)
      toggleNotification("Your application is offline. You won't be able to share or stream music to other devices.")
    } else {
      setIsOffline(true)
      toggleNotification("Your application is offline. You won't be able to share or stream music to other devices.")
    }
  }

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue)
    if (newValue >= 80 && isTooLoud == false) {
      setIsTooLoud(true)
      toggleNotification("Listening to music at a high volume could cause long-term hearing loss.")
    } else if (newValue < 80 && isTooLoud == true) {
      setIsTooLoud(false)
      toggleNotification("Listening to music at a high volume could cause long-term hearing loss.")
    }
  }

  const handleQualityChange = (event, newValue) => {
    setSoundQuality(newValue.props.value)
    if (newValue.props.value == 'low' && !isLowQuality) {
      setIsLowQuality(true)
      toggleNotification("Music quality is degraded. Increase quality if your connection allows it.")
    } else if (isLowQuality) {
      setIsLowQuality(false)
      toggleNotification("Music quality is degraded. Increase quality if your connection allows it.")
    }
  }

  const toggleNotification = (message) => {
    let count = 0
    for (let m = 0; m < notifications.length; m++) {
      if (notifications[m].includes(message)) {
        updateNotifications([...notifications.slice(0, m), ...notifications.slice(m + 1)])
        break
      }
      count++
    }
    
    if (count == notifications.length) {
      updateNotifications([...notifications, message])
    }
  }


  return (
    <div id="main">
      <h1>Welcome {username == "" ? "User" : username}!</h1>
      <div id="cards">
        <OnlineCard toggleIsOffline={toggleIsOffline}></OnlineCard>
        <VolumeCard handleVolumeChange={handleVolumeChange}></VolumeCard>
        <SoundQualityCard handleQualityChange={handleQualityChange}></SoundQualityCard>
      </div>
      <h3 style={{color: 'whitesmoke', fontSize: 30, margin: 0, outline: "5px solid white", borderRadius: "5%", padding: "1vw", backgroundColor: "#1976D2"}}>System Notifications:</h3>
      {notifications.map((string, index) => {
        return <li key={index}>! {string} !</li>
      })}
    </div>

  )
}

export default DashBoard