let app = new Vue({
  el:"#app",
  data:{
    books:[
      {id:1,name:"<<算法导论>>",data:"2006-9",price:85.00,count:1},
      {id:2,name:"<<Unix编程>>",data:"2007-12",price:99.00,count:1},
      {id:3,name:"<<操作系统>>",data:"2021-1",price:120.00,count:1},
      {id:4,name:"<<数据结构>>",data:"2015-6",price:89.99,count:1},
    ],
  },
  // 由于要保存价格的二位数
  // 使用过滤器
  filters: {
    showPrice(price){
      return '￥' + price.toFixed(2);
    }
  },
  //设置书的数量
  methods: {
    // 添加数量
    add(index){
      this.books[index].count++;
    },
    // 减少数量
    sub(index){
      this.books[index].count--;
    },
    // 移除书籍
    de(index){
      this.books.splice(index,1);//移除
    }
  },
    // 计算总价
  computed: {
    allPrice(){
      let price = 0;
      for(let i = 0; i<this.books.length; i++){
        price += this.books[i].price * this.books[i].count;//单价*数量 
      }
      return price;
    },
    //2.第二种方法
    // let price = 0;
    // for( let i  in this.books){  //遍历
    //   const book = this.book[i]
    //   price = book.price * book.count;
    // }
    // 3.第三种方法
    // let price = 0;
    // for(let i of this.books){
    //   price += i.price * i.count; 
    // }
    // return price;

  }
})