console.log("hello,world!");
let name = "harry poter";
let age = 18;
let survived = false;
let city = "london";
let commentary = "";
let drivingLicence = "";
//console.log("character: ", name, ".age: ", age, ".city: ",city);
console.log(`character: ${name}. age:${age}. city: ${city}.`);

if(survived){
    commentary = "survived the battle for hogwarts.";
}else {
    commentary = "Died in the battle for hogwarts.";
}
console.log(`${name} ${commentary}`);

if(age<18){
    drivingLicence = `${name} is too young to drive a car.`;
} else {
    drivingLicence = `${name} is old enought ot drive a car.`;
}

console.log(drivingLicence);

const html = `
<ul>
<li>name: ${name}</li>
<li>age: ${age}</li>
<li>city: ${city} </li>
<li>he ${commentary} </li>
<li> ${drivingLicence}</li>
</ul>

`;

document.body.innerHTML = html;