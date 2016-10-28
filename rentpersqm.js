// Result Table
window.$('#table-compact-list tr').each(function () {
  var rent = window.$('.ang_spalte_miete b', this).text().match(/\d+/g)
  var size = window.$('.ang_spalte_groesse span', this).text().match(/\d+/g)
  if (rent && size) {
    var calc = (rent / size).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    // console.log(calc)
  }
  var $clone = window.$('.ang_spalte_groesse', this).clone()
  if ($clone.prop('tagName') === 'TH') {
    window.$('a', $clone).text('pro m²').attr('href', '#').css('white-space', 'nowrap').click(function () { return false })
  } else {
    window.$('span', $clone).text(calc + '€')
  }
  $clone.insertAfter(window.$('.ang_spalte_groesse', this))
})

// Detail View
var $table = window.$('table.headline-orange')
if ($table.length) {
  var size = window.$('td:first-child div', $table).text().match(/\d+/g)
  var rent = window.$('td:nth-child(2) span', $table).text().match(/\d+/g)
  if (rent && size) {
    var calc = (rent / size).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    // console.log(calc)
  }

  var $clone = window.$('td:first-child', $table).clone()
  window.$('span', $clone).text('Miete pro m²')
  window.$('div', $clone).text(calc + '€')
  $clone.insertAfter(window.$('td:nth-child(2)', $table))
}
