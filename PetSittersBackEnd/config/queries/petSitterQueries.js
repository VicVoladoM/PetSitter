const crearPetSitter = `INSERT INTO PetSitter (name, lastName, email, cellphone, photoURL, cityId, edad, rating) 
                        VALUES ($name, $lastName, $email, $cellphone, $photoURL, $cityId, $edad, $rating);`;

const editarPetSitter = `UPDATE PetSitter
                        SET id = $id,
                        name = $name,
                        lastName = $lastName,
                        email = $email,
                        cellphone = $cellphone,
                        photoURL = $photoURL,
                        cityId = $cityId,
                        edad = $edad,
                        rating = $rating
                        WHERE id = $id;
                        `;

const eliminarPetSitter = `DELETE FROM PetSitter WHERE id = $id;`;

const obtenerPetSitters = `SELECT * FROM PetSitter`;

const obtenerPetSittersByState = `select p.*, c.nombre as nombreCiudad, s.id as stateId, s.nombre as nombreState
                                    from petsitter p
                                    inner  join city c on p.cityId = c.id
                                    inner  join state s on c.stateId = s.id
                                    where s.id = $id;`;

const AgregarPetSitterType = `INSERT INTO petSitterType (petSitterId, petsTypeId) 
                                VALUES ($petSitterId, $petsTypeId);`;

                                
const obtenerPetSitterByType = `SELECT pt.*, pp.id AS petSitterTypes
                                FROM PetsType pt
                                INNER  JOIN petSitterType pp ON pt.id = pp.petsTypeId
                                INNER  JOIN PetSitter ps ON pp.petSitterId = ps.id
                                WHERE ps.id = $id;`;

const eliminarPetTypeForPetSitter = `DELETE FROM petSitterType WHERE id = $id`;

const obtenerPetSitterView = `SELECT p.id as cuidadorId,p.PhotoURL, p.name AS nombreCuidador, p.edad, p.rating, c.nombre AS nombreCity, c.id AS idCity, s.id AS stateId, s.nombre AS estado
FROM PetSitter p, City c, State s
WHERE p.cityId = c.id AND c.stateId = s.id;`;

const obtenerPettSitterById = `SELECT p.PhotoURL, p.id AS pettsiterID, p.name AS nombreCuidador, p.edad, p.rating, c.nombre AS nombreCity, c.id AS idCity, s.id AS stateId, s.nombre AS estado
FROM PetSitter p, City c, State s
WHERE p.cityId = c.id AND c.stateId = s.id AND p.id =  $id`;

module.exports = {
    crearPetSitter, 
    editarPetSitter,
    eliminarPetSitter, 
    obtenerPetSitters,
    obtenerPetSittersByState,
    AgregarPetSitterType,
    obtenerPetSitterByType,
    eliminarPetTypeForPetSitter,
    obtenerPetSitterView,
    obtenerPettSitterById
}
