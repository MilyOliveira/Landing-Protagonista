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
const pilares = document.querySelectorAll('.pilar');

pilares.forEach(pilar => {
    pilar.addEventListener('click', () => {
        pilares.forEach(p => p.classList.remove('active'));
        pilar.classList.add('active');
    });
});

