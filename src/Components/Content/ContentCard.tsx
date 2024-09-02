
export default function ContentCard(props: any){
    return(
        
        <div id={props.id} 
        className={`container flex mx-auto mb-52 text-white items-center ${props.reverse ? "flex-row-reverse" : ""}`}> 
            <div>
                <p className="absolute -mt-56 opacity-20 font-bold z-0 text-24xl ">{props.number}</p>

                <div className="gap-6 ml-52 flex flex-col z-10 mr-20">
                  
                  <p className="before:content-['']
                before:inline-block before:bg-yellow before:w-16 before:h-1 before:align-middle before:mr-4 font-medium font-actor uppercase text-yellow text-lg">{props.subtitle}</p>
                  <h1 className="font-abel text-8xl ">{props.title}</h1>
                  <p className="font-actor text-lg">{props.description}</p>
                  <a className=" text-lg text-yellow after:content-[url('./assets/arrow_right.png')] after:align-middle after:ml-4" href={props.link}>read more</a>
                </div>
              </div>
          <img className=" mr-20" src={props.image} alt={props.title} />
         
        </div>


    )
}

ContentCard