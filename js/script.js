document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('messageForm');
    const resultContainer = document.getElementById('formResult');
    const currentTime = document.getElementById('currentTime');
    const resultName = document.getElementById('resultName');
    const resultDob = document.getElementById('resultDob');
    const resultGender = document.getElementById('resultGender');
    const resultRole = document.getElementById('resultRole');
    const welcomeMessage = document.getElementById('welcomeMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const role = document.getElementById('role').value;

        resultName.textContent = name;
        resultDob.textContent = dob;
        resultGender.textContent = gender;
        resultRole.textContent = role;
        currentTime.textContent = new Date().toLocaleString();

        resultContainer.style.display = 'block';
        welcomeMessage.textContent = `Hai ${name}, Welcome To My Website`;
    });
});
