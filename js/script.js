const menuToggle = document.getElementById('menuToggle');
const offCanvasMenu = document.getElementById('offCanvasMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

// Mở menu
menuToggle.addEventListener('click', () => {
    offCanvasMenu.classList.add('active'); // Thêm lớp active để mở menu
    menuOverlay.classList.add('active'); // Hiển thị lớp phủ
    menuToggle.style.display = 'none'; // Ẩn nút mở
    closeMenu.style.display = 'block'; // Hiển thị nút đóng
});

// Đóng menu
closeMenu.addEventListener('click', () => {
	offCanvasMenu.classList.add('closing'); // Thêm lớp closing để chạy hiệu ứng đóng
    offCanvasMenu.classList.remove('active'); // Loại bỏ lớp active (hiển thị)

    // Đợi 0.5s (thời gian kết thúc transform) trước khi xóa lớp closing
    setTimeout(() => {
        offCanvasMenu.classList.remove('closing'); // Reset lớp closing
    }, 500); // Thời gian khớp với transition
	
    menuOverlay.classList.remove('active'); // Ẩn lớp phủ
    menuToggle.style.display = 'block'; // Hiển thị nút mở
    closeMenu.style.display = 'none'; // Ẩn nút đóng
});

// Intersection Observer để chuyển đổi màu nút menuToggle
const observerOptions = {
    root: null, // Quan sát toàn màn hình
    threshold: 0.5, // Kích hoạt khi 50% vùng được quan sát hiển thị
};

const observerCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Nếu vùng trắng xuất hiện, đổi màu nút menu thành đen
            menuToggle.classList.add('black');
        } else {
            // Nếu không, đổi lại thành màu trắng
            menuToggle.classList.remove('black');
        }
    });
};

// Quan sát phần tử với nền trắng
const whiteSections = document.querySelectorAll('#new, #thu-vien, #contact-us'); // Chọn các section có nền trắng ở đây
const observer = new IntersectionObserver(observerCallback, observerOptions);

whiteSections.forEach((section) => {
    observer.observe(section);
});