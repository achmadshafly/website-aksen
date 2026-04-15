// ============================================================
//  Akademika Semesta Nusantara — program.js
//  Program filtering with smooth transitions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.program-tab')
  const cards = document.querySelectorAll('.program-card')

  if (!tabs.length || !cards.length) return

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter')

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'))
      tab.classList.add('active')

      // Filter cards
      cards.forEach(card => {
        const category = card.getAttribute('data-category')
        const shouldShow = filter === 'all' || category === filter || card.getAttribute('data-category').includes(filter)

        if (shouldShow) {
          card.style.display = ''
          card.style.opacity = '0'
          card.style.transform = 'translateY(20px)'
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
            card.style.opacity = '1'
            card.style.transform = 'translateY(0)'
          })
        } else {
          card.style.opacity = '0'
          card.style.transform = 'translateY(10px)'
          setTimeout(() => {
            card.style.display = 'none'
          }, 300)
        }
      })
    })
  })

})
