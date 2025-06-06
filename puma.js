const produtospuma = [
    {
        id: 105,
        nome: "Puma Suede Classic",
        preco: 459.90,
        parcelas: 8,
        imagem: "./img/puma_suede.png",
        estrelas: 4,
        avaliacoes: 250
      },
      {
        id: 106,
        nome: "Puma RS-X³",
        preco: 499.90,
        parcelas: 8,
        imagem: "./img/puma_rsx3.png",
        estrelas: 5,
        avaliacoes: 300
      },
      {
        id: 107,
        nome: "Puma Future Rider",
        preco: 429.90,
        parcelas: 8,
        imagem: "./img/puma_futurerider.png",
        estrelas: 4,
        avaliacoes: 210
      },
      {
        id: 108,
        nome: "Puma Clyde Court",
        preco: 479.90,
        parcelas: 8,
        imagem: "./img/puma_clydecourt.png",
        estrelas: 5,
        avaliacoes: 180
      },
      {
        id: 109,
        nome: "Puma LQDCell Optic",
        preco: 539.90,
        parcelas: 8,
        imagem: "./img/puma_lqdcelloptic.png",
        estrelas: 5,
        avaliacoes: 220
      },
      {
        id: 110,
        nome: "Puma Basket Heart",
        preco: 439.90,
        parcelas: 8,
        imagem: "./img/puma_basketheart.png",
        estrelas: 4,
        avaliacoes: 160
      },
      {
        id: 111,
        nome: "Puma Cali Sport",
        preco: 499.90,
        parcelas: 8,
        imagem: "./img/puma_calisport.png",
        estrelas: 5,
        avaliacoes: 210
      },
      {
        id: 112,
        nome: "Puma RS-Fast",
        preco: 469.90,
        parcelas: 8,
        imagem: "./img/puma_rsfat.png",
        estrelas: 4,
        avaliacoes: 170
      },
      {
        id: 113,
        nome: "Puma Mirage Mox",
        preco: 489.90,
        parcelas: 8,
        imagem: "./img/puma_miragemox.png",
        estrelas: 5,
        avaliacoes: 180
      },
      {
        id: 114,
        nome: "Puma Fierce Core",
        preco: 459.90,
        parcelas: 8,
        imagem: "./img/puma_fiercecore.png",
        estrelas: 4,
        avaliacoes: 150
      },
      {
        id: 115,
        nome: "Puma Softride Enzo",
        preco: 479.90,
        parcelas: 8,
        imagem: "./img/puma_softrideenzo.png",
        estrelas: 5,
        avaliacoes: 140
      },
      {
        id: 116,
        nome: "Puma Cell Surin 2",
        preco: 509.90,
        parcelas: 8,
        imagem: "./img/puma_cellsurin2.png",
        estrelas: 5,
        avaliacoes: 130
      },
      {
        id: 117,
        nome: "Puma Tazon 6 FM",
        preco: 439.90,
        parcelas: 8,
        imagem: "./img/puma_tazon6fm.png",
        estrelas: 4,
        avaliacoes: 110
      },
      {
        id: 118,
        nome: "Puma Nrgy Neko",
        preco: 479.90,
        parcelas: 8,
        imagem: "./img/puma_nrgyneko.png",
        estrelas: 5,
        avaliacoes: 115
      },
      {
        id: 119,
        nome: "Puma Blaze of Glory",
        preco: 499.90,
        parcelas: 8,
        imagem: "./img/puma_blazeofglory.png",
        estrelas: 5,
        avaliacoes: 125
      },
      {
        id: 120,
        nome: "Puma RS-X Bold",
        preco: 529.90,
        parcelas: 8,
        imagem: "./img/puma_rsxbold.png",
        estrelas: 5,
        avaliacoes: 135
      },
      {
        id: 121,
        nome: "Puma Ferrari Kart Cat",
        preco: 549.90,
        parcelas: 8,
        imagem: "./img/puma_ferrarikatcat.png",
        estrelas: 5,
        avaliacoes: 140
      },
      {
        id: 122,
        nome: "Puma Hybrid NX",
        preco: 479.90,
        parcelas: 8,
        imagem: "./img/puma_hybridnx.png",
        estrelas: 4,
        avaliacoes: 120
      },
      {
        id: 123,
        nome: "Puma Future Rider Play On",
        preco: 459.90,
        parcelas: 8,
        imagem: "./img/puma_futureriderplayon.png",
        estrelas: 4,
        avaliacoes: 110
      },
      {
        id: 124,
        nome: "Puma RS-X Tech",
        preco: 499.90,
        parcelas: 8,
        imagem: "./img/puma_rsxtech.png",
        estrelas: 5,
        avaliacoes: 130
      },
      {
        id: 125,
        nome: "Puma Enzo 2",
        preco: 479.90,
        parcelas: 8,
        imagem: "./img/puma_enzo2.png",
        estrelas: 4,
        avaliacoes: 105
      },
      {
        id: 126,
        nome: "Puma RS-2K",
        preco: 529.90,
        parcelas: 8,
        imagem: "./img/puma_rs2k.png",
        estrelas: 5,
        avaliacoes: 140
      },
      {
        id: 127,
        nome: "Puma Muse Echo",
        preco: 449.90,
        parcelas: 8,
        imagem: "./img/puma_museecho.png",
        estrelas: 4,
        avaliacoes: 115
      },
      {
        id: 128,
        nome: "Puma Mirage Tech",
        preco: 469.90,
        parcelas: 8,
        imagem: "./img/puma_miragetech.png",
        estrelas: 5,
        avaliacoes: 125
      },
    
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
  
  renderizarProdutos(produtospuma);
  