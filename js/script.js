const setUser = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email == 'admin@admin.com' && password == 'admin123') {

        localStorage.setItem("Acesso liberado", true);
        localStorage.setItem("Email", 'admin@admin.com');
        localStorage.setItem("Password", 'admin123');

        window.location.href = 'dashboard.html';

    } else if (email != 'admin@admin.com') {
        alert('Email inválido. Tente novamente!...');
        alert('Talvez você devesse tentar: admin@admin.com');
        localStorage.setItem("Acesso negado", false);


    } else if (password != 'admin123') {
        alert('Senha inválida. Tente novamente!...');
        alert('Talvez você devesse tentar: admin123');
        localStorage.setItem("Acesso negado", false);

    }

};