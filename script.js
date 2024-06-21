import khodams from "./khodams.js";

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let birthdate = document.getElementById("birthdate").value;
  let khodamResult = cekKhodam(name, birthdate);
  return khodamResult;
});

function cekKhodam(name, birthdate) {
  let nameVal = name;
  let dateVal = birthdate;
  const container = document.getElementById("hasil");
  const randomIndex = Math.floor(Math.random() * khodams.length);
  const khodam = khodams[randomIndex];

  container.innerHTML = `
        <p class="text-xl ">Nama Anda adalah : </p>
        <p class="text-xl font-bold">${nameVal}</p>
        <p class="text-xl ">Tanggal lahir anda adalah :</p>
        <p class="text-xl font-bold">${dateVal}</p>
        <p class="text-xl ">Khodam Anda adalah :</p>
        <p class="text-xl font-bold mb-3">${khodam.nama_khodam}</p>
        <img class="max-w-[50%]" src="assets/img/${khodam.gambar_khodam}" alt="${khodam.gambar_khodam}">
    `;
}
