/*let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("domagoj");

let firstName = "Domagoj";
console.log(firstName);
console.log(firstName);
console.log(firstName);

*/
/*let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "domagoj");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);


let country = "hrvatska";
let continent = "europa";
let population = 1000;

console.log(country);
console.log(continent);
console.log(population);


let age = 30;
age = 31;
const birthYear = 1991;

console.log(birthYear);
console.log(age);

// matematicki operateri
const now = 2037;
const ageDomagoj = now - 1991;
const ageEva = now - 2018;
console.log(ageDomagoj, ageEva);

console.log(ageDomagoj * 2, ageDomagoj / 10, 2 ** 3);

const firstName = "Domagoj";
const lastName = "Marković";
console.log(firstName + " " + lastName);

// assingment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x= x * 4 = 100
x++; // x= x+1
x--;
x--;
console.log(x);

// comparison operateri

console.log(ageDomagoj > ageEva); // > , < , >= , <=

console.log(ageEva >= 18);



let hrvatska = 4000000;

console.log(hrvatska / 2);

hrvatska++;
console.log(hrvatska);

let finland = 6000000;
console.log(finland > hrvatska);

let averagePopulation = 33000000;
console.log(hrvatska < averagePopulation);

const description =
  "Portugal is in Europe, and its 11 million people speaks portuguese";

console.log(description);


const now = 2037;
const ageDomagoj = now - 1991;
const ageEva = now - 2018;

console.log(now - 1991 > now - 2018);

const averageAge = (ageDomagoj + ageEva) / 2;
console.log(ageDomagoj, ageEva, averageAge);

/////////////////////////////////////////////////////////////
const markWeight = 95;
const markHight = 1.88;

const johnWeight = 85;
const johnHight = 1.76;

let markBMI = markWeight / (markHight * markHight);
let johnBMI = johnWeight / (johnHight * johnHight);
console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
////////////////////////////////////////////////////////////////


////////////////////////////////////////////
const now = 2037;
const ageDomagoj = now - 1991;
const ageEva = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageDomagoj + ageEva) / 2;
console.log(ageDomagoj, ageEva, averageAge);
////////////////////////////////////////////



///////// stirnigs and templet literals///////////////////////////////
const firstName = "Domagoj";
const job = "tehnicar";
const birthYear = 1995;
const year = 2037;

const domagoj =
  "I m " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(domagoj);

const domagojNew = ` I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(domagojNew);
-/////////////////////////////////////


////////////vježba//////////////////////
const country = "Portugal";
const continent = "Europe";
const language = "Portugese";
const population = 11;

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);
//////////////////////////////////////////


//////////////  if and else statment /////////////////////////////////
const age = 15;

if (age >= 18) {
  console.log("Domagoj can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Domagoj is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1995;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
/////////////////////////////////////////////////////////////////////////////



///////////////////vježba//////////////////////////////


const croPopulation = 130;

if (croPopulation >= 33) {
  console.log(`Croatian population is above average.`);
} else {
  const average = 33 - croPopulation;
  console.log(`Croatian population is ${average} million below average`);
}
////////////////////////////////////////////////////



//////////////////////// CODING CHALELENGE #2///////////

const markWeight = 95;
const markHight = 1.88;

const johnWeight = 85;
const johnHight = 1.76;

let markBMI = markWeight / (markHight * markHight);
let johnBMI = johnWeight / (johnHight * johnHight);

if (markBMI > johnBMI) {
  console.log(
    `Marks's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`
  );
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}

///////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////// Type conversion and coerecion////////////////////////////

// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23));

// type coerecion

console.log("i am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");
///////////////////////////////////////////////


//////////////vježba//////////////////////////

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 1);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

////////////////////////////////////////////


////////////////// truthly and falsy values ///////////////////

// 5 falsy values: 0, '', undefined, null,  NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Domagoj"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}




///////////////////////equality operators /////////////////

const age = "18";

if (age === 18) console.log("You jsut becam an adult. (strict)");

if (age == 18) console.log("You jsut becam an adult.(loose)");

/// strictk operator ===
/// lose oeprator ==

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);

if (favorite === 23) {
  console.log("cool 23 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("number us not 7 or 23");
}

if (favorite !== 23) console.log("why nopt 23");


  
////////////////////////////////////////////////////

///////////////////vježba////////////////////

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
console.log(numNeighbours);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("no borders");
}
 ////////////////////////////////////////////////
 

//////// Boolean Logic /////////////////////

////////////////////////////////////////////


///////////////////// Logical Operators /////////////////

const hasDriversLicence = true; // A
const goodVision = false; // B

console.log(hasDriversLicence && goodVision);
console.log(hasDriversLicence || goodVision);
console.log(!hasDriversLicence);

if (hasDriversLicence && goodVision) {
  console.log("sarah is able to drive");
} else {
  console.log("someone else sholud drive..");
}

const isTired = true; // C
console.log(hasDriversLicence || goodVision || isTired);

if (hasDriversLicence && goodVision && !isTired) {
  console.log("sarah is able to drive");
} else {
  console.log("someone else sholud drive..");
}



/////////////////// vježba /////////////////

const language = "English";
const populatio = 4;
const isIsland = true;
const country = "croatia";

if (language === "English" && populatio < 50 && !isIsland) {
  console.log(`you schould live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

//////////////////////////////////////////



//////////////////coding challenge #3/////////////

let dolphinsScore1 = 97;
let dolphinsScore2 = 112;
let dolphinsScore3 = 101;

let scoreKoalas1 = 109;
let scoreKoalas2 = 95;
let scoreKoalas3 = 123;

const dolphinAvrg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAvrg = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
console.log(dolphinAvrg, koalasAvrg);

if (dolphinAvrg > koalasAvrg && dolphinAvrg > 100) {
  console.log("Dolphins wins!");
} else if (koalasAvrg > dolphinAvrg && koalasAvrg > 100) {
  console.log("Koalas wins");
} else if (koalasAvrg === dolphinAvrg && koalasAvrg && dolphinAvrg > 100) {
  console.log("both tema wins trophy");
} else {
  console.log("nobody wins");
}

///////////////////////////////////////////

//////////////////// the switch statment ////////////////////

const day = "monday";

switch (day) {
  case "monday":
    console.log("trcanje baranja");
    console.log("trening snage doma");
    break;
  case "tuesday":
    console.log("ici na posao aaa");
    break;
  case "wednesday":
  case "thursday":
    console.log("oept trcanjee");
    break;
  case "friday":
    console.log("trening snagee balbalbal");
    break;
  case "saturday":
  case "sunday":
    console.log("pivica zajebanicja");
    break;
  default:
    console.log("not a valid day");
}

const day = "thursday";

if (day === "monday") {
  console.log("trcanje baranja");
  console.log("trening snage doma");
} else if (day === "tuesday") {
  console.log("ici na posao aaa");
} else if (day === "wednesday" || day === "thursday") {
  console.log("oept trcanjee");
} else if (day === "friday") {
  console.log("trening snagee balbalbal");
} else if (day === "saturday" || day === "sunday") {
  console.log("pivica zajebanicja");
} else {
  console.log("not a valid day");
}
//////////////////////////////////////////////////////////////////////



///////////////////// conditional operator (Ternary)/////////////////////

const age = 23;
age >= 18 ? console.log(" Volim piti pivo ") : console.log(" Volim piti vodu ");

const drink = age >= 18 ? "pivo" : "voda";
console.log(drink);

console.log(`i like to drinkg ${age >= 18 ? "pivo" : "voda"}`);

///////////////////////////////////////////////////////////////////////////////////////////////////
 
*/

//////////////////final coding challenge #4 /////////////////////

const bill = 430;

const tip =
  bill >= 50 && bill <= 300 ? (tip = 0.15 * bill) : (tip = 0.2 * bill);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
