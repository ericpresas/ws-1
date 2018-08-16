var mysql = require('mysql');

connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'admin1234',
	database: 'portfolio'
});

let videosModel = {};

videosModel.getVideos = (callback) => {
	//console.log(connection)
	var query = 'SELECT e.name, e.src, e.idgallery, g.src as url_image FROM gallery g INNER JOIN element e ON e.idgallery=g.id WHERE e.format="video"'
	connection.query(query, (err, result, fields) => {
	  if (err){
	  	throw err;
	  } 
	  else{
	  	console.log(result);
	  	callback(null, {'Videos' : result})
	  }
	  
	});
}

videosModel.getVideo = (id_gallery, callback) => {
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

module.exports = videosModel;