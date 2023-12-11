import rect12 from "@/assets/Rectangle 12.jpg"
import rect13 from "@/assets/Rectangle 13.jpg"
import rect14 from "@/assets/Rectangle 14.jpg"
import rect15 from "@/assets/Rectangle 15.jpg"
import rect16 from "@/assets/Rectangle 16.jpg"
import rect17 from "@/assets/Rectangle 17.jpg"
import rect18 from "@/assets/Rectangle 18.jpg"
import rect19 from "@/assets/Rectangle 19.jpg"
import { StaticImageData } from "next/image"
import rect4 from "@/assets/Rectangle-4.jpg"
import rect5 from "@/assets/Rectangle-5.jpg"
import rect6 from "@/assets/Rectangle 6.jpg"
import rect7 from "@/assets/Rectangle 7.jpg"
import rect8 from "@/assets/Rectangle 8.jpg"
import rect9 from "@/assets/Rectangle 9.jpg"
import rect10 from "@/assets/Rectangle 10.jpg"
import rect11 from "@/assets/Rectangle 11.jpg"
import rect33 from "@/assets/Rectangle 33.jpg"
import rect34 from "@/assets/Rectangle 34.jpg"
import rect35 from "@/assets/Rectangle 35.jpg"
import rect36 from "@/assets/Rectangle 36.jpg"
import rect37 from "@/assets/Rectangle 37.jpg"
import rect38 from "@/assets/Rectangle 38.jpg"
import rect39 from "@/assets/Rectangle 39.jpg"
import rect25 from "@/assets/Rectangle 25.png"
import rect27 from "@/assets/Rectangle 27.png"

export interface ObjectInterface {
    id: string;
    number: number;
    quantity: number;

    selectedQuantity: number;
    favourite: boolean;
    stockQuantity: number;
    specification: string[];
    offer: string;
    category: string;
    name: string;
    photo: StaticImageData;
    price: string;
    oldPrice: string;
    star: number[];
    description: {
        review: number;
        thumbnails: StaticImageData[];
        sku: number;
        availibility: "In Stock" | "Out of Stock";
        color: string;
        size: string;
        choiceSize: string[];
        choiceColor: string[];
        material: string;
        reviews: {
            reviewName: string;
            reviewTime: string;
            reviewStar: number;
            reviewComment: string;
        }[];
    };
}

export const ObjectData: ObjectInterface[] = [
    {
        id: "9b1deb4d",
        number: 1,
        quantity: 0,
    
        selectedQuantity: 1,
        favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "MOST VIEWED"],
        offer: "",
        category: "womens",
        name: "Women's tracksuit Q109",
        photo: rect4,
        price: "$ 379.99",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "9b1deb4b",
        number: 2,
        quantity: 0,
    
        selectedQuantity: 1, 
        favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "-50%",
        category: "womens",
        name: "Cluse La Boheme Rose Gold",
        photo: rect5,
        price: "$ 30.00",
        oldPrice: "$ 60.00",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "9b1deb5b",
        number: 3,
        quantity: 0,
    
        selectedQuantity: 1,
        favourite: false,
        stockQuantity: 7,
        specification: ["MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Mercury Tee",
        photo: rect6,
        price: "$ 54.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "9d1deb5b",
        number: 4,
        quantity: 0,
    
        selectedQuantity: 1, 
        favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Skin Sweatpans",
        photo: rect7,
        price: "$ 21.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "9d1dbb5b",
        number: 5,
        quantity: 0,
    
        selectedQuantity: 1, 
        favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Short Sleeved Hoodie",
        photo: rect8,
        price: "$ 32.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "9d1dbf7b",
        number: 6,
        quantity: 0,
    
        selectedQuantity: 1,
        favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS"],
        offer: "",
        category: "womens",
        name: "Ridley High Waist",
        photo: rect9,
        price: "$ 68.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "9d1drf7b",
        number: 7,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Cream women pants",
        photo: rect10,
        price: "$ 45.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "9d1dff7b",
        number: 8,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Simple Skin T-shirt",
        photo: rect11,
        price: "$ 20.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "9d1df87b",
        number: 9,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Simple Dress",
        photo: rect33,
        price: "$ 35.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "9d1df87b",
        number: 10,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Apron Dress",
        photo: rect34,
        price: "$ 141.00",
        oldPrice: "",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "9l1df87b",
        number: 11,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Full Dress",
        photo: rect35,
        price: "$ 341.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "9l1df17b",
        number: 12,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Jeans Jacket",
        photo: rect36,
        price: "$ 120.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "9l1de27b",
        number: 13,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Nike Jordans",
        photo: rect37,
        price: "$ 49.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "9l1de37b",
        number: 14,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Light Full Dress",
        photo: rect38,
        price: "$ 89.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "9l1de12b",
        number: 15,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Dress for Gingers",
        photo: rect39,
        price: "$ 99.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    // mens

    {
        id: "111deb4d",
        number: 16,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Striped Sweatshirt",
        photo: rect12,
        price: "$ 38.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "111deb4b",
        number: 17,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Men pants",
        photo: rect13,
        price: "$ 30.00",
        oldPrice: "",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "119djb5b",
        number: 18,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "",
        category: "mens",
        name: "Men Knit Sweater",
        photo: rect14,
        price: "$ 54.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "111deb5b",
        number: 19,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS", "MOST VIEWED"],
        offer: "",
        category: "mens",
        name: "Dusk Pom Beanie",
        photo: rect15,
        price: "$ 180.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "111dbb5b",
        number: 20,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Denim Trucker Jacket",
        photo: rect16,
        price: "$ 32.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "111dbf7b",
        number: 21,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["SPECIALS", "BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Denim Vest",
        photo: rect17,
        price: "$ 320.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "111drf7b",
        number: 22,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "",
        category: "mens",
        name: "Leather White Trainers",
        photo: rect18,
        price: "$ 45.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "121dff7b",
        number: 23,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "mens",
        name: "Checked Tailored Trousers",
        photo: rect19,
        price: "$ 280.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "extra9b1deb4d",
        number: 24,
        quantity: 0,
    
        selectedQuantity: 1,
        favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "MOST VIEWED"],
        offer: "",
        category: "womens",
        name: "Women's tracksuit Q109",
        photo: rect4,
        price: "$ 379.99",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra9b1deb4b",
        number: 25,
        quantity: 0,
    
        selectedQuantity: 1, 
        favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "-50%",
        category: "womens",
        name: "Cluse La Boheme Rose Gold",
        photo: rect5,
        price: "$ 30.00",
        oldPrice: "$ 60.00",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra9b1deb5b",
        number: 26,
        quantity: 0,
    
        selectedQuantity: 1,
        favourite: false,
        stockQuantity: 7,
        specification: ["MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Mercury Tee",
        photo: rect6,
        price: "$ 54.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra9d1deb5b",
        number: 27,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Skin Sweatpans",
        photo: rect7,
        price: "$ 21.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra9d1dbb5b",
        number: 28,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Short Sleeved Hoodie",
        photo: rect8,
        price: "$ 32.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra9d1dbf7b",
        number: 29,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS"],
        offer: "",
        category: "womens",
        name: "Ridley High Waist",
        photo: rect9,
        price: "$ 68.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra9d1drf7b",
        number: 30,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Cream women pants",
        photo: rect10,
        price: "$ 45.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra9d1dff7b",
        number: 31,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Simple Skin T-shirt",
        photo: rect11,
        price: "$ 20.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "extra9d1df87b",
        number: 32,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Simple Dress",
        photo: rect33,
        price: "$ 35.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "extra9d1df87b",
        number: 33,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Apron Dress",
        photo: rect34,
        price: "$ 141.00",
        oldPrice: "",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "extra9l1df87b",
        number: 34,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Full Dress",
        photo: rect35,
        price: "$ 341.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "extra9l1df17b",
        number: 35,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Jeans Jacket",
        photo: rect36,
        price: "$ 120.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "extra9l1de27b",
        number: 36,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Nike Jordans",
        photo: rect37,
        price: "$ 49.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "extra9l1de37b",
        number: 37,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Light Full Dress",
        photo: rect38,
        price: "$ 89.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra9l1de12b",
        number: 38,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Dress for Gingers",
        photo: rect39,
        price: "$ 99.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    // mens

    {
        id: "extra111deb4d",
        number: 39,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Striped Sweatshirt",
        photo: rect12,
        price: "$ 38.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra111deb4b",
        number: 40,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Men pants",
        photo: rect13,
        price: "$ 30.00",
        oldPrice: "",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra119djb5b",
        number: 40,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "",
        category: "mens",
        name: "Men Knit Sweater",
        photo: rect14,
        price: "$ 54.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra111deb5b",
        number: 42,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS", "MOST VIEWED"],
        offer: "",
        category: "mens",
        name: "Dusk Pom Beanie",
        photo: rect15,
        price: "$ 180.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra111dbb5b",
        number: 43,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Denim Trucker Jacket",
        photo: rect16,
        price: "$ 32.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra111dbf7b",
        number: 44,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["SPECIALS", "BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Denim Vest",
        photo: rect17,
        price: "$ 320.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra111drf7b",
        number: 45,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "",
        category: "mens",
        name: "Leather White Trainers",
        photo: rect18,
        price: "$ 45.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "extra121dff7b",
        number: 46,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "mens",
        name: "Checked Tailored Trousers",
        photo: rect19,
        price: "$ 280.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbig9b1deb4d",
        number: 47,
        quantity: 0,
    
        selectedQuantity: 1,
        favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "MOST VIEWED"],
        offer: "",
        category: "womens",
        name: "Women's tracksuit Q109",
        photo: rect4,
        price: "$ 379.99",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig9b1deb4b",
        number: 48,
        quantity: 0,
    
        selectedQuantity: 1, 
        favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "-50%",
        category: "womens",
        name: "Cluse La Boheme Rose Gold",
        photo: rect5,
        price: "$ 30.00",
        oldPrice: "$ 60.00",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig9b1deb5b",
        number: 49,
        quantity: 0,
    
        selectedQuantity: 1,
        favourite: false,
        stockQuantity: 7,
        specification: ["MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Mercury Tee",
        photo: rect6,
        price: "$ 54.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig9d1deb5b",
        number: 50,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Skin Sweatpans",
        photo: rect7,
        price: "$ 21.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig9d1dbb5b",
        number: 51,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Short Sleeved Hoodie",
        photo: rect8,
        price: "$ 32.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig9d1dbf7b",
        number: 52,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS"],
        offer: "",
        category: "womens",
        name: "Ridley High Waist",
        photo: rect9,
        price: "$ 68.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig9d1drf7b",
        number: 53,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Cream women pants",
        photo: rect10,
        price: "$ 45.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig9d1dff7b",
        number: 54,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Simple Skin T-shirt",
        photo: rect11,
        price: "$ 20.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbig9d1df87b",
        number: 55,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Simple Dress",
        photo: rect33,
        price: "$ 35.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbig9d1df87b",
        number: 56,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Apron Dress",
        photo: rect34,
        price: "$ 141.00",
        oldPrice: "",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbig9l1df87b",
        number: 57,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Full Dress",
        photo: rect35,
        price: "$ 341.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbig9l1df17b",
        number: 58,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Jeans Jacket",
        photo: rect36,
        price: "$ 120.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbig9l1de27b",
        number: 59,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Nike Jordans",
        photo: rect37,
        price: "$ 49.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbig9l1de37b",
        number: 60,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Light Full Dress",
        photo: rect38,
        price: "$ 89.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig9l1de12b",
        number: 61,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Dress for Gingers",
        photo: rect39,
        price: "$ 99.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    // mens

    {
        id: "xlbig111deb4d",
        number: 62,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Striped Sweatshirt",
        photo: rect12,
        price: "$ 38.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig111deb4b",
        number: 63,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Men pants",
        photo: rect13,
        price: "$ 30.00",
        oldPrice: "",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig119djb5b",
        number: 64,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "",
        category: "mens",
        name: "Men Knit Sweater",
        photo: rect14,
        price: "$ 54.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig111deb5b",
        number: 65,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS", "MOST VIEWED"],
        offer: "",
        category: "mens",
        name: "Dusk Pom Beanie",
        photo: rect15,
        price: "$ 180.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig111dbb5b",
        number: 66,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Denim Trucker Jacket",
        photo: rect16,
        price: "$ 32.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig111dbf7b",
        number: 67,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["SPECIALS", "BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Denim Vest",
        photo: rect17,
        price: "$ 320.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig111drf7b",
        number: 68,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "",
        category: "mens",
        name: "Leather White Trainers",
        photo: rect18,
        price: "$ 45.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbig121dff7b",
        number: 69,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "mens",
        name: "Checked Tailored Trousers",
        photo: rect19,
        price: "$ 280.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbigextra9b1deb4d",
        number: 70,
        quantity: 0,
    
        selectedQuantity: 1,
        favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "MOST VIEWED"],
        offer: "",
        category: "womens",
        name: "Women's tracksuit Q109",
        photo: rect4,
        price: "$ 379.99",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra9b1deb4b",
        number: 71,
        quantity: 0,
    
        selectedQuantity: 1, 
        favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "-50%",
        category: "womens",
        name: "Cluse La Boheme Rose Gold",
        photo: rect5,
        price: "$ 30.00",
        oldPrice: "$ 60.00",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra9b1deb5b",
        number: 72,
        quantity: 0,
    
        selectedQuantity: 1,
        favourite: false,
        stockQuantity: 7,
        specification: ["MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Mercury Tee",
        photo: rect6,
        price: "$ 54.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra9d1deb5b",
        number: 73,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Skin Sweatpans",
        photo: rect7,
        price: "$ 21.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra9d1dbb5b",
        number: 74,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Short Sleeved Hoodie",
        photo: rect8,
        price: "$ 32.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra9d1dbf7b",
        number: 75,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS"],
        offer: "",
        category: "womens",
        name: "Ridley High Waist",
        photo: rect9,
        price: "$ 68.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra9d1drf7b",
        number: 76,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Cream women pants",
        photo: rect10,
        price: "$ 45.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra9d1dff7b",
        number: 77,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Simple Skin T-shirt",
        photo: rect11,
        price: "$ 20.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbigextra9d1df87b",
        number: 78,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Simple Dress",
        photo: rect33,
        price: "$ 35.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbigextra9d1df87b",
        number: 79,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Apron Dress",
        photo: rect34,
        price: "$ 141.00",
        oldPrice: "",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbigextra9l1df87b",
        number: 80,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Full Dress",
        photo: rect35,
        price: "$ 341.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbigextra9l1df17b",
        number: 81,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Jeans Jacket",
        photo: rect36,
        price: "$ 120.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbigextra9l1de27b",
        number: 82,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "womens",
        name: "Nike Jordans",
        photo: rect37,
        price: "$ 49.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    {
        id: "xlbigextra9l1de37b",
        number: 83,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Light Full Dress",
        photo: rect38,
        price: "$ 89.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra9l1de12b",
        number: 84,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "FEATURED PRODUCTS"],
        offer: "",
        category: "womens",
        name: "Dress for Gingers",
        photo: rect39,
        price: "$ 99.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },

    // mens

    {
        id: "xlbigextra111deb4d",
        number: 85,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Striped Sweatshirt",
        photo: rect12,
        price: "$ 38.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra111deb4b",
        number: 86,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Men pants",
        photo: rect13,
        price: "$ 30.00",
        oldPrice: "",
        star: [1, 2, 3],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra119djb5b",
        number: 87,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "",
        category: "mens",
        name: "Men Knit Sweater",
        photo: rect14,
        price: "$ 54.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra111deb5b",
        number: 88,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS", "MOST VIEWED"],
        offer: "",
        category: "mens",
        name: "Dusk Pom Beanie",
        photo: rect15,
        price: "$ 180.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra111dbb5b",
        number: 89,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Denim Trucker Jacket",
        photo: rect16,
        price: "$ 32.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Grey",
            size: "XS",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra111dbf7b",
        number: 90,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["SPECIALS", "BESTSELLERS", "MOST VIEWED", "FEATURED PRODUCTS"],
        offer: "",
        category: "mens",
        name: "Denim Vest",
        photo: rect17,
        price: "$ 320.00",
        oldPrice: "",
        star: [1, 2, 3, 4],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Blue",
            size: "S",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra111drf7b",
        number: 91,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS"],
        offer: "",
        category: "mens",
        name: "Leather White Trainers",
        photo: rect18,
        price: "$ 45.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "White",
            size: "M",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },
    {
        id: "xlbigextra121dff7b",
        number: 92,
        quantity: 0,

   
        selectedQuantity: 1, favourite: false,
        stockQuantity: 7,
        specification: ["NEW ARRIVALS", "SPECIALS", "BESTSELLERS"],
        offer: "",
        category: "mens",
        name: "Checked Tailored Trousers",
        photo: rect19,
        price: "$ 280.00",
        oldPrice: "",
        star: [1, 2, 3, 4, 5],
        description: {
            review: 2,
            thumbnails: [rect25, rect27],
            sku: 777,
            availibility: "In Stock",
            color: "Black",
            size: "L",
            choiceSize: ["XS", "S", "M", "L"],
            choiceColor: ["Blue", "White", "Black", "Grey"],
            material: "100% Polyester",
            reviews: [
                {
                    reviewName: "Oleh Chabanov",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment",
                },
                {
                    reviewName: "ShAmAn design",
                    reviewTime: "3 months ago",
                    reviewStar: 5,
                    reviewComment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
                }
            ],
        },
    },


]