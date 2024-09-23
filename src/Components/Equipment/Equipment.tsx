

import Footer from '../Common/Footer';
import Header from '../Common/Header/Header';
import { equipments } from '../Equipment/EquipmentDetails';
import Social from '../Social';
import EquipmentCard from './EquipmentCard';

export default function Equipment() {
    return (
      <div>
        <div className='bg-blog-pattern w-full mb-10  bg-no-repeat bg-center bg-cover tracking-wide pt-12 leading-9 text-white'>
        <Header />
          <div className='container mx-auto mt-60 h-96 text-center '>
            <h1 className='font-abel text-8xl'>Hiking Gear Essentials</h1>
            <p className='font-actor  mt-10 text-2xl'>
            Whether you're a beginner or an experienced hiker, having the right gear is crucial for a safe and enjoyable experience on the trail. The gear you choose can impact your comfort, safety, and overall performance, especially when dealing with different terrains and weather conditions. From footwear to clothing, every piece plays a role in enhancing your hiking adventure. In this guide, we’ll break down the essential gear you need to be well-prepared for your next hike.
            </p>
          </div>
          
        </div>
        {equipments.map((equipment,index) => (
            <div>
              <EquipmentCard
                id={equipment.id}
                key={index}
                reverse={index % 2 !== 0}
                title={equipment.title}
                image={equipment.image}
                description={equipment.description}
              />
            </div>
         
        ))}
         <Social/>
            <hr className='mb-10  opacity-50 text-white'/>
          <Footer/>
      </div>
    );
  }


Equipment()
