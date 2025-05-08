const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/SEU_ID_AQUI/exec';

function cadastrar() {
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
    cep: document.getElementById("cep").value,
    codigoBanco: document.getElementById("codigo").value,
    agencia: document.getElementById("agencia").value,
    nomeBanco: document.getElementById("nomeBanco").value,
    hospitais: Array.from(document.querySelectorAll('#hospitais input[type="checkbox"]:checked')).map(cb => cb.value).join(', '),
    email: email,
    whatsapp: document.getElementById("whatsapp").value
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
