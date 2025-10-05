document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // منع الإرسال الفعلي

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        let messages = [];

        // تحقق من اسم المستخدم
        if (username.length < 3) {
            isValid = false;
            messages.push("❌ اسم المستخدم يجب أن يكون 3 أحرف على الأقل.");
        }

        // تحقق من البريد الإلكتروني
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("❌ البريد الإلكتروني غير صالح.");
        }

        // تحقق من كلمة المرور
        if (password.length < 8) {
            isValid = false;
            messages.push("❌ كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل.");
        }

        // عرض النتيجة للمستخدم
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "✅ تم التسجيل بنجاح!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }
    });
});
