import { createContext, useState } from 'react';
import DATA from '../data';


const CartContext = createContext();


export function CartProvider({children}) {
    const item = [
        {
            id: 1,
            productName: 'AB Night Vision RNVG',
            price: '$6,799 - $8,999',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2023/05/RNVG-2.jpg',
            category: 'nvg',
            info: 'The AB Night Vision RNVG is one of the most durable dual tube night vision system on the market. This unit is crafted out of 7075 aluminum making it very strong, and runs off a single CR123 battery up to 16 hours of use.  This unit comes with our 10 year warranty, and our limited lifetime service.',
            specs: 'Our SI/RNVG Goggle will come with a minimum FOM of 1800-2000+ depending on which tube variation selected.',
        },
        {
            id: 2,
            productName: 'L3 PEQ-15 IR laser',
            price: 'Out of Stock',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2023/04/PEQ-15-1.jpg',
            category: 'laser',
            info: 'The L3Harris ATPIAL AN/PEQ-15 is a small, lightweight, easy-to-use aiming system with integrated infrared and visible aiming lasers and an infrared illuminator. ATPIAL featuers a Rail-Grabber interface and is ruggedized to military environmental standards for use on small arms and crew-served weapons.',
            specs: 'Co-aligned Vis & IR Laser, Retains zero within 0.5 mrad, 6hr battery life, Adjustable Beam Divergence and  Integral Rail-Grabber interface.',
        },
        {
            id: 3,
            productName: 'PVS-14 L3 Unfilmed White Phosphor',
            price: '$4,299.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2023/01/PVS-14-600x600.jpg',
            category: 'nvg',
            info: 'The PVS-14 Night Vision Monocular, aka the Glock 19 of the night vision world. This exceptional device combines reliability, versatility, and outstanding performance, just like its firearm counterpart. This unit features manual gain control, IR illuminator, and runs off a single AA battery up to 50 hours of use. This unit comes with our 10 year warranty, and our limited lifetime service.',
            specs: 'Our SI/PVS-14 L3 Gen 3 Unfilmed White Phosphor Monocular will come with a minimum FOM of 2000+',
        },
        {
            id: 4,
            productName: 'EoTech CLIPNV-LR - Clip on NVG',
            price: '$10,125.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2022/01/CLIPNV-LR-600x600.jpg',
            category: 'thermal',
            info: 'The EOTECH® ClipNV-LR is a clip-on night vision device developed to provide users a rifle mounted solution with unrivaled target detection and identification capability. The ClipNV-LR is designed for use with medium to high (4-20X) magnification day sights to provide targeting at night while maintaining the day optic’s ballistic zero. Simple ON/OFF, Manual Gain Control and Focus knobs are ergonomically positioned on the device. It attaches quickly and simply to Picatinny (1913) rails. Features an integral auxiliary Picatinny rail for installation of accessory equipment such as IR illuminators/designators.',
            specs: 'Our EOTECH ClipNV-LR will come with a minimum FOM of 2376+.',
        },
        {
            id: 5,
            productName: 'L3Harris AN/PVS-31A 2376+ FOM',
            price: '$13,700.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2020/06/PVS-31-600x600.jpg',
            category: 'nvg',
            info: 'The AN/PVS-31A is one of the most compact and lightweight goggle on the market. This unit has a plethora of features such as independently pivoting pod design that allows the end user to rotate the pods away from the center, It also features a individual cut off which cuts power to the image intensifier by flipping the the unit up on the mount, and runs off a single AA battery up to 16 hours of use.  This unit comes with our 10 year warranty, and our limited lifetime service',
            specs: 'Our AN/PVS-31A Goggle White Phosphor will come with a minimum FOM of 2376+',
        },
        {
            id: 6,
            productName: 'IRAY RICO MICRO RH25 640',
            price: '$6,299.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2022/06/RH25-1-600x600.jpg',
            category: 'thermal',
            info: 'The RICO MICRO Series is an advanced electro-optic device miniaturized to deliver remarkably versatile functionality: Handheld, helmet mount, weapon mount, and clip-on. Weighing less than a pound, the MICRO will fit in the palm of your hand and can be used with standard dovetail helmet mounts or rifle-mounted as a stand-alone weapon sight. InfiRayOutdoor is blazing a new trail with features never-before-seen in a helmet-mounted thermal, such as onboard recording, onboard video play-back, and a high definition AMOLED display. The RH25 also features InfiRay’s latest high-performance 640×512, 12 μm sensor technology, MATRIX III processing, and a manual-focus f/1.0 objective lens to create an image that is unlike anything in its class.',
            specs: 'Optical Magnification 1X, Digital Magnification 4X. Germanium Objective Lens',
        },
        {
            id: 7,
            productName: 'B.E. MEYERS MAWL-ER IR/Visible Laser',
            price: '$3,599',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2021/11/MAWL-ER-BLK-1-600x600.jpg',
            category: 'laser',
            info: 'The MAWL®-ER (Extended Range) is a Class 3B multi-function laser illuminator/aiming device. It is a high powered variant of the MAWL®-DA with infrared illuminators intended to offer greater capability at distance or in environments with excessive ambient lighting conditions. The device is capable of emitting a visible green 520 nm pointer beam, 860 nm invisible infrared illumination beams, and an 852 nm IR point beam.',
            specs: 'Short/Mid/Long Range IR settings, Green Visible,  1 Year Warranty',
        },
        {
            id: 8,
            productName: 'L3harris GPNVG - Panoramic Night Vision Goggle',
            price: '$40,399.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2020/06/GPNVG-2-600x600.jpg',
            category: 'nvg',
            info: 'The Ground Panoramic Night Vision Goggle (GPNVG) is no longer requiring DOD approval and is available to the commercial market.. This unit provides the end user with 97° field of view verse the traditional 40°, and this unit is powered with the GPNVG Battery pack and cable. This unit comes with our 10 year warranty, and our limited lifetime service.',
            specs: 'Our Ground Panoramic Night Vision Goggle (GPNVG) will come with a minimum FOM of 2376+',
        },
        {
            id: 9,
            productName: 'IRAY RICO ALPHA 640 50MM THERMAL WEAPON SIGHT',
            price: '$6,999.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2022/09/IRAY-ALPHA-640-300x300.jpg',
            category: 'thermal',
            info: 'The RICO ALPHA is the culmination of decades of user feedback, research, development, and American engineering all imbedded in a thermal weapon-sight that is purpose built for the discerning nighthunter. From the Autoloading Guarded Power Connector (AGPC) to the battery latch design, the RQD Quick Release Mount, to the ultra-rigid housing with Tactile Ridge Positioning and Single Finger Focus(SFF) design, the ALPHA was developed by hunters for absolute performance in every way. Additional performance-based features of the ALPHA include image and video capture, multiple dynamic reticles, stadiametric rangefinder and wireless connectivity. To top all that off, the ALPHA is proudly designed, machined, assembled and serviced right here in the great state of Texas.',
            specs: 'Video and image recording, 5 year warranty, 6 Hour run time, Standby mode',
        },
        {
            id: 10,
            productName: 'Team Wendy EXFIL Ballistic Helmet',
            price: '$1,326.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2023/04/TW-WOLF-BALL-MULTICAM.jpg',
            category: 'helmet',
            info: 'The EXFIL® Ballistic features a hybrid composite shell for increased strength with a unique geometry for optimal fit. An innovative, boltless CAM FIT™ retention quickly adjusts to individual head shapes, providing a comfortable and stable fit. A Zorbium® foam liner protects against impact and allows for an overhead communications headband. Customizable fit is achieved through a set of moveable comfort pads. A lanyard compatible Wilcox® shroud secures any standard NVG mount.',
            specs: 'Boltless CAM FIT Retention System, NIJ Level 3-A, Zorbium Foam Liner, Built in Shroud, 2.0 Rail System',
        },
        {
            id: 11,
            productName: 'UANVB KATANA L3 UNFILMED WHITE PHOSPHOR',
            price: '$8,999.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2023/07/katana-300x300.jpg',
            category: 'nvg',
            info: 'The UANVB Katana is one of the most affordable articulating dual tube systems on the market. This unit has very similar features to the DTNVS such as its ability to independently pivot the pods away from the center of the housing and this unit runs off a single C123 battery.  This unit comes with our 10 year warranty, and our limited lifetime service. This unit does not have the LEMO port.',
            specs: 'Our UANVB KATANA L3 UNFILMED WHITE PHOSPHOR nods will come with a minimum FOM of 2000+',
        },
        {
            id: 12,
            productName: 'Contractor 640 TWS 3-12x',
            price: '$5,799.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2023/01/CONTRACTOR-640-1-600x600.jpg',
            category: 'thermal',
            info: 'The Contractor Thermal Weapon Sight is built around our proprietary ArmaCORETM 12 micron thermal core. It combines extensive detection capabilities and a rich, detailed picture with onboard image processing, wireless communication interface, GPS, and internal memory. The Contractor Thermal Weapon Sight is a premium-component build that is noticeably more compact and lighter weight than conventional thermal scopes. It provides up to four hours of continuous operation on two CR123 batteries—a 50% longer run-time based on lower power consumption as compared to similar units on the market.',
            specs: 'Warranty 3 years w/ registration, Recoil Rating Up to .50cal, Detector Type ArmaCORE™ 640 x 480 12um Thermal Core, Memory 4 Hours of Video',
        },
        {
            id: 13,
            productName: 'AB NIGHT VISION FDE ARNVG L3 Unfilmed White Phosphor',
            price: '$10,099.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2023/08/fde-arnvg-1.jpg',
            category: 'nvg',
            info: 'The AB Night Vision ARNVG is a big game changer to the market due to its construction and features. This unit is crafted out of 7075 aluminum like the RNVG, it also has very similar features to the DTNVS such as its ability to independently pivot the pods away from the center of the housing, as well as having an individual cut off which cuts power to the image intensifier by rotating the pods away from the center of the housing, and this unit runs off a single CR123 battery up to 18 hours of use. This unit comes with our 10 year warranty, and our limited lifetime service.',
            specs: 'Our AB Night Vision ARNVG nods will come with a minimum FOM of 2000+',
        },
        {
            id: 14,
            productName: 'Team Wendy EXFIL LTP Bump Helmet',
            price: '$449.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2020/06/TW-BLK-1.jpg',
            category: 'helmet',
            info: 'The EXFIL® LTP (Lightweight, Tactical, Polymer) bump helmet offers a stable, comfortable platform for mounting night vision and other accessories while providing the highest level of impact protection. The built-in NVG shroud utilizes an integrated Wilcox® machined aluminum shroud insert. The helmet features a Zorbium® foam liner along with a CAM FIT™ retention system with easily adjustable Cam Lock sliders and a micro-adjustable Boa® dial.',
            specs: 'EXFIL® LTP Rail 2.0 System, Compatible with all standard EXFIL® accessories, Allows installation of the EXFIL® Ballistic Visor and the EXFIL® Face Shield',
        },
        {
            id: 15,
            productName: 'B.E. Meyers MAWL-C1+ IR/Visible Laser',
            price: '$3,649.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2023/04/MAWL-C1-FDE-1.jpg',
            category: 'laser',
            info: 'The MAWL-C1+ addresses the use of space and ergonomic shortcomings of lasers on short carbines like the SOCOM Mk18, it mounts offset from the rail to minimize impact on hand position and optic field of view. This revolutionary design leaves the shooter completely unimpeded by mounting mission essential accessories. The offset placement of the laser body allows the onboard fire buttons to be located directly over the rail clamp. This lower profile creates much easier access to the controls, allowing the operator to keep their same firing grip while actuating the laser. Regardless, the MAWL-C1+ is completely ambidextrous. This is achieved through a never-before-seen modular design that allows the head and tail to separate from the body, trade places, and be reassembled on the opposite side.',
            specs: '1 Year Warranty, Green Visible, Short/Mid/Long Range IR settings',
        },
        {
            id: 16,
            productName: 'WILCOX L4 G24 MOUNT',
            price: '$568.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2020/06/G24-BLK.jpg',
            category: 'accessories',
            info: 'The L4 G24 Low Profile Breakaway Mount is a solid platform designed for interfacing with a variety of NVGs, providing a means of attachment to a MICH/ACH helmet using an Ops-Core VAS or standard Army shroud. This mounting system features a breakaway mechanism which allows the mount to “break away” from the base under a stressed condition, such as interference during fast roping, maritime operations, hard impact, or when entering/exiting mobility platforms, thereby reducing the potential for induced neck injury and NVG breakage. The Wilcox L4 G24 product line features a wide range of adjustments to customize the position of the NVG for proper eye position, and provide a maximum low profile of the helmet.',
            specs: 'Breakaway, Aluminum Construction, Lifetime Warranty, Dovetail Interface, 1.4in Travel',
        },
        {
            id: 17,
            productName: 'AB Night Vision Battery Pack',
            price: '$334.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2022/12/BATTERY-PACK-1-600x600.jpg',
            category: 'accessories',
            info: 'The AB Night Vision battery pack is a low profile pack designed to be a rugged operator-oriented alternative to standard MIL battery packs originally designed for aviation applications. A helmet mounted battery pack that can be used as a counterweight and designed with simplicity in mind. The pack is activated with an easily accessible power knob. It features an 18inch LEMO cable for a multitude of routing options to best fit the users helmet configuration. Machined from derlin and aircraft grade aluminum alloy, it is impact/crush proof and water resistant. Compatible with (2) CR123 or (4) AA batteries.',
            specs: 'Velcro Backing, AA or C123 Capability, LEMO 4 Pin Connector, On/Off Knob',
        },
        {
            id: 18,
            productName: 'NOISEFIGHTERS PANOBRIDGE MK3',
            price: '$374.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2023/07/mk3-panobridge-600x600.jpg',
            category: 'accessories',
            info: 'Panobridge™ is the first-ever night vision bridge mount that provides an adjustable field of view with milspec AN/PVS-14s. At an industry-leading 1.7oz total, it weighs less than a single milspec J-Arm. Supported by a number of accessory arms and adapters, it is also fully compatible with the most popular thermal monoculars. The newest Mk3 variant introduces the PanoLok™ bar to lock the bridge at a specific panning angle and prevent devices from being bumped out of position during hard use. We also include our new Night Vision Accessory Tool at no extra cost. Introducing an entirely new way to see more of the dark.',
            specs: 'Made in USA, NVG Accessory Tool, 1.7 OZ WEIGHT',
        },
        {
            id: 19,
            productName: 'SI/NVG Retention Harness',
            price: '$14.98',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2023/04/LANYARD-FDE-1.jpg',
            category: 'accessories',
            info: 'The retention harness was designed to be a low-profile and unobtrusive lanyard to secure your NV securely. It allows for full movement of your NVG’s while still securing them to you lid. The retention harness weighs less than 1oz, and is made rigid webbing . We include 1 1/2 feet of Mil-Spec shock cord to your order so you can run it how you want. The retention harness is mounted by the use of VELCRO brand Velcro for extra quality and security. Its design is the shape of a Core Survival Hel Star 6 for those that would like to mount the strobe on the back of it. It also features a elastic slot on the back to mount AA or CR123A Batteries!',
            specs: 'Comes with 1 1/2 feet of mil-spec shock cord, Velcro backing, Elastic on the back to fit batteries',
        },
        {
            id: 20,
            productName: 'L3 Harris NGAL A1',
            price: 'Out of Stock',
            productImage: 'https://steeleindustries.com/wp-content/uploads/2023/04/NGAL-1-600x600.jpg',
            category: 'laser',
            info: 'The L3Harris NGAL is a rugged, ultra-compact and lightweight system designed to be compatible with all generations of night vision devices. NGAL uses an advanced illuminator design to achieve a more uniform Near Infrared illuminator beam for increased Situation Awareness. High-efficiency electronics support increased system performance at reduced Size, Weight and Power.',
            specs: 'Independent aim and illuminator boresight adjustment, 3.5 hr battery life, Co-aligned aiming beams with boresight retention',
        },
        ];

   const [items, setItems] = useState([]);

   const addToCart = (productName, price) => {
    setItems((prevState) => [...prevState, { productName, price }]);
   }
console.log(items);
    return (
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
 }





export default CartContext;