// ================================
// فتح الدعوة
// ================================

function openInvitation() {
    const welcomeScreen = document.getElementById("welcomeScreen");
    const invitation = document.getElementById("invitation");

    welcomeScreen.classList.add("hide");
    invitation.classList.add("show");

    // نبدأ العد التنازلي
    updateCountdown();
}


// ================================
// العد التنازلي
// موعد الزفاف:
// الاثنين 12/10/2026
// الساعة 5:00 مساءً
// ================================

const weddingDate = new Date("2026-10-12T17:00:00");


function updateCountdown() {

    const now = new Date();

    const difference = weddingDate - now;


    // إذا انتهى الوقت
    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    // حساب الأيام
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    // حساب الساعات
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    // حساب الدقائق
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    // حساب الثواني
    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // عرض النتائج
    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// تحديث العد كل ثانية
setInterval(updateCountdown, 1000);