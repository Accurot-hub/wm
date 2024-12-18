function leftNav() {
    const home = document.querySelector("#home");
    const catalog = document.querySelector("#catalog");
    const documentary = document.querySelector("#documentary");

    home.addEventListener('click', function() {
        window.location.href = "./page6.html";
    })
    catalog.addEventListener("click", function() {
        window.location.href = "./page22.html";
    })
    documentary.addEventListener("click", function() {
        window.location.href = "./page23.html";
    })
}
leftNav();
function search() {
    const searchInput = document.querySelector("#search");
    const searchLoupe = document.querySelector("#search-loupe");

    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const inputValue = searchInput.value.trim().toLowerCase();
            if (inputValue === "осипов") {
                window.location.href = "./page20.html";
            }
        }
    });
    searchLoupe.addEventListener("click", function(event) {
        const inputValue = searchInput.value.trim().toLowerCase();
            if (inputValue === "осипов") {
                window.location.href = "./page20.html";
            }
    });
}
search();