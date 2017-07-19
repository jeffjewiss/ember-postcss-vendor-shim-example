import Component from 'ember-component'
import computed from 'ember-computed'
import get from 'ember-metal/get'
import postcss from 'postcss'

export default Component.extend({
  styles: `
    --bg: #000;
    html {
      background: var(--bg);
    }
  `,

  parsedStyles: computed('styles', function () {
    return postcss(get(this, 'styles'));
  })
})
