setInterval(function () {
    var area = document.getElementsByClassName("sqdOP  L3NKy   y3zKF     ");
    for (var i = 0; i < area.length; i++) {
        if (area[i].innerHTML.includes("Ikuti")) {
            area[i].click();  
        }
    }
}, 1000);
