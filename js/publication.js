// ============================================================
//  Akademika Semesta Nusantara — publication.js
//  Publication filtering
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  const filters = document.querySelectorAll('.pub-filter')
  const items = document.querySelectorAll('.pub-item')

  if (!filters.length || !items.length) return

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const type = filter.getAttribute('data-filter')

      // Update active filter
      filters.forEach(f => f.classList.remove('active'))
      filter.classList.add('active')

      // Filter items with animation
      let visibleIndex = 0
      items.forEach(item => {
        const category = item.getAttribute('data-category')
        const shouldShow = type === 'all' || category === type

        if (shouldShow) {
          item.style.display = ''
          item.style.opacity = '0'
          item.style.transform = 'translateX(-10px)'
          const delay = visibleIndex * 80
          setTimeout(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
            item.style.opacity = '1'
            item.style.transform = 'translateX(0)'
          }, delay)
          visibleIndex++
        } else {
          item.style.opacity = '0'
          item.style.transform = 'translateX(-10px)'
          setTimeout(() => {
            item.style.display = 'none'
          }, 250)
        }
      })
    })
  })

})
