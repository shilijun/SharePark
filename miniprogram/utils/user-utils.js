const app = getApp()

function getAvatarNickname(userid){
  const choose = app.globalData.usersTable.find(item => item.openid==userid)

  if (choose === undefined){
    return null;
  }
  return [choose.avatarUrl, choose.nickName];

}
module.exports = {
  getAvatarNickname: getAvatarNickname,
}