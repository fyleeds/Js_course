// const a = {
//     firstname : "John",
//     lastname : "Doe",
//     fullname : function TestFunc() {
//         console.log(`${this.firstname} ${this.lastname}`,)
// }}
// a.fullname();

// const maFonction = function (param1,param2) {
//     console.log(param1,param2,this);
// }
// maFonction.call(3,1,2)

// const isPair = function (nb,fn) {
//     if (nb % 2 === 0){
//         fn()
//     }
// }

// isPair(2,function () {
//     console.log("pair")
// })

// const Hello = function () {
//     console.log("Hello")
// }
// Hello()
// function getRandomInt(max){
//     return Math.floor(Math.random() * (max));
// }

// let nb_to_find = getRandomInt(11);

// function isRight(nb){
//     if (nb === nb_to_find){
//         return true;
//     }
//     return false;
// }

// function guess(){
//     let nb_user = prompt("Entrez un nombre entre 0 et 10");
//     return Number(nb_user) === isRight(nb_user);
// }

// function game(){
//     for (let i= 1; i<4;i++){
//         if (guess()){
//             console.log("Bravo");
//             break;
//         }
//         console.log(`Dommage encore  ${3-i}  essais`);
//     }
//     console.log(`Le nombre était ${nb_to_find}`);
// }
// game();

// function isPremier(nb){
//     for (let i = n -1 ; i>1;i--){
//         if (nb % i === 0){
//             return false
//         }
//     }
//     return true
// }

// function isPalindrome(str){
//     str = str.toLowerCase();
//     let str2=str.split("").reverse().join("");
//     if (str === str2){
//         console.log("true");
//         return true
//     }   
//     console.log("false");
// }
// isPalindrome("Bonjour")
// const students = [
//     {
//         name: 'John',
//         notes: [1, 20, 18, 19, 12]
//     },
//     {
//         name: 'Jane',
//         notes: [17, 18, 20, 13, 15]
//     },
//     {
//         name: 'Sophie',
//         notes: [17, 12, 14, 15, 13]
//     },
//     {
//         name: 'Marc',
//         notes: [2, 3, 5, 8, 9]
//     },
//     {
//         name: 'Manon',
//         notes: [18, 17, 18, 19, 12]
//     }
// ];
// function getAverage(students){

//     for(let i = 0; i< students.length;i++){
//         students[i].moyenne = students[i].notes.reduce((accumulator, currentValue) => accumulator + currentValue) / students[i].notes.length;
//     }
//     return students;

// }
// function getTop3(students){
//     return  getAverage(students).sort((a,b) => b.moyenne - a.moyenne).slice(0,3);

// }
// console.log(getTop3(students));
// console.log(getAverage(students));

// const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`

// function getFreq(phrase){
//     let frequenciesArray = [];
//     array = phrase.replaceAll(/[,:.?]/g , "").toLowerCase().split(" ")
//     array.forEach(element => {
//         let word = { word: "" , count: 0};
//         let regex = new RegExp(element, 'g');
//         let matches = phrase.match(regex);
//         let count = matches ? matches.length : 0;
//         word.word = element;
//         word.count = count;
//         frequenciesArray.push(word);
  

//     });
//     // Remove duplicates
//     frequenciesArray = frequenciesArray.filter((v, i, a) => a.findIndex(t => (t.word === v.word)) === i);
//     return frequenciesArray;
    
// }
// function getTopWordsFreq(words){
//     return  getFreq(words).sort((a,b) => b.count - a.count).slice(0,3);
// }
// console.log(getFreq(phrase));
// console.log(getTopWordsFreq(phrase));