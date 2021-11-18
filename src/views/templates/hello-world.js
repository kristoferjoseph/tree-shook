module.exports = function HelloWorld(state={}, html) {
  const { greeting } = state
  return html`
<h1>
  <slot>${greeting}</slot>
</h1>

<script type=module>
  class Hello extends HTMLElement {
    super()
    constructor() {
    }
    connectedCallback() {
      console.log('HOWDY')
    }
  }
</script>
  `
}
