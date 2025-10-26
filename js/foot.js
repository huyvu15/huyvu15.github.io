var app = document.getElementById('footer');
if (app) {
    app.removeAttribute('id');
}

document.addEventListener('DOMContentLoaded', function() {
    var copyright = document.querySelector('.copyright');
    if (copyright) {
        copyright.innerHTML = '©2025 <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer"></i> By GluTis';
    }
    
    // Gọi hàm show_date_time nếu tồn tại
    if (typeof show_date_time === 'function') {
        show_date_time();
    }
});

