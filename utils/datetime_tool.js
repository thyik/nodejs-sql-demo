
/**
 * convert time to s
 * 
 * @param {number} time - time in ms 
 * @return {number} time in s
 */
const getTimestamp = (time) => {
  return Math.round(time / 1000); // ms -> s
};

/**
 * return remainder time from start time in string format hh hour(s) mm minute(s) ss second(s)
 * 3 hr count down timer
 * 
 * @param {number} timeMillis - start time in ms
 * @param {number} maxTimeSeconds - max time in s. Default is 3hr = 3 * 3600
 * @returns hh hour(s) mm minute(s) ss second(s)
 */
const getWaitTimeStr = (timeMillis, maxTimeSeconds = 3*3600) => {
  // get time interval elapsed
  let waitTimeInSeconds = (Date.now() - timeMillis) / 1000; // ms -> s
  // 3hr - waitTimeInSeconds(s)
  waitTimeInSeconds = maxTimeSeconds - waitTimeInSeconds;
 
  if (waitTimeInSeconds < 1) {
    // timeout
    return "0 second";
  }

  let str = '';
  // extract hours component
  const hour = Math.floor(waitTimeInSeconds / 3600); // 3600s = 1hr
  if (hour > 0) {
      str += hour + (hour > 1 ? " hours " : " hour ");
  }

  // extract minutes component
  const minute = Math.floor(waitTimeInSeconds % 3600 / 60);
  if (hour > 0
      || minute > 0) {
      str += minute + (minute > 1 ? " minutes " : " minute ");
  }

  // extract seconds component
  const second = Math.floor(waitTimeInSeconds % 60);
  str += second + (second > 1 ? " seconds " : " second ");

  // resultant : hh hour(s) mm minute(s) ss second(s)
  return str;
};

/**
 * convert credit card expiry date (mm/yy) to date format
 * @param {string} expDate - expiry date mm/yy
 * @return {number} time in s
 */
const getExpiryDateInSeconds = (expDate) => {
  const date = expDate.split('/');
  const year = parseInt('20' + date[1]);
  const month = parseInt(date[0]);

  const lastDate = new Date(year, month, 0).getDate();
  const expiryDate = new Date(year, month - 1, lastDate);
  expiryDate.setHours(23, 59, 59, 999);

  return Math.floor(expiryDate.getTime() / 1000);
}

module.exports = { getTimestamp, getWaitTimeStr, getExpiryDateInSeconds }
