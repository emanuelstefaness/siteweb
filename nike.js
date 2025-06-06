const produtosNike = [
 {
        id: 24,
        nome: "Nike Air Max Plus OG 'Hyper Blue'",
        preco: 999.90,
        parcelas: 10,
        imagem: "./img/airmaxplus_hyperblue.png",
        estrelas: 5,
        avaliacoes: 99
      },
      {
        id:25,
        nome: "Nike Dunk Low 'Black White' (Panda)",
        preco: 799.90,
        parcelas: 10,
        imagem: "./img/nike_dunk_low_panda.png",
        estrelas: 4,
        avaliacoes: 211
      },
      {
        id: 23,
        nome: "Nike Air Force 1 '07 Triple White",
        preco: 899.90,
        parcelas: 10,
        imagem: "./img/airforce1_white.png",
        estrelas: 5,
        avaliacoes: 340
      },
      {
        id:22,
        nome: "Nike Air Max 90 'Infrared'",
        preco: 859.90,
        parcelas: 10,
        imagem: "./img/airmax90_infrared.png",
        estrelas: 4,
        avaliacoes: 190
      },
      {
        id: 21,
        nome: "Nike Air Zoom Pegasus 40 'Black/White'",
        preco: 749.90,
        parcelas: 10,
        imagem: "./img/pegasus40_black.png",
        estrelas: 4,
        avaliacoes: 160
      },
      {
        id:20,
        nome: "Nike SB Dunk Low 'Ben & Jerry's Chunky Dunky'",
        preco: 1599.90,
        parcelas: 10,
        imagem: "./img/sbdunk_chunky.png",
        estrelas: 5,
        avaliacoes: 380
      },
      {
        id:19,
        nome: "Nike Blazer Mid '77 Vintage 'White/Black'",
        preco: 699.90,
        parcelas: 10,
        imagem: "./img/blazer77_whiteblack.png",
        estrelas: 4,
        avaliacoes: 210
      },
      {
        id:18,
        nome: "Nike Air Max 97 'Silver Bullet'",
        preco: 999.90,
        parcelas: 10,
        imagem: "./img/airmax97_silver.png",
        estrelas: 5,
        avaliacoes: 275
      },
      {
        id:17,
        nome: "Nike Air Huarache OG 'Scream Green'",
        preco: 849.90,
        parcelas: 10,
        imagem: "./img/huarache_screamgreen.png",
        estrelas: 4,
        avaliacoes: 150
      },
      {
        id:16,
        nome: "Nike React Infinity Run Flyknit 3",
        preco: 849.90,
        parcelas: 10,
        imagem: "./img/reactinfinity3.png",
        estrelas: 4,
        avaliacoes: 170
      },
      {
        id:15,
        nome: "Nike Air Max 1 'Anniversary Red'",
        preco: 949.90,
        parcelas: 10,
        imagem: "./img/airmax1_red.png",
        estrelas: 5,
        avaliacoes: 220
      },
      {
        id:14,
        nome: "Nike Air Vapormax 2023 Flyknit",
        preco: 1199.90,
        parcelas: 10,
        imagem: "./img/vapormax2023.png",
        estrelas: 4,
        avaliacoes: 110
      },
      {
        id: 12,
        nome: "Nike Air Jordan 4 Retro 'Bred'",
        preco: 1449.90,
        parcelas: 10,
        imagem: "./img/jordan4_bred.png",
        estrelas: 5,
        avaliacoes: 460
      },
      {
        id:11,
        nome: "Parra x Nike SB Dunk Low Pro Abstract Art'",
        preco: 1249.90,
        parcelas: 10,
        imagem: "./img/dunk1.png",
        estrelas: 5,
        avaliacoes: 300
      },
      {
        id: 10,
        nome: "Nike Air Forceravis Scott x Nike Air Force 1 Cactus Jack",
        preco: 1499.90,
        parcelas: 10,
        imagem: "./img/travis.png",
        estrelas: 4,
        avaliacoes: 200
      },
      {
        id:9,
        nome: "Tênis Nike Sb Dunk Low x Futura Skateboard Bleached Aqua Azul",
        preco: 1499.90,
        parcelas: 10,
        imagem: "./img/futura.png",
        estrelas: 5,
        avaliacoes: 310
      },
      {
        id: 1,
        nome: "Nike Air Max 2090 'Duck Camo'",
        preco: 899.90,
        parcelas: 10,
        imagem: "./img/airmax2090_duckcamo.png",
        estrelas: 4,
        avaliacoes: 185
      }
];

function renderizarProdutos(listaProdutos) {
  const grid = document.getElementById("nike-grid");
  grid.innerHTML = "";

  listaProdutos.forEach(prod => {
    const estrelas = "★".repeat(prod.estrelas) + "☆".repeat(5 - prod.estrelas);

    const card = `
  <div class="col-6 col-md-4 col-lg-3">
    <a href="detalhes.html?id=${prod.id}" class="text-decoration-none text-dark">
      <div class="card h-100 card-swiper">
        <div class="d-flex justify-content-center align-items-center" style="height: 200px;">
          <img src="${prod.imagem}" class="img-fluid" alt="${prod.nome}" style="max-height: 100%; max-width: 100%;" />
        </div>
        <div class="card-body">
          <h5 class="card-title bebas-neue-regular">${prod.nome}</h5>
          <span class="text-warning">${estrelas}</span>
          <small class="text-muted">(${prod.avaliacoes} avaliações)</small>
          <p class="text-valor">R$ ${prod.preco.toFixed(2).replace(".", ",")}</p>
          <p class="text-parcel">ou ${prod.parcelas}x de <strong>R$ ${(prod.preco / prod.parcelas).toFixed(2).replace(".", ",")}</strong> sem juros</p>
        </div>
      </div>
    </a>
  </div>
`;
    grid.innerHTML += card;
  });
}

renderizarProdutos(produtosNike);
