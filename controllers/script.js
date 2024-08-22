const data = {
  Tops: [
    {
      id: 1,
      title: "Top 1",
      description: "Como treinar seu Dragão",
      imageUrl: "/img/download12.jfif",
    },
    {
      id: 2,
      title: "Top 2",
      description: "Fantastic Beats",
      imageUrl: "/img/download2.jfif",
    },
    {
      id: 3,
      title: "Top 3",
      description: "Pelo Amor de Eva",
      imageUrl: "/img/download3.jfif",
    },
    {
      id: 4,
      title: "Top 4",
      description: "Trancada",
      imageUrl: "/img/download4.jfif",
    },
    {
      id: 5,
      title: "Top 5",
      description: "A Escolha Certa",
      imageUrl: "/img/download5.jfif",
    },
    {
      id: 6,
      title: "Top 6",
      description: "Festa do Top Independente",
      imageUrl: "/img/download6.jfif",
    },
    {
      id: 7,
      title: "Top 7",
      description: "SAS; Red Notice",
      imageUrl: "/img/download7.jfif",
    },
    {
      id: 8,
      title: "Top 8",
      description: "Capitão América",
      imageUrl: "/img/download8.jfif",
    },
    {
      id: 9,
      title: "Top 9",
      description: "Descrição detalhada do Top 9.",
      imageUrl: "/img/download9.jfif",
    },
    {
      id: 9,
      title: "Top 9",
      description: "Jurassic Park",
      imageUrl: "/img/download10.jfif",
    },
    {
      id: 9,
      title: "Top 9",
      description: "Brilho nas Sombras",
      imageUrl: "/img/download1.jfif",
    },
    {
      id: 9,
      title: "Top 9",
      description: "Como Treinar seu Dragão 2",
      imageUrl: "/img/download11.jfif",
    }
  ]
};

const slider = document.getElementById("slider");

data.Tops.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
  slider.appendChild(card);
});
