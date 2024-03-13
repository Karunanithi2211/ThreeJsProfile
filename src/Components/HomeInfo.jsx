import React from 'react'
import {arrow} from "../assets/icons/index"
import { Link } from 'react-router-dom'

const HomeInfo = ({currentStage}) => {
  if(currentStage === 1){
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white'>Hi, I'm <span className='font-semibold mx-2 text-white'>Karunanithi</span> 😁 <br/> A Software Engineer</h1>
  )}

  if(currentStage === 2){
    return (
      <div className='info-box'>
         <p className='font-medium sm:text-xl text-center'>Fresher seeking for job <br/> To improve my knowledge and to potentially use my skills in projects</p>
         <Link to={"/about"}>About <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/></Link>
      </div>
  )}

  if(currentStage === 3){
    return(
      <div className='info-box'>
         <p className='font-medium sm:text-xl text-center'>Worked on some projects <br/> And learned many skills along the way</p>
         <Link to={"/project"}>Project<img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/></Link>
      </div>
    )
  }

  return null;
}

export default HomeInfo
