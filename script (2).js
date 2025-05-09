const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz5uOyPo1g3QFtlO1_j1Qhb6pdUasqR0hQgjet0Yw8Wpx-cul2XZSPotiaoX1gGpXtiPw/exec";

function cadastrarHospitais() {
  const data = {
    nome: document.getElementById("nome").value,
    crm: document.getElementById("crm").value,
    endereco: document.getElementById("endereco").value,
    cep: document.getElementById("cep").value,
    codigoBanco: document.getElementById("codigo").value,
    agencia: document.getElementById("agencia").value,
    nomeBanco: document.getElementById("banco").value,
    hospitais: [...document.querySelectorAll(".checkbox-group input:checked")].map(cb => cb.value).join(", "),
    email: document.getElementById("email").value,
    whatsapp: document.getElementById("whatsapp").value,
    dataNascimento: document.getElementById("dataNascimento").value,
    dataEmissaoRg: document.getElementById("dataEmissaoRg").value
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.text())
  .then(text => {
    alert("✅ Cadastro enviado: " + text);
  })
  .catch(error => {
    alert("❌ Erro ao enviar: " + error);
  });
}
