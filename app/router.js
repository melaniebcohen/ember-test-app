import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// generated by `ember generate route about`
Router.map(function() {
  this.route('about');
});

export default Router;
