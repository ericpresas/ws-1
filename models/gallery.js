var mysql = require('mysql');

connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'visual69engin',
	database: 'portfolio'
});

let galleryModel = {};

galleryModel.getGalleries = (callback) => {
	//console.log(connection)
	connection.query("SELECT * FROM gallery", (err, result, fields) => {
	  if (err){
	  	throw err;
	  } 
	  else{
	  	console.log(result);
	  	callback(null, {'Galleries' : result})
	  }
	  
	});
}

galleryModel.getGallery = (id_gallery, callback) => {
	//console.log(connection)
	connection.query("SELECT * FROM gallery where id="+id_gallery, (err, result, fields) => {
	  if (err){
	  	throw err;
	  } 
	  else{
	  	console.log(result);
	  	callback(null, {'Gallery' : result})
	  }
	  
	});
}

module.exports = galleryModel;