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
let index = 0;
function slideProducts() {
    const slider = document.getElementById("productSlider");
    index = (index + 1) % 5;
    slider.style.transform = `translateX(${-index * 100}%)`;
}
setInterval(slideProducts, 3000);

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

