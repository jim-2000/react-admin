import React from 'react'
import BarChartSales from '../../components/chart/BarChartSales'
import PieChartSales from '../../components/chart/PieChartSales'
import { Card } from 'flowbite-react'
import DashCard from '../../components/card/DashCard'
import Truck from '../../assets/lotti/truck-delivery.json'
import UserIMG from '../../assets/lotti/27-globe-lineal-edited.json'
import Basket from '../../assets/lotti/basket.json'
import Coin from '../../assets/lotti/coin.json'
import { prettyPrinStat } from '../../utils/numberUtils'
import LineChartSales from '../../components/chart/LineChartSales'
import SingelCarousel from '../../components/carousel/singelCarousel'

const DashBoardPage = () => {
  return (
    <div className='p-1'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-4">
        <DashCard 
        lotieIcon={Truck}
        bgColor={'bg-dark'}
        title={'Total Order'}
        total={1500}
        subtitle={`${1500} orders Done`} 
        />
        <DashCard 
        lotieIcon={Basket}
        bgColor={'bg-primary'}
        title={'new Order'}
        total={50}
        subtitle={`${50} today orders`} 
        />
        <DashCard 
        lotieIcon={UserIMG}
        bgColor={'bg-dark'}
        title={'Total User'}
        total={150000}
        subtitle={`${1500} orders Done`} 
        />
        <DashCard 
        lotieIcon={Coin}
        bgColor={'bg-teal-600'}
        title={'Total Profit'}
        total={64563}
        subtitle={`net profits total`} 
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 py-4 '>
          <div className='w-full'>
            <Card>                
              <h1 className='captionText'>Monthly sales</h1>
              <LineChartSales />
            </Card>
          </div>
          <div className='w-full'>
            <Card>           
              <h1 className='captionText'>Monthly Order</h1>
              <BarChartSales />
            </Card>
          </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 py-4 '>
          <div className='w-full col-span-2'>
            <Card>           
              <h1 className='captionText'>Popular Payment Method</h1>
              <PieChartSales />
            </Card>
          </div>
          <div className='w-full rounded shadow-md border p-2 col-span-1 '>
            <div className='flex justify-between items-center cursor-pointer'>                
              <h4 className='captionText text-lg text-dark'>Recent Review</h4>
              <p className='text-teal-500 font-roboto font-medium capitalize hover:text-orange-500 hover:font-bold transition'>view all</p>
            </div>
            <SingelCarousel />
          </div>
      </div>
    </div>
  )
}

export default DashBoardPage