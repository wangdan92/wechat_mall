const prefixUrl="";
//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,  //初始文本框不显示内容
    inputVal: "",
    imgUrls: [],
    mainShopList:[],
    indicatorDots: true, //小点，根据图的数量自动增加小点
    autoplay: true, //是否自动轮播
    interval: 3000, //间隔时间
    duration: 1000, //滑动时间
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    })
    this.text();
    this.setData({
    search: this.search.bind(this)
  });
    this.allshop();
  },
  dd: function (value) {
    wx.navigateTo({
      url: '../sousuo/sousuo',
    })
},


  //轮播图片
  text: function() {
    var that = this;//这部必须有，非常重要
    wx.request( {//从后端获取数据
      url: 'http://127.0.0.1:8080/o2o/frontend/listheadlineinfo',//后端传数据的路径
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.headLineList);
        that.setData({
          imgUrls: res.data.headLineList

       });//这里的imgUrls和<wxml>的imgUrls是同一个变量，就是将从后端获取到的数据赋值给imgUrls，传到前面使用

        console.log(that.data.imgUrls);
        wx.hideLoading();//隐藏加载
      }

    })
  },

  //首页所有店铺
  allshop: function() {
    var that = this;//这部必须有，非常重要
    wx.request( {//从后端获取数据
      url: 'http://127.0.0.1:8080/o2o/frontend/minilistshops',//后端传数据的路径
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.minilistshops);
        that.setData({
          mainShopList: res.data.minilistshops
       })//这里的imgUrls和<wxml>的imgUrls是同一个变量，就是将从后端获取到的数据赋值给imgUrls，传到前面使用
        wx.hideLoading();//隐藏加载
      }
    })
  },

  search :function(e){
    console.log(e)
    wx.navigateTo({
      url: '../sousuo/sousuo',
    })
  },

  //点击店铺进入店铺
  // entershop: function() {

  //   wx.navigateTo({
  //     url: "../shop/shop"
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
