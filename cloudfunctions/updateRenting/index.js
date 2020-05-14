// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  try {
    return await db.collection('rentings').where({
      lockid: event.lockid
    })
    .update({
      data: {
        allowstart: event.allowstart,
        allowend: event.allowend,
        price: event.price
      }
    })
  } catch(e) {
    console.error(e)
  }
}