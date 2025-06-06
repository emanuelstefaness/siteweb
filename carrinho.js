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

function getCart() {
  const cart = localStorage.getItem(CART_STORAGE_KEY);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

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
    cart[existingItemIndex].quantity += quantity;
  } else {
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
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(item => !(item.productId === productId && item.size === size));
  saveCart(cart);
  updateCartDisplay();
}

function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function updateCartDisplay() {
  const cart = getCart();
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="text-center text-muted">Seu carrinho está vazio.</p>';
    cartTotalElement.innerText = "R$ 0,00";
    cartCountElement.innerText = "0";
    cartCountElement.style.display = 'none';
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
    cartCountElement.style.display = 'block';
  }
}

// --- Event Listeners ---

document.addEventListener("DOMContentLoaded", () => {
  updateCartDisplay();

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const productId = parseInt(addToCartBtn.dataset.id);
      const selectedSize = tamanhoSelect.value;
      const quantity = parseInt(quantidadeInput.value);
      addToCart(productId, selectedSize, quantity);
    });
  }

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

  cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.closest(".remove-item-btn")) {
      const button = event.target.closest(".remove-item-btn");
      const productId = parseInt(button.dataset.productId);
      const size = button.dataset.size;
      removeFromCart(productId, size);
    }
  });

  if (openCartBtn) {
    openCartBtn.addEventListener('click', () => {
      updateCartDisplay();
      const sidebar = bootstrap.Offcanvas.getInstance(cartSidebar) || new bootstrap.Offcanvas(cartSidebar);
      sidebar.show();
    });
  }

  cartSidebar.addEventListener('show.bs.offcanvas', updateCartDisplay);
});
