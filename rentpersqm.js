// Result Table
const rows = document.querySelectorAll('#table-compact-list tr')

if (rows) {
  rows.forEach(row => {
    const sizeColumn = row.querySelector('.ang_spalte_groesse')
    const rentEl = row.querySelector('.ang_spalte_miete b')
    const sizeEl = row.querySelector('.ang_spalte_groesse span')
    const rent = rentEl && rentEl.innerText.match(/\d+/g)
    const size = sizeEl && sizeEl.innerText.match(/\d+/g)
    const calc = rent && size && (rent / size).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || null
    const clone = sizeColumn && sizeColumn.cloneNode(true)

    if (clone && clone.tagName === 'TH') {
      const aTag = clone.querySelector('a')

      if (aTag) {
        aTag.innerText = 'pro m²'
        aTag.setAttribute('href', '#')
        aTag.style.setProperty('white-space', 'nowrap')
        aTag.addEventListener('click', (e) => e.preventDefault())
      }
    } else if (clone && clone.tagName === 'TD') {
      const spanTag = clone.querySelector('span')

      if (spanTag) {
        spanTag.innerText = `${calc}€`
      }
    }

    if (sizeColumn && clone) {
      sizeColumn.parentNode.insertBefore(clone, sizeColumn.nextElementSibling)
    }
  })
}

// Detail View
const table = document.querySelector('#main_column > .row')

if (table) {
  const sizeEl = table.querySelector('.col-xs-6:nth-child(1)')
  const size = sizeEl && sizeEl.querySelector('.headline').innerText.match(/\d+/g)
  const rentEl = table.querySelector('.col-xs-6:nth-child(2)')
  const rent = rentEl && rentEl.querySelector('.headline').innerText.match(/\d+/g)

  if (rent && size) {
    sizeEl.classList.remove('col-xs-6')
    sizeEl.classList.add('col-xs-4')
    rentEl.classList.remove('col-xs-6')
    rentEl.classList.add('col-xs-4')
    const calc = (rent / size).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const clone = sizeEl.cloneNode(true)

    if (calc && clone) {
      clone.querySelector('h1').innerText = `${calc}€`
      clone.querySelector('h3').innerText = 'Miete pro m²'
      rentEl.parentNode.insertBefore(clone, rentEl.nextElementSibling)
    }
  }
}
