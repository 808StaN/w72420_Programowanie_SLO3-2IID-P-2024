function pokazHobby() {
    let zaznaczone = document.querySelectorAll('input[name="hobby"]:checked');
    let listaHobby = document.getElementById("listaHobby");
    
    listaHobby.innerHTML = "";
    
    zaznaczone.forEach((checkbox) => {
        let li = document.createElement("li");
        li.textContent = checkbox.value;
        listaHobby.appendChild(li);
    });

    if (zaznaczone.length === 0) {
        listaHobby.innerHTML = "<li>Nie wybrano żadnego hobby.</li>";
    }
}
