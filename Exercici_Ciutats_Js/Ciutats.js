console.log("!!!!!!!!!!!!!Fase 1!!!!!!!!!!!!!");
var ciutat1, ciutat2, ciutat3, ciutat4, ciutat5, ciutat6;

ciutat1 = prompt("Ciutat 1");
ciutat2 = prompt("Ciutat 2");
ciutat3 = prompt("Ciutat 3");
ciutat4 = prompt("Ciutat 4");
ciutat5 = prompt("Ciutat 5");
ciutat6 = prompt("Ciutat 6");

console.log(ciutat1 + " " + ciutat2 + " " + ciutat3 + " " + ciutat4 + " " + ciutat5 + " " + ciutat6);

console.log("!!!!!!!!!!!!!Fase 2!!!!!!!!!!!!!");
var arrayCiutats = [ciutat1, ciutat2, ciutat3, ciutat4, ciutat5, ciutat6].sort();

arrayCiutats.forEach(element => {
    console.log(element)
});

console.log("!!!!!!!!!!!!!Fase 3!!!!!!!!!!!!!");
for (var i = 0; i < arrayCiutats.length; i++) {
    arrayCiutats[i] = arrayCiutats[i].replace('a', '4');
    console.log(arrayCiutats[i]);
}

console.log("!!!!!!!!!!!!!Fase 4!!!!!!!!!!!!!");
var ciutatPerInvertir1 = ["B", "a", "r", "c", "e", "l", "o", "n", "a"];
var ciutatPerInvertir2 = ["M", "a", "d", "r", "i", "d"];
var ciutatPerInvertir3 = ["V", "a", "l", "e", "n", "c", "i", "a"];
var ciutatPerInvertir4 = ["M", "a", "l", "a", "g", "a"];
var ciutatPerInvertir5 = ['C', 'a', 'd', 'i', 'z'];
var ciutatPerInvertir6 = ["S", "a", "n", "t", "a", "n", "d", "e", "r"];

ciutatPerInvertir1.reverse();
ciutatPerInvertir2.reverse();
ciutatPerInvertir3.reverse();
ciutatPerInvertir4.reverse();
ciutatPerInvertir5.reverse();
ciutatPerInvertir6.reverse();

console.log(ciutatPerInvertir1);
console.log(ciutatPerInvertir2);
console.log(ciutatPerInvertir3);
console.log(ciutatPerInvertir4);
console.log(ciutatPerInvertir5);
console.log(ciutatPerInvertir6);



