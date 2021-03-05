Page({
  data: {
    clickJoin: false,
    enrollFlag: false,
  },
  join: function(e) {
    this.setData({
      clickJoin: !this.data.clickJoin,
    });
  },
  formSubmit: function(e) {
    const { name, age, mobile } = e.detail.value;
    if (!name) {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none',
      })
      return;
    }
    if (!age) {
      wx.showToast({
        title: '请输入年龄',
        icon: 'none',
      })
      return;
    }
    if (!mobile) {
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none',
      })
      return;
    }

    this.setData({
      enrollFlag: true,
    });
  },
})
