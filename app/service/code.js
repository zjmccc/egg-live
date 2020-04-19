const Service = require('egg').Service;
class CodeService extends Service {
  success({ data, msg }) {
    return {
      code: 200,
      data: data ? data : true,
      msg: msg ? msg : '成功'
    }
  }
  error({ data, msg }) {
    return {
      code: 300,
      data: data ? data : false,
      msg: msg ? msg : '失败'
    }
  }
}
module.exports = CodeService;