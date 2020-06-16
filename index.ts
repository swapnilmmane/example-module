import { StorefrontModule } from "@vue-storefront/core/lib/modules";
import Liked from './components/Liked.vue'; // Import the component

const exampleModuleStore = {
  namespaced: true,
  state: {
    key: null
  }
}

const exampleRoutes = [{ name: 'liked', path: '/liked', component: Liked, alias: '/liked.html' }]; // compose the router we will use

export const ExampleModule: StorefrontModule = function({
  app,
  store,
  router,
  moduleConfig,
  appConfig
}) {
  console.log('Hello World and VSF!'); // Any punch line allowed!
  store.registerModule('example-module', exampleModuleStore);

  router.addRoutes(exampleRoutes) // adding routes here
  router.beforeEach((to, from, next) => { next() }) // navigation guards here
};
