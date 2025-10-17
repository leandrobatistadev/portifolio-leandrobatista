const form = document.querySelector("#form-contato");
  const telefone = "5581986997597";

  form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // impede o envio padrão do form

    const nome = document.querySelector("#nome").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    // Evita abrir o WhatsApp sem dados
    if (!nome || !mensagem) {
      alert("Por favor, preencha seu nome e sua mensagem antes de enviar.");
      return;
    }

    const texto = `Olá, me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, "_blank");
  });

  // ===== MENU HAMBÚRGUER =====
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
