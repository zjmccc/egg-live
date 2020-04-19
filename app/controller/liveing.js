'use strict';

const Controller = require('egg').Controller;

class LiveingController extends Controller {
  async liveingStart() {
    this.ctx.body = await this.ctx.service.liveing.liveing();
  }
}

module.exports = LiveingController;