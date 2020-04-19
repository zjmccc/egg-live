'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/home/liveingSelect', jwt, controller.home.liveingSelect);
  router.post('/user/add', controller.user.add);
  router.post('/user/login', controller.user.login);
  router.get('/user/liveing', controller.liveing.liveingStart);
  //router.post('/admin', jwt, controller.admin.index);
};
