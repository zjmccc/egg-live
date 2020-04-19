'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  // 注册
  async add() {
    const { ctx } = this;
    try {
      const result = await ctx.model.User.find({ userName: ctx.request.body.userName });
      if (result.length != 0) {
        await ctx.model.User.create(ctx.request.body);
        return ctx.service.code.success({ msg: '注册成功' });

      } else {
        return ctx.service.code.error({ msg: '该用户已存在请输入其他邮箱' });
      }
    } catch (error) {
      return ctx.service.code.error({ msg: '注册失败' });
    }
  }
  //登录
  async login() {
    const { ctx, app } = this;
    try {
      const result = await ctx.model.User.find({ userName: ctx.request.body.userName });
      if (result.length == 0) {
        return ctx.service.code.error({ msg: '用户未注册请前往注册' });
      } else
        if (result[0].passWord == ctx.request.body.passWord) {
          const token = app.jwt.sign({
            user: ctx.request.body, //需要存储的 token 数据
            //......
          }, app.config.jwt.secret);
          return ctx.service.code.success({ msg: '登录成功', data: token });
        } else {
          return ctx.service.code.error({ msg: '账号或者密码错误' });
        }
    } catch (error) {
      return ctx.service.code.error({ msg: '服务器发生错误' });
    }

  }
}
module.exports = UserService;