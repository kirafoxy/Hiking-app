import Social from "../Social"


export default function HeroContent(){
    return(
        <div >
         <Social/>
            <div id="hero-section" className="w-2/4 mt-60 font-medium  container mx-auto tracking-wide ">
                <p className="before:content-['']
            before:inline-block  before:bg-yellow before:w-16 before:h-1 before:align-middle before:mr-4 font-medium  text-lg font-actor text-yellow uppercase ">A Hiking guide</p>
                <h1 className="py-8 font-light text-8xl text-white">Be Prepared For The Mountains And Beyond!</h1>
                <a href="#contents" className="after:content-[url('./assets/arrow_downward.png')]  after:items-center after:-py-4 after:ml-2 text-lg font-abel text-white">scroll down</a>
            </div>
        
        </div>
    )
}

HeroContent()