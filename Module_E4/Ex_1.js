const Person = {
    name: 'Andrey',
    age: '23',
}

getObjectValues(Person);

function getObjectValues(obj) {
    for (let key in obj)
        if (obj.hasOwnProperty(key)){
            console.log(key);
        }
}