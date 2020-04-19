'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async liveingSelect() {
    this.ctx.body = await this.ctx.service.home.liveingSelect()
  }
}

module.exports = HomeController;