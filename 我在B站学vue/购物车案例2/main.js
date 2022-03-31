var app = new Vue({
  el: '#app',
  data: {
      Ip_Json: [{
          id: 1,
          name: 'huawei 10',
          price: 2600,
          count: 1
      },
          {
              id: 2,
              name: 'huawei P10',
              price: 3999,
              count: 1
          },
          {
              id: 3,
              name: 'huawei 12',
              price: 4777,
              count: 1
          }]

  },
  methods:{
      totalPrice : function(){
          var totalP = 0;
          for (var i = 0,len = this.Ip_Json.length;i<len;i++) {
              totalP+=this.Ip_Json[i].price*this.Ip_Json[i].count;
          }
          return totalP;
      }


  }
})