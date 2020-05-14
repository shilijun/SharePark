const app = getApp();
const db = wx.cloud.database()


// 增加可出租的车位 todo
function addRenting(d){
  console.log("[rent-urils -> addRenting]")
  console.log(d)
  d['renterid'] = app.globalData.openid

  db.collection('rentings').where({
    lockid: d.lockid
  }).get({
    success: function(res) {
      // 如果没有则加入
      if (res.data.length === 0){
        console.log("paring is not configed [retn-urils -> addRenting]")
        db.collection("rentings").add({
          data: d
        }).then(res => {
          console.log(res)
        })
        .catch(console.error)
      }else{
        // update todo



      }
    },
    fail: function(res){
      console.error("[lock-urils -> addParking] query parkings db fail ")
    }
  })
}

// 查找可出租的车位
function findRenting(callback){
  db.collection('rentings').get({
    success: res=>{
      console.log("[rent-urils  -> findRenting] success")
      console.log(res.data)
      var out=[]
      for(var item of res.data){
        out.push({
            lockid:item.lockid,
            allowstart:item.allowstart,
            allowend:item.allowend,
            price:item.price,
            address: item.address,
            lat: item.lat,
            long: item.long,
        })
      }
      callback(out)
      console.log(out)
    },
    fail: res=>{
      console.error("[rent-urils -> findRenting] fail", res)
    }
  })
}

// 查找我的出租记录
function findMyRenting(callback){
  db.collection('rentings').where({
    renterid: app.globalData.openid
  }).get({
    success: res=>{
      console.log("[rent-urils  -> findMyRenting] success")
      console.log(res.data)
      var out=[]
      for(var item of res.data){
        out.push({
            lockid:item.lockid,
            allowstart:item.allowstart,
            allowend:item.allowend,
            price:item.price,
            address: item.address,
            lat: item.lat,
            long: item.long,
            type:1
        })
      }
      callback(out)
      console.log(out)
    },
    fail: res=>{
      console.error("[rent-urils -> findMyRenting] fail", res)
    }
  })

  db.collection('rentings').where({
    renterid: app.globalData.openid
  }).get({
    success: res=>{
      console.log("[rent-urils  -> findMyRenting] success")
      console.log(res.data)
      var out=[]
      for(var item of res.data){
        out.push({
            lockid:item.lockid,
            allowstart:item.allowstart,
            allowend:item.allowend,
            price:Number.parseFloat(item.price),
            address: item.address,
            lat: item.lat,
            long: item.long,
            type:0
        })
      }
      callback(out)
      console.log(out)
    },
    fail: res=>{
      console.error("[rent-urils -> findMyRenting] fail", res)
    }
  })
}

// 出租车位  由于update只能使用云函数，因此这个方法没有用到
function rent(d){
  console.log("[rent-urils -> rent]")
  console.log(d)

  db.collection('rentings').where({
    lockid: d.lockid
  }).update({
    data: d,
    success: function(res){
      console.log("[rent-urils -> rent] update parkings table successful")
    }
  })
  // .update ({
  //   success: function(res) {
  //     // 如果没有则加入
  //     if (res.data.length === 0){
  //       console.log("paring is not configed [retn-urils -> addRenting]")
  //       db.collection("rentings").add({
  //         data: d
  //       }).then(res => {
  //         console.log(res)
  //       })
  //       .catch(console.error)
  //     }else{
  //       // update todo



  //     }
  //   },
  //   fail: function(res){
  //     console.error("[lock-urils -> addParking] query parkings db fail ")
  //   }
  // })
}

module.exports = {
  addRenting: addRenting,
  findRenting:findRenting,
  findMyRenting: findMyRenting
}