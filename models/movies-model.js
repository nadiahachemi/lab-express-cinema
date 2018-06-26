const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title:{ type: String, required: true},
    director:{type: String},
    stars:{type:Array},
    image:{type: String, default:"https://png.icons8.com/metro/1600/movie-projector.png"},
    description:{type: String},
    showtimes:{type: Array}
});

const Movies= mongoose.model("Movies", moviesSchema);


module.exports = Movies;