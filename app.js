// Validate Noc
function validateNoc() {
  const nOc = document.getElementById('nOc');
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
  const isValid = ocorrencia.value.trim() !== '';
  const ocorrenciaError = document.getElementById("ocorrenciaError")

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
  const coletivoPattern = /^66\d{3}$/;

  if (!coletivoPattern.test(coletivo.value)) {
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
  const numeroPattern = /^\d+$/;

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
  const inicioFato = document.getElementById('inicioFato');
  if (!inicioFato.value.trim()) {
    inicioFato.classList.add('invalid');
    inicioFato.classList.remove('valid');
  } else {
    inicioFato.classList.remove('invalid');
    inicioFato.classList.add('valid');
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

// Image upload
document.getElementById('file-upload').addEventListener('change', function (event) {
  const uploadedFiles = event.target.files;
  const uploadedImagesContainer = document.getElementById('uploaded-images');

  // Loop through the selected files
  for (let i = 0; i < uploadedFiles.length; i++) {
    const file = uploadedFiles[i];

    // Only handle image files
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageUrl = e.target.result;

        // Create an image thumbnail
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('uploaded-image');

        // Create the image element
        const img = document.createElement('img');
        img.src = imageUrl;

        // Create a remove button for the image
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.innerHTML = 'X';
        removeButton.addEventListener('click', function () {
          uploadedImagesContainer.removeChild(imageDiv);
        });

        // Append the image and the remove button to the div
        imageDiv.appendChild(img);
        imageDiv.appendChild(removeButton);

        // Append the div to the container
        uploadedImagesContainer.appendChild(imageDiv);
      };

      // Read the file as a data URL (base64 image)
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid image file');
    }
  }
});

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

// Everything caps
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("input[type='text'], textarea").forEach(function (element) {
    element.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
    });
  });

  // Save input fields text
  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {
    const savedValue = localStorage.getItem(input.id);
    if (savedValue) {
      input.value = savedValue;
    }

    input.addEventListener("input", () => {
      localStorage.setItem(input.id, input.value);
    });
  });
});

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

// Read images as base64
async function readImages(files) {
  const imagePromises = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    const imagePromise = new Promise((resolve) => {
      reader.onloadend = function () {
        const imageBase64 = reader.result.split(',')[1]; // Remove the data URL prefix
        resolve({ index: i + 1, base64: imageBase64 });
      };
      reader.readAsDataURL(file); // Read the image as base64
    });
    imagePromises.push(imagePromise);
  }
  return Promise.all(imagePromises);
}

// Clear Fields
document.getElementById("clear").addEventListener("click", async function () {
  localStorage.clear();
  document.querySelectorAll('input, textarea').forEach(input => {
    input.value = '';
  });
})

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
    const nOc = document.getElementById("nOc").value;
    const ocorrencia = document.getElementById("ocorrencia").value;
    const coletivo = document.getElementById("coletivo").value;
    const linha = document.getElementById("linha").value;
    const date = new Date(document.getElementById("date").value).toLocaleDateString("pt-BR");
    const time = document.getElementById("time").value;
    const logradouro = document.getElementById("logradouro").value;
    let numero = document.getElementById("numero").value;
    const bairro = document.getElementById("bairro").value;
    const inicioFato = document.getElementById("inicioFato").value;
    const desfecho = document.getElementById("desfecho").value;
    const driverName = document.getElementById("driverName").value;
    const driverCpf = document.getElementById("driverCpf").value;
    const driverSituation = document.getElementById("driverSituation").value;
    let victimName = document.getElementById("victimName").value;
    let victimDocumentation = document.getElementById("victimDocumentation").value;
    let victimSituation = document.getElementById("victimSituation").value;
    let victimContact = document.getElementById("victimContact").value;
    let thirdPartyName = document.getElementById("thirdPartyName").value;
    let thirdPartyDocumentation = document.getElementById("thirdPartyDocumentation").value;
    let thirdPartyContact = document.getElementById("thirdPartyContact").value;
    let witnessName = document.getElementById("witnessName").value;
    let witnessDocumentation = document.getElementById("witnessDocumentation").value;
    let witnessContact = document.getElementById("witnessContact").value;
    let witnessEmail = document.getElementById("witnessEmail").value;
    let prat = document.getElementById("prat").value;
    let pmvt = document.getElementById("pmvt").value;
    let pmvtr = document.getElementById("pmvtr").value;
    let bombeirosSamu = document.getElementById("bombeirosSamu").value;
    let sptrans = document.getElementById("sptrans").value;
    let cet = document.getElementById("cet").value;
    let policiaCivil = document.getElementById("policiaCivil").value;
    let gcm = document.getElementById("gcm").value;
    let bo = document.getElementById("bo").value;
    let responsavelBo = document.getElementById("responsavelBo").value;
    let pericia = document.getElementById("pericia").value;
    let ocSptrans = document.getElementById("ocSptrans").value;
    let alerta = document.getElementById("alerta").value;
    const cco = document.getElementById("cco").value;
    const matricula = document.getElementById("matricula").value;
    let operacional = document.getElementById("operacional").value;
    let matriculaOp = document.getElementById("matriculaOp").value;
    let moto = document.getElementById("moto").value;
    let image1

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

    // Read the uploaded images
    const imageInput = document.getElementById('file-upload'); // Updated input ID
    const imageFiles = imageInput.files;
    const imagesData = await readImages(imageFiles); // Process uploaded images

    // Load the template
    const content = await loadTemplate();
    const zip = new PizZip(content);
    const doc = new docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

    // Prepare data for the template (including images)
    const imagesDataObject = {};

    // Add the images to the template data
    imagesData.forEach((image, idx) => {
      imagesDataObject[`image${idx + 1}`] = {
        data: image.base64,
        extension: 'jpeg' // You can adjust based on the actual image type
      };
    });

    // Fill remaining placeholders with blank space
    const maxImages = 10;
    for (let i = imagesData.length + 1; i <= maxImages; i++) {
      imagesDataObject[`image${i}`] = {
        data: '',  // Blank space for remaining placeholders
        extension: ''
      };
    }

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
        moto: moto,
        ...imagesDataObject
      }); // Replacing {nOc} in the template
    doc.render();

    const blob = new Blob([doc.getZip().generate({ type: "arraybuffer" })], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    const link = document.createElement("a");
    const nomeOcorrencia = `${nOc} - ${date.replace(/\//g, '.')} - ${linha} - ${coletivo} - ${ocorrencia} - ${logradouro}`
    link.href = URL.createObjectURL(blob);
    link.download = `${nomeOcorrencia}.docx`;
    link.click();

  } catch (error) {
    console.error("Error generating document:", error);
    alert("Error generating document: " + error.message);
  }
});
