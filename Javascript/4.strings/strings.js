//Una cadena de texto con tu Nombre
let firstName = "Valentin"
//Otra cadena de texto con tu Apellido
let lastName = "Sznitowski"

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let student = `${firstName} ${lastName}`
console.log(student)

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let studentMayus = `${firstName} ${lastName}`
let resultMayus = studentMayus.toLocaleUpperCase()
console.log(resultMayus)

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let studentMinus = `${firstName} ${lastName}`
let resultMinus = studentMinus.toLocaleLowerCase()
console.log(resultMinus)

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let str = `${firstName} ${lastName}`
let letterCounter = str.length
console.log(letterCounter)

//Una variable que contenga la primera letra del Nombre
let firstLetterCounter = firstName.startsWith("V")
console.log(firstLetterCounter)

//Otra variable que contenga la última letra del Apellido
let lastLetterCounter = lastName.endsWith("i")
console.log(lastLetterCounter)

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let removeSpaces = student.replace(/ /g, "") 
console.log(removeSpaces)

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nameCheck = student.includes("Valentin")
console.log(nameCheck)