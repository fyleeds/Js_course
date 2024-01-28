// const ul = document.querySelector('ul')
// const li = document.querySelector('ul li:first-child')
// const div = document.createElement('div')
// console.log(lis[2])
// console.log(Array.from(lis))

// console.log(ul.nodeName)
// console.log(ul.innerHTML)
// console.log(ul.textContent)
// console.log(ul.innerText)
// ul.setAttribute('hidden','hidden')
// ul.removeAttribute('hidden')

// const newLi = document.createElement('li')
// newLi.innerText = 'item 5'
// console.log(newLi.innerHTML)
// ul.append(li)
//  
// console.log(
//     ul.children)
// console.log(
//     ul.childNodes)
// console.log(
//     ul.firstElementChild)
// console.log(
//     ul.childElementCount)
// console.log(
//     ul.firstChild)
// console.log(
//     li.nextElementSibling.innerHTML
// )
// // li.remove()
// console.log(
//     li.parentNode
// )

// ul.append(li.cloneNode(true))
let div = document.querySelector('lastPosts')

function LoadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts/?_limit=5")
        .then(response => {
            if (!r.ok){
                throw new Error("Serveur indisponible")
            }{
            response.json()
            console.log("ok")
            }
        })
        .then((data) => {
            const listItem = document.createElement("ul");
            div.appendChild(listItem);
            for (const post of data.posts) {
                listItem.appendChild(document.createElement("li")).textContent= post.Title;
            }
            

        })
        .catch(console.error);

        // .then(json => {
        //     let html = json.map(item => {
        //         return `<li>${item.title}</li>`
        //     }).join(' ')
        //     div.innerHTML = html
        // })
}
