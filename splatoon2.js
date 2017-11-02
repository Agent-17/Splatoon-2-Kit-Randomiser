var splatoon = {
    modes:[
		'Turf War',
		'Splat Zones',
		'Tower Control',
        'Rainmaker'],
    stages:[
        'Blackbelly Skatepark',
        'Humpback Pump Track',
        'Inkblot Art Academy',
        'Kelp Dome',
        'Manta Maria',
        'Moray Towers',
        'Musselforge Fitness',
        'Port Mackerel',
        'Snapper Canal',
        'Starfish Mainstage',
        'Sturgeon Shipyard',
        'The Reef'],
    weapons:[
        {name:'.52 Gal', subWeapon:'Point Sensor', specialWeapon:'Baller'},
        {name:'.96 Gal', subWeapon:'Sprinkler', specialWeapon:'Ink Armor'},
        {name:'Aerospray MG', subWeapon:'Suction Bomb', specialWeapon:'Curling-Bomb Launcher'},
        {name:'Aerospray RG', subWeapon:'Sprinkler', specialWeapon:'Baller'},
        {name:'Bamboozler 14 Mk I', subWeapon:'Curling Bomb', specialWeapon:'Tenta Missiles'},
        {name:'Blaster', subWeapon:'Toxic Mist', specialWeapon:'Splashdown'},
        {name:'Hero Blaster Replica', subWeapon:'Toxic Mist', specialWeapon:'Splashdown'},
        {name:'Custom Blaster', subWeapon:'Autobomb', specialWeapon:'Inkjet'},
        {name:'Carbon Roller', subWeapon:'Autobomb', specialWeapon:'Ink Storm'},
        {name:'Clash Blaster', subWeapon:'Splat Bomb', specialWeapon:'Sting Ray'},
        {name:'Classic Squiffer', subWeapon:'Point Sensor', specialWeapon:'Ink Armor'},
        {name:'Dapple Dualies', subWeapon:'Squid Beakon', specialWeapon:'Suction-Bomb Launcher'},
        {name:'Dualie Squelchers', subWeapon:'Point Sensor', specialWeapon:'Tenta Missiles'},
        {name:'Dynamo Roller', subWeapon:'Ink Mine', specialWeapon:'Sting Ray'},
        {name:'Gold Dynamo Roller', subWeapon:'Splat Bomb', specialWeapon:'Ink Armor'},
        {name:'E-liter 4K', subWeapon:'Ink Mine', specialWeapon:'Ink Storm'},
        {name:'Custom E-liter 4K', subWeapon:'Squid Beakon', specialWeapon:'Bubble Blower'},
        {name:'E-liter 4K Scope', subWeapon:'Ink Mine', specialWeapon:'Ink Storm'},
        {name:'Custom E-liter 4K Scope', subWeapon:'Squid Beakon', specialWeapon:'Bubble Blower'},
        {name:'Flingza Roller', subWeapon:'Splash Wall', specialWeapon:'Splat-Bomb Launcher'},
        {name:'Goo Tuber', subWeapon:'Suction Bomb', specialWeapon:'Splashdown'},
        {name:'H-3 Nozzlenose', subWeapon:'Point Sensor', specialWeapon:'Tenta Missiles'},
        {name:'Heavy Splatling', subWeapon:'Sprinkler', specialWeapon:'Sting Ray'},
        {name:'Hero Splatling Replica', subWeapon:'Sprinkler', specialWeapon:'Sting Ray'},
        {name:'Heavy Splatling Deco', subWeapon:'Splash Wall', specialWeapon:'Bubble Blower'},
        {name:'Inkbrush', subWeapon:'Splat Bomb', specialWeapon:'Splashdown'},
        {name:'Jet Squelcher', subWeapon:'Toxic Mist', specialWeapon:'Tenta Missiles'},
        {name:'Custom Jet Squelcher', subWeapon:'Burst Bomb', specialWeapon:'Sting Ray'},
        {name:'L-3 Nozzlenose', subWeapon:'Curling Bomb', specialWeapon:'Baller'},
        {name:'Luna Blaster', subWeapon:'Splat Bomb', specialWeapon:'Baller'},
        {name:'Mini Splatling', subWeapon:'Burst Bomb', specialWeapon:'Tenta Missiles'},
        {name:'N-ZAP \'85', subWeapon:'Suction Bomb', specialWeapon:'Ink Armor'},
        {name:'Octobrush', subWeapon:'Autobomb', specialWeapon:'Inkjet'},
        {name:'Herobrush Replica', subWeapon:'Autobomb', specialWeapon:'Inkjet'},
        {name:'Range Blaster', subWeapon:'Suction Bomb', specialWeapon:'Ink Storm'},
        {name:'Rapid Blaster', subWeapon:'Ink Mine', specialWeapon:'Splat-Bomb Launcher'},
        {name:'Rapid Blaster Pro', subWeapon:'Toxic Mist', specialWeapon:'Ink Storm'},
        {name:'Slosher', subWeapon:'Suction Bomb', specialWeapon:'Tenta Missiles'},
        {name:'Hero Slosher Replica', subWeapon:'Suction Bomb', specialWeapon:'Tenta Missiles'},
        {name:'Sloshing Machine', subWeapon:'Autobomb', specialWeapon:'Sting Ray'},
        {name:'Splash-o-matic', subWeapon:'Toxic Mist', specialWeapon:'Inkjet'},
        {name:'Splat Brella', subWeapon:'Sprinkler', specialWeapon:'Ink Storm'},
        {name:'Hero Brella Replica', subWeapon:'Sprinkler', specialWeapon:'Ink Storm'},
        {name:'Splat Charger', subWeapon:'Splat Bomb', specialWeapon:'Sting Ray'},
        {name:'Hero Charger Replica', subWeapon:'Splat Bomb', specialWeapon:'Sting Ray'},
        {name:'Firefin Splat Charger', subWeapon:'Splash Wall', specialWeapon:'Suction-Bomb Launcher'},
        {name:'Splatterscope', subWeapon:'Splat Bomb', specialWeapon:'Sting Ray'},
        {name:'Firefin Splatterscope', subWeapon:'Splash Wall', specialWeapon:'Suction-Bomb Launcher'},
        {name:'Splat Dualies', subWeapon:'Burst Bomb', specialWeapon:'Tenta Missiles'},
        {name:'Hero Dualie Replicas', subWeapon:'Burst Bomb', specialWeapon:'Tenta Missiles'},
        {name:'Enperry Splat Dualies', subWeapon:'Curling Bomb', specialWeapon:'Inkjet'},
        {name:'Splat Roller', subWeapon:'Curling Bomb', specialWeapon:'Splashdown'},
        {name:'Hero Roller Replica', subWeapon:'Curling Bomb', specialWeapon:'Splashdown'},
        {name:'Krak-On Splat Roller', subWeapon:'Squid Beakon', specialWeapon:'Baller'},
        {name:'Splattershot', subWeapon:'Burst Bomb', specialWeapon:'Splashdown'},
        {name:'Hero Shot Replica', subWeapon:'Burst Bomb', specialWeapon:'Splashdown'},
        {name:'Tentatek Splattershot', subWeapon:'Splat Bomb', specialWeapon:'Inkjet'},
        {name:'Splattershot Jr.', subWeapon:'Splat Bomb', specialWeapon:'Ink Armor'},
        {name:'Custom Splattershot Jr.', subWeapon:'Autobomb', specialWeapon:'Ink Storm'},
        {name:'Splattershot Pro', subWeapon:'Point Sensor', specialWeapon:'Ink Storm'},
        {name:'Forge Splattershot Pro', subWeapon:'Suction Bomb', specialWeapon:'Bubble Blower'},
        {name:'Sploosh-o-matic', subWeapon:'Curling Bomb', specialWeapon:'Splashdown'},
        {name:'Tenta Brella', subWeapon:'Squid Beakon', specialWeapon:'Bubble Blower'},
        {name:'Tri-Slosher', subWeapon:'Burst Bomb', specialWeapon:'Ink Armor'}
    ],
        /* UNRELEASED
        {name:'.52 Gal Deco', subWeapon:'Curling Bomb', specialWeapon:'Sting Ray'},
        {name:'.96 Gal Deco', subWeapon:'Splash Wall', specialWeapon:'Splashdown'},
        {name:'Bamboozler 14 Mk II', subWeapon:'Toxic Mist', specialWeapon:'Burst-Bomb Launcher'},
        {name:'Carbon Roller Deco', subWeapon:'Sprinkler', specialWeapon:'Inkjet'},
        {name:'Clash Blaster Neo', subWeapon:'Sprinkler', specialWeapon:'Tenta Missiles'},
        {name:'New Squiffer', subWeapon:'Autobomb', specialWeapon:'Baller'},
        {name:'Dapple Dualies Nouveau', subWeapon:'Toxic Mist', specialWeapon:'Ink Storm'},
        {name:'Dark Tetra Dualies', subWeapon:'Autobomb', specialWeapon:'Splashdown'},
        {name:'Light Tetra Dualies', subWeapon:'Sprinkler', specialWeapon:'Splat-Bomb Launcher'},
        {name:'Custom Dualie Squelchers', subWeapon:'Splat Bomb', specialWeapon:'Ink Armor'},
        {name:'Foil Flingza Roller', subWeapon:'Suction Bomb', specialWeapon:'Tenta Missiles'},
        {name:'Glooga Dualies', subWeapon:'Ink Mine', specialWeapon:'Inkjet'},
        {name:'Glooga Dualies Deco', subWeapon:'Splash Wall', specialWeapon:'Baller'},
        {name:'Custom Goo Tuber', subWeapon:'Curling Bomb', specialWeapon:'Inkjet'},
        {name:'H-3 Nozzlenose D', subWeapon:'Sprinkler', specialWeapon:'Ink Armor'},
        {name:'Hydra Splatling', subWeapon:'Autobomb', specialWeapon:'Ink Armor'},
        {name:'Custom Hydra Splatling', subWeapon:'Ink Mine', specialWeapon:'Splashdown'},
        {name:'Inkbrush Nouveau', subWeapon:'Ink Mine', specialWeapon:'Baller'},
        {name:'L-3 Nozzlenose D', subWeapon:'Burst Bomb', specialWeapon:'Inkjet'},
        {name:'Luna Blaster Neo', subWeapon:'Ink Mine', specialWeapon:'Suction-Bomb Launcher'},
        {name:'Zink Mini Splatling', subWeapon:'Curling Bomb', specialWeapon:'Ink Storm'},
        {name:'N-ZAP \'89', subWeapon:'Autobomb', specialWeapon:'Tenta Missiles'},
        {name:'Octobrush Nouveau', subWeapon:'Squid Beakon', specialWeapon:'Tenta Missiles'},
        {name:'Rapid Blaster Deco', subWeapon:'Suction Bomb', specialWeapon:'Inkjet'},
        {name:'Rapid Blaster Pro Deco', subWeapon:'Curling Bomb', specialWeapon:'Ink Armor'},
        {name:'Slosher Deco', subWeapon:'Sprinkler', specialWeapon:'Baller'},
        {name:'Sloshing Machine Neo', subWeapon:'Point Sensor', specialWeapon:'Splat-Bomb Launcher'},
        {name:'Neo Splash-o-matic', subWeapon:'Burst Bomb', specialWeapon:'Suction-Bomb Launcher'},
        {name:'Sorella Brella', subWeapon:'Toxic Mist', specialWeapon:'Splat-Bomb Launcher'},
        {name:'Neo Sploosh-o-matic', subWeapon:'Squid Beakon', specialWeapon:'Tenta Missiles'},
        {name:'Squeezer', subWeapon:'Splash Wall', specialWeapon:'Sting Ray'},
        {name:'Foil Squeezer', subWeapon:'Splat Bomb', specialWeapon:'Bubble Blower'},
        {name:'Custom(?) Tenta Brella', subWeapon:'', specialWeapon:''},
        {name:'Tri-Slosher Nouveau', subWeapon:'Splat Bomb', specialWeapon:'Autobomb Launcher'},
        */

    	gear: {
            headgear: [
                {name:'18K Aviators', mainAbility:'LDE'},
                {name:'Annaki Beret', mainAbility:'IResU'},
                {name:'Annaki Mask', mainAbility:'OG'},
                {name:'Armor Helmet Replica', mainAbility:'T'},
                {name:'Backwards Cap', mainAbility:'QR'},
                {name:'Bamboo Hat', mainAbility:'ISM'},
                {name:'Bike Helmet', mainAbility:'IRU'},
                {name:'Blowfish Bell Hat', mainAbility:'IRU'},
                {name:'Bobble Hat', mainAbility:'QSJ'},
                {name:'Bucket Hat', mainAbility:'SS'},
                {name:'Camo Mesh', mainAbility:'SSU'},
                {name:'Camping Hat', mainAbility:'SPU'},
                {name:'Cycle King Cap', mainAbility:'BDU'},
                {name:'Dust Blocker 2000', mainAbility:'Grizz'},
                {name:'Fake Contacts', mainAbility:'SCU'},
                {name:'Firefin Facemask', mainAbility:'RSU'},
                {name:'FishFry Visor', mainAbility:'SCU'},
                {name:'Five-Panel Cap', mainAbility:'CmB'},
                {name:'Half-Rim Glasses', mainAbility:'SPU'},
                {name:'Headlamp Helmet', mainAbility:'Grizz'},
                {name:'Hero Headphones Replica', mainAbility:'SS'},
                {name:'Hero Headset Replica', mainAbility:'RSU'},
                {name:'Hickory Work Cap', mainAbility:'SPU'},
                {name:'Hockey Helmet', mainAbility:'CB'},
                {name:'Jellyvader Cap', mainAbility:'ISS'},
                {name:'King Facemask', mainAbility:'ISS'},
                {name:'King Flip Mesh', mainAbility:'RSU'},
                {name:'Knitted Hat', mainAbility:'IResU'},
                {name:'Lightweight Cap', mainAbility:'SSU'},
                {name:'MTB Helmet', mainAbility:'T'},
                {name:'Noise Cancelers', mainAbility:'QR'},
                {name:'Paintball Mask', mainAbility:'CmB'},
                {name:'Painter\'s Mask', mainAbility:'CB'},
                {name:'Patched Hat', mainAbility:'CB'},
                {name:'Pilot Goggles', mainAbility:'SubPU'},
                {name:'Power Mask', mainAbility:'BDU'},
                {name:'Power Mask Mk I', mainAbility:'IResU'},
                {name:'Retro Specs', mainAbility:'QR'},
                {name:'Safari Hat', mainAbility:'LDE'},
                {name:'Samurai Helmet', mainAbility:'QSJ'},
                {name:'Skull Bandana', mainAbility:'SS'},
                {name:'Snorkel Mask', mainAbility:'ISS'},
                {name:'Soccer Headband', mainAbility:'T'},
                {name:'Special Forces Beret', mainAbility:'OG'},
                {name:'Squash Headband', mainAbility:'SS'},
                {name:'Squid Clip-Ons', mainAbility:'OG'},
                {name:'Squid Facemask', mainAbility:'ISM'},
                {name:'Squid Hairclip', mainAbility:'SSU'},
                {name:'Squidfin Hook Cans', mainAbility:'IResU'},
                {name:'Squidvader Cap', mainAbility:'SCU'},
                {name:'Squinja Mask', mainAbility:'QR'},
                {name:'Straw Boater', mainAbility:'QSJ'},
                {name:'Striped Beanie', mainAbility:'OG'},
                {name:'Studio Headphones', mainAbility:'ISM'},
                {name:'Sun Visor', mainAbility:'SubPU'},
                {name:'Takoroka Mesh', mainAbility:'BDU'},
                {name:'Takoroka Visor', mainAbility:'QSJ'},
                {name:'Tennis Headband', mainAbility:'CmB'},
                {name:'Tinted Shades', mainAbility:'LDE'},
                {name:'Urchins Cap', mainAbility:'SubPU'},
                {name:'Visor Skate Helmet', mainAbility:'LDE'},
                {name:'White Headband', mainAbility:'IRU'}
            ],
            clothing: [
                {name:'Anchor Life Vest', mainAbility:'Grizz'},
                {name:'Anchor Sweat', mainAbility:'CB'},
                {name:'Annaki Drive Tee', mainAbility:'TI'},
                {name:'Annaki Evolution Tee', mainAbility:'RP'},
                {name:'Armor Jacket Replica', mainAbility:'SCU'},
                {name:'B-Ball Jersey (Away)', mainAbility:'ISS'},
                {name:'Baby-Jelly Shirt', mainAbility:'BDU'},
                {name:'Baby-Jelly Shirt & Tie', mainAbility:'CB'},
                {name:'Basic Tee', mainAbility:'QR'},
                {name:'Berry Ski Jacket', mainAbility:'SPU'},
                {name:'Birded Corduroy Jacket', mainAbility:'RSU'},
                {name:'Black Inky Rider', mainAbility:'SubPU'},
                {name:'Black LS', mainAbility:'QSJ'},
                {name:'Black Squideye', mainAbility:'RSU'},
                {name:'Black Tee', mainAbility:'SPU'},
                {name:'Black Urchin Rock Tee', mainAbility:'IRU'},
                {name:'Black V-Neck Tee', mainAbility:'TI'},
                {name:'Blue Peaks Tee', mainAbility:'ISS'},
                {name:'Blue Sailor Suit', mainAbility:'SubPU'},
                {name:'Blue Tentatek Tee', mainAbility:'QR'},
                {name:'Camo Zip Hoodie', mainAbility:'QR'},
                {name:'Chilly Mountain Coat', mainAbility:'SSU'},
                {name:'Chirpy Chips Band Tee', mainAbility:'CB'},
                {name:'Choco Layered LS', mainAbility:'ISS'},
                {name:'Crimson Parashooter', mainAbility:'SCU'},
                {name:'Cycle King Jersey', mainAbility:'BDU'},
                {name:'Dark Urban Vest', mainAbility:'CB'},
                {name:'Eggplant Mountain Coat', mainAbility:'SS'},
                {name:'FA-01 Jacket', mainAbility:'IRU'},
                {name:'FA-01 Reversed', mainAbility:'QSJ'},
                {name:'FC Albacore', mainAbility:'RP'},
                {name:'Fugu Tee', mainAbility:'SSU'},
                {name:'Grape Hoodie', mainAbility:'QR'},
                {name:'Gray 8-Bit FishFry', mainAbility:'SCU'},
                {name:'Gray Hoodie', mainAbility:'SubPU'},
                {name:'Green Tee', mainAbility:'SS'},
                {name:'Green-Check Shirt', mainAbility:'SubPU'},
                {name:'Half-Sleeve Sweater', mainAbility:'ISS'},
                {name:'Hero Hoodie Replica', mainAbility:'IRU'},
                {name:'Hero Jacket Replica', mainAbility:'SSU'},
                {name:'Hightide Era Band Tee', mainAbility:'TI'},
                {name:'Hula Punk Shirt', mainAbility:'ISM'},
                {name:'Inkfall Shirt', mainAbility:'SCU'},
                {name:'Inkopolis Squaps Jersey', mainAbility:'CB'},
                {name:'Juice Parka', mainAbility:'Grizz'},
                {name:'King Jersey', mainAbility:'RP'},
                {name:'Layered Anchor LS', mainAbility:'RSU'},
                {name:'Layered Vector LS', mainAbility:'SS'},
                {name:'Lime Easy-Stripe Shirt', mainAbility:'IResU'},
                {name:'Logo Aloha Shirt', mainAbility:'IRU'},
                {name:'Matcha Down Jacket', mainAbility:'NS'},
                {name:'Mint Tee', mainAbility:'BDU'},
                {name:'Mister Shrug Tee', mainAbility:'IResU'},
                {name:'Navy Deca Logo Tee', mainAbility:'ISM'},
                {name:'Navy King Tank', mainAbility:'IResU'},
                {name:'Navy Striped LS', mainAbility:'IRU'},
                {name:'Negative Longcuff Sweater', mainAbility:'H'},
                {name:'Octobowler Shirt', mainAbility:'ISM'},
                {name:'Pink Easy-Stripe Shirt', mainAbility:'QSJ'},
                {name:'Positive Longcuff Sweater', mainAbility:'SSU'},
                {name:'Power Armor', mainAbility:'QR'},
                {name:'Power Armor Mk I', mainAbility:'IResU'},
                {name:'Prune Parashooter', mainAbility:'NS'},
                {name:'Pullover Coat', mainAbility:'TI'},
                {name:'Purple Camo LS', mainAbility:'SubPU'},
                {name:'Red Tentatek Tee', mainAbility:'SSU'},
                {name:'Red Vector Tee', mainAbility:'ISM'},
                {name:'Reel Sweat', mainAbility:'SPU'},
                {name:'Retro Sweat', mainAbility:'BDU'},
                {name:'Sailor-Stripe Tee', mainAbility:'RSU'},
                {name:'Samurai Jacket', mainAbility:'SCU'},
                {name:'School Cardigan', mainAbility:'RSU'},
                {name:'School Uniform', mainAbility:'IRU'},
                {name:'Shirt & Tie', mainAbility:'SS'},
                {name:'Shirt with Blue Hoodie', mainAbility:'SPU'},
                {name:'Short Knit Layers', mainAbility:'ISM'},
                {name:'Shrimp-Pink Polo', mainAbility:'NS'},
                {name:'Slash King Tank', mainAbility:'TI'},
                {name:'Slipstream United', mainAbility:'BDU'},
                {name:'Squid Satin Jacket', mainAbility:'QR'},
                {name:'Squid Squad Band Tee', mainAbility:'IResU'},
                {name:'Squiddor Polo', mainAbility:'Grizz'},
                {name:'Squinja Suit', mainAbility:'SS'},
                {name:'Sunny-Day Tee', mainAbility:'SCU'},
                {name:'Takoroka Windcrusher', mainAbility:'CB'},
                {name:'Urchins Jersey', mainAbility:'RSU'},
                {name:'Varsity Jacket', mainAbility:'ISS'},
                {name:'Vintage Check Shirt', mainAbility:'H'},
                {name:'Wet Floor Band Tee', mainAbility:'SSU'},
                {name:'White 8-Bit FishFry', mainAbility:'SubPU'},
                {name:'White Anchor Tee', mainAbility:'NS'},
                {name:'White Baseball LS', mainAbility:'QSJ'},
                {name:'White Deca Logo Tee', mainAbility:'IResU'},
                {name:'White Inky Rider', mainAbility:'SPU'},
                {name:'White King Tank', mainAbility:'H'},
                {name:'White Tee', mainAbility:'ISS'},
                {name:'White Urchin Rock Tee', mainAbility:'ISM'},
                {name:'White V-Neck Tee', mainAbility:'SS'},
                {name:'Yellow Layered LS', mainAbility:'QSJ'},
                {name:'Yellow Urban Vest', mainAbility:'H'},
                {name:'Zekko Baseball LS', mainAbility:'BDU'},
                {name:'Zekko Hoodie', mainAbility:'NS'},
                {name:'Zekko Jade Coat', mainAbility:'RP'},
                {name:'Zekko Redleaf Coat', mainAbility:'H'},
                {name:'Zink Layered LS', mainAbility:'RP'}],
            /*7-ELEVEN GEAR
            {name:'Brown FA-11 Bomber', mainAbility:'BDU'},
            {name:'Gray FA-11 Bomber', mainAbility:'CB'},
            {name:'Green V-Neck Limited Tee', mainAbility:'QSJ'},
            {name:'Red V-Neck Limited Tee', mainAbility:'QR'},
            */
            shoes: [
                {name:'Acerola Rain Boots', mainAbility:'RSU'},
                {name:'Armor Boot Replicas', mainAbility:'ISM'},
                {name:'Arrow Pull-Ons', mainAbility:'DR'},
                {name:'Birch Climbing Shoes', mainAbility:'SCU'},
                {name:'Black Dakroniks', mainAbility:'CB'},
                {name:'Black Flip-Flops', mainAbility:'OS'},
                {name:'Black Norimaki 750s', mainAbility:'SCU'},
                {name:'Black Trainers', mainAbility:'QR'},
                {name:'Blue & Black Squidkid IV', mainAbility:'QSJ'},
                {name:'Blue Moto Boots', mainAbility:'IResU'},
                {name:'Blue Slip-Ons', mainAbility:'SubPU'},
                {name:'Blueberry Casuals', mainAbility:'ISS'},
                {name:'Canary Trainers', mainAbility:'QSJ'},
                {name:'Cherry Kicks', mainAbility:'SJ'},
                {name:'Choco Clogs', mainAbility:'QR'},
                {name:'Crazy Arrows', mainAbility:'SJ'},
                {name:'Cream Basics', mainAbility:'SS'},
                {name:'Fringed Loafers', mainAbility:'CB'},
                {name:'Gold Hi-Horses', mainAbility:'RSU'},
                {name:'Gray Sea-Slug Hi-Tops', mainAbility:'BDU'},
                {name:'Hero Runner Replicas', mainAbility:'QSJ'},
                {name:'Hero Snowboots Replicas', mainAbility:'ISS'},
                {name:'Hunter Hi-Tops', mainAbility:'IRU'},
                {name:'Hunting Boots', mainAbility:'BDU'},
                {name:'Kid Clams', mainAbility:'SPU'},
                {name:'LE Soccer Shoes', mainAbility:'IResU'},
                {name:'Mawcasins', mainAbility:'IRU'},
                {name:'Mint Dakroniks', mainAbility:'DR'},
                {name:'Moto Boots', mainAbility:'QR'},
                {name:'Neon Delta Straps', mainAbility:'SubPU'},
                {name:'Neon Sea Slugs', mainAbility:'IResU'},
                {name:'Orange Arrows', mainAbility:'ISM'},
                {name:'Orca Hi-Tops', mainAbility:'SS'},
                {name:'Oyster Clogs', mainAbility:'RSU'},
                {name:'Pink Trainers', mainAbility:'SubPU'},
                {name:'Piranha Moccasins', mainAbility:'SJ'},
                {name:'Plum Casuals', mainAbility:'OS'},
                {name:'Power Boots', mainAbility:'ISM'},
                {name:'Power Boots Mk I', mainAbility:'BDU'},
                {name:'Pro Trail Boots', mainAbility:'IResU'},
                {name:'Punk Blacks', mainAbility:'CB'},
                {name:'Punk Whites', mainAbility:'SCU'},
                {name:'Purple Hi-Horses', mainAbility:'SPU'},
                {name:'Purple Sea Slugs', mainAbility:'RSU'},
                {name:'Red & Black Squidkid IV', mainAbility:'SCU'},
                {name:'Red Hi-Horses', mainAbility:'ISM'},
                {name:'Red-Mesh Sneakers', mainAbility:'SPU'},
                {name:'Roasted Brogues', mainAbility:'BDU'},
                {name:'Samurai Shoes', mainAbility:'SPU'},
                {name:'School Shoes', mainAbility:'ISS'},
                {name:'Smoky Wingtips', mainAbility:'OS'},
                {name:'Snow Delta Straps', mainAbility:'SSU'},
                {name:'Squinja Boots', mainAbility:'SSU'},
                {name:'Strapping Reds', mainAbility:'IResU'},
                {name:'Strapping Whites', mainAbility:'ISS'},
                {name:'Sunny Climbing Shoes', mainAbility:'SS'},
                {name:'Sunset Orca Hi-Tops', mainAbility:'DR'},
                {name:'Trail Boots', mainAbility:'IRU'},
                {name:'White Kicks', mainAbility:'SSU'},
                {name:'White Norimaki 750s', mainAbility:'SSU'},
                {name:'White Seahorses', mainAbility:'IRU'},
                {name:'Yellow-Mesh Sneakers', mainAbility:'CB'},
            ]
        },

        teamCombinations: [
            [0, 0, 0, 0, 1, 1, 1, 1],
            [0, 0, 0, 1, 0, 1, 1, 1],
            [0, 0, 0, 1, 1, 0, 1, 1],
            [0, 0, 0, 1, 1, 1, 0, 1],
            [0, 0, 0, 1, 1, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 0, 0, 0, 1, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 1, 0, 0, 0],
            [1, 1, 1, 0, 0, 1, 0, 0],
            [1, 1, 1, 0, 0, 0, 1, 0],
            [1, 1, 1, 0, 0, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 0],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 0, 0, 1, 1],
            [1, 0, 1, 1, 1, 0, 0, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 1, 1, 1]]
};

