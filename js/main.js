// ============================================================
//  Akademika Semesta Nusantara — main.js
//  Global scripts: loader, navigation, scroll reveal,
//  counter animation, magnetic cursor
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Page Loader ──
  const loader = document.getElementById('loader')
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 300)
    })
    // Fallback: hide loader after 3 seconds max
    setTimeout(() => loader.classList.add('hidden'), 3000)
  }

  // ── Navigation: Scroll Effect ──
  const nav = document.querySelector('[data-nav]')
  if (nav) {
    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
  }

  // ── Mobile Menu Toggle ──
  const menuToggle = document.querySelector('[data-menu-toggle]')
  const mobileMenu = document.querySelector('[data-mobile-menu]')

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open')
      menuToggle.classList.toggle('open', isOpen)
      menuToggle.setAttribute('aria-expanded', String(isOpen))
      document.body.style.overflow = isOpen ? 'hidden' : ''
    })

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open')
        menuToggle.classList.remove('open')
        menuToggle.setAttribute('aria-expanded', 'false')
        document.body.style.overflow = ''
      })
    })

    // Close on outside click
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open')
        menuToggle.classList.remove('open')
        menuToggle.setAttribute('aria-expanded', 'false')
        document.body.style.overflow = ''
      }
    })

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open')
        menuToggle.classList.remove('open')
        menuToggle.setAttribute('aria-expanded', 'false')
        document.body.style.overflow = ''
        menuToggle.focus()
      }
    })
  }

  // ── Scroll Reveal ──
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  )

  document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach(el => {
    revealObserver.observe(el)
  })

  // ── Counter Animation ──
  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          counterObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  document.querySelectorAll('[data-count]').forEach(el => {
    counterObserver.observe(el)
  })

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10)
    const duration = 2000
    const startTime = performance.now()
    const suffix = el.getAttribute('data-suffix') || '+'

    function update(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      el.textContent = current.toLocaleString() + (progress >= 1 ? suffix : '')

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  // ── Smooth Scroll for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href')
      if (targetId === '#') return
      const target = document.querySelector(targetId)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })

  // ── Magnetic Hover Effect on Buttons ──
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
    })
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)'
    })
  })

  // ── Parallax on Scroll ──
  const parallaxElements = document.querySelectorAll('[data-parallax]')
  if (parallaxElements.length) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.3
        const rect = el.getBoundingClientRect()
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          el.style.transform = `translateY(${scrollY * speed}px)`
        }
      })
    }, { passive: true })
  }

  // ── Current Year in Footer ──
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear()
  })

})
