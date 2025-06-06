const produtosvans = [
        {
          id: 80,
          nome: "Vans Old Skool Classic",
          preco: 399.90,
          parcelas: 6,
          imagem: "./img/vans_oldskool.png",
          estrelas: 4,
          avaliacoes: 320
        },
        {
          id: 81,
          nome: "Vans Sk8-Hi Reissue",
          preco: 449.90,
          parcelas: 6,
          imagem: "./img/vans_sk8hi.png",
          estrelas: 5,
          avaliacoes: 280
        },
        {
          id: 82,
          nome: "Vans Authentic",
          preco: 349.90,
          parcelas: 6,
          imagem: "./img/vans_authentic.png",
          estrelas: 4,
          avaliacoes: 210
        },
        {
          id: 83,
          nome: "Vans Era Pro",
          preco: 399.90,
          parcelas: 6,
          imagem: "./img/vans_erapro.png",
          estrelas: 4,
          avaliacoes: 180
        },
        {
          id: 84,
          nome: "Vans Slip-On Core Classics",
          preco: 359.90,
          parcelas: 6,
          imagem: "./img/vans_slipon.png",
          estrelas: 4,
          avaliacoes: 250
        },
        {
          id: 85,
          nome: "Vans UltraRange EXO",
          preco: 459.90,
          parcelas: 6,
          imagem: "./img/vans_ultrarangeexo.png",
          estrelas: 5,
          avaliacoes: 190
        },
        {
          id: 86,
          nome: "Vans Sk8-Hi MTE",
          preco: 499.90,
          parcelas: 6,
          imagem: "./img/vans_sk8himte.png",
          estrelas: 5,
          avaliacoes: 210
        },
        {
          id: 87,
          nome: "Vans Old Skool DX",
          preco: 419.90,
          parcelas: 6,
          imagem: "./img/vans_oldskooldx.png",
          estrelas: 4,
          avaliacoes: 170
        },
        {
          id: 88,
          nome: "Vans Chukka Low",
          preco: 389.90,
          parcelas: 6,
          imagem: "./img/vans_chukkalow.png",
          estrelas: 4,
          avaliacoes: 160
        },
        {
          id: 89,
          nome: "Vans Authentic Platform",
          preco: 429.90,
          parcelas: 6,
          imagem: "./img/vans_authenticplatform.png",
          estrelas: 4,
          avaliacoes: 140
        },
        {
          id: 90,
          nome: "Vans Sk8-Hi Slim",
          preco: 459.90,
          parcelas: 6,
          imagem: "./img/vans_sk8higslim.png",
          estrelas: 5,
          avaliacoes: 220
        },
        {
          id: 91,
          nome: "Vans Old Skool V",
          preco: 439.90,
          parcelas: 6,
          imagem: "./img/vans_oldskoolv.png",
          estrelas: 5,
          avaliacoes: 200
        },
        {
          id: 92,
          nome: "Vans Classic Slip-On Checkerboard",
          preco: 369.90,
          parcelas: 6,
          imagem: "./img/vans_classicslipon_checkerboard.png",
          estrelas: 5,
          avaliacoes: 180
        },
        {
          id: 93,
          nome: "Vans Bold NI",
          preco: 449.90,
          parcelas: 6,
          imagem: "./img/vans_boldni.png",
          estrelas: 4,
          avaliacoes: 130
        },
        {
          id: 94,
          nome: "Vans Sk8-Hi MTE 2.0 DX",
          preco: 519.90,
          parcelas: 6,
          imagem: "./img/vans_sk8himte2dx.png",
          estrelas: 5,
          avaliacoes: 150
        },
        {
          id: 95,
          nome: "Vans Old Skool Pro",
          preco: 459.90,
          parcelas: 6,
          imagem: "./img/vans_oldskoolpro.png",
          estrelas: 5,
          avaliacoes: 190
        },
        {
          id: 96,
          nome: "Vans Ultrarange Rapidweld",
          preco: 479.90,
          parcelas: 6,
          imagem: "./img/vans_ultrarangerapidweld.png",
          estrelas: 5,
          avaliacoes: 175
        },
        {
          id: 97,
          nome: "Vans Authentic SF",
          preco: 399.90,
          parcelas: 6,
          imagem: "./img/vans_authenticsf.png",
          estrelas: 4,
          avaliacoes: 140
        },
        {
          id: 98,
          nome: "Vans Classic Slip-On",
          preco: 359.90,
          parcelas: 6,
          imagem: "./img/vans_classicslipon.png",
          estrelas: 4,
          avaliacoes: 210
        },
        {
          id: 99,
          nome: "Vans Half Cab Pro",
          preco: 449.90,
          parcelas: 6,
          imagem: "./img/vans_halfcabpro.png",
          estrelas: 5,
          avaliacoes: 160
        },
        {
          id: 100,
          nome: "Vans UltraRange Rapidweld LX",
          preco: 479.90,
          parcelas: 6,
          imagem: "./img/vans_ultrarangerapidwellx.png",
          estrelas: 5,
          avaliacoes: 170
        },
        {
          id: 101,
          nome: "Vans Old Skool Platform",
          preco: 449.90,
          parcelas: 6,
          imagem: "./img/vans_oldskoolplatform.png",
          estrelas: 5,
          avaliacoes: 190
        },
        {
          id: 102,
          nome: "Vans Era Cap LX",
          preco: 419.90,
          parcelas: 6,
          imagem: "./img/vans_era_cap_lx.png",
          estrelas: 4,
          avaliacoes: 130
        },
        {
          id: 103,
          nome: "Vans Authentic Platform SF",
          preco: 429.90,
          parcelas: 6,
          imagem: "./img/vans_authentic_platform_sf.png",
          estrelas: 4,
          avaliacoes: 140
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
  
  renderizarProdutos(produtosvans);
  