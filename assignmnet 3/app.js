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
    city: "Lahore",
  },
  {
    name: "akash",
    city: "Rawalpindi",
  },
  {
    name: "kamran",
    city: "Rawalpindi",
  },
];

btn1.addEventListener("click", function () {
  console.log(persons);
});

var array = [];

for (let i = 0; i < persons.length; i++) {
  var person = persons[i];
  var name = person.name;
  var city = person.city;

  var existingCity = array.filter((item) => Object.keys(item)[0] === city);

  if (existingCity.length !== 0) {
    existingCity[0][city] += ", " + name;
  } else {
    var toArray = {
      [city]: name,
    };
    array.push(toArray);
  }
}

btn2.addEventListener("click", function () {
  console.log(array);
});
