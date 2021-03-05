const app = getApp()

Page({
  data: {
    byShopRank: true,
    shopRankList: [{
      id: 1,
      name: '来嗦一碗螺蛳粉',
      point: 46,
      rank: 1,
    }, {
      id: 2,
      name: '北京片皮烤鸭',
      point: 12,
      rank: 2,
    }],
    userRankList: [{
      id: 1,
      name: '记忆衰退',
      point: 390,
      rank: 1,
    }, {
      id: 2,
      name: '待用长沙',
      point: 100,
      rank: 2,
    }, {
      id: 3,
      name: '记录语言',
      point: 10,
      rank: 3,
    }, {
      id: 4,
      name: 'Mr Doglas',
      point: 8,
      rank: 4,
    }],
  },
  shopRank: function(e) {
    this.setData({
      byShopRank: true,
    });
  },
  userRank: function(e) {
    this.setData({
      byShopRank: false,
    });
  },
})
