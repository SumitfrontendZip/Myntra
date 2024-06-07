import img5 from './005.jpg';
import img6 from './006.jpg';
import img7 from './007.jpg';
import img8 from './008.jpg';
import img9 from './009.jpg';
import img10 from './010.jpg';
import img11 from './011.jpg';
import img12 from './012.jpg';
import img13 from './013.jpg';
import img14 from './014.jpg';
import img15 from './015.jpg';
import img16 from './016.jpg';
import img17 from './017.jpg';
import img18 from './018.jpg';
import img19 from './019.jpg';
import img20 from './020.jpg';
import img21 from './021.jpg';
import img22 from './022.jpg';
import img23 from './023.jpg';
import img24 from './024.jpg';
import img25 from './025.jpg';
import img26 from './026.jpg';
import img27 from './027.jpg';
import img28 from './028.jpg';
import img29 from './029.jpg';
import img30 from './030.jpg';
import img31 from './031.jpg';
import img32 from './032.jpg';
import img33 from './033.jpg';
import img34 from './034.jpg';
import img35 from './035.jpg';
import img36 from './036.jpg';
import img37 from './037.jpg';
import img38 from './038.jpg';
import img39 from './039.jpg';
import img40 from './040.jpg';
import img41 from './041.jpg';
import img42 from './042.jpg';
import img43 from './043.jpg';
import { v4 as uuidv4 } from 'uuid';


const Cards = [
    {
        "img": img5,
        "name": "Dress",
        "material": "Silk",
        "price": 499,
        "discountPrice": 2999,
        "rating": 5,
        "new": false,
        "color": "Red",
        "brand": "BrandD"
    },
    {
        "img": img6,
        "name": "T-Shirt",
        "material": "Cotton",
        "price": 499,
        "discountPrice": 799,
        "rating": 4,
        "new": true,
        "color": "Brown",
        "brand": "BrandJ"
    },
    {
        "img": img7,
        "name": "Skirt",
        "material": "Polyester",
        "price": 999,
        "discountPrice": 1499,
        "rating": 3,
        "new": false,
        "color": "Brown",
        "brand": "BrandF"
    },
    {
        "img": img8,
        "name": "Blouse",
        "material": "Linen",
        "price": 899,
        "discountPrice": 1299,
        "rating": 4,
        "new": true,
        "color": "Blue",
        "brand": "BrandC"
    },
    {
        "img": img9,
        "name": "Shorts",
        "material": "Cotton",
        "price": 699,
        "discountPrice": 999,
        "rating": 3,
        "new": false,
        "color": "Yellow",
        "brand": "BrandF"
    },
    {
        "img": img10,
        "name": "Cardigan",
        "material": "Wool",
        "price": 1399,
        "discountPrice": 1899,
        "rating": 4,
        "new": true,
        "color": "Pink",
        "brand": "BrandG"
    },
    {
        "img": img11,
        "name": "Coat",
        "material": "Wool",
        "price": 2999,
        "discountPrice": 3999,
        "rating": 5,
        "new": false,
        "color": "Yellow",
        "brand": "BrandG"
    },
    {
        "img": img12,
        "name": "Tank Top",
        "material": "Cotton",
        "price": 299,
        "discountPrice": 499,
        "rating": 3,
        "new": true,
        "color": "Green",
        "brand": "BrandA"
    },
    {
        "img": img13,
        "name": "Polo Shirt",
        "material": "Cotton",
        "price": 799,
        "discountPrice": 1199,
        "rating": 4,
        "new": false,
        "color": "Purple",
        "brand": "BrandF"
    },
    {
        "img": img14,
        "name": "Joggers",
        "material": "Polyester",
        "price": 1199,
        "discountPrice": 1699,
        "rating": 4,
        "new": true,
        "color": "Blue",
        "brand": "BrandJ"
    },
    {
        "img": img15,
        "name": "Socks",
        "material": "Wool",
        "price": 199,
        "discountPrice": 299,
        "rating": 3,
        "new": false,
        "color": "Yellow",
        "brand": "BrandF"
    },
    {
        "img": img16,
        "name": "Leggings",
        "material": "Spandex",
        "price": 599,
        "discountPrice": 899,
        "rating": 4,
        "new": true,
        "color": "Brown",
        "brand": "BrandA"
    },
    {
        "img": img17,
        "name": "Scarf",
        "material": "Silk",
        "price": 399,
        "discountPrice": 599,
        "rating": 4,
        "new": false,
        "color": "White",
        "brand": "BrandC"
    },
    {
        "img": img18,
        "name": "Gloves",
        "material": "Leather",
        "price": 699,
        "discountPrice": 999,
        "rating": 5,
        "new": true,
        "color": "Blue",
        "brand": "BrandJ"
    },
    {
        "img": img19,
        "name": "Hat",
        "material": "Wool",
        "price": 499,
        "discountPrice": 799,
        "rating": 4,
        "new": false,
        "color": "Red",
        "brand": "BrandB"
    },
    {
        "img": img20,
        "name": "Suit",
        "material": "Wool",
        "price": 4999,
        "discountPrice": 5999,
        "rating": 5,
        "new": true,
        "color": "Green",
        "brand": "BrandJ"
    },
    {
        "img": img21,
        "name": "Blazer",
        "material": "Linen",
        "price": 1999,
        "discountPrice": 2599,
        "rating": 4,
        "new": false,
        "color": "Gray",
        "brand": "BrandB"
    },
    {
        "img": img22,
        "name": "Vest",
        "material": "Polyester",
        "price": 999,
        "discountPrice": 1499,
        "rating": 3,
        "new": true,
        "color": "Brown",
        "brand": "BrandC"
    },
    {
        "img": img23,
        "name": "Belt",
        "material": "Leather",
        "price": 499,
        "discountPrice": 699,
        "rating": 4,
        "new": false,
        "color": "White",
        "brand": "BrandD"
    },
    {
        "img": img24,
        "name": "Cap",
        "material": "Cotton",
        "price": 299,
        "discountPrice": 499,
        "rating": 4,
        "new": true,
        "color": "Purple",
        "brand": "BrandC"
    },
    {
        "img": img25,
        "name": "Beanie",
        "material": "Wool",
        "price": 399,
        "discountPrice": 599,
        "rating": 4,
        "new": false,
        "color": "Gray",
        "brand": "BrandD"
    },
    {
        "img": img26,
        "name": "Tie",
        "material": "Silk",
        "price": 299,
        "discountPrice": 499,
        "rating": 3,
        "new": true,
        "color": "Black",
        "brand": "BrandJ"
    },
    {
        "img": img27,
        "name": "Bow Tie",
        "material": "Silk",
        "price": 399,
        "discountPrice": 599,
        "rating": 4,
        "new": false,
        "color": "Green",
        "brand": "BrandF"
    },
    {
        "img": img28,
        "name": "Pocket Square",
        "material": "Cotton",
        "price": 199,
        "discountPrice": 299,
        "rating": 3,
        "new": true,
        "color": "Green",
        "brand": "BrandI"
    },
    {
        "img": img29,
        "name": "Suspenders",
        "material": "Polyester",
        "price": 499,
        "discountPrice": 699,
        "rating": 4,
        "new": false,
        "color": "White",
        "brand": "BrandE"
    },
    {
        "img": img30,
        "name": "Overalls",
        "material": "Denim",
        "price": 1999,
        "discountPrice": 2599,
        "rating": 4,
        "new": true,
        "color": "Yellow",
        "brand": "BrandH"
    },
    {
        "img": img31,
        "name": "Poncho",
        "material": "Wool",
        "price": 1199,
        "discountPrice": 1699,
        "rating": 4,
        "new": false,
        "color": "Yellow",
        "brand": "BrandJ"
    },
    {
        "img": img32,
        "name": "Sarong",
        "material": "Silk",
        "price": 599,
        "discountPrice": 899,
        "rating": 4,
        "new": true,
        "color": "White",
        "brand": "BrandH"
    },
    {
        "img": img33,
        "name": "Kimono",
        "material": "Silk",
        "price": 2999,
        "discountPrice": 3999,
        "rating": 5,
        "new": false,
        "color": "Brown",
        "brand": "BrandH"
    },
    {
        "img": img34,
        "name": "Hoodie",
        "material": "Cotton",
        "price": 1299,
        "discountPrice": 1799,
        "rating": 4,
        "new": true,
        "color": "Purple",
        "brand": "BrandB"
    },
    {
        "img": img35,
        "name": "Bathrobe",
        "material": "Cotton",
        "price": 999,
        "discountPrice": 1499,
        "rating": 4,
        "new": false,
        "color": "Green",
        "brand": "BrandB"
    },
    {
        "img": img36,
        "name": "Pajamas",
        "material": "Cotton",
        "price": 799,
        "discountPrice": 1199,
        "rating": 4,
        "new": true,
        "color": "Red",
        "brand": "BrandG"
    },
    {
        "img": img37,
        "name": "Nightgown",
        "material": "Silk",
        "price": 1199,
        "discountPrice": 1699,
        "rating": 4,
        "new": false,
        "color": "White",
        "brand": "BrandH"
    },
    {
        "img": img38,
        "name": "Slippers",
        "material": "Wool",
        "price": 499,
        "discountPrice": 699,
        "rating": 4,
        "new": true,
        "color": "Red",
        "brand": "BrandI"
    },
    {
        "img": img39,
        "name": "Swimsuit",
        "material": "Nylon",
        "price": 999,
        "discountPrice": 1499,
        "rating": 4,
        "new": false,
        "color": "Blue",
        "brand": "BrandJ"
    },
    {
        "img": img40,
        "name": "Cover-up",
        "material": "Cotton",
        "price": 599,
        "discountPrice": 899,
        "rating": 4,
        "new": true,
        "color": "White",
        "brand": "BrandG"
    },
    {
        "img": img41,
        "name": "Snow Pants",
        "material": "Polyester",
        "price": 1999,
        "discountPrice": 2599,
        "rating": 4,
        "new": false,
        "color": "Blue",
        "brand": "BrandC"
    },
    {
        "img": img42,
        "name": "Raincoat",
        "material": "Nylon",
        "price": 1499,
        "discountPrice": 1999,
        "rating": 4,
        "new": true,
        "color": "Red",
        "brand": "BrandA"
    },
    {
        "img": img43,
        "name": "Sweatpants",
        "material": "Cotton",
        "price": 1199,
        "discountPrice": 1699,
        "rating": 3,
        "new": false,
        "color": "Black",
        "brand": "BrandE"
    }
];

const CardData = Cards.map(val => {
    return {
        ...val,
        id: uuidv4()
    };
});
console.log(CardData);
export default CardData