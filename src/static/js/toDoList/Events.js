


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