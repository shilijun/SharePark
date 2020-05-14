const app = getApp()
const db = wx.cloud.database()

function getAvatarNickname(openid, out){
  /*
  * out 使用引用的方式返回 avatarUrl，nickName
  */
  db.collection('users').where({
    openid: openid
  }).get({
    success: res=>{
      console.log("[user] [getAvatarNickName] success")
      // console.log(res.data)
      // out = [res.data[0].avatarUrl, res.data[0].nickName];
      out['avatarUrl'] = res.data[0].avatarUrl
      out['nickName'] = res.data[0].nickName
      return out;
    },
    fail: res=>{
      console.error("[user] [getAvatarNickName] fail", res)
    }
  })

  // 本地版本
  // const choose = app.globalData.usersTable.find(item => item.openid==userid)
  // if (choose === undefined){
  //   return null;
  // }
  // return [choose.avatarUrl, choose.nickName];

}

// 将用户信息插入用户表
function signin(oid, avatarUrl, nickName){
  // 将用户信息写入数据库
  db.collection('users').where({
    openid: oid
  }).get({
    success: function(res) {
      // 如果没有则加入
      if (res.data.length === 0){
        console.log("userinfo is not in users db [userCenter->signin]")
        db.collection("users").add({
          data:{
            openid: oid,
            nickName: nickName,
            avatarUrl: avatarUrl
          }
        }).then(res => {
          console.log(res)
        })
        .catch(console.error)
      }
    },
    fail: function(res){
      console.error("[user->signin] query users db fail ")
    }
   })

   // 本地版本
  // const index = app.globalData.usersTable.findIndex(text => text.openid === app.globalData.openid);
  // if(index==-1){
  //   app.globalData.usersTable.push(
  //         {openid: app.globalData.openid,
  //         nickName: this.data.nickName,
  //         avatarUrl: this.data.avatarUrl})
  //   console.log("用户信息写入表中")
  //   console.log(app.globalData.usersTable)
  // }
}

module.exports = {
  getAvatarNickname: getAvatarNickname,
  signin:signin,
}