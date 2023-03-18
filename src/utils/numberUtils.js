import React from 'react'
import numeral from 'numeral'

export const prettyPrinStat = (stat) => 
  stat ? `+${numeral(stat).format("0.00a")}` : '+0'



export const sortData = (data) =>{
    const sortedData=[...data];

return  sortedData.sort((a,b)=>(a > b ? -1 : 1) )

    // sortedData.sort((a,b)=> {
  
    //     if (a.cases > b.cases){
    //         return -1;
    //     }else {
    //         return 1;
    //     }
    // })
    // return sortedData;
}