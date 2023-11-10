const fullName = prompt("What's your name?");

document.body.innerHTML = `Your name is: ${fullName} <br>`;
document.body.innerHTML += `Your have ${fullName.length} letters <br>`;
document.body.innerHTML += `The second letter of your name is: ${fullName[1]} <br>`;
document.body.innerHTML += `The first index of your name is: ${fullName.indexOf('w')} <br>`;
document.body.innerHTML += `The last index of your name is: ${fullName.lastIndexOf('a')} <br>`;
document.body.innerHTML += `The last three letters of your name are: ${fullName.slice(-3)} <br>`;
document.body.innerHTML += `${fullName.split('')} <br>`;
document.body.innerHTML += `${fullName.toUpperCase()}<br>`;
document.body.innerHTML += `${fullName.toLowerCase()}<br>`;
