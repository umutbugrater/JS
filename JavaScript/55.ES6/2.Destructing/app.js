// DEstructing Kullanımı

let langs = ["C#", "C++", "JavaScript", "Python"];
let lang1, lang2, lang3, lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];

[lang1, lang2, lang3, lang4] = langs;
// let [lang1, lang2, lang3, lang4] = langs;
console.log(lang1, lang2, lang3, lang4);

const hesapla = (a, b) => {
  const topla = a + b;
  const cikar = a - b;
  const carp = a * b;
  const bol = a / b;

  const dizi = [topla, cikar, carp, bol];
  return dizi;
};

[a, b, c, d] = hesapla(10, 2);
console.log(a, b, c, d);

const person = {
  firstName: "Umut BUğra",
  lastName: "TER",
  salary: 5000,
  age: 22,
};

// let isim, soyisim, maas, yas;
// isim = person.firstName;
// soyisim = person.lastName;
// maas = person.salary;
// yas = person.age;

let { firstName: isim, lastName: soyisim, salary: maas, age: yas } = person;

console.log(isim, soyisim, maas, yas)
// console.log(firstName, lastName, salary, age);
