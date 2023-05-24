import Img1 from "./icon/image 12.png";
import Img2 from "./icon/wedding-photography 1.png";
import Img3 from "./icon/mountain-bike 1.png";
import Star from "./icon/Star 1 (1).png";

const pass = [
    {
        id: 1,
        title: "Life Lesson with Katie Zaferes",
        description: "I will share with you what I call \"Possitive Impactful Moments of Disappoinment.\" Throughout my career, many of my highest moments only came from wins and losses. But learning from those difficult moments is what gave me the ability to go above them and reach my goals",
        price: 136,
        coverImage: Img1,
        image: Star,
        stats: {
            rating: 5.0,
            reviewCount: "(6)."
        },
        location: "Online",
        openSpots: 0,

    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? for beginner and expert photographers alike, join us in learning techniques required to leave the couples a happy memories that'll last  a lifetime.",
        price: 125,
        coverImage: Img2,
        image: Star,
        stats: {
            rating: 5.0,
            reviewCount: "(30)."
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends always conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImage: Img3,
        image: Star,
        stats: {
            rating: 4.8,
            reviewCount: "(2)."
        },
        location: "Norway",
        openSpots: 3,
    }
]

export default pass;