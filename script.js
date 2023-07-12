window.addEventListener('scroll', setScrollVar)
window.addEventListener('resize', setScrollVar)

function setScrollVar() {
  const htmlEl = document.documentElement
  const percentScreenHeightScrolled = htmlEl.scrollTop / htmlEl.clientHeight

  htmlEl.style.setProperty(
    '--scroll',
    Math.min(percentScreenHeightScrolled * 100, 100)
  )
}

setScrollVar()
