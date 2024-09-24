import article1img from '..//../assets/hiking01.png';
import article2img from '..//../assets/hiking02.png';
import article3img from '..//../assets/hiking03.png';
import secondimg1 from '..//../assets/hiking0102.jpg'
import secondimg2 from '..//../assets/map1.jpg'
import secondimg3 from '..//../assets/map2.jpeg'
import greenMNT from '..//../assets/blackMNT.png'

export const articles = [
  {
    index: 1,
    number: '01',
    id: 'article1',
    title: 'What level of hiker are you?',
    subtitle: 'Get Started',
    preview: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ',
    description:
      <div className="font-actor flex-col gap-4 items-center text-xl">
        <p className='mb-3'>
          Before embarking on any hiking adventure, it's essential to understand your own experience level. This self-awareness not only ensures your safety but also enhances the enjoyment of your hikes. Hiking levels are often categorized as novice, moderate, advanced moderate, expert, and expert backpacker.
        </p>
        <p className='italic'>Understanding where you fall on this spectrum helps you choose trails that align with your abilities.</p>
        <ul className='my-5'>
          <li>
            <span className='font-bold'>Novice</span>: If you are new to hiking, start with easy, well-marked trails. These hikes are usually short with minimal elevation gain, perfect for getting a feel for the outdoors.
          </li>
          <li className='my-3'>
            <span className='font-bold'>Moderate</span>: Once you’re comfortable with basic hikes, moderate trails offer a bit more challenge, featuring longer distances and some elevation gain.
          </li>
          <li>
            <span className='font-bold'>Advanced Moderate</span>: For those with more experience, advanced moderate trails present rugged terrain, significant elevation changes, and longer distances, requiring more stamina and navigation skills.
          </li>
          <li className='my-3'>
            <span className='font-bold'>Expert</span>: Expert hikers are those who can handle long, strenuous hikes, often in remote areas. These trails may involve technical climbing, challenging weather conditions, and a need for advanced navigation skills.
          </li>
          <li className='mb-3'>
            <span className='font-bold'>Expert Backpacker</span>: If multi-day hikes through backcountry wilderness are your calling, you might be an expert backpacker. This level demands comprehensive knowledge of survival skills, including camping, first aid, and dealing with unpredictable elements.
          </li>
          <p>
            By determining your hiking level, you can better plan your adventures and ensure that every hike is both enjoyable and within your capabilities.
          </p>
        </ul>
      </div>,
    image: article1img,
    secondimg: secondimg1,
    mountin: greenMNT,
    link: 'article1',
    reverse: false

  },

  {
    index: 2,
    id: 'article2',
    number: '02',
    title: 'Picking the right Hiking Gear!',
    subtitle: 'Hiking Essentials',
    preview: "The nice thing about beginning hiking is that you don`t really need any special gear, you can probably get away with things you already have Let`s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
    description:
      <div className="font-actor flex-col gap-4 items-center text-xl">
        <p>One of the best aspects of hiking is its accessibility; you don't need a lot of specialized gear to start. However, choosing the right equipment can make a significant difference in your comfort and safety.</p>
        <ul className='my-5'>
          <li><span className='font-bold'>1.Clothing</span>: A common mistake for beginners is wearing jeans or other heavy clothing, which can become uncomfortable when wet or sweaty. Instead, opt for moisture-wicking, quick-dry fabrics. Layering is key – start with a base layer to manage moisture, add an insulating layer for warmth, and finish with a waterproof outer layer.</li>
          <li className='my-3'><span className='font-bold'>2.Footwear</span>: Your choice of footwear can make or break your hike. For beginners on easy trails, sturdy sneakers may suffice, but as you advance, consider investing in hiking boots that offer better support, grip, and protection from the elements.</li>
          <li><span className='font-bold'>3.Backpack Essentials</span>: Even for short hikes, it’s wise to carry a small backpack with essentials. This includes water, snacks, a map, a first-aid kit, and a multi-tool. As you progress to more challenging hikes, you might add items like a headlamp, emergency shelter, and a portable water filter.</li>
        </ul>
        <p>Starting with the right gear sets the foundation for safe and enjoyable hiking experiences. Over time, you’ll learn what works best for you and can adjust your gear accordingly.</p>
      </div>,
    image: article2img,
    secondimg: secondimg2,
    mountin: greenMNT,
    link: 'article2',
    reverse: true,


  },

  {
    index: 3,
    id: 'article3',
    number: '03',
    title: 'Understand Your Map & Timing',
    subtitle: 'where you go is the key',
    preview: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..',
    description:
      <div className="font-actor flex-col gap-4 items-center text-xl">
        Proper preparation is crucial for any hiking adventure, especially when venturing into unfamiliar territory. Understanding how to read a map and manage your time effectively can be the difference between a successful hike and a stressful situation.
        <ul className='my-5'>
          <li>
            <p>
              <span className='font-bold'>Map Reading</span>: Before you set out, print a map of the trail and a hiking guide if available. If rain is in the forecast, protect them in a waterproof bag. Familiarize yourself with the trail, identifying key landmarks and junctions where you’ll need to make turns. This practice helps you stay on track and avoid getting lost.
            </p>
          </li>
          <li className='my-3'>
            <p>
              <span className='font-bold'> Timing Your Hike</span>: Estimate the time your hike will take based on the trail’s difficulty, your pace, and how often you plan to stop. It’s a good idea to start your hike early in the day to allow plenty of daylight for unexpected delays. Keep in mind the sunset time, especially in the fall and winter, when days are shorter.
            </p>

          </li>
          <li>
            <p>
              <span className='font-bold'>Trail Awareness</span>: As you hike, regularly check your map and guide to confirm you’re on the right path. Recognizing landmarks along the way will help you gauge your progress. If you’re unsure about your location, stop, assess, and backtrack if necessary.
            </p>
          </li>
        </ul>
        <p>

        </p>
      </div>,

    image: article3img,
    secondimg: secondimg3,
    mountin: greenMNT,
    link: 'article3',
    reverse: false

  }
];