
export default function Header(){
    return(
        <div id="header" className='tracking-wide pb-52 pt-12  flex flex-row container mx-auto leading-9'>

            <a className='text-white font-light text-4xl font-abel scroll-smooth' href="#footer">MNTN</a> 
           
            <nav className='flex flex-row mx-auto'>
 
                <ul className='flex flex-row font-medium text-xl'>
                    <li className='mr-12 font-abel'>
                     <a className='text-white hover:underline  ' href="#">Equipment</a>
                    </li>
                    <li className='mr-12 font-abel'>
                    <a className='text-white hover:underline ' href="#">About us</a> 
                    </li>
                    <li className='font-abel'>
                    <a className='text-white hover:underline ' href="#"> Blog </a>
                    </li>
                </ul>
            </nav>

            <button className="before:content-[url('./assets/avatar.png')] before:inline-block before:align-middle before:mr-2  rounded-lg  font-abel text-white font-light text-xl">Account</button>
            
        </div>
    )
}

Header();