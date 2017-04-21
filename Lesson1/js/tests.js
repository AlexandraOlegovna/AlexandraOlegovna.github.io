describe('prevNextSlide', function () {

  it('inc position', function () {
    window.position = 0
    window.prevNextSlide('next')
    assert.equal(window.position, 1)
  })

  it('inc position', function () {
    position = carousel.querySelectorAll('li').length - 1
    window.prevNextSlide('next')
    assert.equal(window.position, 0)
  })

  it('dec position', function () {
    window.position = carousel.querySelectorAll('li').length - 1
    window.prevNextSlide('prev')
    assert.equal(window.position, carousel.querySelectorAll('li').length - 2)
  })

  it('dec position', function () {
    window.position = 0
    window.prevNextSlide('prev')
    assert.equal(window.position, carousel.querySelectorAll('li').length - 1)
  })
})

describe('openCloseMenu', function () {
  it('open menu', function () {
    window.isOpen = false
    window.openCloseMenu('open')
    assert.equal(window.isOpen, true)
  })

  it('close menu', function () {
    window.isOpen = true
    window.openCloseMenu('close')
    assert.equal(window.isOpen, false)
  })
})

describe('validate', function () {

  let elems = Array.from(document.querySelector('.message_form').elements)
  for (let i = 0; i < elems.length - 1; ++i) {
    elems[i].value = 'test'
  }
  elems[1].value = 'test@example.ru'

  before(function () {
    for (let i = 0; i < elems.length - 1; ++i) {
      elems[i].value = 'test'
    }
    elems[1].value = 'test@example.ru'
  })

  after(function () {
    for (let i = 0; i < elems.length - 1; ++i) {
      elems[i].value = ''
      resetError(elems[i])
    }
  })


  it('all', function () {
    assert.equal(window.validate(), true)
  })

  it('name', function () {
    elems[0].value = ''
    assert.equal(window.validate(), false)
  })

  it('email_without@', function () {
    elems[1].value = 'test'
    assert.equal(window.validate(), false)
  })

  it('email', function () {
    elems[1].value = 'test@'
    assert.equal(window.validate(), false)
  })

  it('email', function () {
    elems[1].value = '@test'
    assert.equal(window.validate(), false)
  })

  it('email_full', function () {
    elems[1].value = 'test@test'
    assert.equal(window.validate(), false)
  })

  it('email_empty', function () {
    elems[1].value = ''
    assert.equal(window.validate(), false)
  })

  it('subject', function () {
    elems[2].value = ''
    assert.equal(window.validate(), false)
  })

  it('message', function () {
    elems[3].value = ''
    assert.equal(window.validate(), false)
  })

  it('all', function () {
    elems[3].value = ''
    assert.equal(window.validate(), false)
  })

})
