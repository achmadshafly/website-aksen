// ============================================================
//  Akademika Semesta Nusantara — contact.js
//  Contact form validation & submission
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm')
  if (!form) return

  const submitBtn  = document.getElementById('submitBtn')
  const btnText    = submitBtn?.querySelector('.btn-text')
  const btnLoading = submitBtn?.querySelector('.btn-loading')
  const formSuccess = document.getElementById('formSuccess')

  // ── Field references ──
  const fields = {
    nama:      { el: document.getElementById('nama'),      err: document.getElementById('namaError') },
    email:     { el: document.getElementById('email'),     err: document.getElementById('emailError') },
    keperluan: { el: document.getElementById('keperluan'), err: document.getElementById('keperluanError') },
    pesan:     { el: document.getElementById('pesan'),     err: document.getElementById('pesanError') }
  }

  // ── Helpers ──
  function showError(key, msg) {
    const { el, err } = fields[key]
    el.classList.add('error')
    if (err) err.textContent = msg
  }

  function clearError(key) {
    const { el, err } = fields[key]
    el.classList.remove('error')
    if (err) err.textContent = ''
  }

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  }

  function validateAll() {
    let valid = true

    // Nama
    clearError('nama')
    if (!fields.nama.el.value.trim()) {
      showError('nama', 'Nama lengkap wajib diisi.')
      valid = false
    }

    // Email
    clearError('email')
    if (!fields.email.el.value.trim()) {
      showError('email', 'Email wajib diisi.')
      valid = false
    } else if (!isValidEmail(fields.email.el.value)) {
      showError('email', 'Format email tidak valid.')
      valid = false
    }

    // Keperluan
    clearError('keperluan')
    if (!fields.keperluan.el.value) {
      showError('keperluan', 'Silakan pilih keperluan.')
      valid = false
    }

    // Pesan
    clearError('pesan')
    if (!fields.pesan.el.value.trim()) {
      showError('pesan', 'Pesan wajib diisi.')
      valid = false
    } else if (fields.pesan.el.value.trim().length < 10) {
      showError('pesan', 'Pesan minimal 10 karakter.')
      valid = false
    }

    return valid
  }

  // ── Real-time feedback ──
  Object.keys(fields).forEach(key => {
    const { el } = fields[key]
    if (!el) return

    el.addEventListener('blur', () => {
      // Re-validate single field
      if (el.hasAttribute('required') && !el.value.trim()) {
        showError(key, el.tagName === 'SELECT' ? 'Silakan pilih salah satu.' : 'Wajib diisi.')
      } else {
        clearError(key)
      }
    })

    el.addEventListener('input', () => {
      if (el.classList.contains('error')) clearError(key)
    })
  })

  // ── Submit ──
  form.addEventListener('submit', async e => {
    e.preventDefault()

    if (!validateAll()) {
      // Focus first invalid field
      const firstErr = Object.values(fields).find(f => f.el.classList.contains('error'))
      if (firstErr) firstErr.el.focus()
      return
    }

    // Show loading state
    submitBtn.disabled = true
    if (btnText)    btnText.hidden    = true
    if (btnLoading) btnLoading.hidden = false

    // Simulate API call (replace with real endpoint, e.g. Formspree or Netlify Forms)
    await new Promise(resolve => setTimeout(resolve, 1600))

    // Show success
    submitBtn.disabled = false
    if (btnText)    btnText.hidden    = false
    if (btnLoading) btnLoading.hidden = true

    if (formSuccess) {
      formSuccess.hidden = false
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }

    form.reset()

    // Auto-hide success after 6 s
    setTimeout(() => {
      if (formSuccess) formSuccess.hidden = true
    }, 6000)
  })
})

