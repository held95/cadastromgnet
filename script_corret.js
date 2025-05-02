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
    Nome: document.getElementById("nome").value,
    CRM: document.getElementById("crm").value,
    Endereço: document.getElementById("endereco").value,
    "Dados Bancários": document.getElementById("dados").value,
    CEP: document.getElementById("cep").value,
    "Código do Banco": document.getElementById("codigo").value,
    Agência: document.getElementById("agencia").value,
    "Nome do Banco": document.getElementById("nomeBanco").value,
    E-mail: document.getElementById("email").value,
    WhatsApp: document.getElementById("whatsapp").value,
    Hospitais: Array.from(document.querySelectorAll('#hospitais input[type="checkbox"]:checked')).map(cb => cb.value)
  };

  console.log(medico);
  alert("Cadastro concluído com sucesso!");

  document.querySelectorAll("input").forEach(el => el.value = "");
  document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
}
