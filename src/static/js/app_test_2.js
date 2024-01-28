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
function createPost(post) {
    let li = document.createElement("li");
    li.append(createElement("h2",post.title,null), createElement("p",post.body,null));
    return li;
}

function createElement(tag, content, attributes) {
    let element = document.createElement(tag);
    element.innerText = content;
    if (attributes === undefined) {
        return element;
    }
    for (let attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}

async function LoadPosts(div,p) {
    await fetch("https://jsonplaceholder.typicode.com/posts/?_limit=5",
    {method: "GET",
    headers: {"Content-Type": "application/json"}})
    .then(r => {
        if (!r.ok){
            throw new Error("Serveur indisponible")
        }
        // console.log("ok")
        return r.json()
    })
    .then((data) => {
        // console.log(data);
        let listItem = document.createElement("ul");
        for (let post of data) {
            listItem.append(createPost(post));
        }
        // console.log(listItem.innerHTML);
        div.append(listItem);
        p.remove();
    })
    .catch(() => {
        p.textContent = "Serveur indisponible";
        p.style.color = "red";
        console.error
    });
}
function OnClickedButton(e){
    // console.log(this)
    // console.log(e.currentTarget)
    console.log("on button clicked")
    // e.stopPropagation()
}
function OnDivClicked(e){
    console.log("on div clicked")

}
function OnDivScroll(e){
    console.log("on div scroll")
    e.preventDefault()

}
function submitForm(e){
    const form = e.currentTarget
    const data = new FormData(form)
    let firstname = data.get("firstname")
    console.log(firstname)
    if (firstname.length < 3) {
        console.log("firstname too short")
        e.preventDefault()
    }
}
function change(e){
    options_array = Array.from(e.currentTarget.selectedOptions).map(option =>option.value)
    console.log(options_array)


}
function revealSpoiler(e){
    e.currentTarget.classList.remove("spoiler")
}
async function main(){
    const spoilers = document.querySelectorAll('.spoiler')
    for (let spoiler of spoilers){
        spoiler.addEventListener('click', revealSpoiler)
    }
    // const button = document.querySelector("button");
    // let div = document.querySelector('#scrollDiv')
    // button.addEventListener("click", OnClickedButton)
    // window.addEventListener("scroll", OnDivScroll,{passive: true})
    // await LoadPosts(div, p);
    // const form = document.querySelector("form");
    // const input = document.querySelector("#agreeterms");
    // const select = document.querySelector("select");
    // form.addEventListener("submit", submitForm);
    // input.addEventListener("change", change);
    // select.addEventListener("change", change);

}
main()