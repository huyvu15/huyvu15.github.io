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
