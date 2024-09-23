
import Github from '../assets/Github.png'
import Telegram from '../assets/telegram.png'
import Gmail from '../assets/Email.png'
import siteFox from '../assets/paws.png'

export default function Social(){
    return(
        <div className='absolute top-1/2  tracking-wide container flex flex-col  align-middle w-40 '>

            
            <div >
                <ul className='flex-col flex items-center gap-6 align-middle mx-auto'> 
                    <li>
                         <p className='font-bold text-white text-lg font-abel'>Contact me</p>
                    </li>
                    <li>
                        <a className='' href="https://github.com/kirafoxy">
                        <img src={Github} alt="Github" />
                        </a>
                    </li>
                    <li>
                        <a className='' href="mailto:foxykira22@gmail.com">
                        <img src={Gmail} alt="Gmail" />
                        </a>
                    </li>
                    <li>
                        <a className='' href="https://t.me/babkina_kris">
                            <img src={Telegram} alt="Telegram" />
                        </a>
                    </li>
                    <li>
                        <a className='' href="https://frontfox.ru">
                            <img src={siteFox} alt="siteFox" />
                        </a>
                    </li>
                </ul>
                
               
            </div>
            
        </div>
    )
}

//  '
//
Social()