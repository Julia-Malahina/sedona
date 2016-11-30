;(function () {

    var link = document.querySelector(".btn-order");
    var popup = document.querySelector(".form-popup");
    var form = popup.querySelector("form");
    var arrivalDate = popup.querySelector("[name=date-in]");
    var dateDeparture = popup.querySelector("[name=date-out]");


    link.addEventListener("click", function(event) {
            event.preventDefault();

        var popup = document.querySelector(".form-popup");
        popup.classList.add("form-popup-show");
    });

    popup.addEventListener("submit", function (event) {
        if(!arrivalDate.value || !dateDeparture.value) {
            event.preventDefault();
            return alert("Введите дату заезда и дату выезда!");
        }

    });

    window.addEventListener("keydown", function (event) {
        if (event.keyCode ===27) {
            if ( popup.classList.contains("form-popup-show")) {
                popup.classList.remove("form-popup-show");
            }
        }
    })

}());
