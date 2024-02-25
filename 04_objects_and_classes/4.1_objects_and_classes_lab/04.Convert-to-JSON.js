function convertObjectToJson(name, lastName, hairColor) {
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;
    
    console.log(JSON.stringify(person));
}

// convertObjectToJson('George', 'Jones', 'Brown');
// convertObjectToJson('Peter', 'Smith', 'Blond');