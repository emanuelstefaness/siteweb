import { todostenis } from "./todostenis.js";

const cartSidebar = document.getElementById("cartSidebar");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartTotalElement = document.getElementById("cartTotal");
const cartCountElement = document.getElementById("cartCount");
const openCartBtn = document.getElementById("openCartBtn");
const addToCartBtn = document.getElementById("addToCartBtn");
const tamanhoSelect = document.getElementById("tamanhoSelect");
const quantidadeInput = document.getElementById("quantidadeInput");
const btnDecrement = document.getElementById("btnDecrement");
const btnIncrement = document.getElementById("btnIncrement");

const CART_STORAGE_KEY = "shoppingCartHypeShoes";

// --- Funções do Carrinho ---

/**
 * Obtém o carrinho do localStorage.
 * @returns {Array} O array de itens do carrinho.
 */
function getCart() {
  const cart = localStorage.getItem(CART_STORAGE_KEY);
  return cart ? JSON.parse(cart) : [];
}

/**
 * Salva o carrinho no localStorage.
 * @param {Array} cart O array de itens do carrinho a ser salvo.
 */
function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

/**
 * Adiciona um item ao carrinho ou atualiza sua quantidade.
 * @param {number} productId ID do produto.
 * @param {string} size Tamanho selecionado.
 * @param {number} quantity Quantidade a adicionar.
 */
function addToCart(productId, size, quantity) {
  if (!size) {
    alert("Por favor, selecione um tamanho.");
    return;
  }
  if (quantity <= 0) {
    alert("Quantidade inválida.");
    return;
  }

  const cart = getCart();
  const product = todostenis.find(p => p.id === productId);

  if (!product) {
    console.error("Produto não encontrado para adicionar ao carrinho:", productId);
    return;
  }

  const existingItemIndex = cart.findIndex(item => item.productId === productId && item.size === size);

  if (existingItemIndex > -1) {
    // Atualiza quantidade se item (mesmo ID e tamanho) já existe
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Adiciona novo item
    cart.push({
      productId: productId,
      size: size,
      quantity: quantity,
      name: product.nome,
      price: product.preco,
      image: product.imagem
    });
  }

  saveCart(cart);
  updateCartDisplay();
  // A sidebar não será mais aberta automaticamente aqui.
}

/**
 * Remove um item específico (por ID e tamanho) do carrinho.
 * @param {number} productId ID do produto.
 * @param {string} size Tamanho do item a remover.
 */
function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(item => !(item.productId === productId && item.size === size));
  saveCart(cart);
  updateCartDisplay();
}

/**
 * Calcula o valor total do carrinho.
 * @param {Array} cart O array de itens do carrinho.
 * @returns {number} O valor total.
 */
function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

/**
 * Atualiza a exibição do carrinho (sidebar e contador).
 */
function updateCartDisplay() {
  const cart = getCart();
  cartItemsContainer.innerHTML = ""; // Limpa itens antigos

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="text-center text-muted">Seu carrinho está vazio.</p>';
    cartTotalElement.innerText = "R$ 0,00";
    cartCountElement.innerText = "0";
    cartCountElement.style.display = 'none'; // Esconde o contador se vazio
  } else {
    let totalItems = 0;
    cart.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item", "d-flex", "align-items-center", "mb-3", "border-bottom", "pb-3");
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="60" class="me-3 rounded">
        <div class="flex-grow-1">
          <h6 class="mb-1 cart-item-title">${item.name}</h6>
          <p class="mb-1 text-muted small">Tamanho: ${item.size}</p>
          <p class="mb-1 text-muted small">Qtd: ${item.quantity}</p>
          <p class="mb-0 fw-bold cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}</p>
        </div>
        <button class="btn btn-sm btn-outline-danger remove-item-btn" data-product-id="${item.productId}" data-size="${item.size}">
          <i class="bi bi-trash"></i>
        </button>
      `;
      cartItemsContainer.appendChild(itemElement);
      totalItems += item.quantity;
    });

    const totalValue = calculateTotal(cart);
    cartTotalElement.innerText = `R$ ${totalValue.toFixed(2).replace(".", ",")}`;
    cartCountElement.innerText = totalItems.toString();
    cartCountElement.style.display = 'block'; // Mostra o contador
  }
}

// --- Event Listeners ---

document.addEventListener("DOMContentLoaded", () => {
  // Atualiza a exibição inicial do carrinho
  updateCartDisplay();

  // Botão Adicionar ao Carrinho (se existir na página)
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const productId = parseInt(addToCartBtn.dataset.id);
      const selectedSize = tamanhoSelect.value;
      const quantity = parseInt(quantidadeInput.value);
      addToCart(productId, selectedSize, quantity);
    });
  }

  // Botões de quantidade na página de detalhes (se existirem)
  if (btnDecrement && btnIncrement && quantidadeInput) {
    btnDecrement.addEventListener("click", () => {
      let currentValue = parseInt(quantidadeInput.value);
      if (currentValue > 1) {
        quantidadeInput.value = currentValue - 1;
      }
    });

    btnIncrement.addEventListener("click", () => {
      let currentValue = parseInt(quantidadeInput.value);
      quantidadeInput.value = currentValue + 1;
    });
  }

  // Delegação de evento para botões de remover no carrinho
  cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.closest(".remove-item-btn")) {
      const button = event.target.closest(".remove-item-btn");
      const productId = parseInt(button.dataset.productId);
      const size = button.dataset.size;
      removeFromCart(productId, size);
    }
  });

  // Event listener for the cart icon button
  if (openCartBtn) {
      openCartBtn.addEventListener('click', () => {
          // 1. Atualiza a exibição do carrinho primeiro
          updateCartDisplay();
          // 2. Obtém a instância do Offcanvas (ou cria se não inicializada)
          const sidebar = bootstrap.Offcanvas.getInstance(cartSidebar) || new bootstrap.Offcanvas(cartSidebar);
          // 3. Mostra a sidebar
          sidebar.show();
      });
  }
  // Atualiza também caso a sidebar seja aberta por outros meios (se houver)
  cartSidebar.addEventListener('show.bs.offcanvas', updateCartDisplay);

});

