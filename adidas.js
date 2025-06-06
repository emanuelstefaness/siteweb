const produtosadidas = [
{
    id: 26,
    nome: "Adidas Ultraboost 22 'Triple Black'",
    preco: 999.90,
    parcelas: 10,
    imagem: "./img/ultraboost22_black.png",
    estrelas: 5,
    avaliacoes: 320
  },
  {
    id: 27,
    nome: "Adidas Superstar 'Foundation White Black'",
    preco: 549.90,
    parcelas: 10,
    imagem: "./img/superstar_whiteblack.png",
    estrelas: 4,
    avaliacoes: 510
  },
  {
    id: 28,
    nome: "Adidas NMD_R1 'Core Black'",
    preco: 849.90,
    parcelas: 10,
    imagem: "./img/nmd_r1_black.png",
    estrelas: 4,
    avaliacoes: 390
  },
  {
    id: 29,
    nome: "Adidas Stan Smith 'White Green'",
    preco: 499.90,
    parcelas: 10,
    imagem: "./img/stansmith_whitegreen.png",
    estrelas: 5,
    avaliacoes: 600
  },
  {
    id: 30,
    nome: "Adidas Forum Low 'White Blue'",
    preco: 699.90,
    parcelas: 10,
    imagem: "./img/forumlow_whiteblue.png",
    estrelas: 4,
    avaliacoes: 200
  },
  {
    id: 31,
    nome: "Adidas Ozweego 'Core Black'",
    preco: 759.90,
    parcelas: 10,
    imagem: "./img/ozweego_black.png",
    estrelas: 4,
    avaliacoes: 170
  },
  {
    id: 32,
    nome: "Adidas Samba OG 'Black Gum'",
    preco: 599.90,
    parcelas: 10,
    imagem: "./img/samba_blackgum.png",
    estrelas: 5,
    avaliacoes: 540
  },
  {
    id: 33,
    nome: "Adidas Gazelle 'Bold Gold'",
    preco: 649.90,
    parcelas: 10,
    imagem: "./img/gazelle_gold.png",
    estrelas: 4,
    avaliacoes: 320
  },
  {
    id: 34,
    nome: "Adidas Yeezy Boost 350 V2 'Zebra'",
    preco: 1499.90,
    parcelas: 10,
    imagem: "./img/yeezy350_zebra.png",
    estrelas: 5,
    avaliacoes: 480
  },
  {
    id: 35,
    nome: "Adidas Campus 00s 'Grey White'",
    preco: 699.90,
    parcelas: 10,
    imagem: "./img/campus00s_greywhite.png",
    estrelas: 4,
    avaliacoes: 210
  },
  {
    id: 36,
    nome: "Adidas Nite Jogger 'Grey Orange'",
    preco: 829.90,
    parcelas: 10,
    imagem: "./img/nitejogger_greyorange.png",
    estrelas: 4,
    avaliacoes: 220
  },
  {
    id: 37,
    nome: "Adidas EQT Support 93",
    preco: 749.90,
    parcelas: 10,
    imagem: "./img/eqt93.png",
    estrelas: 5,
    avaliacoes: 180
  },
  {
    id: 38,
    nome: "Adidas ZX 22 Boost",
    preco: 729.90,
    parcelas: 10,
    imagem: "./img/zx22boost.png",
    estrelas: 4,
    avaliacoes: 130
  },
  {
    id: 39,
    nome: "Adidas Tubular Shadow",
    preco: 599.90,
    parcelas: 10,
    imagem: "./img/tubular_shadow.png",
    estrelas: 4,
    avaliacoes: 190
  },
  {
    id: 40,
    nome: "Adidas Terrex Swift R3",
    preco: 899.90,
    parcelas: 10,
    imagem: "./img/terrex_r3.png",
    estrelas: 5,
    avaliacoes: 140
  },
  {
    id: 41,
    nome: "Adidas Adizero Boston 10",
    preco: 999.90,
    parcelas: 10,
    imagem: "./img/boston10.png",
    estrelas: 4,
    avaliacoes: 160
  },
  {
    id: 42,
    nome: "Adidas Adistar CS",
    preco: 949.90,
    parcelas: 10,
    imagem: "./img/adistarcs.png",
    estrelas: 5,
    avaliacoes: 170
  },
  {
    id: 43,
    nome: "Adidas SolarGlide 6",
    preco: 849.90,
    parcelas: 10,
    imagem: "./img/solarglide6.png",
    estrelas: 5,
    avaliacoes: 150
  },
  {
    id: 44,
    nome: "Adidas Pureboost 22",
    preco: 799.90,
    parcelas: 10,
    imagem: "./img/pureboost22.png",
    estrelas: 4,
    avaliacoes: 110
  },
  {
    id: 45,
    nome: "Adidas Response Super 3.0",
    preco: 729.90,
    parcelas: 10,
    imagem: "./img/response3.png",
    estrelas: 4,
    avaliacoes: 100
  },
  {
    id: 46,
    nome: "Adidas Alphabounce RC 2",
    preco: 649.90,
    parcelas: 10,
    imagem: "./img/alphabounce_rc2.png",
    estrelas: 4,
    avaliacoes: 90
  },
  {
    id: 47,
    nome: "Adidas Retropy E5",
    preco: 779.90,
    parcelas: 10,
    imagem: "./img/retropy_e5.png",
    estrelas: 4,
    avaliacoes: 120
  },
  {
    id: 48,
    nome: "Adidas Adifom Q",
    preco: 699.90,
    parcelas: 10,
    imagem: "./img/adifomq.png",
    estrelas: 4,
    avaliacoes: 100
  },
  {
    id: 49,
    nome: "Adidas Climacool Vento",
    preco: 799.90,
    parcelas: 10,
    imagem: "./img/climacool_vento.png",
    estrelas: 5,
    avaliacoes: 110
  },
  {
    id: 50,
    nome: "Adidas X9000L4 Boost",
    preco: 899.90,
    parcelas: 10,
    imagem: "./img/x9000l4.png",
    estrelas: 5,
    avaliacoes: 140
  }
];
  
  function renderizarProdutos(listaProdutos) {
    const grid = document.getElementById("adidas-grid");
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
  
  renderizarProdutos(produtosadidas);
  