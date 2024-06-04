const form = document.getElementById('jobForm');
const viewTableBtn = document.getElementById('viewTableBtn');
const applicationTable = document.getElementById('applicationTable');
const tableBody = applicationTable.getElementsByTagName('tbody')[0];

const applications = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    const formData = new FormData(form);
    const application = {};

    for (const [key, value] of formData.entries()) {
      application[key] = value;
    }

    applications.push(application);
    form.reset();
    console.log('Application submitted:', application);
  } else {
    console.log('Please fill out all required fields correctly.');
  }
});

viewTableBtn.addEventListener('click', () => {
  applicationTable.style.display = 'table';

  tableBody.innerHTML = '';

  applications.forEach((application) => {
    const row = tableBody.insertRow(-1);

    const nameCell = row.insertCell(0);
    nameCell.innerHTML = `${application.firstName} ${application.lastName}`;

    const emailCell = row.insertCell(1);
    emailCell.innerHTML = application.email;

    const phoneCell = row.insertCell(2);
    phoneCell.innerHTML = application.phone;

    const resumeCell = row.insertCell(3);
    resumeCell.innerHTML = 'Resume';

    const coverLetterCell = row.insertCell(4);
    coverLetterCell.innerHTML = application.coverLetter;

  });
});