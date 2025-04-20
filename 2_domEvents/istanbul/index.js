
function karanlikTemayiAcKapa(event) {
    const body = document.querySelector("body");

    if(body.classList.contains("dark")) {
        body.classList.remove("dark");
        event.target.textContent = "Karanlık temayı aç";
    } else {
        body.classList.add("dark");
        event.target.textContent = "Karanlık temayı kapat";
    }
}

const buton = document.createElement("button");
buton.setAttribute("id","acKapa");
buton.textContent = "Karanlık temayı aç"
buton.addEventListener("click", karanlikTemayiAcKapa);

document.querySelector(".description").appendChild(buton);