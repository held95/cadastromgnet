// Altere essa constante para a URL do seu Google Apps Script publicado
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxsU72yMJn0BEcbo6wvWHLemHIxL-0jFAGjJSCIAK4yEC2xC5yq5VBZmiRHDs4Rf5HMCg/exec';

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function () {
    const target = this.dataset.tab;

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    this.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

function cadastrar() {
  const medico = {
    nome: document.getElementById("nome").value,
    crm: document.getElementById("crm").value,
    endereco: document.getElementById("endereco").value,
    dadosBancarios: document.getElementById("dados").value,
    cep: document.getElementById("cep").value,
    codigoBanco: document.getElementById("codigo").value,
    agencia: document.getElementById("agencia").value,
    nomeBanco: document.getElementById("nomeBanco").value,
    email: document.getElementById("email").value,
    whatsapp: document.getElementById("whatsapp").value,
    hospitais: Array.from(document.querySelectorAll('#hospitais input[type="checkbox"]:checked')).map(cb => cb.value)
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors', // evita CORS error (modo limitado de resposta)
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(medico)
  })
    .then(() => {
      alert("Cadastro enviado com sucesso!");
      document.querySelectorAll("input").forEach(el => el.value = "");
      document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
    })
    .catch((error) => {
      console.error('Erro ao enviar:', error);
      alert("Erro ao enviar cadastro.");
    });
}
