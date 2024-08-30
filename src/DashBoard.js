import React from "react";
import { useState } from 'react';
import OnlineCard from './OnlineCard'
import "./DashBoard.css"


function DashBoard () {

  const [isOffline, setIsOffline] = useState(false)
  const [volumeLevel, setVolume] = useState(0)
  const [isTooLoud, setIsTooLoud] = useState(false)
  const [soundQuality, setSoundQuality] = useState("medium")
  const [isLowQuality, setIsLowQuality] = useState(false)

  


  return (
    <div id="main">
      <OnlineCard></OnlineCard>
      <OnlineCard></OnlineCard>
      <OnlineCard></OnlineCard>


    </div>
  )
}

export default DashBoard