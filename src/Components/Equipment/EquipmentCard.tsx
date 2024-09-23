import { useEffect } from "react";


export default function EquipmentCard(props:any){
        useEffect(() => {
                
                window.scrollTo(0, 0);
              }, []);
    return(
        <> 
                <div id={props.id} className={`container text-white mx-auto  : ""}`}> 
                        <h1 className="font-abel text-4xl">{props.title}</h1>
                        <hr className='mb-10 opacity-50'/>
                       
                        <div className={`gap-6 flex h-1/2 mb-52 leading-loose tracking-wide items-center ${props.reverse ? "flex-row-reverse" : ""}`}>
                                
                                <p className="font-actor text-center mt-10 flex items-center text-2xl">{props.description}</p>
                               
                                <img className="w-1/2 h-1/2 mx-auto" src={props.image} alt={props.title} />
                        </div>
                        
                </div>
        
        </>

    )
}


EquipmentCard

