import Application from 'fn-bug-19268/app';
import config from 'fn-bug-19268/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
