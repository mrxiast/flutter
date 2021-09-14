var express = require('express');
var app = express();

app.get('/login', (req, res) => {
  res.header('Access-Control-Allow-Methods', '*');
  res.send({

    msg: '操作成功',
    code: 200,
    token: '123456',
    name: 'mark'

  })
})
app.get('/list', (req, res) => {
  res.header('Access-Control-Allow-Methods', '*');
  console.log(req.query)
  setTimeout(() => {
    res.send({

      msg: '操作成功',
      code: 200,
      total: 60,
      reslist: [
        {
          imgUrl: 'https://img0.baidu.com/it/u=3716855795,410397136&fm=26&fmt=auto&gp=0.jpg',
          title: 'ACT Redo CfatACT Redo CfatACT Redo CfatACT Redo CfatACT Redo CfatACT Redo CfatACT Redo CfatACT Redo CfatACT Redo Cfat',
          content: 'content',
          price: 50
        }, {
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171221%2F7951c4f37ee948a2a1fb1f662a1b2feb.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632637860&t=183e5f0746ea302f57eddc3c240be058',
          title: 'ACT Redo Cfat',
          content: 'content',
          price: 50
        }, {
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F04%2F20150904110552_vHmGS.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632637860&t=480bbdbdc6fbf8442aad25e39a19ed07',
          title: 'ACT Redo Cfat',
          content: 'content',
          price: 50
        }, {
          imgUrl: 'https://img0.baidu.com/it/u=3716855795,410397136&fm=26&fmt=auto&gp=0.jpg',
          title: 'ACT Redo Cfat',
          content: 'content',
          price: 50
        }, {
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F31%2F20151031190344_Rezuv.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632637860&t=0219e59f282deafc14b49a605e0b95b6',
          title: 'ACT Redo Cfat',
          content: 'content',
          price: 50
        }, {
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212223628_XUH4f.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632637860&t=2fdf3a9a11efada7d3e508570107cc45',
          title: 'ACT Redo Cfat',
          content: 'content',
          price: 50
        }, {
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F08%2F20170408194023_3Lj5H.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632637860&t=f7a3ab4ad10f7ea65fce646128c6162c',
          title: 'ACT Redo Cfat',
          content: 'content',
          price: 50
        }, {
          imgUrl: 'https://img0.baidu.com/it/u=3716855795,410397136&fm=26&fmt=auto&gp=0.jpg',
          title: 'ACT Redo Cfat',
          content: 'content',
          price: 50
        }, {
          imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F13%2F20150913102840_nXhdL.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632637860&t=1570018084182f4dfdca5ce1d11929b9',
          title: 'ACT Redo Cfat',
          content: 'content',
          price: 50
        }, {
          imgUrl: 'https://img0.baidu.com/it/u=3716855795,410397136&fm=26&fmt=auto&gp=0.jpg',
          title: 'ACT Redo Cfat',
          content: 'content',
          price: 50
        }
      ]

    })
  }, 2000);

})
app.get('/routes', function (req, res) {
  res.header('Access-Control-Allow-Methods', '*');
  let data = {
    routes: [
      {
        id: '01',
        icon: 'icon-shangpin',
        name: '订单管理',

        children: [
          {
            id: '01-1',
            icon: 'icon-shangpin',
            name: '订单列表',
          },
          {
            id: '01-2',
            icon: 'icon-shangpin',
            name: '生产管理',
            children: [
              {
                id: '01-2-1',
                icon: 'icon-shangpin',
                name: '生产列表',
              },
              {
                id: '01-2-2',
                icon: 'icon-shangpin',
                name: '审核管理',
              }
            ]
          },
          {
            id: '01-3',
            icon: 'icon-shangpin',
            name: '退货管理',
          }
        ]
      },
      {
        id: '02',
        icon: 'icon-shangpin',
        name: '产品管理',
        children: [
          {
            id: '02-1',
            icon: 'icon-shangpin',
            name: '产品列表',
          },
          {
            id: '02-2',
            icon: 'icon-shangpin',
            name: '产品分类',
          }
        ]
      }
    ],
    code: 200,
    msg: '请求成功'
  }
  res.send(
    data
  );
});
app.listen(4300, () => {
  console.log('120')
});