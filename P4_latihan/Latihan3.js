// Membuat fungsi validasi form
function validasiForm() {

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let errorDiv = document.getElementById("error-message");

    let errorMessage = "";

    if (nama === "") {
        errorMessage += "Nama tidak boleh kosong. ";
    }

    if (email.indexOf("@") === -1) {
        errorMessage += "Email harus mengandung @. ";
    }

    if (errorMessage !== "") {
        errorDiv.textContent = errorMessage;
        errorDiv.style.color = "red";

    } else {
        errorDiv.textContent = "Form valid! Data berhasil dikirim.";
        errorDiv.style.color = "green";
    }
}





