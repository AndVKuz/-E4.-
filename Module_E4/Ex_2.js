const Person = {
    name: 'Andrey',
    age: '23',
}

console.log(isProperty (Person, 'name'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}
