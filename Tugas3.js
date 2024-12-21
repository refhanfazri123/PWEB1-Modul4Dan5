document.getElementById("tipeKamar").addEventListener("change", function () {
    const roomPrices = { Standar: 300000, Deluxe: 500000, Family: 800000 };
    const selectedRoom = this.value;
    const price = roomPrices[selectedRoom] || 0;
    document.getElementById("harga").value = price.toLocaleString();
});

document.getElementById("simpanButton").addEventListener("click", function () {
    const namaPemesan = document.getElementById("namaPemesan").value;
    const nomorIdentitas = document.getElementById("nomorIdentitas").value;
    const tipeKamar = document.getElementById("tipeKamar").value;
    const harga = parseInt(document.getElementById("harga").value.replace(/,/g, ""), 10);
    const durasiMenginap = parseInt(document.getElementById("durasiMenginap").value, 10);
    const termasukBreakfast = document.getElementById("termasukBreakfast").checked;

    if (nomorIdentitas.length !== 16) {
        alert("Nomor Identitas harus 16 digit.");
        return;
    }

    let totalBayar = harga * durasiMenginap;

    // Diskon jika durasi > 3 hari
    if (durasiMenginap > 3) totalBayar *= 0.9;

    // Tambahan biaya breakfast
    if (termasukBreakfast) totalBayar += 80000;

    document.getElementById("totalBayar").value = totalBayar.toLocaleString();

    // Tampilkan resume pemesanan
    const resume = `
        <h3>Resume Pemesanan</h3>
        <p><strong>Nama:</strong> ${namaPemesan}</p>
        <p><strong>Nomor Identitas:</strong> ${nomorIdentitas}</p>
        <p><strong>Tipe Kamar:</strong> ${tipeKamar}</p>
        <p><strong>Durasi Menginap:</strong> ${durasiMenginap} hari</p>
        <p><strong>Termasuk Breakfast:</strong> ${termasukBreakfast ? "Ya" : "Tidak"}</p>
        <p><strong>Total Bayar:</strong> Rp ${totalBayar.toLocaleString()}</p>
    `;
    document.getElementById("resume").innerHTML = resume;
    document.getElementById("resume").style.display = "block";
});