import { customElement, html, LitElement, query } from 'lit-element'

@customElement('custom-container')
export class CustomContainer extends LitElement {
  @query('#btn') btnEle: HTMLButtonElement

  firstUpdated () {
    console.log('this.btn is:', this.btnEle)

    this.btnEle.addEventListener('click', () => {
      console.log('click')
    })
  }

  render () {
    return html`
      <div>
        <button id="btn">button</button>
      </div>
    `
  }
}
