CREATE DATABASE PetSitter2;
USE  PetSitter2;

CREATE TABLE State(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL
);

CREATE TABLE City(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
    stateId INT NOT NULL
);

CREATE TABLE PetsType(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`description` varchar(100) NOT NULL
);

CREATE TABLE PetSitter(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    cellphone VARCHAR(15) NOT NULL,
    photoURL VARCHAR(350) NOT NULL,
    cityId INT NOT NULL,
    edad INT NOT NULL,
    rating INT NOT NULL
);

CREATE TABLE petSitterType(
	id INT PRIMARY KEY AUTO_INCREMENT,
    petSitterId INT NOT NULL,
    petsTypeId INT NOT NULL
);


ALTER TABLE City ADD FOREIGN KEY (stateId) REFERENCES State(id);
ALTER TABLE PetSitter ADD FOREIGN KEY (cityId) REFERENCES City(id);
ALTER TABLE petSitterType ADD FOREIGN KEY (petSitterId) REFERENCES PetSitter(id);
ALTER TABLE petSitterType ADD FOREIGN KEY (petsTypeId) REFERENCES  PetsType(id);
ALTER TABLE petSitterType ADD UNIQUE INDEX uniqueSitterType (petSitterId, petsTypeId);

INSERT INTO State (nombre) VALUES ("Sonora");
INSERT INTO City (nombre, stateId) VALUES ("Hermosillo",1);
INSERT INTO PetSitter (`name`, lastName, email, cellphone, photoURL, cityId, edad, rating) 
VALUES( "Luis", "Angel", "luisangel@gmail.com", 668909023, "https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?w=996&t=st=1674022230~exp=1674022830~hmac=7a42a1190094dadc78f53c26047a93a3bd6f2ce6dd48c58b4ff4717ef99da439",1, 25,5);

INSERT INTO State (nombre) VALUES ("Sinaloa");
INSERT INTO City (nombre, stateId) VALUES ("Culiacan",2);
INSERT INTO PetSitter (`name`, lastName, email, cellphone, photoURL, cityId, edad, rating) 
VALUES( "Raul", "Rojo", "raulrojo@hotmail.com", 667295738, "https://img.freepik.com/fotos-premium/tengo-mucho-lo-que-sonreir-retrato-estudio-apuesto-joven-sonriendo-contra-fondo-gris_590464-22184.jpg",2,4);

INSERT INTO State (nombre) VALUES ("Chiapas");
INSERT INTO City (nombre, stateId) VALUES ("Tapachula",3);
INSERT INTO PetSitter (`name`, lastName, email, cellphone, photoURL, cityId, edad, rating) 
VALUES( "Hernesto", "Locano", "hernestinlocano@gmail.com", 669762534, "https://img.freepik.com/foto-gratis/chico-worldface-british-fondo-blanco_53876-146315.jpg?w=740&t=st=1674023187~exp=1674023787~hmac=66c4485e2d547cd9e38bdfe7de63fcbc35320b9081ceff0b910ac47831c11599",3,23,5);

INSERT INTO State (nombre) VALUES ("Veracruz ");
INSERT INTO City (nombre, stateId) VALUES ("Pueblo Paleta",4);
INSERT INTO PetSitter (`name`, lastName, email, cellphone, photoURL, cityId, edad, rating) 
VALUES( "Felipe", "Ferras Gomez", "ferras@gmail.com", 66897980, "https://heraldodemexico.com.mx/u/fotografias/m/2020/7/18/f960x540-239484_313559_0.jpg",4, 39,3);

INSERT INTO State (nombre) VALUES ("Nayarit");
INSERT INTO City (nombre, stateId) VALUES ("Tepic",5);
INSERT INTO PetSitter (`name`, lastName, email, cellphone, photoURL, cityId, edad, rating) 
VALUES( "Rosaura", "Lidia", "lidiarosa@gmail.com", 66438767, "https://www.clinicamenorca.com/wp-content/uploads/2017/12/dias-de-fiesta-y-tu-con-la-cara-cansada-e1573658537875.jpg",5, 34,4);

INSERT INTO PetSitter (`name`, lastName, email, cellphone, photoURL, cityId,  edad,rating) 
VALUES( "Daniel", "Mendoza", "danimen@gmail.com", 6671565342, "https://www.spring.org.uk/images/wide-face.jpg",1,33,4);

INSERT INTO PetSitter (`name`, lastName, email, cellphone, photoURL, cityId,  edad,rating) 
VALUES( "Oscar", "Lizarraga", "oscar123@gmail.com", 667155435, "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",1, 33,3);

INSERT INTO PetSitter (`name`, lastName, email, cellphone, photoURL, cityId,  edad,rating) 
VALUES( "memo", "luis", "memorias@gmail.com", 123525, "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",1, 43,3);


INSERT INTO PetsType (description) VALUES ("Gatos");
INSERT INTO PetsType (description) VALUES ("Perros");
INSERT INTO PetsType (description) VALUES ("Conejo");

insert into petSitterType(petSitterId,petsTypeId) values (1,1);
insert into petSitterType(petSitterId,petsTypeId) values (1,2);
insert into petSitterType(petSitterId,petsTypeId) values (1,3);

insert into petSitterType(petSitterId,petsTypeId) values (2,1);
insert into petSitterType(petSitterId,petsTypeId) values (2,2);
insert into petSitterType(petSitterId,petsTypeId) values (2,3);

insert into petSitterType(petSitterId,petsTypeId) values (3,1);
insert into petSitterType(petSitterId,petsTypeId) values (3,2);
insert into petSitterType(petSitterId,petsTypeId) values (3,3);

insert into petSitterType(petSitterId,petsTypeId) values (4,1);
insert into petSitterType(petSitterId,petsTypeId) values (4,2);
insert into petSitterType(petSitterId,petsTypeId) values (4,3);

insert into petSitterType(petSitterId,petsTypeId) values (5,1);
insert into petSitterType(petSitterId,petsTypeId) values (5,2);
insert into petSitterType(petSitterId,petsTypeId) values (5,3);

SELECT * FROM petSitterType;
SELECT * FROM PetSitter;
SELECT * FROM City;
SELECT * FROM petSitterType;
SELECT * FROM State;
SELECT * FROM PetsType;
