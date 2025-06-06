const produtosnew = [
    {
        id: 130,
        nome: "New Balance 990v5",
        preco: 899.90,
        parcelas: 10,
        imagem: "./img/nb_990v5.png",
        estrelas: 5,
        avaliacoes: 310
      },
      {
        id: 131,
        nome: "New Balance 327",
        preco: 699.90,
        parcelas: 10,
        imagem: "./img/nb_327.png",
        estrelas: 4,
        avaliacoes: 260
      },
      {
        id: 132,
        nome: "New Balance 574 Classic",
        preco: 649.90,
        parcelas: 10,
        imagem: "./img/nb_574.png",
        estrelas: 4,
        avaliacoes: 280
      },
      {
        id: 133,
        nome: "New Balance Fresh Foam 1080v12",
        preco: 899.90,
        parcelas: 10,
        imagem: "./img/nb_freshfoam1080v12.png",
        estrelas: 5,
        avaliacoes: 240
      },
      {
        id: 134,
        nome: "New Balance 860v11",
        preco: 849.90,
        parcelas: 10,
        imagem: "./img/nb_860v11.png",
        estrelas: 5,
        avaliacoes: 200
      },
      {
        id: 135,
        nome: "New Balance 990v3",
        preco: 799.90,
        parcelas: 10,
        imagem: "./img/nb_990v3.png",
        estrelas: 5,
        avaliacoes: 220
      },
      {
        id: 136,
        nome: "New Balance Fresh Foam Roav",
        preco: 749.90,
        parcelas: 10,
        imagem: "./img/nb_freshfoamroav.png",
        estrelas: 4,
        avaliacoes: 180
      },
      {
        id: 137,
        nome: "New Balance 1500v6",
        preco: 799.90,
        parcelas: 10,
        imagem: "./img/nb_1500v6.png",
        estrelas: 5,
        avaliacoes: 160
      },
      {
        id: 138,
        nome: "New Balance FuelCell Rebel v2",
        preco: 849.90,
        parcelas: 10,
        imagem: "./img/nb_fuelcellrebelv2.png",
        estrelas: 5,
        avaliacoes: 190
      },
      {
        id: 139,
        nome: "New Balance 998",
        preco: 899.90,
        parcelas: 10,
        imagem: "./img/nb_998.png",
        estrelas: 5,
        avaliacoes: 210
      },
      {
        id: 140,
        nome: "New Balance 860v10",
        preco: 799.90,
        parcelas: 10,
        imagem: "./img/nb_860v10.png",
        estrelas: 4,
        avaliacoes: 150
      },
      {
        id: 141,
        nome: "New Balance 327 Retro",
        preco: 699.90,
        parcelas: 10,
        imagem: "./img/nb_327retro.png",
        estrelas: 4,
        avaliacoes: 170
      },
      {
        id: 142,
        nome: "New Balance 574 Sport",
        preco: 669.90,
        parcelas: 10,
        imagem: "./img/nb_574sport.png",
        estrelas: 4,
        avaliacoes: 140
      },
      {
        id: 143,
        nome: "New Balance Fresh Foam More v3",
        preco: 899.90,
        parcelas: 10,
        imagem: "./img/nb_freshfoammorev3.png",
        estrelas: 5,
        avaliacoes: 180
      },
      {
        id: 144,
        nome: "New Balance 997H",
        preco: 699.90,
        parcelas: 10,
        imagem: "./img/nb_997h.png",
        estrelas: 4,
        avaliacoes: 130
      },
      {
        id: 145,
        nome: "New Balance 990v4",
        preco: 899.90,
        parcelas: 10,
        imagem: "./img/nb_990v4.png",
        estrelas: 5,
        avaliacoes: 170
      },
      {
        id: 146,
        nome: "New Balance Fresh Foam Beacon v3",
        preco: 799.90,
        parcelas: 10,
        imagem: "./img/nb_freshfoambeaconv3.png",
        estrelas: 4,
        avaliacoes: 150
      },
      {
        id: 147,
        nome: "New Balance 1500v5",
        preco: 799.90,
        parcelas: 10,
        imagem: "./img/nb_1500v5.png",
        estrelas: 5,
        avaliacoes: 140
      },
      {
        id: 148,
        nome: "New Balance 530",
        preco: 649.90,
        parcelas: 10,
        imagem: "./img/nb_530.png",
        estrelas: 4,
        avaliacoes: 160
      },
      {
        id: 149,
        nome: "New Balance 880v11",
        preco: 799.90,
        parcelas: 10,
        imagem: "./img/nb_880v11.png",
        estrelas: 5,
        avaliacoes: 130
      },
      {
        id: 150,
        nome: "New Balance Fresh Foam Hierro v6",
        preco: 849.90,
        parcelas: 10,
        imagem: "./img/nb_freshfoamhierrov6.png",
        estrelas: 5,
        avaliacoes: 140
      },
      {
        id: 151,
        nome: "New Balance 247",
        preco: 699.90,
        parcelas: 10,
        imagem: "./img/nb_247.png",
        estrelas: 4,
        avaliacoes: 120
      },
      {
        id: 152,
        nome: "New Balance FuelCell Prism",
        preco: 849.90,
        parcelas: 10,
        imagem: "./img/nb_fuelcellprism.png",
        estrelas: 5,
        avaliacoes: 110
      },
      {
        id: 153,
        nome: "New Balance 997S",
        preco: 749.90,
        parcelas: 10,
        imagem: "./img/nb_997s.png",
        estrelas: 5,
        avaliacoes: 115
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
  
  renderizarProdutos(produtosnew);
  