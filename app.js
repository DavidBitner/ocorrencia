document.addEventListener("DOMContentLoaded", async function () {
  // Save and restore only <input> and <textarea> fields
  const inputs = document.querySelectorAll("input, textarea");

  inputs.forEach(input => {
    const savedValue = localStorage.getItem(input.id);
    if (savedValue) {
      input.value = savedValue;
    }

    input.addEventListener("input", () => {
      localStorage.setItem(input.id, input.value.trim());
    });
  });

  // Logic for updating text box content
  const fields = {
    "coletivo": "box-coletivo",
    "logradouro": "box-logradouro",
    "driverName": "box-condutor",
    "driverCpf": "box-cpf"
  };

  function updateBoxContent() {
    Object.keys(fields).forEach(inputId => {
      const input = document.getElementById(inputId);
      const output = document.getElementById(fields[inputId]);

      if (input && output) {
        let label = output.id.replace("box-", "");
        output.innerHTML = `<span class="label">${label}:</span> ${input.value}`;
      }
    });
  }

  Object.keys(fields).forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
      input.addEventListener("input", updateBoxContent);
    }
  });

  updateBoxContent();
});

// Clear Fields
document.getElementById("clear").addEventListener("click", function () {
  localStorage.clear();
  document.querySelectorAll('input, textarea').forEach(input => {
    input.value = '';
  });
  document.querySelector("#excel").classList.add("hidden");
});

// Validate Noc
function validateNoc() {
  const nOc = document.getElementById('nOc');
  nOc.value = nOc.value.toUpperCase();

  const nOcError = document.getElementById('nOcError');
  const nOcPattern = /^6A\d{4}$/;

  if (!nOcPattern.test(nOc.value)) {
    nOc.classList.add('invalid');
    nOc.classList.remove('valid');
    nOcError.style.display = 'inline';
  } else {
    nOc.classList.remove('invalid');
    nOc.classList.add('valid');
    nOcError.style.display = 'none';
  }
}

// Validate Ocorrencia (Free-text)
function validateOcorrencia() {
  const ocorrencia = document.getElementById('ocorrencia');
  ocorrencia.value = ocorrencia.value.toUpperCase();

  const isValid = ocorrencia.value.trim() !== '';
  const ocorrenciaError = document.getElementById("ocorrenciaError");

  if (!isValid) {
    ocorrencia.classList.add('invalid');
    ocorrencia.classList.remove('valid');
    ocorrenciaError.style.display = 'inline';
  } else {
    ocorrencia.classList.remove('invalid');
    ocorrencia.classList.add('valid');
    ocorrenciaError.style.display = 'none';
  }
}

// Validate Coletivo
function validateColetivo() {
  const coletivo = document.getElementById('coletivo');
  const coletivoError = document.getElementById('coletivoError');
  const coletivoPattern = /^\d{5}( X \d{5})?$/;

  if (!coletivoPattern.test(coletivo.value.toUpperCase())) {
    coletivo.classList.add('invalid');
    coletivo.classList.remove('valid');
    coletivoError.style.display = 'inline';
  } else {
    coletivo.classList.remove('invalid');
    coletivo.classList.add('valid');
    coletivoError.style.display = 'none';
  }
}

// Validate Linha
function validateLinha() {
  const linha = document.getElementById('linha');
  const linhaError = document.getElementById('linhaError');
  const linhaPattern = /^[A-Za-z0-9]{4}-[A-Za-z0-9]{2}$/;

  if (!linhaPattern.test(linha.value)) {
    linha.classList.add('invalid');
    linha.classList.remove('valid');
    linhaError.style.display = 'inline';
  } else {
    linha.classList.remove('invalid');
    linha.classList.add('valid');
    linhaError.style.display = 'none';
  }
}

// Validate Date (only check if the field is filled correctly)
function validateDate() {
  const dateField = document.getElementById('date');
  const dateError = document.getElementById('dateError');

  // If the date field is empty or the browser didn't accept it, mark it as invalid
  if (!dateField.value) {
    dateField.classList.add('invalid');
    dateField.classList.remove('valid');
    dateError.style.display = 'inline';
  } else {
    dateField.classList.remove('invalid');
    dateField.classList.add('valid');
    dateError.style.display = 'none';
  }
}

// Validate Time
function validateTime() {
  const time = document.getElementById('time');
  const timeError = document.getElementById('timeError');
  const timePattern = /^\d{2}:\d{2}$/;

  if (!timePattern.test(time.value)) {
    time.classList.add('invalid');
    time.classList.remove('valid');
    timeError.style.display = 'inline';
  } else {
    time.classList.remove('invalid');
    time.classList.add('valid');
    timeError.style.display = 'none';
  }
}

// Validate Logradouro (Free-text)
function validateLogradouro() {
  const ocorrencia = document.getElementById('logradouro');
  const isValid = ocorrencia.value.trim() !== '';
  const logradouroError = document.getElementById('logradouroError')

  if (!isValid) {
    ocorrencia.classList.add('invalid');
    ocorrencia.classList.remove('valid');
    logradouroError.style.display = 'inline';
  } else {
    ocorrencia.classList.remove('invalid');
    ocorrencia.classList.add('valid');
    logradouroError.style.display = 'none';
  }
}

// Validate Address Number
function validateNumero() {
  const numero = document.getElementById('numero');
  const numeroError = document.getElementById('numeroError');
  const numeroPattern = /^(\d+|-)$/; // Allows only numbers OR a single hyphen

  if (!numeroPattern.test(numero.value)) {
    numero.classList.add('invalid');
    numero.classList.remove('valid');
    numeroError.style.display = 'inline';
  } else {
    numero.classList.remove('invalid');
    numero.classList.add('valid');
    numeroError.style.display = 'none';
  }
}

// Validate Bairro
function validateBairro() {
  const ocorrencia = document.getElementById('bairro');
  const isValid = ocorrencia.value.trim() !== '';
  const bairroError = document.getElementById('bairroError')

  if (!isValid) {
    ocorrencia.classList.add('invalid');
    ocorrencia.classList.remove('valid');
    bairroError.style.display = 'inline';
  } else {
    ocorrencia.classList.remove('invalid');
    ocorrencia.classList.add('valid');
    bairroError.style.display = 'none';
  }
}

// Validate Início do Fato
function validateInicioFato() {
  const inicioFato = document.getElementById("inicioFato");
  if (!inicioFato || !inicioFato.value.trim()) {
    inicioFato.classList.add("invalid");
    inicioFato.classList.remove("valid");
  } else {
    inicioFato.classList.remove("invalid");
    inicioFato.classList.add("valid");
  }
}

// Validate Desfecho
function validateDesfecho() {
  const desfecho = document.getElementById('desfecho');
  if (!desfecho.value.trim()) {
    desfecho.classList.add('invalid');
    desfecho.classList.remove('valid');
  } else {
    desfecho.classList.remove('invalid');
    desfecho.classList.add('valid');
  }
}

// Validate CCO
function validateCco() {
  const cco = document.getElementById('cco');
  const ccoError = document.getElementById('ccoError')

  if (!cco.value.trim()) {
    cco.classList.add('invalid');
    cco.classList.remove('valid');
    ccoError.style.display = 'inline';
  } else {
    cco.classList.remove('invalid');
    cco.classList.add('valid');
    ccoError.style.display = 'none';

  }
}

// Validate Matricula
function validateMatricula() {
  const matricula = document.getElementById('matricula');
  const matriculaError = document.getElementById('matriculaError')

  if (!matricula.value.trim()) {
    matricula.classList.add('invalid');
    matricula.classList.remove('valid');
    matriculaError.style.display = 'inline';
  } else {
    matricula.classList.remove('invalid');
    matricula.classList.add('valid');
    matriculaError.style.display = 'none';
  }
}

// Event Listeners for blur events
document.getElementById('nOc').addEventListener('blur', validateNoc);
document.getElementById('coletivo').addEventListener('blur', validateColetivo);
document.getElementById('linha').addEventListener('blur', validateLinha);
document.getElementById('date').addEventListener('blur', validateDate);
document.getElementById('time').addEventListener('blur', validateTime);
document.getElementById('numero').addEventListener('blur', validateNumero);
document.getElementById('ocorrencia').addEventListener('blur', validateOcorrencia);
document.getElementById('logradouro').addEventListener('blur', validateLogradouro);
document.getElementById('bairro').addEventListener('blur', validateBairro);
document.getElementById('inicioFato').addEventListener('blur', validateInicioFato);
document.getElementById('desfecho').addEventListener('blur', validateDesfecho);
document.getElementById('cco').addEventListener('blur', validateCco);
document.getElementById('matricula').addEventListener('blur', validateMatricula);

function clearStorage() {
  localStorage.clear();
  location.reload(); // Reload to reflect cleared values
}

// Word Generating
async function loadTemplate() {
  try {
    const response = await fetch('template.docx'); // Load default template
    if (!response.ok) throw new Error("Failed to load template");
    return await response.arrayBuffer();
  } catch (error) {
    console.error("Error loading template:", error);
    alert("Error loading template: " + error.message);
    throw error;
  }
}

// Clear Fields
document.getElementById("clear").addEventListener("click", async function () {
  localStorage.clear();
  document.querySelectorAll('input, textarea').forEach(input => {
    input.value = '';
  });
  document.querySelector("#excel").classList.add("hidden")
});

// Modal notes
const modal = document.getElementById("modal");
const notesButton = document.getElementById("notes");

notesButton.addEventListener("click", function () {
  modal.classList.add("show");
});

modal.addEventListener("click", function (event) {
  const modalContent = document.querySelector(".modal-content");
  if (!modalContent.contains(event.target)) {
    modal.classList.remove("show");
  }
});

// Generate Ocorrência
document.getElementById("generateWord").addEventListener("click", async function () {
  try {
    const nOc = document.getElementById("nOc").value.toUpperCase();
    const ocorrencia = document.getElementById("ocorrencia").value.toUpperCase();
    const coletivo = document.getElementById("coletivo").value.toUpperCase();
    const linha = document.getElementById("linha").value.toUpperCase();
    let dateValue = document.getElementById("date").value;
    let dateParts = dateValue.split("-");
    let date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]).toLocaleDateString("pt-BR").toUpperCase();
    const time = document.getElementById("time").value.toUpperCase();
    const logradouro = document.getElementById("logradouro").value.toUpperCase();
    let numero = document.getElementById("numero").value.toUpperCase();
    const bairro = document.getElementById("bairro").value.toUpperCase();
    const inicioFato = document.getElementById("inicioFato").value.trim().toUpperCase();
    const desfecho = document.getElementById("desfecho").value.trim().toUpperCase();
    const driverName = document.getElementById("driverName").value.toUpperCase();
    const driverCpf = document.getElementById("driverCpf").value.toUpperCase();
    const driverSituation = document.getElementById("driverSituation").value.toUpperCase();
    let victimName = document.getElementById("victimName").value.toUpperCase();
    let victimDocumentation = document.getElementById("victimDocumentation").value.toUpperCase();
    let victimSituation = document.getElementById("victimSituation").value.toUpperCase();
    let victimContact = document.getElementById("victimContact").value.toUpperCase();
    let thirdPartyName = document.getElementById("thirdPartyName").value.toUpperCase();
    let thirdPartyDocumentation = document.getElementById("thirdPartyDocumentation").value.toUpperCase();
    let thirdPartyContact = document.getElementById("thirdPartyContact").value.toUpperCase();
    let witnessName = document.getElementById("witnessName").value.toUpperCase();
    let witnessDocumentation = document.getElementById("witnessDocumentation").value.toUpperCase();
    let witnessContact = document.getElementById("witnessContact").value.toUpperCase();
    let witnessEmail = document.getElementById("witnessEmail").value.toUpperCase();
    let prat = document.getElementById("prat").value.toUpperCase();
    let pmvt = document.getElementById("pmvt").value.toUpperCase();
    let pmvtr = document.getElementById("pmvtr").value.toUpperCase();
    let bombeirosSamu = document.getElementById("bombeirosSamu").value.toUpperCase();
    let sptrans = document.getElementById("sptrans").value.toUpperCase();
    let cet = document.getElementById("cet").value.toUpperCase();
    let policiaCivil = document.getElementById("policiaCivil").value.toUpperCase();
    let gcm = document.getElementById("gcm").value.toUpperCase();
    let bo = document.getElementById("bo").value.toUpperCase();
    let responsavelBo = document.getElementById("responsavelBo").value.toUpperCase();
    let pericia = document.getElementById("pericia").value.toUpperCase();
    let ocSptrans = document.getElementById("ocSptrans").value.toUpperCase();
    let alerta = document.getElementById("alerta").value.toUpperCase();
    const cco = document.getElementById("cco").value.toUpperCase();
    const matricula = document.getElementById("matricula").value.toUpperCase();
    let operacional = document.getElementById("operacional").value.toUpperCase();
    let matriculaOp = document.getElementById("matriculaOp").value.toUpperCase();
    let moto = document.getElementById("moto").value.toUpperCase();

    if (!nOc) {
      alert("Insira um numero de ocorrência. Ex: 6A1234");
      return;
    }
    if (!ocorrencia) {
      alert("Insira um tipo de ocorrência. Ex: Coletivo X ...");
      return;
    }
    if (!coletivo) {
      alert("Insira um coletivo. Ex: 66123");
      return;
    }
    if (!linha) {
      alert("Insira uma linha. Ex: 6666-66");
      return;
    }
    if (!date) {
      alert("Insira uma data válida para a ocorrência");
      return;
    }
    if (!time) {
      alert("Insira um horário válido para o momento que ocorreu o incidente");
      return;
    }
    if (!logradouro) {
      alert("Insira um endereço para o ocorrido");
      return;
    }
    if (!numero) {
      alert("Insira um numero para o logradouro");
      return;
    }
    if (!bairro) {
      alert("Insira um bairro para o logradouro");
      return;
    }
    if (!inicioFato) {
      alert("Insira corpo da ocorrência");
      return;
    }
    if (!desfecho) {
      alert("Insira o desfecho da ocorrência");
      return;
    }
    if (!driverName) {
      alert("Insira o nome do condutor");
      return;
    }
    if (!driverCpf) {
      alert("Insira o CPF do condutor");
      return;
    }
    if (!driverSituation) {
      alert("Insira a situação do condutor");
      return;
    }
    if (!victimName) {
      victimName = "NÃO HOUVE"
    }
    if (!victimDocumentation) {
      victimDocumentation = "NÃO HOUVE"
    }
    if (!victimSituation) {
      victimSituation = "NÃO HOUVE"
    }
    if (!victimContact) {
      victimContact = "NÃO HOUVE"
    }
    if (!thirdPartyName) {
      thirdPartyName = "NÃO HOUVE"
    }
    if (!thirdPartyDocumentation) {
      thirdPartyDocumentation = "NÃO HOUVE"
    }
    if (!thirdPartyContact) {
      thirdPartyContact = "NÃO HOUVE"
    }
    if (!witnessName) {
      witnessName = "NÃO HOUVE"
    }
    if (!witnessDocumentation) {
      witnessDocumentation = "NÃO HOUVE"
    }
    if (!witnessContact) {
      witnessContact = "NÃO HOUVE"
    }
    if (!witnessEmail) {
      witnessEmail = "NÃO HOUVE"
    }
    if (!prat) {
      prat = "NÃO HOUVE"
    }
    if (!pmvt) {
      pmvt = "NÃO HOUVE"
    }
    if (!pmvtr) {
      pmvtr = "NÃO HOUVE"
    }
    if (!bombeirosSamu) {
      bombeirosSamu = "NÃO HOUVE"
    }
    if (!sptrans) {
      sptrans = "NÃO HOUVE"
    }
    if (!cet) {
      cet = "NÃO HOUVE"
    }
    if (!policiaCivil) {
      policiaCivil = "NÃO HOUVE"
    }
    if (!gcm) {
      gcm = "NÃO HOUVE"
    }
    if (!bo) {
      bo = "NÃO HOUVE"
    }
    if (!responsavelBo) {
      responsavelBo = "NÃO HOUVE"
    }
    if (!pericia) {
      pericia = "NÃO HOUVE"
    }
    if (!ocSptrans) {
      ocSptrans = "NÃO HOUVE"
    }
    if (!alerta) {
      alerta = "NÃO HOUVE"
    }
    if (!cco) {
      alert("Insira o nome do responsável do CCO pela elaboração da ocorrência");
      return;
    }
    if (!matricula) {
      alert("Insira a matricula do responsável do CCO pela elaboração da ocorrência");
      return;
    }
    if (!operacional) {
      operacional = "NÃO HOUVE"
    }
    if (!matriculaOp) {
      matriculaOp = "NÃO HOUVE"
    } if (!moto) {
      moto = "NÃO HOUVE"
    }

    // Load the template
    const content = await loadTemplate();
    const zip = new PizZip(content);
    const doc = new docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

    doc.setData(
      {
        nOc: nOc + "/2025",
        ocorrencia: ocorrencia,
        coletivo: coletivo,
        linha: linha,
        date: date,
        time: time,
        logradouro: logradouro,
        numero: numero,
        bairro: bairro,
        inicioFato: inicioFato,
        desfecho: desfecho,
        driverName: driverName,
        driverCpf: driverCpf,
        driverSituation: driverSituation,
        victimName: victimName,
        victimDocumentation: victimDocumentation,
        victimSituation: victimSituation,
        victimContact: victimContact,
        thirdPartyName: thirdPartyName,
        thirdPartyDocumentation: thirdPartyDocumentation,
        thirdPartyContact: thirdPartyContact,
        witnessName: witnessName,
        witnessDocumentation, witnessDocumentation,
        witnessContact: witnessContact,
        witnessEmail: witnessEmail,
        prat: prat,
        pmvt: pmvt,
        pmvtr: pmvtr,
        bombeirosSamu: bombeirosSamu,
        sptrans: sptrans,
        cet: cet,
        policiaCivil: policiaCivil,
        gcm: gcm,
        bo: bo,
        responsavelBo: responsavelBo,
        pericia: pericia,
        ocSptrans: ocSptrans,
        alerta: alerta,
        cco: cco,
        matricula: matricula,
        operacional: operacional,
        matriculaOp: matriculaOp,
        moto: moto
      }); // Replacing {nOc} in the template
    doc.render();

    const blob = new Blob([doc.getZip().generate({ type: "arraybuffer" })], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    const link = document.createElement("a");
    const nomeOcorrencia = `${nOc} - ${date.replace(/\//g, '.').slice(0, 5)} - ${linha} - ${coletivo} - ${ocorrencia} - ${logradouro}`
    link.href = URL.createObjectURL(blob);
    link.download = `${nomeOcorrencia}.docx`;
    link.click();

    document.getElementById("td-nOc").textContent = nOc + "/2025";
    document.getElementById("td-date").textContent = date;
    document.getElementById("td-alerta").textContent = alerta;
    document.getElementById("td-victimName").textContent = victimName;
    document.getElementById("td-driverName").textContent = driverName;
    document.getElementById("td-driverCpf").textContent = driverCpf;
    document.getElementById("td-coletivo").textContent = coletivo;
    document.getElementById("td-linha").textContent = linha;
    document.getElementById("td-ocorrencia").textContent = ocorrencia;
    document.getElementById("td-logradouro").textContent = logradouro;
    document.getElementById("td-operacional").textContent = operacional;
    document.getElementById("td-bo").textContent = bo;
    document.getElementById("td-ocSptrans").textContent = ocSptrans;
    document.getElementById("td-sptrans").textContent = sptrans;
    document.getElementById("td-time").textContent = time;
    document.getElementById("td-cco").textContent = cco;
    document.getElementById("td-fechamento").textContent = cco;

    document.getElementById('excel').classList.remove('hidden');
  } catch (error) {
    console.error("Error generating document:", error);
    alert("Error generating document: " + error.message);
  }
});

document.getElementById("copy").addEventListener("click", function () {
  let row = document.querySelector("#excel tbody tr"); // Select the first row
  if (!row) return;

  let text = Array.from(row.querySelectorAll("td"))
    .map(td => td.innerText)
    .join("\t"); // Format for Excel

  navigator.clipboard.writeText(text).then(() => {
    alert("Linha copiada!");
  }).catch(err => {
    console.error("Erro ao copiar:", err);
  });
});
