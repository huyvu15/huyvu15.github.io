// function getIP(json) {
//     var ip = json.ip;
//     var br = document.createElement('br'); // 创建一个换行元素
//     var footerLink = document.createElement('a');
//     // footerLink.href = 'https://blog.w1ndys.top/'; // 这里可以设置链接的目标，例如："https://www.example.com"
//     // footerLink.innerHTML = '您的IP：' + ip + " 请规范网络行为";
//     var footerElement = document.querySelector('.footer_custom_text');
//     footerElement.appendChild(br); // 将换行元素添加到 .footer_custom_text 元素内
//     // footerElement.appendChild(footerLink);
// }

// var script = document.createElement('script');
// script.src = 'https://api.ipify.org?format=jsonp&callback=getIP';
// document.head.appendChild(script);

function getIP(json) {
    var ip = json.ip; // Get the user's IP address from the JSON response
    
    // Log IP to console for tracking (không hiển thị cho người dùng)
    console.log('Visitor IP:', ip);
    
    // Bạn có thể gửi IP này đến server/analytics service nếu cần
    // Ví dụ: sendToAnalytics(ip);
}

// Create a script element to fetch IP data from ipify API
var script = document.createElement('script');
script.src = 'https://api.ipify.org?format=jsonp&callback=getIP'; // API call with JSONP callback
document.head.appendChild(script); // Append the script to the document head
