// components/Item/Item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type: Number,
      value: 0      // 0-收入 1-支出
    },
    date:{
      type:String,
      value: ''
    },
    time:{
      type:String,
      value:'00:00'
    },
    money:{
      type:Number,
      value: 0 
    }
  },

  data: {
    earningImage: '/images/收款.png',
    payImage:'/images/付款成功.png',
    earningColor: 'green',
    payColor:'red'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
