function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
 
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
 
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function gettime(date){
  var hour = date.getHours()
  var minute = date.getMinutes()
  return [hour, minute].map(formatNumber).join(':');
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function showToast(s, type){
  // type 0-warn 1-success
  wx.showToast({
    title: s,
    success:()=>{
    },
    image: '../../images/warn.png'
  })
}
module.exports = {
  formatTime: formatTime,
  gettime: gettime,
  showToast: showToast
}