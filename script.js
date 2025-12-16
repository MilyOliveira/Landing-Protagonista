const pilares = document.querySelectorAll(".pilar");

pilares.forEach(pilar => {
    pilar.addEventListener("click", () => {

        pilares.forEach(outro => {
            if (outro !== pilar) {
                outro.classList.remove("active");
            }
        });

        pilar.classList.toggle("active");
    });
});
