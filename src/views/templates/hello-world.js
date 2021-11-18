module.exports = function HelloWorld(state={}, html) {
  return html`
<h1>
  <slot></slot>
</h1>

<script type=module>
  class Hello extends HTMLElement {
    constructor() {
      super()
      const template = document.getElementById('hello-world-template')
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
    connectedCallback() {
      console.log('HOWDY')
    }
  }
  customElements.define('hello-world', Hello)
</script>
  `
}
