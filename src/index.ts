import { customElement, html } from 'lit-element'
import { MobxLitElement } from '@adobe/lit-mobx'
import { observable, action, computed } from 'mobx'

class Counter {
  @observable
  public count = 1

  @computed get doubleCount () {
    return this.count * 2
  }

  @action
  public increment() {
    this.count++
  }
}

// create instance that can be shared across components
const counter = new Counter()

@customElement('custom-container')
export class CustomContainer extends MobxLitElement {
  private store = counter

  public render() {
    return html`
      <p>Count is: ${this.store.count}</p>
      <p>MaxCount is: ${this.store.doubleCount}</p>
    `
  }
}
