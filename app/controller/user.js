'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async add() {
    this.ctx.body = await this.ctx.service.user.add();
  }
  async login() {
    this.ctx.body = await this.ctx.service.user.login();
  }
}

module.exports = UserController;