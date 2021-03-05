//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    message: '',
  },
  bindTextAreaInput: function(e) {
    const value = e.detail.value;
    this.setData({
      message: value,
    });
  },
  reset: function(e) {
    this.setData({
      message: '',
    });
  },
  submit: function(e) {

  },
})
