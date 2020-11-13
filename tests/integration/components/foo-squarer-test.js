import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | foo-squarer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('foo', 0);
    await render(hbs`<FooSquarer @foo={{this.foo}} />`);
    this.set('foo', 1);

    assert.equal(this.element.querySelector('#foo').textContent.trim(), this.foo);
    assert.equal(this.element.querySelector('#foo-squared').textContent.trim(), this.foo * this.foo);
  });
});
