// pages/pay/pay.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoplist:[],
    name:'',
    payE:'',
    total11:'',
    total1111:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    that.setData({
      shoplist: getApp().globalData.dingdan,
      name:options.name,
      payE:options.payE,
      total11: options.shoplist111
    })
  },
  totalpay(){
    var total1 = this.data.payE+this.data.total11
    this.setData({
      total1111:total1
    })
  },
  qw:function(){
    console.log(this.data.name)
    console.log(this.data.shoplist)
  },
  getAddress: function () {
    var _this = this;
    wx.chooseLocation({
      success: function (res) {
        if (res.address.length > 10) {
          console.log(res)
          res.address = res.address
        }
        _this.setData({
          addr: res.address
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
   formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail)

   }
})