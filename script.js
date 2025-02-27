const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const projectName = document.querySelector('#project-name').value;
  const projectDescription = document.querySelector('#project-description').value;
  const clientName = document.querySelector('#client-name').value;
  const clientEmail = document.querySelector('#client-email').value;
  const paymentMethod = document.querySelector('#payment-method').value;
  const budget = document.querySelector('#budget').value;

  const emailBody = `
    Project Name: ${projectName}
    Project Description: ${projectDescription}
    Client Name: ${clientName}
    Client Email: ${clientEmail}
    Payment Method: ${paymentMethod}
    Budget: ${budget}
  `;

  const emailSubject = 'New Project Request';

  window.location.href = `mailto:supremeamerapplication@gmail.com?subject=${emailSubject}&body=${emailBody}`;
});
