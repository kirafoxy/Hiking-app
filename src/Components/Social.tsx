import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

export default function Social(){
    return(
        <div className='absolute top-1/2 items-center tracking-wide container flex flex-col  align-middle w-20 '>
            <p className='text-lg font-abel rotate-90 font-bold text-white '>Follow US</p>
            <a className='pb-8 pt-16' href="/">
                <img src={instagram} alt="instagram" />
            </a>
            <a className='' href="/">
                <img src={twitter} alt="instagram" />
            </a>
        </div>
    )
}

Social()