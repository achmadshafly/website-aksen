// ============================================================
//  Akademika Semesta Nusantara — home.js
//  Hero carousel with autoplay, interactive controls
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Hero Carousel ──
  const carousel = document.getElementById('heroCarousel')
  if (!carousel) return

  const slides = carousel.querySelectorAll('.hero-carousel__slide')
  const dots = carousel.querySelectorAll('.hero-carousel__dot')
  const prevBtn = carousel.querySelector('[data-carousel-prev]')
  const nextBtn = carousel.querySelector('[data-carousel-next]')

  let currentSlide = 0
  let autoplayTimer = null
  const AUTOPLAY_DELAY = 5000

  function goToSlide(index) {
    // Remove active/prev from all
    slides.forEach(slide => {
      slide.classList.remove('active', 'prev')
    })
    dots.forEach(dot => dot.classList.remove('active'))

    // Mark previous slide
    slides[currentSlide].classList.add('prev')

    // Update index
    currentSlide = ((index % slides.length) + slides.length) % slides.length

    // Activate new slide
    slides[currentSlide].classList.add('active')
    dots[currentSlide].classList.add('active')
  }

  function nextSlide() {
    goToSlide(currentSlide + 1)
  }

  function prevSlide() {
    goToSlide(currentSlide - 1)
  }

  function startAutoplay() {
    stopAutoplay()
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_DELAY)
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer)
      autoplayTimer = null
    }
  }

  // Controls
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide()
      startAutoplay() // Reset timer on manual interaction
    })
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide()
      startAutoplay()
    })
  }

  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-dot'), 10)
      goToSlide(index)
      startAutoplay()
    })
  })

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAutoplay)
  carousel.addEventListener('mouseleave', startAutoplay)

  // Keyboard navigation
  carousel.setAttribute('tabindex', '0')
  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      nextSlide()
      startAutoplay()
    } else if (e.key === 'ArrowLeft') {
      prevSlide()
      startAutoplay()
    }
  })

  // Touch swipe support
  let touchStartX = 0
  let touchEndX = 0

  carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX
    stopAutoplay()
  }, { passive: true })

  carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX
    const diff = touchStartX - touchEndX
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide()
      else prevSlide()
    }
    startAutoplay()
  }, { passive: true })

  // Start autoplay
  startAutoplay()

  // ── Parallax on Hero Particles ──
  const hero = document.querySelector('.hero')
  if (hero) {
    const particles = hero.querySelectorAll('.hero__particle')
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      particles.forEach((p, i) => {
        const speed = (i + 1) * 3
        p.style.transform = `translate(${x * speed}px, ${y * speed}px)`
      })
    }, { passive: true })
  }

})
