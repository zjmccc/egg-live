'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // },
  //设置跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  //mongodb数据库开启
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  //生成token插件
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
};
