const btn1 = document.getElementById("but1");
const btn2 = document.getElementById("but2");

var persons = [
  {
    name: "Obaid",
    city: "Lahore",
  },
  {
    name: "Ahmad",
    city: "Karachi",
  },
  {
    name: "kashif",
    city: "Quetta",
  },
  {
    name: "akash",
    city: "Rawalpindi",
  },
  {
    name: "kamran",
    city: "Peshawar",
  },
];

btn1.addEventListener("click", function () {
  console.log(persons);
});

var array = {};

for (let i = 0; i < persons.length; i++) {
  var person = persons[i];
  var name = person.name;
  var city = person.city;
  array[city] = [name];
}

btn2.addEventListener("click", function () {
  console.log(array);
});
