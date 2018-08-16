var express = require('express');
var Gallery = require('../models/gallery');
var router = express.Router();

/* GET gallery page. */
router.get('/', function(req, res, next) {
	
	Gallery.getGalleries((err, data) => {
		console.log('galeria')
		if (err) throw err;
		else{
			res.render('gallery-1', data);
		} 
	});
	
});


router.post('/', (req, res) => {
	console.log(req.body);
})

module.exports = router;
