// Smooth scroll to sections
function scrollToSection(sectionId, event) {
    if (event) event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
    });
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

const radios = document.querySelectorAll('input[name="carousel-control"]');
const labels = document.querySelectorAll('.carousel-controls label');
let currentIndex = 0;

function updateActiveLabel() {
    // Reset semua label ke warna default
    labels.forEach(label => label.style.backgroundColor = '#ccc');

    // Highlight label yang sesuai dengan radio aktif
    labels[currentIndex].style.backgroundColor = '#007bff';
}

function autoSwipe() {
    // Uncheck radio saat ini
    radios[currentIndex].checked = false;

    // Pindah ke radio berikutnya
    currentIndex = (currentIndex + 1) % radios.length;

    // Check radio berikutnya
    radios[currentIndex].checked = true;

    // Update gaya label
    updateActiveLabel();
}

// Jalankan update pertama kali
updateActiveLabel();

// Jalankan autoSwipe setiap 5 detik
setInterval(autoSwipe, 3000);


function handleServiceClick(serviceType, event) {
    // Scroll ke bagian booking
    scrollToSection('booking', event);

    // Cari elemen dropdown service
    const serviceSelect = document.querySelector('select[name="service"]');
    
    setTimeout(() => {
        serviceSelect.value = serviceType;
    }, 100);
}



document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.name.value;
    const service = this.service.value;
    const date = this.date.value;
    const message = this.message.value;

    const whatsappURL = `https://wa.me/+6288805385353?text=Name:%20${encodeURIComponent(
        name
    )}%0AService:%20${encodeURIComponent(service)}%0ADate:%20${encodeURIComponent(
        date
    )}%0AMessage:%20${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});
