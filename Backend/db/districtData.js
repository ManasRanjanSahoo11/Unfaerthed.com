const mongoose = require("mongoose");
const District = require("./connetion");

const districtData = [
  {
    _id:new mongoose.Types.ObjectId(),
    "districtName": "Khurda",
    "districtImgURL": [
      "https://static.toiimg.com/photo/47158773.cms",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Khandagari_and_Udaygiri_featured_image.jpg/1200px-Khandagari_and_Udaygiri_featured_image.jpg",
      "https://www.ostm.in/wp-content/uploads/2019/05/OSTM_Poster_mobile.jpg",
      "https://bhubaneswartourism.in/images/places-to-visit/headers/ram-mandir-bhubaneswar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
    ],
    "description": "Bhubaneswar, the capital city of Odisha, is often called the 'City of Temples' due to its rich cultural heritage and numerous ancient temples that showcase exquisite Kalinga architecture. It is a harmonious blend of tradition and modernity, serving as a hub for education, technology, and tourism. Bhubaneswar forms part of Odisha's Golden Triangle alongside Puri and Konark, attracting travelers with its historical landmarks like Lingaraj Temple and Dhauli Peace Pagoda.", //should 80-100 words
    "nearByDestination": [   // all place near by district
      {
        "imgURL": "https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1721821529185_Chilika%20Lake%201%20.jpg&w=3840&q=75",
        "title": "Chilika Lake",
        "description": "Chilika Lake is the largest brackish water lagoon in Asia and second largest coastal lagoon in the world,[disputed – discuss] covering an area of over 1,100 square kilometres",
        "link": "#"
      },
      {
        "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QA4htqeJi-j2fcHQf5VCP8cVitUGEgJASQ&s",
        "title": "Deras Dam",
        "description": "Deras Dam, located around 20 km away from Bhubaneswar, is considered among the largest dams in Odisha. Established in the year 1967 as a water reservoir, the dam’s main source of water is rain water. This dam was constructed mainly for irrigation purposes",
        "link": "#"
      },
      {
        "imgURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Statues_of_Vaishnavi%2C_Varahi%2C_Indrani_and_Camunda%2C_National_Museum%2C_New_Delhi.jpg/390px-Statues_of_Vaishnavi%2C_Varahi%2C_Indrani_and_Camunda%2C_National_Museum%2C_New_Delhi.jpg",
        "title": "Ugratara Temple",
        "description": "Ugratara Devalaya is a temple dedicated to Ugratara located in the western side of Jor Pukhury tanks in the heart of Guwahati city in the Lotaxil (Latasil) locality in Northeast India. The Ugratara Temple in Uzan Bazaar in the eastern part of Guwahati, Assam, is a Shakti shrine",
        "link": "#"
      },
    ],
    "tabNavigationData": [
      {
        title: "Luxury Camp",
        hotels: [
          {
            image: "https://via.placeholder.com/150",
            title: "Eco Retreat Konark",
            location: "Ramachandi Beach, Konark",
            price: "2577",
            discount: "3918",
            rating: "4.3★ VERY GOOD",
            amenities: ["WiFi", "AC", "TV"],
            photos: 5,
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Hotel O Chilika Residency",
            location: "Opposite To Nabard, Bhubaneswar",
            price: "3199",
            discount: "3999",
            rating: "4.5★ EXCELLENT",
            amenities: ["WiFi", "AC", "Parking"],
            photos: 21,
          },
        ],
      },
      {
        title: "Hotels",
        hotels: [
          {
            image: "https://via.placeholder.com/150",
            title: "Hotel Sunshine",
            location: "Puri Beach, Odisha",
            price: "1999",
            discount: "2499",
            rating: "4.0★ GOOD",
            amenities: ["WiFi", "Pool"],
            photos: 10,
          },
        ],
      },
      {
        title: "Nature Camps",
        hotels: [
          {
            image: "https://via.placeholder.com/150",
            title: "Hotel Sunshine",
            location: "Puri Beach, Odisha",
            price: "1999",
            discount: "2499",
            rating: "4.0★ GOOD",
            amenities: ["WiFi", "Pool"],
            photos: 10,
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Hotel Sunshine",
            location: "Puri Beach, Odisha",
            price: "1999",
            discount: "2499",
            rating: "4.0★ GOOD",
            amenities: ["WiFi", "Pool"],
            photos: 10,
          }
        ],
      },
      {
        title: "OYO Rooms",
        hotels: [
          {
            image: "https://via.placeholder.com/150",
            title: "Hotel Sunshine",
            location: "Puri Beach, Odisha",
            price: "1999",
            discount: "2499",
            rating: "4.0★ GOOD",
            amenities: ["WiFi", "Pool"],
            photos: 8,
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Hotel Sunshine",
            location: "Puri Beach, Odisha",
            price: "1999",
            discount: "2499",
            rating: "4.0★ GOOD",
            amenities: ["WiFi", "Pool"],
            photos: 5,
          }
        ],
      },

    ],
    "imageGallery": [
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1c/9b/ca/shanti-stupa-dhauli-giri.jpg?w=500&h=-1&s=1', alt: 'Image 1' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/aa/2f/d6/img-20170915-125714-largejpg.jpg?w=500&h=400&s=1', alt: 'Image 2' },
      { src: 'https://odishatour.in/wp-content/uploads/elementor/thumbs/laban-giri-hill-qtskm9wb1nhxyrlzlxqfpxrrjj6y8co4mmd9fgvs08.jpg?v=1725775873', alt: 'Image 3' },
      { src: 'https://odishatour.in/wp-content/uploads/2020/12/Mangalajodi-Bird-Sanctuary-Chilika-Khordha-4.jpg?v=1659551056', alt: 'Image 4' },
      { src: 'https://static2.tripoto.com/media/filter/tst/img/1712726/TripDocument/1574228137_bc7a21_f65c7f8688dd442490af457e92a70497_mv2_d_4608_3456_s_4_2.jpg', alt: 'Image 5' },
      { src: 'https://www.orissatourism.org/helpers/images/hirapur.jpg', alt: 'Image 6' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/86/e4/5a/temple-complex.jpg?w=500&h=-1&s=1', alt: 'Image 7' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/35/58/ed/img-20170809-095709-largejpg.jpg?w=500&h=400&s=1', alt: 'Image 8' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgSVxSxYDaMVRWMNKRuNuAH69XPCCnCKILQ&s', alt: 'Image 9' },
      { src: 'https://www.orissatourism.org/helpers/images/mangalajodi.jpg', alt: 'Image 10' },
      { src: 'https://odishaguide.com/wp-content/uploads/2021/11/khandagiri-1-1200x700.jpg', alt: 'Image 11' },
      { src: 'https://www.ecotourodisha.com/admin/images/destcontimg/destcont_56.jpegc', alt: 'Image 12' },
    ]
  },
]


// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/districtDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Insert Data
async function insertData() {
  try {
    await District.insertMany(districtData);
    console.log("Data Inserted Successfully");
  } catch (err) {
    console.error("Error in data inserting:", err);
  } finally {
    mongoose.connection.close();
  }
}

insertData();