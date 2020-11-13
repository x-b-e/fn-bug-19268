import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FooSquarerComponent extends Component {
  @tracked
  fooSquared

  @action
  squareFoo() {
    this.fooSquared = this.args.foo * this.args.foo;
  }
}