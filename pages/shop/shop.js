const app = getApp()
const common = require('../../utils/common.js')
const prefixUrl=common.prefixUrl
const util = require('../../utils/util.js')
Page({
  data: {
      prefixUrl: prefixUrl,
      goods: [
          {
              "name": "热销榜",
              "type": -1,
              "foods": [
                  {
                      "id": "",
                      "name": "皮蛋瘦肉粥",
                      "price": 10,
                      "oldPrice": "",
                      "description": "咸粥",
                      "sellCount": 229,
                      "Count": 0,
                      "rating": 100,
                      "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "很喜欢的粥",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 1,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "扁豆焖面",
                      "price": 14,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 188,
                      "Count": 0,
                      "rating": 96,
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 1,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "info": "",
                      "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "葱花饼",
                      "price": 10,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 124,
                      "Count": 0,
                      "rating": 85,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 1,
                              "text": "没啥味道",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 1,
                              "text": "很一般啊",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "牛肉馅饼",
                      "price": 14,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 114,
                      "Count": 0,
                      "rating": 91,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 1,
                              "text": "难吃不推荐",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "招牌猪肉白菜锅贴/10个",
                      "price": 17,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 101,
                      "Count": 0,
                      "rating": 78,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 1,
                              "text": "不脆,不好吃",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "南瓜粥",
                      "price": 9,
                      "oldPrice": "",
                      "description": "甜粥",
                      "sellCount": 91,
                      "Count": 0,
                      "rating": 100,
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "红豆薏米美肤粥",
                      "price": 12,
                      "oldPrice": "",
                      "description": "甜粥",
                      "sellCount": 86,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "八宝酱菜",
                      "price": 4,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 84,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "红枣山药糙米粥",
                      "price": 10,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 81,
                      "Count": 0,
                      "rating": 91,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "糊塌子",
                      "price": 10,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 80,
                      "Count": 0,
                      "rating": 93,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                  }
              ]
          },
          {
              "name": "单人精彩套餐",
              "type": 2,
              "foods": [
                  {
                      "name": "红枣山药粥套餐",
                      "price": 29,
                      "oldPrice": 36,
                      "description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                      "sellCount": 17,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
                  }
              ]
          },
          {
              "name": "冰爽饮品限时特惠",
              "type": 1,
              "foods": [
                  {
                      "name": "VC无限橙果汁",
                      "price": 8,
                      "oldPrice": 10,
                      "description": "",
                      "sellCount": 15,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "还可以",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                  }
              ]
          },
          {
              "name": "精选热菜",
              "type": -1,
              "foods": [
                  {
                      "name": "娃娃菜炖豆腐",
                      "price": 17,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 43,
                      "Count": 0,
                      "rating": 92,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "菜量还可以,味道还可以",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "手撕包菜",
                      "price": 16,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 29,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "香酥黄金鱼/3条",
                      "price": 11,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 15,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
                  }
              ]
          },
          {
              "name": "爽口凉菜",
              "type": -1,
              "foods": [
                  {
                      "name": "八宝酱菜",
                      "price": 4,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 84,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "拍黄瓜",
                      "price": 9,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 28,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
                  }
              ]
          },
          {
              "name": "精选套餐",
              "type": -1,
              "foods": [
                  {
                      "name": "红豆薏米粥套餐",
                      "price": 37,
                      "oldPrice": "",
                      "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
                      "sellCount": 3,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "皮蛋瘦肉粥套餐",
                      "price": 31,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 12,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
                  }
              ]
          },
          {
              "name": "果拼果汁",
              "type": -1,
              "foods": [
                  {
                      "name": "蜜瓜圣女萝莉杯",
                      "price": 6,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 1,
                      "Count": 0,
                      "rating": "",
                      "info": "",
                      "ratings": [],
                      "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "加多宝",
                      "price": 6,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 7,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "VC无限橙果汁",
                      "price": 8,
                      "oldPrice": 10,
                      "description": "",
                      "sellCount": 15,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "还可以",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                  }
              ]
          },
          {
              "name": "小吃主食",
              "type": -1,
              "foods": [
                  {
                      "name": "扁豆焖面",
                      "price": 14,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 188,
                      "Count": 0,
                      "rating": 96,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 1,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "葱花饼",
                      "price": 10,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 124,
                      "Count": 0,
                      "rating": 85,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 1,
                              "text": "没啥味道",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 1,
                              "text": "很一般啊",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "牛肉馅饼",
                      "price": 14,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 114,
                      "Count": 0,
                      "rating": 91,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 1,
                              "text": "难吃不推荐",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "招牌猪肉白菜锅贴/10个",
                      "price": 17,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 101,
                      "Count": 0,
                      "rating": 78,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 1,
                              "text": "不脆,不好吃",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "糊塌子",
                      "price": 10,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 80,
                      "Count": 0,
                      "rating": 93,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                  }
              ]
          },
          {
              "name": "特色粥品",
              "type": -1,
              "foods": [
                  {
                      "name": "皮蛋瘦肉粥",
                      "price": 10,
                      "oldPrice": "",
                      "description": "咸粥",
                      "sellCount": 229,
                      "Count": 0,
                      "rating": 100,
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "很喜欢的粥",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 1,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "南瓜粥",
                      "price": 9,
                      "oldPrice": "",
                      "description": "甜粥",
                      "sellCount": 91,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "红豆薏米美肤粥",
                      "price": 12,
                      "oldPrice": "",
                      "description": "甜粥",
                      "sellCount": 86,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "红枣山药糙米粥",
                      "price": 10,
                      "oldPrice": "",
                      "description": "",
                      "sellCount": 81,
                      "Count": 0,
                      "rating": 91,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "鲜蔬菌菇粥",
                      "price": 11,
                      "oldPrice": "",
                      "description": "咸粥",
                      "sellCount": 56,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": ""
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
                  },
                  {
                      "name": "田园蔬菜粥",
                      "price": 10,
                      "oldPrice": "",
                      "description": "咸粥",
                      "sellCount": 33,
                      "Count": 0,
                      "rating": 100,
                      "info": "",
                      "ratings": [
                          {
                              "username": "3******c",
                              "rateTime": 1469281964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "2******3",
                              "rateTime": 1469271264000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          },
                          {
                              "username": "3******b",
                              "rateTime": 1469261964000,
                              "rateType": 0,
                              "text": "",
                              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                          }
                      ],
                      "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
                      "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
                  }
              ]
          }
      ],
      shopId: 0,
      toView: '0',
      scrollTop: 100,
      foodCounts: 0,
      totalPrice: 0,// 总价格
      totalCount: 0, // 总商品数
      carArray: [],
      minPrice: 20,//起送價格
      payDesc: '',
      deliveryPrice: 4,//配送費
      fold: true,
      selectFoods: [{ price: 20, count: 2 }],
      cartShow: 'none',
      status: 0,
      //shopId: '',
      shopName: '',
      shopDesc: '',
      shopAddr: '',
      phone: '',
      shopImg:'',
      area:'',
      owner:''  
  },
  selectMenu: function (e) {
      var index = e.currentTarget.dataset.itemIndex;
      this.setData({
          toView: 'order' + index.toString()
      })
      console.log(this.data.toView);
  },
  empty: function(e){
      var that=this;
      console.log(this.data.goods[0].foods[0].Count);
      this.setData({
          carArray: []
      })
      this.calTotalPrice();
      this.setData({
          payDesc: this.payDesc(),
      })
      // for(var i = 0; i < 2; i++){
      //     console.log(this.data.goods[0].foods[i].Count);
      //     this.data.goods[0].foods[i].Count--;
      // }
    console.log(this.data.goods[0].foods[0].Count);
    console.log(this.data.goods)
   for(var i = 0; i < this.data.goods.length; i++){
     for(var j = 0; j < this.data.goods[i].foods.length;j++){
       this.data.goods[i].foods[j].Count = 0
       console.log(this.data.goods[i].foods[j].Count)

     }
   }
    that.setData({
      goods: this.data.goods
    })
    console.log(this.data.goods)
  },
  //数据渲染店铺页面
  shopdetail: function(e){
      var that = this;//这部必须有，非常重要
      wx.request( {//从后端获取数据
        url: prefixUrl+'/o2o/frontend/getShopDetails?shopId=shopId',//后端传数据的路径
        data: {
          shopId: this.data.shopId
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          //console.log(res.data);
          var deList = res.data.shopDetailsList;
          var length = Object.keys(deList).length;
          console.log(deList);
          //关键
          //deList = JSON.parse(JSON.stringify(deList).replace(/productCategoryName/g,"name"))
          //deList = JSON.parse(JSON.stringify(deList).replace(/productCategories/g,"foods"))
          deList = JSON.parse(JSON.stringify(deList).replace(/productCategories/g,"goods"))
          deList = JSON.parse(JSON.stringify(deList).replace(/productCategoryName/g,"name"))
          deList = JSON.parse(JSON.stringify(deList).replace(/products/g,"foods"))
          deList = JSON.parse(JSON.stringify(deList).replace(/imgAddr/g,"icon"))
          deList = JSON.parse(JSON.stringify(deList).replace(/producId/g,"id"))
          deList = JSON.parse(JSON.stringify(deList).replace(/productName/g,"name"))
          deList = JSON.parse(JSON.stringify(deList).replace(/productDesc/g,"description"))
          //sellCount应该为月销量 现在暂时用"库存stock"代替
          deList = JSON.parse(JSON.stringify(deList).replace(/stock/g,"sellCount"))
          deList = JSON.parse(JSON.stringify(deList).replace(/promotionPrice/g,"price"))
          deList = JSON.parse(JSON.stringify(deList).replace(/normalPrice/g,"oldPrice"))
          deList = JSON.parse(JSON.stringify(deList).replace(/count/g,"Count"))
          console.log(deList);
          that.setData({
              goods: deList.goods,
              shopName: deList.shopName,
              shopId: deList.shopId,
              shopName:  deList.shopName,
              shopDesc:  deList.shopDesc,
              shopAddr:  deList.shopAddr,
              phone:  deList.phone,
              shopImg: deList.shopImg,
              deliveryPrice: deList.deliveryPrice,
              minPrice: deList.minPrice,
              area: deList.area,
              owner: deList.owner,
              payDesc:'￥'+deList.minPrice+'起送'
          });
          
          console.log(that.data.goods);
          console.log(that.data.shopName);
          console.log("here: "+that.data.minPrice);
          console.log(that.data.deliveryPrice);
          
          wx.hideLoading();//隐藏加载
          return;  
        }
      })
  },
  //收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
    ajax.request({
      method: 'GET',
      url: 'collection/addShopCollection?key=' + utils.key + '&goodsId=' + goodsId,
      success: data => {
        console.log("收藏返回结果：" + data.message)
        wx.showToast({
          title: data.message,
          icon: 'success',
          duration: 2000
        });
      }
    })
  },
  //移除商品
  decreaseCart: function (e) {
      var index = e.currentTarget.dataset.itemIndex;
      var parentIndex = e.currentTarget.dataset.parentindex;
      this.data.goods[parentIndex].foods[index].Count--
      //console.log(this.carArray);
      
      // if(this.data.goods[parentIndex].foods[index].Count == 0){
      //     this.setData({

      //     });
      // }
      var num = this.data.goods[parentIndex].foods[index].Count;
      var mark = 'a' + index + 'b' + parentIndex;;
      var price = this.data.goods[parentIndex].foods[index].price;
      var name = this.data.goods[parentIndex].foods[index].name;
      var productId= this.data.goods[parentIndex].foods[index].productId;
      var obj = {productId:productId, currentPrice: price, count: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
      var carArray1 = this.data.carArray.filter(item => item.mark != mark);
      carArray1.push(obj);
      console.log(carArray1);
      carArray1.sort(function(a,b){
        return a.index-b.index
  })
      this.setData({
          carArray: carArray1,
          goods: this.data.goods
      })
      this.calTotalPrice()
      this.setData({
          payDesc: this.payDesc(),
      })

      console.log("car");
     
      for(var i = 0; i< this.data.carArray.length; i++){
          if(this.data.carArray[i].count == 0){
              var item = "carArray["+i+"]";
              this.setData({
                  item : this.data.carArray.splice(i,1)
              });
          }
                  }
                  console.log(this.data.carArray);


      //关闭弹起
      var count1 = 0
      for (let i = 0; i < carArray1.length; i++) {
          if (carArray1[i].count == 0) {
              count1++;
          }
      }
      //console.log(count1)
      if (count1 == carArray1.length) {
          if (num == 0) {
              this.setData({
                  cartShow: 'none'
              })
          }
      }
      console.log(carArray1);
      this.setData({
          carArray: carArray1,
          goods: this.data.goods
      })
      this.calTotalPrice()
      this.setData({
          payDesc: this.payDesc(),
      })
      this.setData({
          carArray: this.paixu(this.data.carArray)
      })
  },
  decreaseShopCart: function (e) {
      console.log('1');
      this.decreaseCart(e);
  },
  //排序
  paixu: function(array){
      //var array2 = array;
      for(var i = 0 ; i< array.length; i++){
          for(var j = 0 ; j< i; j++){
              if(array[i].index < array[j].index){
                  var object = array[i];
                  array[i] = array[j];
                  array[j] = object;
              }
          }
      }
      return array;
  },
  //添加到购物车
  addCart(e) {
      var index = e.currentTarget.dataset.itemIndex;
      var parentIndex = e.currentTarget.dataset.parentindex;
      this.data.goods[parentIndex].foods[index].Count++;
      let currentGood= this.data.goods[parentIndex].foods[index];
      var mark = 'a' + index + 'b' + parentIndex;
      var price = this.data.goods[parentIndex].foods[index].price;
      var num = this.data.goods[parentIndex].foods[index].Count;
      var name = this.data.goods[parentIndex].foods[index].name;
      var productId=currentGood.productId;
      var obj = {productId:productId, currentPrice: price, count: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
      var carArray1 = this.data.carArray.filter(item => item.mark != mark)
      carArray1.push(obj)
      carArray1.sort(function(a,b){
        return a.index-b.index
      })
      this.setData({
          carArray: carArray1,
          goods: this.data.goods
      })
      this.calTotalPrice();
      this.setData({
          payDesc: this.payDesc()
      });
    console.log("====购物车最终数据===",carArray1);
    app.globalData.dingdan = carArray1 
      //this.setData({
        //  carArray: this.paixu(this.data.carArray)
      //});
  },
  addShopCart: function (e) {
      this.addCart(e);
  },
  //计算总价
  calTotalPrice: function () {
      var carArray = this.data.carArray;
      var totalPrice = 0;
      var totalCount = 0;
      for (var i = 0; i < carArray.length; i++) {
          totalPrice += carArray[i].currentPrice * carArray[i].count;
          totalCount += carArray[i].count;
      }
      this.setData({
          totalPrice: totalPrice,
          totalCount: totalCount,
          //payDesc: this.payDesc()
      });
  },
  //差几元起送
  payDesc() {
      if (this.data.totalPrice === 0) {
          return '￥'+this.data.minPrice+'元起送';
      } else if (this.data.totalPrice < this.data.minPrice) {
        console.log(this.data.totalPrice);
          let diff =(Number(this.data.minPrice - this.data.totalPrice)).toFixed(2);
          console.log(diff);
          
          return '还差' + diff + '元起送';
      } else {
          return '去结算';
      }
  },
  //結算
  pay() {
      if (this.data.totalPrice < this.data.minPrice) {
          return;
      }
       //window.alert('支付' + this.totalPrice + '元');
      //确认支付逻辑
      //设计成直接到结算页面
    var list = this.data.totalPrice
      var resultType = "success";
      wx.redirectTo({
          url: '../pay/pay?resultType=' + resultType+'&shoplist111=' +list + '&name=ji'+'&totalp= '+this.data.totalPrice+'&payE='+this.data.deliveryPrice+"&shopName="+this.data.shopName
      })
  },
  //彈起購物車
  toggleList: function () {
      if (!this.data.totalCount) {
          return;
      }
      this.setData({
          fold: !this.data.fold,
      })
      var fold = this.data.fold
      //console.log(this.data.fold);
      this.cartShow(fold)
  },
  cartShow: function (fold) {
      console.log(fold);
      if (fold == false) {
          this.setData({
              cartShow: 'block',
          })
      } else {
          this.setData({
              cartShow: 'none',
          })
      }
      console.log(this.data.cartShow);
  },
  tabChange: function (e) {
      var showtype = e.target.dataset.type;
      this.setData({
          status: showtype,
      });
  },
  onLoad: function (options) {
      // 页面初始化 options为页面跳转所带来的参数
      var that = this;
      
      console.log("====shop====",options);
      //return;
      this.setData({
          payDesc: this.payDesc(),
          shopId: options.shopId,
          shopName: options.shopName,
      });
      console.log(this.data.shopId)
      this.shopdetail();
  },
  onReady: function () {
      // 页面渲染完成
  },
  onShow: function () {
      // 页面显示
  },
  onHide: function () {
      // 页面隐藏
  },
  onUnload: function () {
      // 页面关闭
  }
})