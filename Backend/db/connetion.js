const mongoose = require("mongoose");

// MongoDB Connection
mongoose
    .connect("mongodb://localhost:27017/districtDB")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));


const nearByDestinationCardSchema = new mongoose.Schema({
    imgURL: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
})

const hotelSchema = new mongoose.Schema({
    img:String,
    title: String,
    location: String,
    price:String,
    discount: String,
    rating: String,
    amenities:[String],
    photos:Number
})

const tabNavigationSchema = new mongoose.Schema({
    title:String,
    hotels: [hotelSchema]  // Array of hotels
})

const imgGallerySchema = new mongoose.Schema({
    src: { type: String, required: true },
    alt: { type: String, required: true }
})



// District Schema and Model
const districtSchema = new mongoose.Schema({
    _id: {type: String, required: true}, // Use district ID as the primary key
    districtName: {type: String, require: true},
    districtImgURL: [{type:String, required:true}],
    description: String,
    nearByDestination: [nearByDestinationCardSchema],
    tabNavigationData:[tabNavigationSchema],
    imageGallery: [imgGallerySchema] // Array of image URLs
});

module.exports = mongoose.model("District", districtSchema);