const getTimestamp = (time) => {
  return Math.round(time / 1000);
};

const getWaitTimeStr = (timeMillis) => {
  let waitTime = (new Date().getTime() - timeMillis) / 1000;
  waitTime = 3 * 60 * 60 - waitTime;
  let str = '';

  const hour = Math.floor(waitTime / (60 * 60));
  if (hour > 0) {
      str += hour + (hour > 1 ? " hours " : " hour ");
  }

  const minute = Math.floor(waitTime % (60 * 60) / 60);
  if (minute > 0) {
      str += minute + (minute > 1 ? " minutes " : " minute ");
  }

  const second = Math.floor(waitTime % 60);
  if (second > 0) {
      str += second + (second > 1 ? " seconds " : " second ");
  }

  return str;
};

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
