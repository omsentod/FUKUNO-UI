// Fungsi untuk mendapatkan inisial dari nama
function getInitials(name) {
    const names = name.split(' '); // Pisahkan nama berdasarkan spasi
    const initials = names.map(n => n[0].toUpperCase()).join(''); // Ambil huruf pertama dan gabungkan
    return initials;
  }
  
  // Nama pengguna yang ingin diganti inisialnya
  const userName = "John Doe"; // Ganti dengan nama pengguna yang diinginkan
  const initials = getInitials(userName); // Dapatkan inisial
  
  // Ganti inisial di dalam div dengan id 'initials'
  document.getElementById('initials').textContent = initials;
  
  // Menambahkan event listener untuk klik pada ikon person dan inisial untuk toggle tampilan
  document.getElementById('profile').addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle class 'active' untuk mengganti antara ikon dan inisial
  });
  
  // Menonaktifkan klik pada ikon bell menggunakan JavaScript
  const bellIcon = document.getElementById('bell-icon');
  bellIcon.style.pointerEvents = 'none';  // Nonaktifkan klik pada ikon bell
  