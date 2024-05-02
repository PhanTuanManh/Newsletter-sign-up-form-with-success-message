document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const errorSpan = document.getElementById("error");
    const cardSection = document.getElementById("card");
    const thankSection = document.getElementById("thank");
    const subscribeButton = document.getElementById("subscribe");
    const dismissButton = document.getElementById("dismiss");

    subscribeButton.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit

        // Kiểm tra định dạng email
        if (!isValidEmail(emailInput.value)) {
            errorSpan.classList.remove("hidden"); // Hiển thị thông báo lỗi
            emailInput.classList.add("error-input"); // Áp dụng lớp cho input
        } else {
            errorSpan.classList.add("hidden"); // Ẩn thông báo lỗi nếu email hợp lệ
            emailInput.classList.remove("error-input"); // Loại bỏ lớp lỗi nếu email hợp lệ

            // Ẩn phần card và hiện phần thank
            cardSection.classList.add("hidden");
            thankSection.classList.remove("hidden");
        }
    });

    dismissButton.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit

        // Ẩn phần thank và hiện phần card
        thankSection.classList.add("hidden");
        cardSection.classList.remove("hidden");
    });

    // Hàm kiểm tra định dạng email
    function isValidEmail(email) {
        // Sử dụng biểu thức chính quy để kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
