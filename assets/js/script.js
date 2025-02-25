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
