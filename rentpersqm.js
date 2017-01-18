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
var $table = window.$('#main_column > .row').first()
if ($table.length) {
  var $sizeContainer = $table.find('.col-xs-6:nth-child(1)')
  var size = $sizeContainer.find('.headline').text().match(/\d+/g)
  $sizeContainer.addClass('col-xs-4').removeClass('col-xs-6')
  var $rentContainer = $table.find('.col-xs-6:nth-child(2)')
  var rent = $rentContainer.find('.headline').text().match(/\d+/g)
  $rentContainer.addClass('col-xs-4').removeClass('col-xs-6')

  if (rent && size) {
    var calc = (rent / size).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    // console.log(calc)
  }

  var $clone = $sizeContainer.clone()
  $clone.find('h1').text(calc + '€')
  $clone.find('h3').text('Miete pro m²')
  $clone.insertAfter($rentContainer)
}
