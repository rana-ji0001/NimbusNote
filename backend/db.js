const mongoose = require ('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/nimbusnote"


const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => console.log("Connected to MongoDB Successfully"));
}

module.exports = connectToMongo;