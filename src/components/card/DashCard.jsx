import React from 'react'
import Lottie  from "lottie-react";
import { PropTypes } from "prop-types";
import numeral from 'numeral'
import { prettyPrinStat } from '../../utils/numberUtils';

const DashCard = ({lotieIcon,bgColor,title,total,subtitle}) => {
 
  return (
    <div className={`flex flex-col md:flex-row items-start flex-wrap justify-items-stretch md:items-center ${bgColor}  shadow hover:shadow-xl cursor-pointer rounded p-1 overflow-hidden `}>
       <div className="p-1 w-1/2 h-fit mx-auto">
        <Lottie 
        animationData={lotieIcon}
        className='w-full'
        />
       </div>
       <div className="flex flex-col justify-start items-start w-1/2 h-fit flex-wrap">
            <h4 className='text-white text-opacity-80 text-2xl font-bold'>{prettyPrinStat(total)}</h4>
            <h2 className='text-gray-600 font-bold text-lg uppercase'>{title}</h2>
            <p className='text-sm text-secondaryText capitalize'>{subtitle}</p>
       </div>
    </div>
  )
}

DashCard.prototype = {
  lotieIcon: PropTypes.any.isRequired,
  bgColor: 'bg-hovericon',
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  subtitle:'Delivery'
}

export default DashCard