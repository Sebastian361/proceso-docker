document.addEventListener('DOMContentLoaded', () => {
    // Registro de usuario
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            formData.append('action', 'register');

            fetch('auth.php', { // Asegúrate de que la ruta sea correcta
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert(data); // Mostrar mensaje de éxito o error
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }

    // Inicio de sesión
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            formData.append('action', 'login');

            fetch('auth.php', { // Asegúrate de que la ruta sea correcta
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert(data); // Mostrar mensaje de éxito o error
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});


