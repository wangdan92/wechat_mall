// pages/pay/pay.js
const app = getApp()
const common = require('../../utils/common.js')
const prefixUrl=common.prefixUrl
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopName:'',
    prefixUrl: prefixUrl,
    shoplist:[],
    name:'',
    payE:0,
    total11:0,
    total1111:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("===options====",options);  
    var that = this;
    that.setData({
      shoplist: getApp().globalData.dingdan,
      shopName:options.shopName,
      name:options.name,
      payE:Number(options.payE),
      total11: Number(options.shoplist111),
      total1111:Number(options.shoplist111)+Number(options.payE)
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
  formSubmit(e) {
    let that=this;
    let shoplistArr=JSON.stringify(that.data.shoplist);
    let shopName= that.data.shopName;
    let orderTotal=that.data.total1111;
    let formData=e.detail.value;
    let param={'orderItemList':that.data.shoplist,'shopName':shopName,'orderTotal':orderTotal,'name':formData.name,'phone':formData.mobile,'address':formData.detail};
    console.log('创建订单提交的参数',param);
    wx.request( {//从后端获取数据
      url: prefixUrl+'/o2o/buyer/order/create',//后端传数据的路径
      data: {param},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log("====下单成功",res);
        wx.hideLoading();//隐藏加载
      }
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