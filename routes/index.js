const express = require('express');
const router  = express.Router();
const Movies =  require("../models/movies-model")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('../views/index.hbs');
});

router.get("/movies",(req, res, next)=>{
  res.render('/views/movies.hbs');
});

module.exports = router;
