// Altere essa constante para a URL do seu Google Apps Script publicado
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/library/d/1TYP1XjGVF_8XQ0vx8wJ83yLVgNYX384Los8jAHxOU6aprTi-2fBddTbj/2';

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
  // Validação de campos obrigatórios
  const nome = document.getElementById("nome").value;
  const crm = document.getElementById("crm").value;
  const email = document.getElementById("email").value;

  if (!nome || !crm || !email) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const medico = {
    nome: nome,
    crm: crm,
    endereco: document.getElementById("endereco").value,
    dadosBancarios: document.getElementById("dados").value,
    cep: document.getElementById("cep").value,
    codigoBanco: document.getElementById("codigo").value,
    agencia: document.getElementById("agencia").value,
    nomeBanco: document.getElementById("nomeBanco").value,
    email: email,
    whatsapp: document.getElementById("whatsapp").value,
    hospitais: Array.from(document.querySelectorAll('#hospitais input[type="checkbox"]:checked')).map(cb => cb.value)
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(medico)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao enviar dados.');
      }
      alert("Cadastro enviado com sucesso!");
      document.querySelectorAll("input").forEach(el => el.value = "");
      document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
    })
    .catch((error) => {
      console.error('Erro ao enviar:', error);
      alert("Erro ao enviar cadastro.");
    });
}
