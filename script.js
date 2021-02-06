/**
 * Auto Follow Akun Instagram
 * source
 * https://www.github.com/mbahagus/IG-Auto-Follow
 */
 
setInterval(function () {
    $disabled = false;
    if (!$disabled) {
        var hearts = document.getElementsByClassName("sqdOP  L3NKy   y3zKF     ");
        for (var i = 0; i < hearts.length; i++) {
            if (hearts[i].innerHTML.includes("Ikuti")) {
                hearts[i].click();
                break;
            }
        }
    }
}, 1000);
