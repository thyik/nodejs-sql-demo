const dtutils = require('../utils/datetime_tool');

console.log(dtutils.getWaitTimeStr(Date.now() - 2*3600*1000 - 59 * 60 * 1000 - 900, 4*3600));
