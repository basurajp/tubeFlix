export const getRandomName=() =>{
    const firstNames = ['Carlos', 'Elena', 'Alejandro', 'Isabella', 'Miguel', 'Sophia', 'Diego', 'Valentina', 'Lucas', 'Camila'];
    const lastNames = ['Garcia', 'Rodriguez', 'Lopez', 'Martinez', 'Perez', 'Sanchez', 'Torres', 'Rivera', 'Gomez', 'Fernandez'];
  
    const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
    const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
  
    const randomFirstName = firstNames[randomFirstNameIndex];
    const randomLastName = lastNames[randomLastNameIndex];
  
    return `${randomFirstName} ${randomLastName}`;
  }
  

export const  generateRandomString =()=> {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < 15; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }  