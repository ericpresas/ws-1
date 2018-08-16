var mysql = require('mysql');

connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'cz6ppm11',
	database: 'portfolio'
});

let elementsModel = {};

elementsModel.getGalleryElements = (id_gallery, callback) => {
	//console.log(connection)

	connection.query("SELECT * FROM element WHERE idgallery="+id_gallery, (err, result, fields) => {
	  if (err){
	  	throw err;
	  } 
	  else{
	  	console.log(result);
	  	callback(null, {'Elements' : result})
	  }
	});
}


module.exports = elementsModel;