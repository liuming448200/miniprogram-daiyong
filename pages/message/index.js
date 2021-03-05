Page({
  data: {
    items: [{
      id: 1,
      date: '2021年1月21日',
    }, {
      id: 2,
      date: '2021年1月22日',
    }, {
      id: 3,
      date: '2021年1月23日',
    }, {
      id: 4,
      date: '2021年1月24日',
    }, {
      id: 5,
      date: '2021年1月25日',
    }]
  },
  delete: function(e) {
    const id = e.currentTarget.dataset.id;
    this.data.items.some((item, index) => {
      if (id === item.id) {
        this.data.items.splice(index, 1);
        return true;
      }
    });
    this.setData({
      items: this.data.items,
    });
  },
})
