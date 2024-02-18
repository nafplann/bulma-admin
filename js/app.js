const getAll = (selector) => {
    return document.querySelectorAll(selector);
};

window.onload = function() {
    // Check for click events on the navbar burger icon
    var $navbarBurger = getAll('.navbar-burger');
    var $touchMenu = document.getElementById('touchMenu');

    if ($navbarBurger.length > 0) {
        $navbarBurger.forEach(function ($el) {
            $el.addEventListener("click", function (event) {
                event.stopPropagation();
                $el.classList.toggle("is-active");
                $touchMenu.classList.toggle("is-active");
            });
        });
    }

    // Dropdowns
    var $dropdowns = getAll(".dropdown:not(.is-hoverable)");

    if ($dropdowns.length > 0) {
        $dropdowns.forEach(function ($el) {
            $el.addEventListener("click", function (event) {
                event.stopPropagation();
                $el.classList.toggle("is-active");
            });
        });

        document.addEventListener("click", function (event) {
            closeDropdowns();
        });
    }

    function closeDropdowns() {
        $dropdowns.forEach(function ($el) {
            $el.classList.remove("is-active");
        });
    }

    const logout = getAll('.app-logout');

    logout.forEach(function ($el) {
        $el.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                title: "Are you sure?",
                text: "Your session will be ended!",
                icon: "warning",
                showCancelButton: true,
                // confirmButtonColor: "#3085d6",
                // cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log me out!"
            }).then((result) => {

            });
        });
    });

    const sidebarMenus = getAll('#sidebar ul li a');

    sidebarMenus.forEach(function($el) {
        $el.addEventListener('click', function() {
            const nextSibling = $el.nextElementSibling;

            if (!nextSibling) return;

            if (nextSibling.classList.contains('submenu')) {
                nextSibling.classList.toggle('is-block');
            }
        })
    });
}
