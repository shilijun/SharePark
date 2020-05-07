const app = getApp();

function getAddr(lockid){
  const choose = app.globalData.parkingTable.find(item => item.lockid===lockid)
  if (choose === undefined){
    return null;
  }
  return choose.address.addr;
}


module.exports = {
  getAddr: getAddr,
}