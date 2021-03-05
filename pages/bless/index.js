//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    onLoad: function () {
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse){
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    },
    getUserInfo: function(e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },
    sku: {
      id: 1,
      img: 'https://mmbiz.qpic.cn/mmbiz_jpg/Uucib1QVhcic3psu1g4tYyzf6Q0kcWpJmWFmegpk38eaVaiao2q0mvKbkkcibGic2F45PxcJV2T6m8EEzjhTUUUoeuQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      name: '重庆老面馆',
      desc: '秋天就好一口热腾腾的面汤',
      price: 15,
      selectedNum: 0
    },
    buyPersonList: [],
    blessPersonList: [{
      id: 1,
      name: '我是测试',
      portrait: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Zvbent8yXwIuxnmfAGGb0ZXYXHOaTH8YpOzVVpeSMFPaPmqhNibM9bRmTeMPXMjh4rVW1MeoQtIJD6ic3Xp2FrLg/132',
      message: '大家都给环卫工人献上一份爱心吧',
      agreePersonList: [],
      updateTime: '2021-01-21 23:59:08',
    }]
  },
  agree: function(e) {
    const id = e.currentTarget.dataset.id;
    this.data.blessPersonList.some(item => {
      if (id === item.id) {
        const userInfo = this.data.userInfo;
        if (0 === item.agreePersonList.length) {
          item.agreePersonList.push(userInfo);
          item.agreeMessage = true;
        } else {
          if (item.agreePersonList.every(person => userInfo.unionId !== person.unionId)) {
            item.agreePersonList.push(userInfo);
            item.agreeMessage = true;
          } else {
            item.agreePersonList.some((person, index) => {
              if (userInfo.unionId === person.unionId) {
                item.agreePersonList.splice(index, 1);
                item.agreeMessage = false;
                return true;
              }
            })
          }
        }
        return;
      }
    });
    this.setData({
      blessPersonList: this.data.blessPersonList,
    });
  },
})
