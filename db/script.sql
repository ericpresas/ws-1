CREATE TABLE gallery (
	id INT(10) unsigned NOT NULL AUTO_INCREMENT,
	name VARCHAR(200) COLLATE utf8_unicode_ci NOT NULL,
	description VARCHAR(500) COLLATE utf8_unicode_ci,
	src VARCHAR(200) COLLATE utf8_unicode_ci NOT NULL,
	format VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
	createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);

CREATE TABLE element (
	id INT(10) unsigned NOT NULL AUTO_INCREMENT,
	idgallery INT(10) unsigned NOT NULL,
	src VARCHAR(200) COLLATE utf8_unicode_ci NOT NULL,
	name VARCHAR(200) COLLATE utf8_unicode_ci NOT NULL,
	format VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
	createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);

INSERT INTO gallery (name, description, src, format)
VALUES ('Kevin Spencer', 
	'Kevin Spencer',
	'https://i.ytimg.com/vi/PVg_InrQFR0/hqdefault.jpg',
	'image');

INSERT INTO gallery (name, description, src, format)
VALUES ('Pets', 
	'Pets',
	'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
	'image');


INSERT INTO gallery (name, description, src, format)
VALUES ('Regular Show', 
	'Regular Show',
	'https://i0.wp.com/www.caninomag.es/wp-content/uploads/2016/01/Historias-Corrientes.jpg?resize=634%2C424&ssl=1',
	'image');

INSERT INTO gallery (name, description, src, format)
VALUES ('One Punch Man', 
	'One Punch Man',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqF0FjT2LfxMu8uifbRXUiEVpZDWJwDYQdtexbLeubzB6rF4sh',
	'image');

INSERT INTO element (idgallery, src, name, format)
VALUES (1, 
	'https://i.ytimg.com/vi/PVg_InrQFR0/hqdefault.jpg', 
	'spencer', 
	'image');

INSERT INTO element (idgallery, src, name, format)
VALUES (1, 
	'https://vignette.wikia.nocookie.net/p__/images/e/ec/Kevin_Spencer_Temporada_1_%28slim%29_kindlephoto-3411320.jpg/revision/latest?cb=20151201014549&path-prefix=protagonist', 
	'kevin', 
	'image');

INSERT INTO element (idgallery, src, name, format)
VALUES (1, 
	'https://vignette.wikia.nocookie.net/p__/images/e/ec/Kevin_Spencer_Temporada_1_%28slim%29_kindlephoto-3411320.jpg/revision/latest?cb=20151201014549&path-prefix=protagonist', 
	'kevin', 
	'image');

INSERT INTO element (idgallery, src, name, format)
VALUES (2, 
	'https://images-na.ssl-images-amazon.com/images/M/MV5BNDQzMmRkOGEtMGM0Mi00OWUwLTgxOGUtZGY0M2JhNTc0YmRjXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg', 
	'regular show', 
	'image');

INSERT INTO element (idgallery, src, name, format)
VALUES (2, 
	'https://i.cdn.turner.com/v5cache/CARTOON/site/Images/i155/rs_space_brandpicker_icon_180x180.png', 
	'regular show', 
	'image');

INSERT INTO element (idgallery, src, name, format)
VALUES (2, 
	'https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwii_KuV2cTbAhVHRhQKHZQeCigQjRx6BAgBEAU&url=https%3A%2F%2Fwww.ebay.es%2Fitm%2FRegular-Show-Variedad-Tarjeta-Caretas-De-Fiesta-6-Paquete-Mordecai-Rigby-Paletas-%2F172398458868&psig=AOvVaw2inM0AKVaUZh8u7wTjzO3N&ust=1528568893953087', 
	'regular show', 
	'image');

INSERT INTO element (idgallery, src, name, format)
VALUES (3, 
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgE4bW4dby-7QKaRb4CfFUx0WUDIqnF4ikZ98NnNp1P1gEAJo-6g', 
	'one punch man', 
	'image');

INSERT INTO element (idgallery, src, name, format)
VALUES (3, 
	'http://superchannel12.com/wp-content/uploads/2016/09/HmWDsHkfTFyShq7GqbE1_b01.png', 
	'one punch man', 
	'image');

INSERT INTO element (idgallery, src, name, format)
VALUES (3, 
	'https://pre00.deviantart.net/edb8/th/pre/f/2016/014/4/e/saitama_2_one_punch_man_by_truss31-d9nz7ey.png', 
	'one punch man', 
	'image');

INSERT INTO element (idgallery, src, name, format)
VALUES (3, 
	'https://pre00.deviantart.net/edb8/th/pre/f/2016/014/4/e/saitama_2_one_punch_man_by_truss31-d9nz7ey.png', 
	'one punch man', 
	'image');

INSERT INTO element (idgallery, src, name, format)
VALUES (3, 
	'https://youtu.be/atxYe-nOa9w', 
	'one punch man', 
	'video');

INSERT INTO element (idgallery, src, name, format)
VALUES (3, 
	'https://youtu.be/0cwL9RP5E8w', 
	'one punch man', 
	'video');

