import React from 'react'
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPinterest, FaTwitter, FaClock } from 'react-icons/fa'

function Footer() {
  // const button = 'click';
  // const name = 'Emmanuel';
  // const handleClick = () => {
  //   alert('You clicked the button');
  // }

  const handleClick = () => {

    console.log('you clicked');
  }
  
 
  return (
    <div className='bg-black px-[3vw]'>
     <div className='flex md:gap-8 gap-[16px] flex-wrap justify-between md:pt-[100px] pt-[50px] pb-[25px] bg-black'>

       <div className='w-fit flex border-red-400'>
            <div>
                <h3 className='font-bold md:text-[20px] text-[18px] text-yellow-500'>Company</h3> <br />

                <a href="http://">
                  <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Homepage</p>
                </a>

                <a href="http://">
                  <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>About Us</p>
                </a>

                <a href="http://">
                  <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Services</p>
                </a>

                <a href="http://">
                  <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Expert Team</p>
                </a>

                <a href="http://">
                  <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Success Stories</p>
                </a>

                {/* <a href="http://">
                  <p className='pb-[20px] text-neutral-400 md:text-[16px] text-[14px]'>Testimonials</p>
                </a>

                <a href="http://">
                  <p className='pb-[20px] text-neutral-400 md:text-[16px] text-[14px]'>Blog</p>
                </a>

                <a href="http://">
                  <p className='pb-[20px] text-neutral-400 md:text-[16px] text-[14px]'>More</p>
                </a> <br /> */}
            </div>


             {/* CONTACT */}
            <div>
                <h3 className='font-bold md:text-[20px] text-[18px] text-yellow-500'>Contact</h3> <br />

              
                <div className='flex items-center md:gap-[20px] gap-[10px] mb-[10px]'>
                    <FaMapMarkerAlt className='text-yellow-500  md:text-[20px] text-[18px]'/>
                      <p className='text-neutral-400 md:text-[16px] text-[14px]'>374 FA Tower, William USA</p>
                </div>


                <div className='flex items-center md:gap-[20px] gap-[10px] mb-[10px]'>
                    <FaPhone className='text-yellow-500  md:text-[20px] text-[18px]'/>

                    <a href="http://">
                      <p className='text-neutral-400 md:text-[16px] text-[14px]'>(+880)155-69569</p>
                    </a>
                </div>


                <div className='flex items-center md:gap-[20px] gap-[10px] mb-[10px]'>
                    <FaEnvelope className='text-yellow-500 md:text-[20px] text-[18px]'/>

                    <a href="http://mail to:">
                      <p className='text-neutral-400 md:text-[16px] text-[14px]'>support@rstheme.com</p>
                    </a>
                </div>


                <div className='flex items-center md:gap-[20px] gap-[10px] mb-[10px]'>
                    <FaClock className='text-yellow-500  md:text-[20px] text-[18px]'/>

                      <p className='text-neutral-400 md:text-[16px] text-[14px]'> Opening Hours: 8:00 - 18:00</p>
                </div>
             </div>
       </div>




       <div className='flex justify-between'>
       <div className=''>
          <h3 className='font-bold md:text-[20px] text-[18px] text-yellow-500'>What we do</h3><br />

          <a href="http://">
            <p className='md:pb-[20px] pb-[12px] text-neutral-400 md:text-[16px] text-[14px]'>Web Development</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[12px] text-neutral-400 md:text-[16px] text-[14px]'>Database <br /> Management</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[12px] text-neutral-400 md:text-[16px] text-[14px]'>Product design <br /> & UI/UX Design</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[12px] text-neutral-400 md:text-[16px] text-[14px]'>Mobile App <br /> Development</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[12px] text-neutral-400 md:text-[16px] text-[14px]'>Software Development</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[12px] text-neutral-400 md:text-[16px] text-[14px]'>CyberSecurity</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[12px] text-neutral-400 md:text-[16px] text-[14px]'>Project Management</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[12px] text-neutral-400 md:text-[16px] text-[14px]'>Data Analytics</p>
          </a><br />
       </div>



          {/* SPECIAL */}
          <div>
            <h3 className='font-bold md:text-[20px] text-[18px] text-yellow-500'>Special</h3> <br />

              <a href="http://">
                <p className='text-neutral-400 md:mb-[15px] mb-[12px] md:text-[16px] text-[14px]'>ChatBot Development</p>
              </a>


              <a href="http://">
                <p className='text-neutral-400 md:mb-[15px] mb-[12px] md:text-[16px] text-[14px]'>SaaS Development</p>
              </a>


              <a href="http://mail to:">
                <p className='text-neutral-400 md:mb-[15px] mb-[12px] md:text-[16px] text-[14px]'>Software Testing</p>
              </a>


              <a href="http://mail to:">
                <p className='text-neutral-400 md:mb-[15px] mb-[12px] md:text-[16px] text-[14px]'>Cloud Infrastructure</p>
              </a>
           </div>
       </div>




       <div className=''>
          <h3 className='font-bold md:text-[20px] text-[18px] text-yellow-500'>Technology</h3> <br />

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Java, C#, C++, Python, React</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>PHP, Springbooot, Angular</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>PHP, MySQL, NodeJS, VueJS, CSS</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Flutter, Kotlin, Dart, Swift, NuxtJS</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Docker, Kubernetes, Oracle</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>RqbbitMQ, ASP.Net, ExpressJS</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Tableau, R, Ember, AWS, JavaScript</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>NextJS, Laravel, Azure</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Firewall, IDS, SSL/TLS, MFA, DLP</p>
          </a>


          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Figma, Adobe XD, Wireframe, LottiesFiles</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Jira, Asana, Trello, Slack, Scrumwise</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Ruby on Rails, PostgreSQL, ExpressJS</p>
          </a>

          <a href="http://">
            <p className='md:pb-[20px] pb-[10px] text-neutral-400 md:text-[16px] text-[14px]'>Apache, Linux, NGINX, & More</p>
          </a>

       </div>




       <div className='w-[350px] pt-[35px]'>
          {/* <h3 className='font-bold text-[22px]'>BEMATRON</h3><br /> */}
          <div className='bg-neutral-800 w-fit h-fit border-r-[8px] border-yellow-500 pb-[10px] pl-[10px]'>
             <h1 className='md:text-[38px] text-[26px] font-bold p-4  text-yellow-500 mt-[-14px]'>Bematron</h1>
             <p className='text-[12px] bg-yellow-500 font-bold text-black w-[100px] pl-[10px] px-1 md:mt-[-25px] mt-[-20px] mr-[-40px]'>Technologies</p>
          </div> <br />

            <p className='text-neutral-400 mb-[40px] md:text-[16px] text-[14px]'>MVP Development Cloud9 Solutions specialize in the SME 
            market and provide the assurance, availability and agility that our Customers value. <br /><br />
             Our Canadian based dedicated team of IT Support professionals are friendly and hands-on, 
             available 24/7 to assist.
            </p>

            <div className='flex items-center md:gap-[30px] gap-[25px] h-[45px] p-2'>
                <FaFacebook className='md:text-[28px] text-[22px] text-yellow-600 md:hover:text-[32px] hover:text-[25px]'/>
                <FaTwitter className='md:text-[28px] text-[22px] text-yellow-600 md:hover:text-[32px] hover:text-[25px]'/>
                <FaInstagram className='md:text-[28px] text-[22px] text-yellow-600 md:hover:text-[32px] hover:text-[25px]'/>
                <FaPinterest className='md:text-[28px] text-[22px] text-yellow-600 md:hover:text-[32px] hover:text-[25px]'/>

            </div>

       </div>


    </div>

      <div className='text-neutral-500 bg-black mb-[15px]'>
        <a href=''>Privacy policy | </a>
        <a href=''>Terms of service | </a>
        <a href=''>Cookie policy</a>
      </div>


      <p className='text-neutral-500 md:text-[15px] text-[14px]'>Copyright © {new Date().getFullYear()}. Bematron Technologies a company duly registered with CAC with RC Number: xxxxxxx. All rights reserved.</p><br />
    </div>


  )
}

export default Footer