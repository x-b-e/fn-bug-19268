import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked
  foo = 0

  @action
  incrementFoo() {
    this.foo += 1;
  }
}