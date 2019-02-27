/* global customElements, HTMLElement, Worker */
import luckyHappyTemplate from './templates/lucky-happy.js'
import luckyHappyResultTemplate from './templates/lucky-happy-result.js'

class LuckyHappyNumber extends HTMLElement {
  constructor () {
    super()
    let template = document.createElement('template')

    template.innerHTML = luckyHappyTemplate
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(template.content)
    this.form = this.shadow.querySelector('.lucky-happy__form')
    this.input = this.shadow.querySelector('.lucky-happy__number-field')
    this.submit = this.shadow.querySelector('.lucky-happy__get-button')
    this.resultWrapper = this.shadow.querySelector('.lucky-happy-result-wrapper')
    this.service = new Worker('/assets/services/lucky-happy-number.service.js')

    this.form.addEventListener('submit', event => {
      event.preventDefault()
      this.resultWrapper.classList.add('lucky-happy-result-wrapper--loading')
      this.service.postMessage({ number: this.input.value })
    })

    this.service.addEventListener('message', msg => {
      this.resultWrapper.innerHTML = luckyHappyResultTemplate(msg.data)
      this.resultWrapper.classList.remove('lucky-happy-result-wrapper--loading')
    })
  }
}

customElements.define('lucky-happy-number', LuckyHappyNumber)
