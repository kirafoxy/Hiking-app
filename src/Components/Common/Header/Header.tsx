
import { Link } from 'react-router-dom';
import greenMNT from '/src/assets/greenMNT.png'

export default function Header(){
    return(

        <div id="header" className='tracking-wide pt-12  flex flex-row container mx-auto leading-9'>
            <div className='flex flex-row'>
                <img className='align-middle mr-2 w-20' src={greenMNT} alt="greenMNT" />
            <Link to={`${import.meta.env.BASE_URL}`} className="text-white font-light text-4xl font-abel scroll-smooth">MNTN</Link>
            
            </div>
        
        
            <nav className='flex flex-row mx-auto'>
 
                <ul className='flex flex-row font-medium text-xl'>

                    <li className='mr-12 font-abel'>
                    <Link to={`${import.meta.env.BASE_URL}/equipment`} className='text-white hover:underline'>Equipment</Link>
                    </li>

                    <li className='mr-12 font-abel'>

                    <Link to={`${import.meta.env.BASE_URL}/aboutus`} className='text-white hover:underline '>About us</Link>
                    </li>


            
                </ul>
            </nav>

            {/* <button className="before:content-[url('./assets/avatar.png')] before:inline-block before:align-middle before:mr-2  rounded-lg  font-abel text-white font-light text-xl">Account</button> */}
            
        </div>
    )
}

Header();
