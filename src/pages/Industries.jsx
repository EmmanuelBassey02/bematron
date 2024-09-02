import React from 'react'
import Navbar from '../components/common/Navbar'
import industriesBackground from '../assets/industriesbg.jpg'

import manufacturingBackground from '../assets/manufacturingbg.jpg'
// import logisticsBackground from '../assets/logisticsbg.jpg'
import hitechBackground from '../assets/hitechbg.jpg'
import healthcareBackground from '../assets/healthcarebg.jpg'
import educationBackground from '../assets/educationbg.jpg'
import mediaBackground from '../assets/mediabg.jpg'
// import fintechBackground from '../assets/fintechbg.jpg'
import travelBackground from '../assets/travelbg.jpg'
// import agricultureBackground from '../assets/agriculturebg.jpg'
// import blockchainBackground from '../assets/blockchainbg.jpg'
import miningBackground from '../assets/miningbg.jpg'
import realestateBackground from '../assets/realestatebg.jpg'
import ecommerceBackground  from '../assets/ecommercebg.jpg'
// import utilitiesBackground from '../assets/utilitiesbg.jpg'

import '../../styles/industries.css'
import Footer from '../components/common/Footer'


function Industries() {
  return (
    <div>
       <Navbar/>

       <section className='industriesbg  px-[5vw] py-[60px] md:h-[500px] h-[230px] text-center md:pt-[180px] pt-[80px]' style={{ backgroundImage: `url(${industriesBackground})` }}>
          <h1 className='md:text-[55px] text-[24px] font-bold  text-yellow-500'>INDUSTRIES WE SERVE</h1>
          <p className='font-bold md:text-[26px] text-[15px] text-neutral-300'>Our services covers virtually all the industries over the world</p>
       </section>



       <section className='px-[5vw] md:py-[50px] py-[25px] text-center bg-yellow-600'>

       </section>



        <section className='manufacturingbg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${manufacturingBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px] bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>MANUFACTURING</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'>We will build a flexible and cost-effective application that will incorporate real-life working processes into your corporate educational strategy. <br /><br /><br />

          
          We will build a flexible and cost-effective application that will incorporate real-life working processes into your corporate educational strategy.</p>
       </section>



       {/* <section className='logisticsbg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${logisticsBackground})` }}>
           <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>LOGISTICS</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'>
            Streamline logistics operations with our bespoke web and software solutions. Our team specializes in developing real-time tracking systems, route optimization algorithms, and warehouse management platforms to ensure seamless logistics operations and supply chain visibility.
          </p>
       </section> */}



       {/* <section className='agriculturebg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${agricultureBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>AGRICULTURE</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'>
            Modernize agriculture with our web and software solutions. Our expertise in building IoT-powered monitoring platforms, data analytics tools, and crop management systems enables farmers and agricultural businesses to maximize yields and drive sustainability.
          </p>
       </section> */}


         {/* <section className='blockchainbg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${blockchainBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>BLOCKCHAIN</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'>
            Harness the potential of blockchain technology with our custom web and software solutions. From building decentralized applications (DApps) to implementing smart contracts, we offer secure and transparent solutions for various industries, integrating blockchain into their operations.
          </p>
       </section> */}



       <section className='hitechbg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${hitechBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>HI-TECH</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'>Empower high-tech initiatives with our web and software development expertise. Whether it's building cybersecurity solutions, digital transformation strategies, or innovative software products, we provide comprehensive solutions to propel your Hitechbg endeavors forward.</p>
       </section>


       <section className='healthcarebg  mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${healthcareBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>HEALTHCARE</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'> Transform healthcare delivery with our custom web and software solutions. Our team specializes in developing electronic health records (EHR) systems, telemedicine platforms, and patient management solutions to streamline processes and enhance patient care.
          </p>
       </section>



       <section className='educationbg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${educationBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>EDUCATION</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'> Enhance learning experiences with our educational web and software solutions. From building learning management systems (LMS) to developing interactive e-learning platforms, we empower educators and institutions to deliver engaging and effective learning experiences."
          </p>
       </section>


       <section className='mediabg  mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${mediaBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>MEDIA</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'>Thrive in the digital media landscape with our web and software solutions. Our expertise in developing content management systems (CMS), digital publishing platforms, and media distribution solutions enables content creators and publishers to reach their audiences effectively."
          </p>
       </section> 


       {/* <section className='fintechbg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${fintechBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>FINTECH</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'> Innovate finance with our fintech web and software solutions. From developing mobile banking apps to implementing robo-advisory platforms, we provide secure and scalable solutions to financial institutions and startups looking to disrupt the industry.
          </p>
       </section> */}


       <section className='travelbg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${travelBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>TRAVEL & HOSPITALITY</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'>Deliver exceptional travel experiences with our custom web and software solutions. Whether it's building booking engines, developing customer relationship management (CRM) systems, or creating immersive virtual experiences, we optimize operations and enhance guest satisfaction for travel and hospitality businesses."
          </p>
       </section> 


       <section className='miningbg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${miningBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>MINING</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'>
          We will build a flexible and cost-effective application that will incorporate real-life working processes into your corporate educational strategy. <br /> <br />
          We will build a flexible and cost-effective application that will incorporate real-life working processes into your corporate educational strategy.
          </p>
       </section>


       <section className='realestatebg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${realestateBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>REAL ESTATE & CONSTRUCTION</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'>We will build a flexible and cost-effective application that will incorporate real-life working processes into your corporate educational strategy.

         <br /><br />We will build a flexible and cost-effective application that will incorporate real-life working processes into your corporate educational strategy.

         </p>
       </section>


       <section className='ecommercebg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${ecommerceBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>E-COMMERCE</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'>Drive e-commerce success with our custom software solutions. Our e-commerce platforms, inventory management systems, and customer engagement tools enable businesses to scale and thrive in the competitive online market.

       </p>
       </section>


       {/* <section className='utilitiesbg mb-[2px] px-[5vw] md:py-[60px] py-[40px] md:h-[500px] h-fit' style={{ backgroundImage: `url(${utilitiesBackground})` }}>
          <h1 className='font-bold md:text-[30px] text-[18px] text-white mb-[30px]  bg-black p-2 w-fit px-[20px] rounded-[30px] border-b-4 border-yellow-500'>UTILITIES</h1>
          <p className='md:w-[550px] md:text-[20px] text-[16px] text-neutral-200 p-4 border-l-[6px] border-yellow-500'>
            Modernize utilities with our software solutions. Utilize smart metering systems, predictive maintenance platforms, and energy management solutions to optimize operations, reduce costs, and enhance sustainability in the utilities sector.
          </p>
       </section>  */}



       <Footer/>
    </div>
  )
}

export default Industries