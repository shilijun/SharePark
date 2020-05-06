//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {
      userInfo: null,
      openid: null,
      address: null,
      parkingSpaces : [
        {
          addr: {address: "成都市龙泉驿区人民政府(东街东)", lat: 30.55663, long:"undefined"},
          endtime: "11:32",
          lockid: "lock000",
          openid: "oR6fd4v520A5p902RsWBx4xjrpS4",
          price: "5",
          starttime: "11:32"
        }
    ],
      rendRecordsTable: [
        { endtime: "11:32",
          renderid: "oR6fd4v520A5p902RsWBx4xjrpS4",
          starttime: "11:32",
          tenantid: "oR6fd4v520A5p902RsWBx4xjrpS4",
        }
        ],
      userstable: [],
      
    }
  }
})
