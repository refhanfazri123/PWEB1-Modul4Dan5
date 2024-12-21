document.querySelector('.input').addEventListener('click', function(event) {
    const idKamar = document.querySelector('input[name="idKamar"]').value.trim();
    const nama = document.querySelector('input[name="nama"]').value.trim();
    const jenisKamar = document.getElementById('jenisKamar').value;
    const fasilitas = document.querySelectorAll('input[name="fasilitas"]:checked').length;
    const hargaWeekend = document.querySelectorAll('select[name="hargaWeekend"]')[0].value;
    const hargaWeekday = document.querySelectorAll('select[name="hargaWeekend"]')[1].value;
    const kuota = [...document.querySelectorAll('input[name="kuota"]:checked')]
        .filter(k => !k.nextSibling.nodeValue.includes("Tidak Tersedia")).length;
    const deskripsi = document.getElementById('deskripsi').value.trim();

    let errors = [];
    if (!idKamar || isNaN(idKamar)) errors.push("Id Kamar harus diisi dengan angka.");
    if (!nama) errors.push("Nama Pemesan harus diisi.");
    if (jenisKamar === "pilih") errors.push("Jenis Kamar harus dipilih.");
    if (fasilitas === 0) errors.push("Minimal satu fasilitas harus dipilih.");
    if (hargaWeekend === "pilih") errors.push("Harga Weekend harus dipilih.");
    if (hargaWeekday === "pilih") errors.push("Harga Weekday harus dipilih.");
    if (kuota === 0) errors.push("Kuota ruangan yang tersedia harus dipilih.");
    if (!deskripsi) errors.push("Deskripsi harus diisi.");

    if (errors.length) {
        event.preventDefault();
        alert(errors.join("\n"));
    } else {
        alert("Form berhasil disubmit!");
    }
});

document.querySelector('.batal').addEventListener('click', event => {
    event.preventDefault();
    if (confirm("Apakah Anda yakin ingin membatalkan pengisian data?")) document.querySelector('form').reset();
});
