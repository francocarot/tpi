document.addEventListener("DOMContentLoaded", function() {
    fetch('./data.json')
        .then(response => response.json())
        .then((json) => {
            document.getElementById("Nome").textContent = json.Nome;
            document.getElementById("Data_di_nascita").textContent = json.Data_di_nascita;
            document.getElementById("Luogo_di_nascita").textContent = json.Luogo_di_nascita;
            document.getElementById("Genere").textContent = json.Genere;
        });
});
