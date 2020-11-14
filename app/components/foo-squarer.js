import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';

export default class FooSquarerComponent extends Component {
  @tracked
  fooSquared

  @tracked
  fooCubed

  @action
  squareFoo(foo) {
    this.fooSquared = foo * foo;
  }

  negatizeFoo(foo) {
    return -1 * foo;
  }

  @task
  // eslint-disable-next-line require-yield
  *cubeFooTask(foo) {
    this.fooCubed = foo * foo * foo;
  }
}