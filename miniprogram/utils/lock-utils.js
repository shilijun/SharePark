const app = getApp();
const db = wx.cloud.database()
const utils = require('./utils')

function getAddr(lockid){
  const choose = app.globalData.parkingTable.find(item => item.lockid===lockid)
  if (choose === undefined){
    return null;
  }
  return choose.address.addr;
}

function addParking(d){
  console.log("[lock-urils -> addParking]")
  console.log(d)
  
  db.collection('parkings').where({
    lockid: d.lockid
  }).get({
    success: function(res) {
      // 如果没有则加入
      if (res.data.length === 0){
        console.log("lockid is not in users db [lock-urils -> addParking]")
        db.collection("parkings").add({
          data: d
        }).then(res => {
          console.log(res)
        })
        .catch(console.error)
      }else{
        utils.showToast("不能重复添加同一个车位")
      }
    },
    fail: function(res){
      console.error("[lock-urils -> addParking] query parkings db fail ")
    }
  })
}
function findMyPark(callback){
  db.collection('parkings').where({
    openid: app.globalData.openid
  }).get({
    success: res=>{
      var out = []
      console.log("[lock-urils -> findMyPark] success")
      // console.log(res.data)
      for(var item of res.data){
        out.push({
            lockid: item.lockid,
            address: item.address ,
            lat: item.lat,
            long: item.long,
            price: item.price
        })
      }
      // console.log(out)
      callback(out)
    },
    fail: res=>{
      console.error("[lock-urils -> findMyPark] fail", res)
    }
  })
}

module.exports = {
  getAddr: getAddr,
  addParking: addParking,
  findMyPark:findMyPark,
}