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
// function getTop3(students){
//     return  getAverage(students).sort((a,b) => b.moyenne - a.moyenne).slice(0,3);

// }
// console.log(getTop3(students));
// console.log(getAverage(students));

// const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`
// /**
//  * 
//  * @param {string} phrase 
//  * @returns {Array <object>}
//  */
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
// const a = getFreq("test test")

// function getTopWordsFreq(words){
//     return  getFreq(words).sort((a,b) => b.count - a.count).slice(0,3);
// }
// console.log(getFreq(phrase));
// console.log(getTopWordsFreq(phrase));
// class Student{
//     ecole = 'Jule ferry';
//     _notes=[]
//     #secret = 'secret'
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     setNotes(notes){
//         this.notes = notes;
//     }
//     canPass(){
//         return this.getAverage(this) >= Student.moyenne;
//     }
//     set notes(note){
//         if (Array.isArray(note)){
//             this._notes = note;
//         }
//         else{
//             throw new Error('notes must be an array');
//         }
//     }
//     get name(){
//         return `${this.firstname} ${this.lastname}`;
//     }
//     get notes(){
//         return this._notes;
//     }
//     getAverage(students){
//         // if (students.notes === array){
//         return students._notes.reduce((a, b) => a + b) / students._notes.length;
//     }
//     static moyenne = 10
// }
// class SuperStudent extends Student{
//     constructor(firstname, lastname,notes){
//         super(firstname, lastname);
//         this.notes = notes;
//     }
//     get name(){
//         return `Super ${super.name}`;
//     }
//     canPass(){
//         return super.canPass()
//     }
// }
//     const john = new SuperStudent('John', 'Doe',[0,10,8]);
//     const jane = new Student('Jane', 'Doe');
//     jane.setNotes([15,18,19])
//     // console.log(john.getAverage(john));
//     console.log(john.canPass());
    // console.log(jane.canPass());
    // console.log(john.moyenne);
    // console.log(jane.moyenne);

/**
 * @typedef {Object} Rectangle
 * @property {number} width
 * @property {number} height
 * @param {number} width
 * @param {number} height
 */
class Rectangle{
    constructor(width,height){
        if (this.isValid(width,height)){
            /**
             * @type {number}
             * Largeur du rectangle
             */
            this.width= width
            this.height= height
        }
    }
    perimeter(){
        return (this.width + this.height) *2
    }
    isValid(width,height){ 
        if (width > 0 && height > 0){
            if (width != height ){
                console.log("rectangle is valid")
                return true
            }else{
                console.log("width can't be bigger than height")
                return false
            }
        }else{
            return false
        }
        
    }
    isBiggerThan(form){
        if (this.perimeter > form.perimeter){
            console.log("your object is bigger than function parameter")
            return true
        }else{
            console.log("your object is smaller than function parameter")
            return false
        }
    }
}
const r = new Rectangle()
// class Square extends Rectangle{
//     constructor(width){
//         super(width,width)
//     }
//     get perimeter(){
//         return this.width * 4;
//     }
  
// }
    
// const r = new Rectangle(10, 20);
// console.log(r)
// console.log(r.perimeter) // 60
// console.log(r.isValid) // true
// console.log(r2.isValid) // false
// const c = new Square(10); 
// console.log(c.perimeter) // 40
// console.log(r.isBiggerThan(c))
// function promptRectangle(){
//     try{
//         const width = parseInt(prompt('Largeur'),10);
//         const height = parseInt(prompt('hauteur'),10);
//         const r = new Rectangle(width, height);
//         console.log(r);
//         return r;

//     }catch (e){
//         throw new Error("input user invalid");
//         console.log("impossible de créer le rectangle");
    
//     }
// }
// try{
//     promptRectangle()
// }catch(e){
//     console.log(e.message,{e})
// }
// class Book{

//     constructor(title,pages){
//         this.title = title;
//         this.pages = pages;
//     }
//     #page = 1;
//     get page(){
//         return this.#page;
//     }
//     nextPage(){
//         if (this.#page < this.pages){
//             this.#page += 1;
//         }
//     }
//     close(){
//         this.#page = 1;
//     }

// }

// class Library {
//     static library = [];
//     addBook(book){
//         Library.library.push(book);
//     }
//     addBooks(books){
//         if (Array.isArray(books)){
//             books.forEach(book => {
//                 Library.library.push(book);
//             });
//         }
//     }
//     findBooksByLetter(letter){
//         let regex = new RegExp('^' + letter, 'i');
//         let books_list = [];
//         Library.library.forEach(book => {
//             if (book.title.match(regex)){
//                 books_list.push(book.title);
//             }
//         });
//         return books_list;
//     }
// }
// const b = new Book('Seigneur des anneaux', 200);
// console.log(b.page)
// b.nextPage()
// console.log(b.page)
// b.close()
// console.log(b.page)

// const l = new Library()
// l.addBook(b)
// l.addBooks([
//     new Book('Ready player one', 100),
//     new Book('Oui-oui', 10),
//     new Book('Sillage', 50),
// ])
// console.log(l.findBooksByLetter('S'))

// let i = 0;
// let a =0
// a ||=3
// i = a ?? 1;
// // console.log(i);
// const [premiere,... autrenote] = [1,3,5]
// console.log(premiere,autrenote);
// const {firstname, ... rest} = {
//     firstname: 'John',
//     lastname: 'Doe',
//     age: 42,
// }
// console.log(firstname,rest);
// function canDrive({age, pays,region = 'Paris'}){
//     console.log(region)
//     return true;
// }
// canDrive({age: 18, pays: 'France', region: 'Texas'}) // true
// let notes = [1,3]
// notes = [...notes,5]
// console.log(notes);

// let person = {firstname: 'John', lastname: 'Doe'}
// let person2 = {...person,firstname : 'Jane'}
// console.log(person2);

// const age = 42;
// const pays = 'France';
// const message = age > 18 ? (pays === 'France' ? 'Conduite' : 'a voir') : 'mineur';
// console.log(message);

function waitSync(duration){
    const t = Date.now()
    while (Date.now() - t < duration){
        //nothing
    }  
}
// console.log('start')
// const t = setInterval(() => {
//     console.log('interval')
// }, 1000);
// console.log(t)
// console.log('end')
// function countdown(duration){
//     const t = setInterval(()=> {
//         console.log(duration)
//         duration -= 1
//         if (duration < 0){
//             clearInterval(t)
//         }
//     },1000)
//     console.log(t)
    
// }
// countdown(5) // 5 4 3 2 1 0

// const p = new Promise((resolve,reject) => {
//     resolve(4)
// })
// p.then((n)=>{
//     console.log("le nombre",n)
//     throw new Error("erreur")
// })
// .then((n) => {console.log("Le nombre 2",n)})
// .catch((e)=>  {
//     console.log("erreur",e)
//     return 5
// })
// .then((n) => {console.log("Le nombre 3",n)})


/**
 * Permet de faire une pause pour une durée donnée
 * @param {int} duration 
 * @returns 
 */

function wait(duration){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(duration)
        }, duration);
    })
}

function waitAndFail(duration){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(duration)
        }, duration);
    })
}

async function main(){
    // try{
    //     await waitAndFail(2000)
    //     console.log("Bonjour")
    //     await wait(1000)
    //     console.log("Au revoir")
    // }catch(e){
    //     console.log("erreur",e)
    // }
    const duration = await wait(2000)
    console.log(duration)
    return 5
}

// const p = new Promise((resolve,reject) => {
//     console.log("Hello")
//     resolve(4)
// })
// waitSync(4000)
// console.log("les gens")
// console.log(main()) 
// wait(2000)
// .then(() => {console.log('ok 2s')
// return wait(1000)
// }
// )
// .then(() => {console.log('ok 1s')
// return waitAndFail(1000)
// })
// .catch((e) => {console.log('erreur',e)})

// function waitAndLog(duration,msg){
//     return wait(duration).then(() => console.log(msg))
// }

// async function fetchUsers(){
//     const r = await fetch(
//         "https://jsonplaceholder.typicode.com/posts",
//         {
//         method:'POST',
//         headers:{"Accept": "application/json",
//         "Content-Type": "application/json"},
//         body: JSON.stringify({title: "foo", body: "bar", userId: 1})
//         }
//     )
//     if (!r.ok){
//         throw new Error("Serveur indisponible")
//     }
//     return r.json()
// }

// fetchUsers().then(users => console.log(users))
// const a = new AbortController()
// Promise.race(
//     [
//         fetch("https://jsonplaceholder.typicode.com/todos/?_limit=5 &_delay=5000",{signal:a.signal}),
//         fetch("https://jsonplaceholder.typicode.com/users/?_limit=3",{signal:a.signal})
//     ]
// ).then(r=> r.json()).then(body =>{
//     a.abort()
//     console.log(body)
// }
// )
