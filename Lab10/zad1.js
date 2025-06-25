document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // zatrzymuje domyślną akcję wysyłania

    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;

    if (name === '' || surname === '' || email === '' || password === '' || confirm === '') {
        alert('Wszystkie pola są wymagane!');
        return;
    }

    if (password.length < 6) {
        alert('Hasło musi mieć co najmniej 6 znaków');
        return;
    }

    if (password !== confirm) {
        alert('Hasła nie są takie same');
        return;
    }

    alert('Formularz poprawnie wypełniony!');
    this.submit(); // jeśli wszystko OK, można wysłać formularz
});