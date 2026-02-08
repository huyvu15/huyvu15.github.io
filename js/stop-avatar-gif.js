// Script để dừng GIF avatar sau 5 giây
(function() {
  'use strict';
  
  // Hàm để dừng GIF bằng cách thay thế bằng ảnh tĩnh
  function stopAvatarGif() {
    console.log('🔍 Đang tìm kiếm avatar GIF...');
    
    // Tìm avatar bằng nhiều cách khác nhau
    let avatarImages = [];
    
    // Cách 1: Tìm theo src chứa avatar1.gif
    const byGifSrc = document.querySelectorAll('img[src*="avatar1.gif"]');
    console.log('Tìm theo src avatar1.gif:', byGifSrc.length);
    
    // Cách 2: Tìm theo src chứa .gif trong thư mục about
    const byAboutGif = document.querySelectorAll('img[src*="/img/about/"][src*=".gif"]');
    console.log('Tìm theo /img/about/*.gif:', byAboutGif.length);
    
    // Cách 3: Tìm trong card-info (sidebar avatar)
    const cardInfoAvatar = document.querySelectorAll('.card-info img[src*=".gif"]');
    console.log('Tìm trong .card-info:', cardInfoAvatar.length);
    
    // Cách 4: Tìm theo class avatar
    const byAvatarClass = document.querySelectorAll('img.avatar[src*=".gif"]');
    console.log('Tìm theo class avatar:', byAvatarClass.length);
    
    // Cách 5: Tìm tất cả img có src chứa avatar và .gif
    const allAvatarGifs = document.querySelectorAll('img[src*="avatar"][src*=".gif"]');
    console.log('Tìm tất cả avatar GIF:', allAvatarGifs.length);
    
    // Gộp tất cả kết quả (loại bỏ duplicate)
    const allImages = new Set([...byGifSrc, ...byAboutGif, ...cardInfoAvatar, ...byAvatarClass, ...allAvatarGifs]);
    avatarImages = Array.from(allImages);
    
    console.log('📊 Tổng cộng tìm thấy ' + avatarImages.length + ' ảnh avatar GIF');
    
    if (avatarImages.length > 0) {
      avatarImages.forEach(function(img, index) {
        console.log('🖼️ Ảnh ' + (index + 1) + ':', img.src);
        
        // Đảm bảo ảnh đã load xong
        if (!img.complete) {
          img.addEventListener('load', function() {
            freezeGif(img);
          });
        } else {
          freezeGif(img);
        }
      });
    } else {
      console.warn('⚠️ Không tìm thấy avatar GIF nào. Sẽ thử lại sau 1 giây...');
      // Retry sau 1 giây (có thể DOM chưa load xong)
      setTimeout(stopAvatarGif, 1000);
    }
  }
  
  // Hàm freeze GIF
  function freezeGif(img) {
    // Tạo một canvas để capture frame hiện tại của GIF
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Đợi 5 giây rồi "đóng băng" GIF
    setTimeout(function() {
      try {
        // Đặt kích thước canvas bằng kích thước ảnh
        canvas.width = img.naturalWidth || img.width || 150;
        canvas.height = img.naturalHeight || img.height || 150;
        
        console.log('📐 Canvas size:', canvas.width, 'x', canvas.height);
        
        // Vẽ frame hiện tại của GIF lên canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Chuyển canvas thành data URL và thay thế src của img
        const frozenImage = canvas.toDataURL('image/png');
        img.src = frozenImage;
        
        // Thêm class để đánh dấu đã dừng
        img.classList.add('gif-frozen');
        
        console.log('✅ Avatar GIF đã dừng sau 5 giây');
      } catch (e) {
        console.error('❌ Lỗi khi freeze GIF:', e);
      }
    }, 5000); // 5000ms = 5 giây
  }
  
  // Retry counter để tránh infinite loop
  let retryCount = 0;
  const maxRetries = 5;
  
  function stopAvatarGifWithRetry() {
    if (retryCount < maxRetries) {
      retryCount++;
      stopAvatarGif();
    }
  }
  
  // Chạy khi DOM đã load xong
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', stopAvatarGifWithRetry);
  } else {
    stopAvatarGifWithRetry();
  }
  
  // Cũng chạy lại sau khi PJAX load (cho Butterfly theme)
  document.addEventListener('pjax:complete', function() {
    retryCount = 0; // Reset retry counter
    stopAvatarGifWithRetry();
  });
})();
