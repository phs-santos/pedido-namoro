document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.querySelector(".btn-no");
    const yesButton = document.querySelector(".btn-yes");
    const card = document.querySelector(".card");

    const moveButton = (e) => {
        const rect = noButton.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        // Reduzir a proximidade e aumentar a distância de movimento
        const proximity = 80; // Menor distância para ativar o movimento
        const offset = 120; // Maior distância que o botão se moverá

        const distanceX = e.clientX - (rect.left + rect.width / 2);
        const distanceY = e.clientY - (rect.top + rect.height / 2);

        if (Math.abs(distanceX) < proximity && Math.abs(distanceY) < proximity) {
            // Calcular nova posição aleatória dentro dos limites do card
            let newX = Math.random() * (cardRect.width - rect.width) - offset / 2;
            let newY = Math.random() * (cardRect.height - rect.height) - offset / 2;

            // Aplicar o movimento ao botão
            noButton.style.transform = `translate(${newX}px, ${newY}px)`;
        }
    };

    card.addEventListener("mousemove", moveButton);

    // Desativa o clique no botão "Não"
    noButton.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Você não pode escolher essa opção! 😊");
    });

    yesButton.addEventListener("click", () => {
        alert("Espere 3 segundinhos... 😊")
        // setInterval(() => {
            // https://youtu.be/Sx4DdEPDgCU?t=4
            // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            window.location.href = "https://youtu.be/nPK4EZ7ee6c?t=2";
        // }, 3000);
    });


});
