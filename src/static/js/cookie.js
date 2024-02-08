
/**
 * 
 * @param {string} name 
 * @returns {string}
 */
function getCookie(name) {
    // const cookies = document.cookie.split("; ");
    // const value = cookies.find(cookie => cookie.startsWith(name));
  var value = "; " + "cookie1=valeur%20avec%20espace; cookie2=valeur2; cookie3=valeur3";
  var parts = value.split("; " + name + "=");
  parts.pop().split(";").forEach(element => {
    console.log(element)
    console.log("\n")
  });

  if (parts.length === 2) return parts.pop().split(";").shift();
}
console.log(getCookie("cookie2"))