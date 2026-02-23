function mudarFilme(numero) {

    const heroContent = document.querySelector(".hero-content");
    heroContent.classList.add("fade-out");

    const filmes = {
        1: {
        titulo: "John Wick: De Volta ao Jogo (2014)",
        sinopse: "Após a morte de sua esposa, um ex-assassino profissional retorna ao submundo do crime em busca de vingança contra aqueles que destruíram sua última lembrança dela.",
        imdb: "7.4/10",
        banner: "imagens/banner1.jpg",
        trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ"
        },
        2: {
        titulo: "John Wick 2: Um Novo Dia Para Matar (2017)",
        sinopse: "Forçado a cumprir uma dívida de sangue, John viaja até Roma e enfrenta alguns dos assassinos mais perigosos do mundo.",
        imdb: "7.4/10",
        banner: "imagens/banner2.jpg",
        trailer: "https://www.youtube.com/embed/XGk2EfbD_Ps"
        },
        3: {
        titulo: "John Wick 3: Parabellum (2019)",
        sinopse: "Com uma recompensa milionária por sua cabeça, John Wick está em fuga e precisa lutar para sobreviver contra uma legião de assassinos.",
        imdb: "7.4/10",
        banner: "imagens/banner3.jpg",
        trailer: "https://www.youtube.com/embed/M7XM597XO94"
        },
        4: {
        titulo: "John Wick 4: Baba Yaga (2023)",
        sinopse: "John descobre um caminho para derrotar a Alta Cúpula, mas antes precisa enfrentar um novo inimigo poderoso com alianças globais.",
        imdb: "7.7/10",
        banner: "imagens/banner4.jpg",
        trailer: "https://www.youtube.com/embed/qEVUtrk8_B4"
        }
    };

    setTimeout(() => {

        document.getElementById("titulo-filme").innerText = filmes[numero].titulo;
        document.getElementById("sinopse-filme").innerText = filmes[numero].sinopse;
        document.getElementById("nota-imdb").innerText = filmes[numero].imdb;

        document.querySelector(".hero").style.background =
        `url(${filmes[numero].banner}) center/cover no-repeat`;

        document.getElementById("trailer-filme").src = filmes[numero].trailer;

        heroContent.classList.remove("fade-out");

    }, 300);
    }

    document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.classList.toggle("active");
    });
});