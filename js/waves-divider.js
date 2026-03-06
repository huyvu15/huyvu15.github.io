;(function () {
  function buildWavesDivider() {
    const wrap = document.createElement('div')
    wrap.className = 'waves-divider'
    wrap.innerHTML = `
      <div class="wave-container" aria-hidden="true">
        <svg class="wave wave-1" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path class="wave-path" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="currentColor" fill-opacity="0.2"></path>
        </svg>

        <svg class="wave wave-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path class="wave-path" d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,234.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="currentColor" fill-opacity="0.3"></path>
        </svg>

        <svg class="wave wave-3" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path class="wave-path" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,165.3C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="currentColor" fill-opacity="0.5"></path>
        </svg>

        <svg class="wave wave-base" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path class="wave-path" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="currentColor"></path>
        </svg>
      </div>

      <div class="wave-dots" aria-hidden="true">
        <span class="wave-dot wave-dot-1"></span>
        <span class="wave-dot wave-dot-2"></span>
        <span class="wave-dot wave-dot-3"></span>
        <span class="wave-dot wave-dot-4"></span>
        <span class="wave-dot wave-dot-5"></span>
      </div>
    `
    return wrap
  }

  function mountToHeader() {
    const header = document.getElementById('page-header')
    if (!header) return
    if (!header.classList.contains('full_page')) return // chỉ trang chủ
    if (header.querySelector('.waves-divider')) return

    header.appendChild(buildWavesDivider())
  }

  function init() {
    mountToHeader()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }

  // PJAX (Butterfly)
  document.addEventListener('pjax:complete', init)
})()

