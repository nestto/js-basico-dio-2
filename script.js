let userName = getFirstName('John-Doe', '-');

console.log(`Seja bem vindo ${userName}`);

function getFirstName(name, splitChar) {
    let firstName = name.split(splitChar)[0];
    return firstName;
}