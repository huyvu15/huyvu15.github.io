function renderGlutisFooter() {
  var footer = document.getElementById('footer') || document.querySelector('footer');

  if (!footer) return;

  var existingMessage = document.querySelector('.glutis-message-section');
  if (existingMessage) existingMessage.remove();

  var messageSection = document.createElement('section');
  messageSection.className = 'glutis-message-section';
  messageSection.setAttribute('aria-label', 'Dang ky nhan ban tin');
  messageSection.innerHTML = [
    '<div class="glutis-message-box">',
      '<div class="glutis-message-copy">',
        '<h2>&#272;&#259;ng k&yacute; nh&#7853;n b&#7843;n tin</h2>',
        '<p>Nh&#7853;n nh&#7919;ng b&agrave;i vi&#7871;t m&#7899;i nh&#7845;t v&agrave; n&#7897;i dung &#273;&#7863;c bi&#7879;t g&#7917;i th&#7859;ng &#273;&#7871;n email c&#7911;a b&#7841;n.</p>',
      '</div>',
      '<form class="glutis-message-form" action="/Glutis_Subscribe/" method="get">',
        '<input type="email" name="email" placeholder="Nh&#7853;p email c&#7911;a b&#7841;n..." aria-label="Email" required>',
        '<button type="submit">&#272;&#259;ng k&yacute; ngay <i class="fas fa-paper-plane"></i></button>',
      '</form>',
    '</div>'
  ].join('');
  footer.parentNode.insertBefore(messageSection, footer);

  footer.id = 'footer';
  footer.innerHTML = [
    '<div class="glutis-footer-inner">',
      '<div class="glutis-footer-main">',
        '<div class="glutis-footer-brand">',
          '<div class="glutis-footer-logo-row">',
            '<img src="/img/about/logo.png" alt="Blog&#39;s GluTis">',
            '<h3>Blog&#39;s GluTis</h3>',
          '</div>',
          '<p>Chia s&#7867; ki&#7871;n th&#7913;c, kinh nghi&#7879;m v&agrave; nh&#7919;ng &#273;i&#7873;u th&uacute; v&#7883; tr&ecirc;n h&agrave;nh tr&igrave;nh ph&aacute;t tri&#7875;n b&#7843;n th&acirc;n.</p>',
          '<div class="glutis-footer-socials" aria-label="Ket noi">',
            '<a href="https://www.youtube.com/@GluTis15" target="_blank" rel="external nofollow noopener noreferrer" title="YouTube"><i class="fab fa-youtube"></i></a>',
            '<a href="https://github.com/huyvu15/" target="_blank" rel="external nofollow noopener noreferrer" title="GitHub"><i class="fab fa-github"></i></a>',
            '<a href="https://www.linkedin.com/in/huyvu15/" target="_blank" rel="external nofollow noopener noreferrer" title="LinkedIn"><i class="fab fa-linkedin"></i></a>',
            '<a href="mailto:huyv80313@gmail.com" target="_blank" rel="noopener" title="Email"><i class="fas fa-envelope"></i></a>',
          '</div>',
        '</div>',
        '<nav class="glutis-footer-col" aria-label="Dieu huong">',
          '<h4>&#272;i&#7873;u h&#432;&#7899;ng</h4>',
          '<a href="/">Trang ch&#7911;</a>',
          '<a href="/archives/">B&agrave;i vi&#7871;t</a>',
          '<a href="/tags/">Ch&#7911; &#273;&#7873;</a>',
          '<a href="/books/">Kho s&aacute;ch</a>',
          '<a href="/categories/">D&#7921; &aacute;n</a>',
        '</nav>',
        '<nav class="glutis-footer-col" aria-label="Thong tin">',
          '<h4>Th&ocirc;ng tin</h4>',
          '<a href="/about/">Gi&#7899;i thi&#7879;u</a>',
          '<a href="/link/">Li&ecirc;n h&#7879;</a>',
          '<a href="/Glutis_Subscribe/">&#272;i&#7873;u kho&#7843;n</a>',
          '<a href="/Glutis_Subscribe/">Ch&iacute;nh s&aacute;ch b&#7843;o m&#7853;t</a>',
        '</nav>',
        '<nav class="glutis-footer-col" aria-label="Ket noi">',
          '<h4>K&#7871;t n&#7889;i</h4>',
          '<a href="https://www.youtube.com/@GluTis15" target="_blank" rel="external nofollow noopener noreferrer">YouTube</a>',
          '<a href="https://github.com/huyvu15/" target="_blank" rel="external nofollow noopener noreferrer">GitHub</a>',
          '<a href="mailto:huyv80313@gmail.com" target="_blank" rel="noopener">Email</a>',
        '</nav>',
      '</div>',
      '<div class="glutis-footer-bottom">',
        '<span>&copy; 2026 Blog&#39;s GluTis. All rights reserved.</span>',
      '</div>',
    '</div>'
  ].join('');
}

document.addEventListener('DOMContentLoaded', renderGlutisFooter);
document.addEventListener('pjax:complete', renderGlutisFooter);

// Homepage-only presentation; safe to run again after PJAX navigation.
function refineHomeLayout() {
  const posts = document.getElementById('recent-posts');
  document.querySelectorAll('.home-sidebar-art').forEach(el => el.remove());
  if (!posts) return;
  posts.querySelectorAll('.home-welcome').forEach(el => el.remove());
  posts.querySelectorAll('.recent-post-info').forEach(info => {
    if (info.querySelector('.home-read-more')) return;
    const title = info.querySelector('.article-title');
    if (!title) return;
    const more = document.createElement('a');
    more.className = 'home-read-more';
    more.href = title.href;
    more.textContent = 'Đọc tiếp  →';
    more.setAttribute('aria-label', 'Đọc tiếp: ' + title.textContent.trim());
    info.append(more);
  });
  const nav = document.getElementById('nav');
  if (nav) {
    const art = document.createElement('div');
    art.className = 'home-sidebar-art';
    art.textContent = 'Mỗi ngày, một phiên bản tốt hơn của chính mình.';
    nav.append(art);
  }
}
document.addEventListener('DOMContentLoaded', refineHomeLayout);
document.addEventListener('pjax:complete', refineHomeLayout);
if (document.readyState !== 'loading') refineHomeLayout();
