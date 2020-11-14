import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | foo-squarer', function(hooks) {
  setupRenderingTest(hooks);

  test('it updates the function when its arguments update', async function(assert) {
    this.set('foo', 0);
    await render(hbs`<FooSquarer @foo={{this.foo}} />`);
    this.set('foo', 1);

    assert.equal(this.element.querySelector('#foo').textContent.trim(), this.foo);
    assert.equal(this.element.querySelector('#foo-squared').textContent.trim(), this.foo * this.foo);
  });

  test('it updates the task when its arguments update', async function(assert) {
    this.set('foo', 0);
    await render(hbs`<FooSquarer @foo={{this.foo}} />`);
    this.set('foo', 2);

    assert.equal(this.element.querySelector('#foo-cubed').textContent.trim(), this.foo * this.foo * this.foo);
  });

  test('it triggers a re-compute when args update', async function(assert) {
    this.set('foo', 1);
    await render(hbs`<FooSquarer @foo={{this.foo}} />`);
    this.set('foo', 2);

    assert.equal(this.element.querySelector('#foo-negative').textContent.trim(), -1 * this.foo);
  });
});
