let n = parseInt(prompt('n='))
switch (n) {
  case 1:
    n = 'один'
    break;
  case 2:
    n = 'два'
    break;
  case 3:
    n = 'три'
    break;
  case 4:
    n = 'четыре'
    break;
  case 5:
    n = 'пять'
    break;
  case 6:
    n = 'шесть'
    break;
  case 7:
    n = 'семь'
    break;
  case 8:
    n = 'восемь'
    break;
  case 9:
    n = 'девять'
    break
}
let dcat = parseInt(prompt())
switch (dcat) {
  case 11:
    dcat = 'одиннадцать';
    break;
  case 12:
    dcat = 'двенадцать'
    break;
  case 13:
    dcat = 'тринадцать'
    break;
  case 14:
    dcat = 'четырнадцать'
    break;
  case 15:
    dcat = 'пятнадцать'
    break
  case 16:
    dcat = 'шестнадцать'
    break;
  case 17:
    dcat = 'семнадцать'
    break;
  case 18:
    dcat = 'восемнадцать'
    break;
  case 19:
    dcat = 'девятнадцать'
    break;
}
let desyatki = parseInt(prompt())
switch (desyatki) {
  case 10:
    desyatki = 'десять'
    break;
  case 20:
    desyatki = 'двадцать'
    break;
  case 30:
    desyatki = 'тридцать'
    break;
  case 40:
    desyatki = 'сорок'
    break;
  case 50:
    desyatki = 'пятьдесят'
    break;
  case 60:
    desyatki = 'шестьдесят'
    break;
  case 70:
    desyatki = 'семьдесят'
    break;
  case 80:
    desyatki = 'восемьдесят'
  case 90:
    desyatki = 'девяносто'
    break;
}
let sotni = parseInt(prompt());
switch (sotni) {
  case 100:
    sotni = 'сто'
    break;
  case 200:
    sotni = 'двести'
    break;
  case 300:
    sotni = 'триста'
    break;
}
console.log(n, dcat, desyatki, sotni);