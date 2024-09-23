import shoes from '/src/assets/shoes1.jpg';
import backpack from '/src/assets/Backpack.jpg';
import clothing  from '/src/assets/Clothing.jpg';
import bottle from '/src/assets/Hydration.jpg';
import navigation from '/src/assets/Navigation.jpg';
import FirstAidKit from '/src/assets/FirstAidKit.jpg';
import knife  from '/src/assets/Knife.jpg';
import flashlight from '/src/assets/Flashlight.jpg';



export const equipments =[
    {
        index:1,
        id:'equipment1',
        title:'Hiking Boots',
        description:
        <div>
            <p>Good hiking boots are the foundation of any hike. They provide the support, traction, and protection needed for various terrains. Look for boots that are waterproof, breathable, and have a solid grip. The right pair should fit snugly but allow enough room for your toes to move freely, preventing blisters and discomfort.</p>
        </div>,
        image:shoes,
        reverse: false,
    },
    {
        index:2,
        id:'equipment2',
        title:'Backpack',
        description:
        <div>
            <p>
            A quality backpack is essential for carrying your gear. Choose one with padded shoulder straps and a supportive back panel to distribute weight evenly. For day hikes, a 20-30 liter pack is usually sufficient. Look for a backpack with multiple compartments to organize your items and an integrated hydration system or space for a water bladder.
            </p>
        </div>,
        image:backpack,
        reverse: true,
    },
    {
        index:3,
        id:'equipment3',
        title:'Clothing Layers',
        description:
        <div>
            <p>Dressing in layers is key to staying comfortable on the trail. Start with a moisture-wicking base layer, add an insulating layer like fleece or down for warmth, and finish with a waterproof and windproof outer layer. Avoid cotton, as it retains moisture and can lead to chafing and discomfort. Instead, opt for synthetic or wool materials that dry quickly.</p>
        </div>,
        image:clothing,
        reverse: false,
    },
    {
        index:4,
        id:'equipment4',
        title:'Water Bottle or Hydration System',
        description:
        <div>
            <p>Staying hydrated is critical on any hike. A durable water bottle or a hydration system like a CamelBak allows for easy access to water while on the move. Make sure to carry enough water for the duration of your hike, and consider bringing a portable water filter or purification tablets for longer trips.</p>
        </div>,
        image:bottle,
        reverse: true,
    },
    {
        index:5,
        id:'equipment5',
        title:'Navigation Tools',
        description:
        <div>
            <p>
            A map and compass are essential for navigating unfamiliar trails. Even if you have a GPS device or smartphone, always carry a physical map and know how to use a compass as a backup. These tools are crucial for staying on course, especially in remote areas with limited cell service.
            </p>
        </div>,
        image:navigation,
        reverse: false,
    },
    {
        index:6,
        id:'equipment6',
        title:'First Aid Kit',
        description:
        <div>
            <p>
            Accidents can happen, so it’s important to be prepared. A basic first aid kit should include bandages, antiseptic wipes, blister treatment, pain relievers, and any personal medications. Consider adding items like an emergency blanket and a small pair of scissors for more comprehensive coverage.
            </p>
        </div>,
        image:FirstAidKit,
        reverse: true,
    },
    {
        index:7,
        id:'equipment7',
        title:'Multi-Tool or Knife',
        description:
        <div>
            <p>A multi-tool or knife is a versatile piece of gear that can assist with a variety of tasks, from preparing food to repairing equipment. Choose a compact, lightweight option with essential tools like a knife, scissors, and screwdriver. This tool can be a lifesaver in unexpected situations.</p>
        </div>,
        image:knife,
        reverse: false,
    },
    {
        index:8,
        id:'equipment8',
        title:'Headlamp or Flashlight',
        description:
        <div>
            <p>
            A reliable light source is crucial, especially if your hike extends into the evening or takes place in low-light conditions. A headlamp is particularly useful because it frees up your hands. Make sure to pack extra batteries or a backup light just in case.
            </p>
        </div>,
        image:flashlight,
        reverse: true,
    },
]