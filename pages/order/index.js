const app = getApp()

Page({
  data: {
    items: [{
      id: 1,
      img: 'https://mmbiz.qpic.cn/mmbiz_jpg/Uucib1QVhcic3psu1g4tYyzf6Q0kcWpJmWFmegpk38eaVaiao2q0mvKbkkcibGic2F45PxcJV2T6m8EEzjhTUUUoeuQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      name: '重庆老面馆',
      desc: '秋天就好一口热腾腾的面汤',
      price: 15,
      selectedNum: 1
    }, {
      id: 2,
      img: 'https://mmbiz.qpic.cn/mmbiz_jpg/Uucib1QVhcic3psu1g4tYyzf6Q0kcWpJmWIlTfR9CuIYZBmaSmuOZONshb45qIl3OBhibYibFdHIh4yKniaq1XB1zgw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      name: '老嘉杀猪粉',
      desc: '丰富的口感幸福感瞬间饱满',
      price: 12,
      selectedNum: 1
    }, {
      id: 3,
      img: 'https://mmbiz.qpic.cn/mmbiz_jpg/Uucib1QVhcic3psu1g4tYyzf6Q0kcWpJmWfT3xekhputwAQj0lpKPiazLJmPC9Dff3lT6UfIiaia7ictaR82lNjgcg0w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      name: '桂林卤粉千里混沌',
      desc: '卤酱的香味便融入了一根根粉条中',
      price: 18,
      selectedNum: 1
    }, {
      id: 4,
      img: 'https://mmbiz.qpic.cn/mmbiz_jpg/Uucib1QVhcic3psu1g4tYyzf6Q0kcWpJmWGyNicW9ZXvaqhAqUDv22cKZj3qQ8J4IvFlyKLpBrxhfvCGoOwmJfwRg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      name: '浏阳特色蒸菜馆',
      desc: '一切的精妙计算都只为了你的一口满足',
      price: 30,
      selectedNum: 1
    }, {
      id: 5,
      img: 'https://mmbiz.qpic.cn/mmbiz_jpg/Uucib1QVhcic3psu1g4tYyzf6Q0kcWpJmWRdcd6x9GCGMB8zqBz9B6NAdBVmo1c1GrvGBaDDopAGYEHhMpHGzyrg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      name: '老郭记粉面馆',
      desc: '粉就像娱乐界的回族美女',
      price: 16,
      selectedNum: 1
    }],
    selectedProductList: [],
    totalPrice: 0
  },
  addProduct: function(e) { // 添加商品
    const id = e.currentTarget.dataset.id;
    this.data.items.some(item => {
      if (id === item.id) {
        item.selectedNum++;
        return true;
      }
    });
    this.data.selectedProductList.length = 0;
    this.data.totalPrice = 0;
    this.data.items.forEach(item => {
      if (item.selectedNum > 0 && item.selectedFlag) { // 只计算勾选的
        this.data.selectedProductList.push({
          id: item.id,
          price: item.price,
          selectedNum: item.selectedNum
        });
      }
    });
    this.data.selectedProductList.forEach(product => {
      this.data.totalPrice += product.price*product.selectedNum;
    });
    this.setData({
      items: this.data.items,
      selectedProductList: this.data.selectedProductList,
      totalPrice: this.data.totalPrice
    });
  },
  removeProduct: function(e) { // 去掉商品
    const id = e.currentTarget.dataset.id;
    this.data.items.some(item => {
      if (id === item.id) {
        if (item.selectedNum  > 1) { // 最少1件商品
          item.selectedNum--;
        }
        return true;
      }
    });
    this.data.selectedProductList.length = 0;
    this.data.totalPrice = 0;
    this.data.items.forEach(item => {
      if (item.selectedNum > 0 && item.selectedFlag) { // 只计算勾选的
        this.data.selectedProductList.push({
          id: item.id,
          price: item.price,
          selectedNum: item.selectedNum
        });
      }
    });
    this.data.selectedProductList.forEach(product => {
      this.data.totalPrice += product.price*product.selectedNum;
    });
    this.setData({
      items: this.data.items,
      selectedProductList: this.data.selectedProductList,
      totalPrice: this.data.totalPrice
    });
  },
  selectProduct: function(e) { // 选择商品
    const id = e.currentTarget.dataset.id;
    this.data.items.some(item => {
      if (id === item.id) {
        item.selectedFlag = !item.selectedFlag;
        return true;
      }
    });
    this.data.selectedProductList.length = 0;
    this.data.totalPrice = 0;
    this.data.items.forEach(item => {
      if (item.selectedNum > 0 && item.selectedFlag) { // 只计算勾选的
        this.data.selectedProductList.push({
          id: item.id,
          price: item.price,
          selectedNum: item.selectedNum
        });
      }
    });
    this.data.selectedProductList.forEach(product => {
      this.data.totalPrice += product.price*product.selectedNum;
    });
    this.setData({
      items: this.data.items,
      selectedProductList: this.data.selectedProductList,
      totalPrice: this.data.totalPrice
    });
  },
  pay: function() {
    if (0 === this.data.totalPrice) {
      return;
    }

    // TODO
  },
  onLoad: function () {
    this.data.items.forEach(item => {
      item.selectedFlag = true;
      item.totalPrice = item.price*item.selectedNum;
      this.data.selectedProductList.push({
        id: item.id,
        price: item.price,
        selectedNum: item.selectedNum
      });
    });
    this.data.selectedProductList.forEach(product => {
      this.data.totalPrice += product.price*product.selectedNum;
    });
    this.setData({
      items: this.data.items,
      selectedProductList: this.data.selectedProductList,
      totalPrice: this.data.totalPrice
    });
  }
});
