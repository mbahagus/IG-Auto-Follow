/**
 * Auto Follow Akun Instagram (Bahasa Indonesia)
 * Untuk Bahasa Inggris Ganti Ikuti Menjadi Follow
 * https://www.github.com/mbahagus/IG-Auto-Follow
 */
 
setInterval(function () {
    $disabled = false;
    if (!$disabled) {
        var area = document.getElementsByClassName("sqdOP  L3NKy   y3zKF     ");
        for (var i = 0; i < area.length; i++) {
            if (area[i].innerHTML.includes("Ikuti")) {
                area[i].click();
                break;
            }
        }
    }
}, 1000);
