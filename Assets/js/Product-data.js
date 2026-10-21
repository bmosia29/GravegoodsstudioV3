const products = [
{
  "id": "circular-horseshoe-barbell",
  "name": "Circular Horseshoe Barbell",
  "price": 150.00,
  "images": ["Assets/images/product images/CircularHorseshoeBarbell1.jpg"],
  "category": "Barbell",
  "description": "Circular horseshoe barbell.",
  "stock": 5
},
{
  "id": "curved-banana-barbell",
  "name": "Curved Banana Barbell",
  "price": 84.99,
  "images": ["Assets/images/product images/CURVEDBANANA-BARBELL2.jpg"],
  "category": "Barbell",
  "description": "Curved banana barbell.",
  "stock": 5
},
{
  "id": "nose-straight",
  "name": "Nose Straight",
  "price": 45.99,
  "images": ["Assets/images/product images/NoseStraight1.jpg"],
  "category": "Nose",
  "description": "Nose straight jewellery.",
  "stock": 5
},
{
  "id": "segment-ring",
  "name": "Segment Ring",
  "price": 34.99,
  "images": ["Assets/images/product images/Segment-Ring4.jpg"],
  "category": "Ring",
  "description": "Segment ring.",
  "stock": 5
},
{
  "id": "2mm-dermal-top-anchor-set-crystal",
  "name": "2MM Dermal Top| Anchor Set | Crystal",
  "price": 180,
  "images": ["Assets/images/GC - DERMAL JEWELLERY/2MM-DERMAL-TOP-ANCHOR-SET-CRYSTAL.png"],
  "category": "Dermal",
  "description": "2mm dermal top and anchor set with crystal.",
  "stock": 5
},
{
  "id": "3-4-5mm-dermal-top-black",
  "name": "3_4_5MM Dermal Top Black",
  "price": 130,
  "images": ["Assets/images/GC - DERMAL JEWELLERY/3-4-5-MM-DERMAL-TOP-BLACK.png"],
  "category": "Dermal",
  "description": "Black dermal top available in 3, 4 and 5mm.",
  "stock": 5
},
{
  "id": "3mm-dermal-top-clear",
  "name": "3MM Dermal Top| Clear",
  "price": 130,
  "images": ["Assets/images/GC - DERMAL JEWELLERY/3MM-DERMAL-TOP-CLEAR.png"],
  "category": "Dermal",
  "description": "Clear 3mm dermal top. High shine crystal.",
  "stock": 5
},
{
  "id": "3mm-dermal-skin-diver-clear",
  "name": "3MM Dermal Skin Diver| Clear",
  "price": 170,
  "images": ["Assets/images/GC - DERMAL JEWELLERY/3MM-SKIN-DIVER-CLEAR.png"],
  "category": "Dermal",
  "description": "3mm skin diver dermal top, clear.",
  "stock": 5
},
{
  "id": "3mm-dermal-top-light-sapphire",
  "name": "3MM Dermal Top| LIGHT SAPPHIRE",
  "price": 130,
  "images": ["Assets/images/GC - DERMAL JEWELLERY/4MM-DERMAL-TOP-LIGHT-SAPPHIRE.png"],
  "category": "Dermal",
  "description": "3mm dermal top in light sapphire.",
  "stock": 5
},
{
  "id": "0-8-x-8-nose-ring-sterling-silver-double-ring-design",
  "name": "0.8 X 8 NOSE RING| STERLING SILVER| DOUBLE RING DESIGN",
  "price": 180,
  "images": ["Assets/images/GC - NOSE JEWELLERY/0-8-x-8-NOSE-RING-STERLING-SILVER-DOUBLE-RING-DESIGN.png"],
  "category": "Nose",
  "description": "0.8 x 8 sterling silver double ring nose ring.",
  "stock": 5
},
{
  "id": "0-8mm-nose-jewellery-pigtail-gold-cubic-zirconia",
  "name": "0.8MM Nose Jewellery| PIGTAIL| GOLD| CUBIC ZIRCONIA",
  "price": 170,
  "images": ["Assets/images/GC - NOSE JEWELLERY/0-8MM-PIGTAIL-GOLD-CUBIC-ZIRCONIA-1-5MM-CRYSTAL.png"],
  "category": "Nose",
  "description": "Gold pigtail nose jewellery with cubic zirconia.",
  "stock": 5
},
{
  "id": "0-8mm-nose-jewellery-pigtail-gold",
  "name": "0.8MM NOSE JEWELLERY| PIGTAIL| GOLD",
  "price": 80,
  "images": ["Assets/images/GC - NOSE JEWELLERY/0-8MM-PIGTAIL-GOLD-JEWELLED.png"],
  "category": "Nose",
  "description": "Gold jewelled pigtail nose jewellery.",
  "stock": 5
},
{
  "id": "0-8mm-nose-jewellery-pigtail-plain-steel",
  "name": "0.8MM NOSE JEWELLERY| PIGTAIL| PLAIN STEEL",
  "price": 170,
  "images": ["Assets/images/GC - NOSE JEWELLERY/0-8MM-STEEL-PLAIN-PIGTAIL.png"],
  "category": "Nose",
  "description": "Plain steel pigtail nose jewellery.",
  "stock": 5
},
{
  "id": "10mm-nose-jewellery-nose-ring-gold-crystal",
  "name": "10MM Nose Jewellery | Nose Ring | Gold | Crystal",
  "price": 150,
  "images": ["Assets/images/GC - NOSE JEWELLERY/10MM-GOLD-CRYSTAL-NOSE-RING.png"],
  "category": "Nose",
  "description": "10mm gold nose ring with crystal.",
  "stock": 5
},
{
  "id": "10mm-nose-jewellery-nose-ring-steel-crystal",
  "name": "10MM NOSE JEWELLERY| NOSE RING| STEEL| CRYSTAL",
  "price": 110,
  "images": ["Assets/images/GC - NOSE JEWELLERY/10MM-STEEL-CRYSTAL-NOSE-RING.png"],
  "category": "Nose",
  "description": "10mm steel nose ring with crystal.",
  "stock": 5
},
{
  "id": "10mm-nose-jewellery-pig-tail-steel-light-sapphire-blue",
  "name": "10MM NOSE JEWELLERY| PIG TAIL| STEEL| LIGHT SAPPHIRE BLUE",
  "price": 90,
  "images": ["Assets/images/GC - NOSE JEWELLERY/1MM-PIGTAIL-STEEL-LIGHT-SAPPHIRE-BLUE.png"],
  "category": "Nose",
  "description": "Steel pigtail with light sapphire blue stone.",
  "stock": 5
},
{
  "id": "10mm-nose-jewellery-nose-ring-3-stone-sterling-steel-silver",
  "name": "10MM NOSE JEWELLERY| NOSE RING |3-STONE| STERLING STEEL| SILVER",
  "price": 150,
  "images": ["Assets/images/GC - NOSE JEWELLERY/3-STONE-STERLING-SILVER-NOSE-RING.png"],
  "category": "Nose",
  "description": "Three-stone sterling silver nose ring.",
  "stock": 5
},
{
  "id": "6mm-nose-jewellery-nose-ring-black-crystal-silver",
  "name": "6MM NOSE JEWELLERY| NOSE RING|BLACK CRYSTAL| SILVER",
  "price": 120,
  "images": ["Assets/images/GC - NOSE JEWELLERY/6MM-BLACK-CRYSTAL-NOSE-RING.png"],
  "category": "Nose",
  "description": "6mm black crystal nose ring, silver.",
  "stock": 5
},
{
  "id": "6mm-nose-jewellery-nose-ring-clip-in-nose-sterling-silver",
  "name": "6MM NOSE JEWELLERY| NOSE RING|CLIP-IN-NOSE| STERLING SILVER",
  "price": 100,
  "images": ["Assets/images/GC - NOSE JEWELLERY/6MM-STERLING-SILVER-CLIP-IN-NOSE-RING.png"],
  "category": "Nose",
  "description": "6mm clip-in nose ring in sterling silver.",
  "stock": 5
},
{
  "id": "8mm-nose-jewellery-nose-ring-gold",
  "name": "8MM NOSE JEWELLERY| NOSE RING| GOLD",
  "price": 150,
  "images": ["Assets/images/GC - NOSE JEWELLERY/8MM-GOLD-NOSE-RING.png"],
  "category": "Nose",
  "description": "8mm gold nose ring.",
  "stock": 5
},
{
  "id": "8mm-nose-jewellery-nose-ring-silver-twisted",
  "name": "8MM NOSE JEWELLERY| NOSE RING| SILVER  TWISTED",
  "price": 150,
  "images": ["Assets/images/GC - NOSE JEWELLERY/8MM-SILVER-TWISTED-NOSE-RING.png"],
  "category": "Nose",
  "description": "8mm twisted silver nose ring.",
  "stock": 5
},
{
  "id": "8mm-nose-jewellery-flower-ring-silver-gold-coated-twisted-crystal",
  "name": "8MM NOSE JEWELLERY| FLOWER RING| SILVER GOLD COATED TWISTED CRYSTAL",
  "price": 150,
  "images": ["Assets/images/GC - NOSE JEWELLERY/8MM-STERLING-SILVER-GOLD-COATED-TWIST-CRYSTAL-FLOWER-RING.png"],
  "category": "Nose",
  "description": "Flower-shaped nose ring with crystals, gold coated.",
  "stock": 5
},
{
  "id": "1-6-x-10-x-5-5-belly-jewellery-slave-ring-jewelled-top",
  "name": "1.6 X 10 X 5_5 BELLY JEWELLERY| SLAVE RING| JEWELLED TOP",
  "price": 240,
  "images": ["Assets/images/GC JEWELLERY - BELLY/1-6-X-10-X-5-5-BELLY-BAR-SLAVE-RING-JEWELLED-TOP.png"],
  "category": "Belly",
  "description": "Belly bar with jewelled top and slave ring.",
  "stock": 5
},
{
  "id": "1-6-x-10-x-5-5-belly-bar-slave-ring",
  "name": "1.6 X 10 X 5_5 BELLY BAR| SLAVE RING",
  "price": 240,
  "images": ["Assets/images/GC JEWELLERY - BELLY/1-6-X-10-X-5-5-BELLY-BAR-SLAVE-RING.png"],
  "category": "Belly",
  "description": "Classic 1.6 x 10 x 5.5 belly bar slave ring.",
  "stock": 5
},
{
  "id": "1-6-x-10-x-5-5-belly-bar-steel-iridescent",
  "name": "1.6 X 10 X 5/5 Belly Bar | Steel Iridescent",
  "price": 120,
  "images": ["Assets/images/Belly-Piecing-image.png"],
  "category": "Belly",
  "description": "1.6 x 10 x 5.5 belly bar made from surgical steel with an iridescent finish. Durable and comfortable for everyday wear.",
  "stock": 5
},
{
  "id": "1-6-x-10-x-5-8-belly-bar-steel-black-double-jewelled",
  "name": "1.6 X 10 X 5/8 Belly Bar | Steel | Black Double Jewelled",
  "price": 100,
  "images": ["Assets/images/Belly-Piecing-image.png"],
  "category": "Belly",
  "description": "Steel belly bar with black double jewelled detailing.",
  "stock": 5
},
{
  "id": "1-6-x-10-x-5-8-belly-bar-steel-fuchsia",
  "name": "1.6 X 10 X 5_8 BELLY BAR| STEEL FUCHSIA",
  "price": 120,
  "images": ["Assets/images/GC JEWELLERY - BELLY/1-6-X-10-X-5-8-BELLY-BAR-STEEL-FUCHSIA.png"],
  "category": "Belly",
  "description": "Steel fuchsia belly bar.",
  "stock": 5
},
{
  "id": "1-6-x-10-x-5-8-belly-bar-steel-iridescent",
  "name": "1.6 X 10 X 5_8 BELLY BAR| STEEL IRIDESCENT",
  "price": 120,
  "images": ["Assets/images/GC JEWELLERY - BELLY/1-6-X-10-X-5-8-BELLY-BAR-STEEL-IRIDESCENT.png"],
  "category": "Belly",
  "description": "Steel iridescent belly bar.",
  "stock": 5
},
{
  "id": "1-6-x-12-belly-bar-hinged-crescent-tatuim-gold-pvd",
  "name": "1.6 X 12 BELLY BAR| HINGED CRESCENT| TATUIM GOLD PVD",
  "price": 400,
  "images": ["Assets/images/GC JEWELLERY - BELLY/1-6-X-12-BELLY-BAR-HINGED-CRESCENT-TITANIUM-GOLD-PVD.png"],
  "category": "Belly",
  "description": "Hinged crescent belly bar in titanium gold PVD.",
  "stock": 5
},
{
  "id": "1-6-x-12-belly-bar-hinged-crescent-titanium",
  "name": "1.6 X 12 Belly Bar | Hinged Crescent | Titanium",
  "price": 400,
  "images": ["Assets/images/GC JEWELLERY - BELLY/1-6-X-12-BELLY-BAR-HINGED-CRESCENT-TITANIUM.png"],
  "category": "Belly",
  "description": "Titanium hinged crescent belly bar.",
  "stock": 5
},
{
  "id": "1-6-x-12-belly-bar-crystal",
  "name": "1.6 X 12 BELLY BAR| CRYSTAL",
  "price": 100,
  "images": ["Assets/images/GC JEWELLERY - BELLY/1-6-X-12-X-10-5-8-5-BELLY-BAR-CRYSTAL-ICE.png"],
  "category": "Belly",
  "description": "Crystal ice belly bar.",
  "stock": 5
},
{
  "id": "1-6-x-8-x-5-8-belly-bar-double-jewelled-gold",
  "name": "1.6 X 8 X 5_8|BELLY BAR| DOUBLE JEWELLED| GOLD",
  "price": 180,
  "images": ["Assets/images/GC JEWELLERY - BELLY/1-6-X-8-X-5-8-BELLY-BAR-GOLD-DOUBLE-JEWELLED-PVD.png"],
  "category": "Belly",
  "description": "Double jewelled gold belly bar.",
  "stock": 5
},
{
  "id": "1-6-x-8-x-5-8-belly-ring-blue-jewelled-sqaure-design",
  "name": "1.6 X 8 X 5_8|BELLY RING| BLUE JEWELLED| SQAURE DESIGN|",
  "price": 110,
  "images": ["Assets/images/GC JEWELLERY - BELLY/BLUE-JEWELLED-SQUARE-DESIGN-BELLY-RING.png"],
  "category": "Belly",
  "description": "Blue jewelled square design belly ring.",
  "stock": 5
},
{
  "id": "1-6-x-8-x-5-8-belly-ring-brown-beige-jewelled-round-jewelled-design",
  "name": "1.6 X 8 X 5_8|BELLY RING| BROWN_BEIGE JEWELLED| ROUND JEWELLED DESIGN|",
  "price": 110,
  "images": ["Assets/images/GC JEWELLERY - BELLY/BROWN-BEIGE-ROUND-JEWELLED-BELLY-RING.png"],
  "category": "Belly",
  "description": "Brown/beige round jewelled belly ring.",
  "stock": 5
},
{
  "id": "1-6-x-8-x-5-8-belly-ring-cross-badge",
  "name": "1.6 X 8 X 5_8|BELLY RING| CROSS BADGE",
  "price": 110,
  "images": ["Assets/images/GC JEWELLERY - BELLY/CROSS-BADGE-BELLY-RING.png"],
  "category": "Belly",
  "description": "Cross badge belly ring.",
  "stock": 5
},
{
  "id": "1-6-x-8-x-5-8-belly-ring-dainty-dangling-leaf",
  "name": "1.6 X 8 X 5_8|BELLY RING| DAINTY DANGLING LEAF",
  "price": 110,
  "images": ["Assets/images/GC JEWELLERY - BELLY/DAINTY-DANGLING-LEAF-BELLY-RING.png"],
  "category": "Belly",
  "description": "Dainty dangling leaf belly ring.",
  "stock": 5
},
{
  "id": "belly-ring-double-heart-dangling-leaf",
  "name": "BELLY RING| DOUBLE HEART DANGLING LEAF",
  "price": 110,
  "images": ["Assets/images/GC JEWELLERY - BELLY/DOUBLE-HEART-DANGLING-BELLY-RING.png"],
  "category": "Belly",
  "description": "Double heart dangling belly ring.",
  "stock": 5
},
{
  "id": "belly-ring-double-jewelled-cross",
  "name": "BELLY RING| DOUBLE JEWELLED CROSS",
  "price": 150,
  "images": ["Assets/images/GC JEWELLERY - BELLY/DOUBLE-JEWELLED-CROSS-BELLY-RING.png"],
  "category": "Belly",
  "description": "Double jewelled cross belly ring.",
  "stock": 5
},
{
  "id": "belly-ring-handcuffs",
  "name": "BELLY RING| HANDCUFFS",
  "price": 220,
  "images": ["Assets/images/GC JEWELLERY - BELLY/HANDCUFFS-BELLY-RING.png"],
  "category": "Belly",
  "description": "Handcuffs design belly ring.",
  "stock": 5
},
{
  "id": "belly-ring-heart-lock",
  "name": "BELLY RING| HEART LOCK",
  "price": 220,
  "images": ["Assets/images/GC JEWELLERY - BELLY/HEART-LOCK-BELLY-RING.png"],
  "category": "Belly",
  "description": "Heart lock belly ring.",
  "stock": 5
},
{
  "id": "belly-ring-marijuana-leaf",
  "name": "BELLY RING| MARIJUANA LEAF",
  "price": 220,
  "images": ["Assets/images/GC JEWELLERY - BELLY/MARIJUANA-LEAF-BELLY-RING.png"],
  "category": "Belly",
  "description": "Marijuana leaf belly ring.",
  "stock": 5
},
{
  "id": "belly-ring-tinkerbell",
  "name": "BELLY RING| TINKERBELL",
  "price": 220,
  "images": ["Assets/images/GC JEWELLERY - BELLY/TINKERBELL-BELLY-RING.png"],
  "category": "Belly",
  "description": "Tinkerbell design belly ring.",
  "stock": 5
},
{
  "id": "belly-ring-spider-triple-sterling-silver",
  "name": "BELLY RING| SPIDER| TRIPLE STERLING SILVER",
  "price": 220,
  "images": ["Assets/images/GC JEWELLERY - BELLY/TRIPLE-STERLING-SILVER-SPIDER-BELLY-RING.png"],
  "category": "Belly",
  "description": "Triple sterling silver spider belly ring.",
  "stock": 5
},
{
  "id": "belly-ring-zip-belly-ring",
  "name": "BELLY RING | ZIP DESIGN",
  "price": 220,
  "images": ["Assets/images/GC JEWELLERY - BELLY/ZIP-BELLY-RING.png"],
  "category": "Belly",
  "description": "Stylish belly ring featuring a unique zip design.",
  "stock": 5
},
{
  "id": "industrial-jewellery-1-2-x-14-industrial-bar-steel-stone-flower",
  "name": "INDUSTRIAL JEWELLERY | 1.2 X 14 | STEEL STONE FLOWER",
  "price": 180,
  "images": ["Assets/images/GC - INDUSTRIAL JEWELERY/1-2-X-38-X-5-INDUSTRIAL-BAR-STEEL-6-STONE-FLOWER.png"],
  "category": "Industrial",
  "description": "Industrial bar featuring a decorative stone flower design.",
  "stock": 5
},
{
  "id": "industrial-jewellery-1-2-x-35-x-4-industrial-bar-steel-arrow",
  "name": "Industrial Jewellery | 1.2 X 35 X 4 | Steel Arrow",
  "price": 180,
  "images": ["Assets/images/GC - INDUSTRIAL JEWELERY/1-2-X-38-X-5-INDUSTRIAL-BAR-STEEL-6-STONE-FLOWER.png"],
  "category": "Industrial",
  "description": "Industrial bar with arrow design made from surgical steel. Strong, stylish, and suitable for daily wear.",
  "stock": 5
},
{
  "id": "industrial-jewellery-1-2-x-35-x-4-industrial-bar-steel-spiral-w-glitter-ball",
  "name": "INDUSTRIAL JEWELLERY | 1.2 X 35 X 4 | SPIRAL GLITTER BALL",
  "price": 80,
  "images": ["Assets/images/GC - INDUSTRIAL JEWELERY/1-6-X-35-X-4-INDUSTRIAL-BAR-STEEL-SPIRAL-W-GLITTER-BALL.png"],
  "category": "Industrial",
  "description": "Steel industrial bar featuring a spiral design with glitter ball accents.",
  "stock": 5
},
{
  "id": "industrial-jewellery-1-2-x-35-x-5-industrial-bar-steel-zig-zag",
  "name": "INDUSTRIAL JEWELLERY | 1.2 X 35 X 5 | ZIG ZAG",
  "price": 180,
  "images": ["Assets/images/GC - INDUSTRIAL JEWELERY/1-6-X-35-X-5-INDUSTRIAL-BAR-STEEL-ZIG-ZAG.png"],
  "category": "Industrial",
  "description": "Zig-zag style industrial bar made from durable surgical steel.",
  "stock": 5
},
{
  "id": "industrial-jewellery-1-2-x-35-x-5-industrial-bar-zig-zag-w-glitter-ball",
  "name": "INDUSTRIAL JEWELLERY | 1.2 X 35 X 5 | ZIG ZAG GLITTER BALL",
  "price": 80,
  "images": ["Assets/images/GC - INDUSTRIAL JEWELERY/1-6-X-35-X-5-INDUSTRIAL-BAR-STEEL-ZIG-ZAG-W-GLITTER-BALL.png"],
  "category": "Industrial",
  "description": "Industrial bar with zig-zag design and glitter ball ends.",
  "stock": 5
},
{
  "id": "industrial-jewellery-1-6-x-35-x-5-straight-bar-black",
  "name": "INDUSTRIAL JEWELLERY | 1.6 X 35 X 5 | STRAIGHT BAR BLACK",
  "price": 110,
  "images": ["Assets/images/GC - INDUSTRIAL JEWELERY/1-6-X-35-X-5-STRAIGHT-BAR-BLACK.png"],
  "category": "Industrial",
  "description": "Black straight industrial bar made from coated surgical steel.",
  "stock": 5
},
{
  "id": "industrial-jewellery-1-6-x-35-x-5-straight-bar-gold",
  "name": "INDUSTRIAL JEWELLERY | 1.6 X 35 X 5 | STRAIGHT BAR GOLD",
  "price": 110,
  "images": ["Assets/images/GC - INDUSTRIAL JEWELERY/1-6-X-35-x-5-STRAIGHT-BAR-GOLD.png"],
  "category": "Industrial",
  "description": "Gold PVD coated straight industrial bar.",
  "stock": 5
},
{
  "id": "industrial-jewellery-1-6-x-35-x-5-straight-bar-steel-jewelled-peace",
  "name": "INDUSTRIAL JEWELLERY | 1.6 X 35 X 5 | JEWELLED PEACE",
  "price": 170,
  "images": ["Assets/images/GC - INDUSTRIAL JEWELERY/1-6-X-40-X-5-INDUSTRIAL-BAR-STEEL-JEWELLED-PEACE-SIGN.png"],
  "category": "Industrial",
  "description": "Steel industrial bar featuring a jewelled peace symbol.",
  "stock": 5
},
{
  "id": "industrial-jewellery-1-6-x-35-x-5-straight-bar-steel-snake",
  "name": "INDUSTRIAL JEWELLERY | 1.6 X 35 X 5 | STEEL SNAKE",
  "price": 170,
  "images": ["Assets/images/GC - INDUSTRIAL JEWELERY/1-6-X-40-X-5-INDUSTRIAL-BAR-STEEL-SNAKE.png"],
  "category": "Industrial",
  "description": "Snake-themed industrial bar crafted from surgical steel.",
  "stock": 5
},
{
  "id": "industrial-jewellery-1-6-x-35-x-5-straight-bar-steel-snake-2",
  "name": "Industrial Jewellery | 1.6 X 35 X 5 | Steel Snake 2",
  "price": 170,
  "images": ["Assets/images/GC - INDUSTRIAL JEWELERY/1-2-X-38-X-5-INDUSTRIAL-BAR-STEEL-6-STONE-FLOWER.png"],
  "category": "Industrial",
  "description": "Alternative snake design industrial bar made from surgical steel.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-2-x-10-circular-bar-screw",
  "name": "NIPPLE JEWELLERY | 1.2 X 10 | CIRCULAR BAR SCREW",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-2-x-10-CIRCULAR-BAR-SCREW.png"],
  "category": "Nipple",
  "description": "Circular bar nipple jewellery with screw ends.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-straight-bar-aquamarine-arrowhead",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 | AQUAMARINE ARROWHEAD",
  "price": 185,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-14-X-10-STRAIGHT-BAR-AQUAMARINE-ARROWHEAD.png"],
  "category": "Nipple",
  "description": "Straight bar nipple jewellery featuring aquamarine arrowhead ends.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-straight-bar-blue-stone-madala-nipple-bar",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 | BLUE STONE MANDALA",
  "price": 187,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/BLUE-STONE-MADALA-NIPPLE-BAR-1-6-X-14.png"],
  "category": "Nipple",
  "description": "Mandala-style nipple bar with blue stone detailing.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-straight-bar-blue-stone-round-badge-nipple-bar",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 | BLUE STONE ROUND BADGE",
  "price": 160,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/BLUE-STONE-ROUND-BADGE-NIPPLE-BAR-1-6-X-14.png"],
  "category": "Nipple",
  "description": "Round badge nipple bar with blue stone accents.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-straight-bar-heart-lock",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 | HEART LOCK",
  "price": 253,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-14-X-10-STRAIGHT-BAR-HEART-LOCK.png"],
  "category": "Nipple",
  "description": "Heart lock themed nipple bar made from surgical steel.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-straight-bar-pistol",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 | PISTOL",
  "price": 207,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-14-STRAIGHT-BAR-PISTOL.png"],
  "category": "Nipple",
  "description": "Pistol design nipple bar crafted from surgical steel.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-straight-bar-silver-guns",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 | SILVER GUNS",
  "price": 276,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-14-STRAIGHT-BAR-SILVER-GUNS.png"],
  "category": "Nipple",
  "description": "Twin silver gun design nipple jewellery with straight bar.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-x-11-straight-bar-tuscan",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 X 11 | TUSCAN",
  "price": 200,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-14-X-11-STRAIGHT-BAR-TUSCAN.png"],
  "category": "Nipple",
  "description": "Tuscan inspired straight bar nipple jewellery.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-x-5-straight-bar-gold-crystal",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 X 5 | GOLD CRYSTAL",
  "price": 185,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-14-X-5-STRAIGHT-BAR-GOLD-CRYSTAL.png"],
  "category": "Nipple",
  "description": "Gold crystal straight bar nipple jewellery.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-x-5-straight-bar-steel",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 X 5 | STEEL",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-14-X-5-STRAIGHT-BAR-STEEL.png"],
  "category": "Nipple",
  "description": "Classic surgical steel straight bar nipple jewellery.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-x-5-straight-bar-steel-clear",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 X 5 | STEEL CLEAR",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-14-X-5-STRAIGHT-BAR-STEEL-CLEAR.png"],
  "category": "Nipple",
  "description": "Clear stone straight bar nipple jewellery made from surgical steel.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-x-5-straight-bar-steel-pink",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 X 5 | STEEL PINK",
  "price": 185,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-14-X-5-STRAIGHT-BAR-STEEL-PINK.png"],
  "category": "Nipple",
  "description": "Pink stone straight bar nipple jewellery.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-x-8-straight-bar-mandala",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 X 8 | MANDALA",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-14-X-8-STRAIGHT-BAR-MANDALA.png"],
  "category": "Nipple",
  "description": "Mandala design nipple bar with decorative detailing.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-14-x-8-straight-bar-round",
  "name": "NIPPLE JEWELLERY | 1.6 X 14 X 8 | ROUND",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-14-X-8-STRAIGHT-BAR-ROUND.png"],
  "category": "Nipple",
  "description": "Round end straight bar nipple jewellery.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-16-x-5-straight-bar-gold",
  "name": "NIPPLE JEWELLERY | 1.6 X 16 X 5 | GOLD",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-16-X-5-STRAIGHT-BAR-GOLD.png"],
  "category": "Nipple",
  "description": "Gold PVD straight bar nipple jewellery.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-16-x-5-straight-bar-steel",
  "name": "NIPPLE JEWELLERY | 1.6 X 16 X 5 | STEEL",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-16-X-5-STRAIGHT-BAR-STEEL.png"],
  "category": "Nipple",
  "description": "Surgical steel straight bar nipple jewellery in longer length.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-16-x-6-straight-bar-steel-crystal-push-in",
  "name": "NIPPLE JEWELLERY | 1.6 X 16 X 6 | CRYSTAL PUSH IN",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-x-16-x-6-STRAIGHT-BAR-STEEL-CRYSTAL-PUSH-IN.png"],
  "category": "Nipple",
  "description": "Push-in crystal straight bar nipple jewellery.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-16-x-8-straight-bar-skull-crystal-eyes-hyacinth",
  "name": "NIPPLE JEWELLERY | 1.6 X 16 X 8 | SKULL CRYSTAL EYES HYACINTH",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-16-X-8-STRAIGHT-BAR-SKULL-CRYSTAL-EYES-HYACINTH.png"],
  "category": "Nipple",
  "description": "Skull crystal eyes nipple bar with hyacinth coloured stones.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-18-straight-bar-love-nipple",
  "name": "NIPPLE JEWELLERY | 1.6 X 18 | LOVE",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-18-STRAIGHT-BAR-LOVE-NIPPLE.png"],
  "category": "Nipple",
  "description": "Love themed straight bar nipple jewellery made from surgical steel.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-20-x-5-straight-bar-crystal-studded-shield",
  "name": "NIPPLE JEWELLERY | 1.6 X 20 X 5 | CRYSTAL STUDDED SHIELD",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-x-20-x-5-STRAIGHT-BAR-CRYSTAL-STUDDED-SHIELD.png"],
  "category": "Nipple",
  "description": "Shield design nipple bar with crystal studded detailing.",
  "stock": 5
},
{
  "id": "nipple-jewellery-1-6-x-21-x-5-straight-bar-double-ring-shield",
  "name": "NIPPLE JEWELLERY | 1.6 X 21 X 5 | DOUBLE RING SHIELD",
  "price": 80,
  "images": ["Assets/images/GC - NIPPLE JEWELLERY/1-6-X-21-X-5-STRAIGHT-BAR-DOUBLE-RING-SHIELD.png"],
  "category": "Nipple",
  "description": "Double ring shield nipple jewellery with straight bar.",
  "stock": 5
},
{
    "id": "1-2-x-6-x-3-labret-gold",
    "name": "1.2 X 6 X 3 Labret – Gold",
    "price": 60.00,
    "images": ["images/Gold flatback/1.2 X 6 X 3 LABRET – GOLD R50.00.png"],
    "category": "Labret",
    "description": "Gold labret piercing jewellery, 1.2 x 6 x 3.",
    "stock": 5
},
{
    "id": "1-2-x-6-x-3-labret-gold-surgical-steel-pvd",
    "name": "1.2 X 6 X 3 Labret – Gold Surgical Steel (PVD)",
    "price": 80.00,
    "images": ["images/Gold flatback/1.2 X 6 X 3 LABRET – GOLD SURGICAL STEEL (PVD) R80.00.png"],
    "category": "Labret",
    "description": "Gold PVD surgical steel labret, 1.2 x 6 x 3.",
    "stock": 5
},
{
    "id": "1-2-x-8-x-2-labret-steel-jewelled-flat-top",
    "name": "1.2 X 8 X 2 Labret – Steel – Jewelled (Flat Top)",
    "price": 110.00,
    "images": ["images/Gold flatback/1.2 X 8 X 2 LABRET – STEEL – JEWELLED (FLAT TOP) R110.00.png"],
    "category": "Labret",
    "description": "Steel labret with a jewelled flat top, 1.2 x 8 x 2.",
    "stock": 5
},
{
    "id": "1-2-x-8-x-3-labret-gold",
    "name": "1.2 X 8 X 3 Labret – Gold",
    "price": 60.00,
    "images": ["images/Gold flatback/1.2 X 8 X 3 LABRET – GOLD R50.00.png"],
    "category": "Labret",
    "description": "Gold labret piercing jewellery, 1.2 x 8 x 3.",
    "stock": 5
},
{
    "id": "1-2-x-8-x-3-labret-gold-surgical-steel-pvd",
    "name": "1.2 X 8 X 3 Labret – Gold Surgical Steel (PVD)",
    "price": 80.00,
    "images": ["images/Gold flatback/1.2 X 8 X 3 LABRET – GOLD SURGICAL STEEL (PVD) R80.00.png"],
    "category": "Labret",
    "description": "Gold PVD surgical steel labret, 1.2 x 8 x 3.",
    "stock": 5
},
{
    "id": "1-2-x-8-x-3-labret-gold-jewelled",
    "name": "1.2 X 8 X 3 Labret – Gold – Jewelled",
    "price": 95.00,
    "images": ["images/Gold flatback/1.2 X 8 X 3 LABRET – GOLD – JEWELLED R95.png"],
    "category": "Labret",
    "description": "Gold labret with jewelled detailing, 1.2 x 8 x 3.",
    "stock": 5
},
{
    "id": "1-2-x-8-x-3-labret-gold-prong-set-cubic-zirconia-internal-thread",
    "name": "1.2 X 8 X 3 Labret – Gold – Prong Set Cubic Zirconia (Internal Thread)",
    "price": 180.00,
    "images": ["images/Gold flatback/1.2 X 8 X 3 LABRET – GOLD – PRONG SET CUBIC ZIRCONIA SURGICAL STEEL (INTERNAL THREAD) R180.png"],
    "category": "Labret",
    "description": "Gold surgical steel labret with prong-set cubic zirconia and an internal thread.",
    "stock": 5
},
{
    "id": "1-2-x-8-x-3-labret-stainless-steel-jewelled",
    "name": "1.2 X 8 X 3 Labret – Stainless Steel – Jewelled",
    "price": 60.00,
    "images": ["images/Gold flatback/1.2 X 8 X 3 LABRET – STAINLESS STEEL – JEWELLED R50.png"],
    "category": "Labret",
    "description": "Jewelled stainless steel labret, 1.2 x 8 x 3.",
    "stock": 5
},
{
    "id": "1-2-x-8-x-4-labret-titanium-gold-pvd-cz-crystal-flower",
    "name": "1.2 X 8 X 4 Labret – Titanium – Gold (PVD) – CZ Crystal Flower Top (Internal Threaded)",
    "price": 320.00,
    "images": ["images/Gold flatback/1.2 X 8 X 4 LABRET – TITANIUM – GOLD (PVD) – CZ CRYSTAL FLOWER TOP (INTERNAL THREADED) R320.00.png"],
    "category": "Labret",
    "description": "Gold PVD titanium labret with a cubic zirconia crystal flower top and internal threading.",
    "stock": 5
},
{
    "id": "1-2-x-8-x-8-labret-gold-crystal-butterfly-internal-thread",
    "name": "1.2 X 8 X 8 Labret – Gold – Crystal Butterfly (Internal Thread)",
    "price": 200.00,
    "images": ["images/Gold flatback/1.2 X 8 X 8 LABRET – GOLD – CRYSTAL BUTTERFLY (INTERNAL THREAD) R200.00.png"],
    "category": "Labret",
    "description": "Gold labret with a crystal butterfly design and internal threading.",
    "stock": 5
},
{
    id: "silver-labret-1-2x6x7-steel-4-jewels-internal-thread",
    name: "1.2 X 6 X 7 LABRET – STEEL – 4 JEWELS (INTERNAL THREAD)",
    price: 121.00,
    images: ["images/Silver Fatback/1.2 X 6 X 7 LABRET – STEEL – 4 JEWELS (INTERNAL THREAD) R121.000.png"],
    category: "Labret",
    description: "Steel labret with 4 jewels and an internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x11-gold-eye-black-jewelled",
    name: "1.2 X 8 X 11 LABRET – GOLD – EYE (BLACK JEWELLED)",
    price: 138.00,
    images: ["images/Silver Fatback/1.2 X 8 X 11 LABRET – GOLD – EYE (BLACK JEWELLED) R138.00.png"],
    category: "Labret",
    description: "Gold labret featuring a black jewelled eye design.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x11-gold-eye-clear",
    name: "1.2 X 8 X 11 LABRET – GOLD – EYE – CLEAR",
    price: 138.00,
    images: ["images/Silver Fatback/1.2 X 8 X 11 LABRET – GOLD – EYE – CLEAR R138.00.png"],
    category: "Labret",
    description: "Gold labret featuring a clear eye design.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x11-stainless-steel-snake",
    name: "1.2 X 8 X 11 LABRET – STAINLESS STEEL – SNAKE (INTERNAL THREAD)",
    price: 120.00,
    images: ["images/Silver Fatback/1.2 X 8 X 11 LABRET – STAINLESS STEEL – SNAKE (INTERNAL THREAD) R120.00.png"],
    category: "Labret",
    description: "Stainless steel labret with a snake design and internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x11-steel-eye-jewelled",
    name: "1.2 X 8 X 11 LABRET – STEEL – EYE (JEWELLED)",
    price: 138.00,
    images: ["images/Silver Fatback/1.2 X 8 X 11 LABRET – STEEL – EYE (JEWELLED) R138.00.png"],
    category: "Labret",
    description: "Steel labret featuring a jewelled eye design.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x12-steel-crystal-vine",
    name: "1.2 X 8 X 12 LABRET – STEEL – CRYSTAL VINE (INTERNAL THREAD)",
    price: 207.00,
    images: ["images/Silver Fatback/1.2 X 8 X 12 LABRET – STEEL – CRYSTAL VINE (INTERNAL THREAD) R207.00.png"],
    category: "Labret",
    description: "Steel labret with a crystal vine design and internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x12-steel-ily-hand",
    name: "1.2 X 8 X 12 LABRET – STEEL – ILY HAND (INTERNAL THREAD)",
    price: 232.00,
    images: ["images/Silver Fatback/1.2 X 8 X 12 LABRET – STEEL – ILY HAND (INTERNAL THREAD) R232.00.png"],
    category: "Labret",
    description: "Steel labret featuring an ILY hand design and internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x16-steel-3-jewels-beads",
    name: "1.2 X 8 X 16 LABRET – STEEL – 3 JEWELS & BEADS (INTERNAL THREAD)",
    price: 120.00,
    images: ["images/Silver Fatback/1.2 X 8 X 16 LABRET – STEEL – 3 JEWELS & BEADS (INTERNAL THREAD) R120.00.png"],
    category: "Labret",
    description: "Steel labret with 3 jewels and beads and an internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x20-steel-5-jewels-beads",
    name: "1.2 X 8 X 20 LABRET – STEEL – 5 JEWELS & BEADS (INTERNAL THREAD)",
    price: 161.00,
    images: ["images/Silver Fatback/1.2 X 8 X 20 LABRET – STEEL – 5 JEWELS & BEADS (INTERNAL THREAD) R161.00.png"],
    category: "Labret",
    description: "Steel labret with 5 jewels and beads and an internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x3-prong-set-cubic-zirconia-internal-thread",
    name: "1.2 X 8 X 3 LABRET – PRONG SET CUBIC ZIRCONIA (INTERNAL THREAD)",
    price: 120.00,
    images: ["images/Silver Fatback/1.2 X 8 X 3 LABRET – PRONG SET CUBIC ZIRCONIA (INTERNAL THREAD) R120.00.png"],
    category: "Labret",
    description: "Labret with prong-set cubic zirconia and an internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x3-prong-set-cubic-zirconia-push-pin",
    name: "1.2 X 8 X 3 LABRET – PRONG SET CUBIC ZIRCONIA (PUSH PIN)",
    price: 120.00,
    images: ["images/Silver Fatback/1.2 X 8 X 3 LABRET – PRONG SET CUBIC ZIRCONIA (PUSH PIN) R120.00.png"],
    category: "Labret",
    description: "Labret with prong-set cubic zirconia and a push-pin fitting.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x4-steel-flower",
    name: "1.2 X 8 X 4 LABRET – STEEL – FLOWER (INTERNAL THREAD)",
    price: 92.00,
    images: ["images/Silver Fatback/1.2 X 8 X 4 LABRET – STEEL – FLOWER (INTERNAL THREAD) R92.00.png"],
    category: "Labret",
    description: "Steel labret with a flower design and internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x4-steel-heart",
    name: "1.2 X 8 X 4 LABRET – STEEL – HEART (INTERNAL THREAD)",
    price: 92.00,
    images: ["images/Silver Fatback/1.2 X 8 X 4 LABRET – STEEL – HEART (INTERNAL THREAD) R92.00.png"],
    category: "Labret",
    description: "Steel labret with a heart design and internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x4-surgical-steel-jewelled-dangle-star",
    name: "1.2 X 8 X 4 LABRET – SURGICAL STEEL – JEWELLED -DANGLE STEEL STAR",
    price: 92.00,
    images: ["images/Silver Fatback/1.2 X 8 X 4 LABRET – SURGICAL STEEL – JEWELLED -DANGLE STEEL  STAR R92.00.png"],
    category: "Labret",
    description: "Surgical steel labret with a jewelled dangling steel star.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x5-steel-clover",
    name: "1.2 X 8 X 5 LABRET – STEEL – CLOVER (INTERNAL THREAD)",
    price: 152.00,
    images: ["images/Silver Fatback/1.2 X 8 X 5 LABRET – STEEL – CLOVER (INTERNAL THREAD) R152.00.png"],
    category: "Labret",
    description: "Steel labret with a clover design and internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x5-steel-crystal-flower",
    name: "1.2 X 8 X 5 LABRET – STEEL – CRYSTAL FLOWER",
    price: 201.00,
    images: ["images/Silver Fatback/1.2 X 8 X 5 LABRET – STEEL – CRYSTAL FLOWER R201.00.png"],
    category: "Labret",
    description: "Steel labret featuring a crystal flower design.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x5-steel-heart-jewelled",
    name: "1.2 X 8 X 5 LABRET – STEEL – HEART (JEWELLED)",
    price: 138.00,
    images: ["images/Silver Fatback/1.2 X 8 X 5 LABRET – STEEL – HEART (JEWELLED) R138.00.png"],
    category: "Labret",
    description: "Steel labret with a jewelled heart design.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x6-steel-aquamarine-beaded",
    name: "1.2 X 8 X 6 LABRET – STEEL – AQUAMARINE BEADED (INTERNAL THREAD)",
    price: 177.00,
    images: ["images/Silver Fatback/1.2 X 8 X 6 LABRET – STEEL – AQUAMARINE BEADED (INTERNAL THREAD) R177.00.png"],
    category: "Labret",
    description: "Steel labret with aquamarine beads and an internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x6-steel-cross",
    name: "1.2 X 8 X 6 LABRET – STEEL – CROSS (INTERNAL THREAD)",
    price: 69.00,
    images: ["images/Silver Fatback/1.2 X 8 X 6 LABRET – STEEL – CROSS (INTERNAL THREAD) R69.00.png"],
    category: "Labret",
    description: "Steel labret with a cross design and internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x6-steel-opal-beaded-138",
    name: "1.2 X 8 X 6 LABRET – STEEL – OPAL BEADED (INTERNAL THREAD)",
    price: 138.00,
    images: ["images/Silver Fatback/1.2 X 8 X 6 LABRET – STEEL – OPAL BEADED (INTERNAL THREAD) R138.00.png"],
    category: "Labret",
    description: "Steel labret with opal beads and an internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x6-steel-opal-beaded-173",
    name: "1.2 X 8 X 6 LABRET – STEEL – OPAL BEADED (INTERNAL THREAD)",
    price: 173.00,
    images: ["images/Silver Fatback/1.2 X 8 X 6 LABRET – STEEL – OPAL BEADED (INTERNAL THREAD) R173.00.png"],
    category: "Labret",
    description: "Steel labret with opal beads and an internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x7-steel-2-jewels",
    name: "1.2 X 8 X 7 LABRET – STEEL – 2 JEWELS (INTERNAL THREAD)",
    price: 121.00,
    images: ["images/Silver Fatback/1.2 X 8 X 7 LABRET – STEEL – 2 JEWELS (INTERNAL THREAD) R121.00.png"],
    category: "Labret",
    description: "Steel labret with 2 jewels and an internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x8-steel-crystal-butterfly",
    name: "1.2 X 8 X 8 LABRET – STEEL – CRYSTAL BUTTERFLY (INTERNAL THREAD)",
    price: 207.00,
    images: ["images/Silver Fatback/1.2 X 8 X 8 LABRET – STEEL – CRYSTAL BUTTERFLY (INTERNAL THREAD) R207.00.png"],
    category: "Labret",
    description: "Steel labret with a crystal butterfly design and internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-2x8x9-steel-dagger",
    name: "1.2 X 8 X 9 LABRET – STEEL – DAGGER (INTERNAL THREAD)",
    price: 92.50,
    images: ["images/Silver Fatback/1.2 X 8 X 9 LABRET – STEEL – DAGGER (INTERNAL THREAD) R92.50.png"],
    category: "Labret",
    description: "Steel labret with a dagger design and internal thread.",
    stock: 5
},
{
    id: "silver-labret-1-6x12x41-steel-long-curved-spike",
    name: "1.6 X 12 X 41 LABRET -STEEL -LONG CURVED SPIKE",
    price: 345.00,
    images: ["images/Silver Fatback/1.6 X 12 X 41 LABRET -STEEL -LONG CURVED SPIKE R345.00.png"],
    category: "Labret",
    description: "Steel labret featuring a long curved spike.",
    stock: 5
},

];
