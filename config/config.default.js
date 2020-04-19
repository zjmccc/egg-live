/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586762797828_1963';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //设置跨域
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['http://localhost:8080'],
  };
  //跨域
  config.cors = {
    origin: '*', // 匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };


  //数据库连接
  config.mongoose = {
    client: {
      url: 'mongodb://localhost/live',  //你的数据库地址，不要端口
      options: {
        useNewUrlParser: true,
      },
    }
  };
  //生成token
  config.jwt = {
    secret: "123456"//自定义 token 的加密条件字符串
  };


  return {
    ...config,
    ...userConfig,
  };
};
