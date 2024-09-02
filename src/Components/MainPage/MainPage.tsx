
import Header from "../Common/Header/Header";
import HeroContent from "../Hero-content/HeroContent";
import Slider from "../Slider";



export default function MainPage(){
    return(
        <div className="h-105 w-full bg-no-repeat bg-hero-pattern bg-center bg-cover">
            <Header/>
            <HeroContent/>
            <Slider/>
        
        </div>
    )
}

MainPage()