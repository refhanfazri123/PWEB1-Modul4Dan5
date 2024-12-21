document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    // Cek apakah input tidak kosong
    if (username === '' || password === '') {
        message.innerHTML = 'Username dan Password tidak boleh kosong';
        message.style.color = 'red';
        return;
    }

    // Validasi username dan password
    if (username === 'refhanfazri123' && password === 'fazri123') {
        message.innerHTML = 'Login berhasil!';
        message.style.color = 'green';
    } else {
        message.innerHTML = 'Username atau Password salah';
        message.style.color = 'red';
    }
};
