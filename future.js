function generateWord() {
  // Collect form data
  const nOc = document.getElementById('nOc').value;
  const ocorrencia = document.getElementById('ocorrencia').value;
  const coletivo = document.getElementById('coletivo').value;
  const linha = document.getElementById('linha').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const logradouro = document.getElementById('logradouro').value;
  const numero = document.getElementById('numero').value;
  const bairro = document.getElementById('bairro').value;

  // Add more fields as necessary

  // Create an object with the data to replace the placeholders in the DOCX template
  const data = {
      nOc: nOc,
      ocorrencia: ocorrencia,
      coletivo: coletivo,
      linha: linha,
      date: date,
      time: time,
      logradouro: logradouro,
      numero: numero,
      bairro: bairro
      // Add other fields
  };

  // Fetch the template (use a DOCX file hosted on your server or from a template URL)
  fetch('path/to/your/template.docx')
      .then(response => response.arrayBuffer())
      .then(dataBuffer => {
          // Load the DOCX template into PizZip
          const zip = new PizZip(dataBuffer);
          const doc = new window.docxtemplater(zip);

          // Set the data to replace the placeholders
          doc.setData(data);

          try {
              // Render the document (replace the placeholders)
              doc.render();
          } catch (error) {
              console.error('Error rendering the document:', error);
              return;
          }

          // Generate the final document
          const output = doc.getZip().generate({
              type: 'blob',
              mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          });

          // Create a download link for the generated DOCX file
          const link = document.createElement('a');
          link.href = URL.createObjectURL(output);
          link.download = 'formulario_ocorrencia.docx';
          link.click();
      })
      .catch(error => console.error('Error fetching template:', error));
}
