// components/Card/Card.js
Component({
  properties: {
    type: {
      type: Number,
      value: 0
    },
    avatarUrl:{
      type: String, 
      value: "https://wx.qlogo.cn/mmopen/vi_32/H9O9fay6boqnxImHaqM1DXr7s4RChTIGibGQd0Rey9dkK4wibOwN8u3LBgOshTFnbpA7F8dnU0OXBqJcMUiaSX8ZQ/132",
    },
    nickName:{
      type:String,
      value:"gygz"
    },

    lockid: {
      type:String,
      value: "lock001"
    },
    addr: {
      type: String,
      value: "成都市龙泉驿区龙腾东麓城"
    },
    // date:{
    //   type:String,
    //   value: '05-06'
    // },
    time:{
      type:String,
      value:'9:00'
    },
    unitPrice: {
      type: Number,
      value: 5
    },

  },

  data: {
    undateInterval:1, // minites
    lasting: 0,
    totalmoney: 0,
    // nowDate: "05-01",
    nowTime: "09:00",
    prompt: "您最多还能停4小时"
  },

  methods: {
    timing: function() {
      let that = this;
      var f = function(){
        let date = new Date();
        // const mouth = date.getMonth()+1;
        // const day = date.getDate();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        console.log(hour,minutes)
        that.setData({
          // nowDate: [mouth, day].map(that.data.formatNumber).join('-'),
          nowTime: [hour, minutes].map(that.data.formatNumber).join(':'),
          lasting: that.data.lasting+that.data.undateInterval,
          totalmoney: (that.data.lasting/60*that.properties.unitPrice).toFixed(2)
        })
        return f;
      };
      that.data.myintervalid = setInterval(f(), that.data.undateInterval *60000);
    },
  },

  lifetimes: {
    attached: function() {
      // 开始时间
      // const d = this.properties.date.split('-').map(Number);
      const t = this.properties.time.split(':').map(Number);
      // 当前时间
      let date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      // 当前持续时间
      const lasting = (hour-t[0])*60 + minutes-t[1]
      // const lasting = ((day-d[1])*24+(hour-t[0]))*60 + minutes-t[1]
      this.setData({
        lasting:lasting
      })
      this.data.formatNumber = n => {
        n = n.toString()
        return n[1] ? n : '0' + n
      },
      // 启动定时
      this.timing();
      
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      clearInterval(this.data.myintervalid);
    },
  },
})
