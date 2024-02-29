"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingDate= new Date("2024-03-09")

const CountDown = () => {
  return (
    <Countdown className='font-bold text-5xl text-red-400' date={endingDate}/>
  )
}

export default CountDown