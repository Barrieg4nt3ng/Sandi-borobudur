
// - link video tutorial: https://youtu.be/8YoTHyUyZJs?si=UJ4PITEoapBdntHC - //
// - untuk supaya fitur password stregth nya dapat berjalan (saat password semakin panjang, ngeblurnya akan hilang) - //
const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input',(e)=>{
const input=e.target.value;
const length=input.length;
const blurValue = 20 - length * 2
background.style.filter=`blur(${blurValue}px)`;





})
// - untuk menampilkan pop up pembuka yang berisi gambar dan kata kata- //
Swal.fire({
  imageUrl: "https://lh3.googleusercontent.com/d/1W1kdo0_aNvP4HWHkPOP9OglhS5ZdKnqJ=w1000",
  imageAlt: "muka barrie",
  imageWidth: 300,
  imageHeight: 258,
  title: "Barrie Tjie",
  position: "center",
  html: `
   <h1 style="font-size: 24px; font-weight: bold; font-family: Italic ;"><i><b>Homo Sine Amore Vivere Nequit</b></i></h1>

   <h2 style="font-size: 18px;font-family: Italic; "><i>"Seorang Pria Tanpa Cinta Tidak Bisa Hidup"</i></h2>

    <h3 style="font-size: 18px; font-weight: bold; font-family: Arial">Sir Nuel ganteng banget sampe bikin aku muntah 🤮</h3>
    <h4 style="font-size: 15px; font-family: Arial"> ICT udah gacor kok Sir</h4>
  `,
  confirmButtonText: "Tutup",
  showCloseButton: true,


});
