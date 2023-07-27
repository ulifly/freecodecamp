/* Búsqueda de perfiles
Tenemos un arreglo de objetos que representan a diferentes personas en nuestras listas de contactos.

Una función lookUpProfile que recibe nombre (name) y una propiedad (prop) como argumentos preescritos para ti.

La función debe verificar si el nombre (name) es el nombre de pila del contacto (firstName) 
y la propiedad (prop) dada es una propiedad de ese contacto.

Si ambos son verdaderos, entonces devolver el "valor" de esa propiedad.

Si name no corresponde a ningún contacto, entonces devuelve la cadena No such contact.

Si prop no corresponde a ninguna propiedad válida de un contacto encontrado que coincida con name entonces 
devuelve la cadena No such property. */


// Configuración
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Cambia solo el código debajo de esta línea
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
        console.log(contacts[i][prop]);
        return contacts[i][prop]; 
        }
        console.log("No such property"); 
        return "No such property";
      }
    }
    console.log("No such contact");
    return "No such contact";

  // Cambia solo el código encima de esta línea
}

lookUpProfile("Sherlock", "likes");

console.log(contacts[0].hasOwnProperty("firstName"));