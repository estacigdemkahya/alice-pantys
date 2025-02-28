document.addEventListener("DOMContentLoaded", function () {
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");
    const sidebar = document.getElementById("sidebar");

    openMenu.addEventListener("click", function () {
        sidebar.style.right = "0";
    });

    closeMenu.addEventListener("click", function () {
        sidebar.style.right = "-250px";
    });
});

// Ürün Slider
document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let index = 0;
    const totalSlides = 5; // Toplam 5 resim olacak
    const slidesToShow = 5; // Aynı anda 5 resim gösterilecek

    function updateSlider() {
        const translateX = -(index * (100 / slidesToShow)); // Kaydırma oranı
        sliderWrapper.style.transform = `translateX(${translateX}%)`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < totalSlides - 1) {
            index++;
        } else {
            index = 0; // Başlangıca dön
        }
        updateSlider();
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = totalSlides - 1; // En sona git
        }
        updateSlider();
    });

    // Otomatik kaydırma
    setInterval(() => {
        nextBtn.click();
    }, 3000); // 3 saniyede bir kaydır
});




// Moda Sözleri
document.addEventListener("DOMContentLoaded", function () {
    // Moda sözlerinin değişmesi için fonksiyon
    const quotes = [
        "Moda geçer, stil kalır. - Coco Chanel",
        "Şıklık, sadeliktedir. - Leonardo da Vinci",
        "İyi giyinmek, iyi yaşamanın bir parçasıdır. - Oscar Wilde",
        "Stil, kim olduğunuzu anlatan sessiz bir dildir. - Rachel Zoe",
        "Giyinme şekliniz karakterinizin bir yansımasıdır. - Tom Ford",
        "Bir kadının iç giyimi onun ruh halini belirler. - Christian Dior",
        "Moda risk almaktır. - Anna Wintour",
        "Güzel kıyafetler güzel anılar yaratır. - Ralph Lauren",
        "Moda sadece kıyafet değildir, bir yaşam tarzıdır. - Yves Saint Laurent"
    ];

    let quoteIndex = 0;
    const quoteContainer = document.getElementById("quoteContainer");

    function changeQuote() {
        // Önceki söz kayboluyor, sonra yeni söz ekleniyor
        quoteContainer.classList.remove("active");
        setTimeout(() => {
            quoteContainer.innerText = quotes[quoteIndex];
            quoteContainer.classList.add("active"); // Yeni söz görünür hale gelir
            quoteIndex = (quoteIndex + 1) % quotes.length; // Yeni sözün sırası
        }, 500); // Bu 500ms gecikme, sözler arasında geçişi sağlar
    }
    
    setInterval(changeQuote, 4000); // Her 4 saniyede bir söz değişir
    changeQuote(); // İlk söz hemen başlasın
});



// Hakkımızda
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".about-content");
    aboutSection.style.opacity = 0;
    aboutSection.style.transform = "translateY(30px)";
    
    window.addEventListener("scroll", function() {
        const sectionPos = aboutSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        if (sectionPos < screenPos) {
            aboutSection.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            aboutSection.style.opacity = 1;
            aboutSection.style.transform = "translateY(0)";
        }
    });
});