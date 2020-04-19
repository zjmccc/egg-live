const Service = require('egg').Service

class HomeService extends Service {
  async liveingSelect() {
    return ctx.service.code.success({ msg: '成功' });
  }
}
module.exports = HomeService;