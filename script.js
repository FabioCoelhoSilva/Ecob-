// Inicializar Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Função de scroll suave
function scrollToSection(id) {
  const element = document.getElementById(id);
  const navHeight = document.querySelector("nav").offsetHeight;
  const elementPosition = element.offsetTop - navHeight;

  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  });
}

// Manipular envio do formulário
document.getElementById("doadorForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Obrigado pelo seu interesse! Entraremos em contato em breve.");
  this.reset();
});

// Máscara para CNPJ
document.getElementById("cnpj").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length <= 14) {
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
    e.target.value = value;
  }
});

// Máscara para telefone
document.getElementById("contato").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length <= 11) {
    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    e.target.value = value;
  }
});
