var express = require('express');
var Videos = require('../models/videos');
var router = express.Router();

/* GET gallery page. */
router.get('/', function(req, res, next) {
	
	Videos.getVideos((err, data) => {
		console.log('videos')
		if (err) throw err;
		else{
			res.render('videos', data);
		} 
	});
	
});


router.post('/', (req, res) => {
	console.log(req.body);
})

module.exports = router;
