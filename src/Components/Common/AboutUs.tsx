import Social from "../Social"
import Footer from "./Footer"
import Header from "./Header/Header"
import authorsphoto1 from '/src/assets/aboutimg1.jpg'
import authorsphoto2 from '/src/assets/aboutimg2.jpg'


export default function AboutUs(){
    return(
        <div>
          <Header/>
          <hr className='mb-10 mt-10 opacity-50 text-white font-abel text-8xl'/>
            <div className="container text-white mx-auto leading-loose tracking-wide items-center">
                <h1 className="font-abel text-8xl ">Exploring the World of Hiking: A Personal Journey</h1>
                <hr className='mb-10 mt-10 opacity-50 text-white'/>

                <div className="gap-6 flex h-1/2 items-center">
                    <div className="font-actor flex-col items-center  text-xl ">
                        <p className="flex items-center">I created this project to delve into the fascinating world of hiking and to provide useful insights for those just starting their journey in this outdoor activity. Although I have never pursued hiking professionally, my childhood was spent in mountainous regions, where I was surrounded by nature from a young age. This environment fostered a deep love for the mountains and a desire to share my experiences with others.</p>
                        <br />
                        <p className="flex items-center">Throughout this project, I aimed to compile essential information for anyone looking to embark on their hiking adventure. I discussed the nuances of this sport, emphasizing the importance of preparation and understanding the challenges that come with it. Additionally, I put together a comprehensive guide on hiking equipment, detailing the must-have gear that can enhance your experience and keep you safe on the trails.</p>
                    </div>
                    <img src={authorsphoto1}  alt="author`s foto" className="w-1/3" />
                </div>
                    

                <div className="gap-6 flex h-1/2 items-center">
                    <img src={authorsphoto2} alt="author`s foto" className="w-1/3" />
                    <div className="font-actor flex-col items-center   ">
                        <p className="flex items-center">As a frontend developer, this project serves as a part of my portfolio, showcasing some of the technologies I have mastered. It reflects my skills in web development while merging my passion for the outdoors with my professional expertise.</p>
                        <br />
                        <p className="flex items-center">Thank you for taking the time to explore my site and for considering it as a resource for your hiking endeavors. I hope you find the information helpful and inspiring as you embark on your own adventures in nature!&#127752;</p>
                    </div>
                </div>

                <p className="opacity-50 text-xl font-actor">This was FrontFox, thank you for your attention.</p>
                
            </div>
            <Social/>
        <hr className='mb-10 mt-10 opacity-50 text-white'/>
          <Footer/>
        </div>
    )
}

AboutUs()