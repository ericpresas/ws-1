var express = require('express');
var Elements = require('../models/elements');
var Gallery = require('../models/gallery');
var router = express.Router();

/* GET gallery page. */
router.get('/', function(req, res, next) {
	var id_gallery = req.query.id_gallery;
	var elements;
	var gallery;
	Elements.getGalleryElements(id_gallery, (err, data) => {
		if (err) throw err;
		else elements = data;

			//res.render('galleryElements', data);
	});

	Gallery.getGallery(id_gallery, (err, data) => {
		if (err) throw err;
		else{
			gallery = data;
			res.render('galleryElements',{gallery, elements});
		} 
	});
	
});

router.post('/', (req, res) => {
	console.log(req.body);
})

module.exports = router;