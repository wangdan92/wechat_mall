// pages/orderManage/orderDeatail.js
const common = require('../../../utils/common.js')
const prefixUrl=common.prefixUrl
const util = require('../../../utils/util.js')
Page({
  data:{
    prefixUrl: prefixUrl,
    orderNum: '',
    appointmentNum: 5,
    appointmentTime: '2017年2月16日  11:42',
    orderTime: '2017年1月16日  11:42',
    hasData: true,
    navTab: ["全部", "待处理", "待接待", "已完成", "客户处理"],
    moneyInfo: [],
    nickName: '恋人心',
    phoneNum: '18202801506',
    url: 'http://60.205.161.252//Public/uploads/app/2016-12-15/58523b031fa7b.png',
    statusImage: ['/image/daijiedai.png'],
    statusText: ['未付款', '已配送', '已完成'],
  },
  onLoad:function(options){
    console.log(options)
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
        title: '订单详情'
    })
    var num = options.orderId
    that.setData({
      orderNum:options.orderId
    })
    wx.request({
      url: prefixUrl+'/o2o/buyer/order/itemlist?orderId=' + num,
      success(res){
        console.log(res.data.itemList)
        that.setData({
          moneyInfo: res.data.itemList
        })
      }
    })
    
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})