(function(){
    'use strict'
  
    Vue.component('color-slider',{
      props:['color'],
      data:function(){
        return{
          value:"0",
        }
      },
      template:'<div><p>{{color}}</p><input type="range" v-model="value" min="0" max="255"><p><input type="number" v-model="value" min="0" max="255"></p></div>',
    })

    let app = new Vue({
      el: "#app",
      data:function(){
        return{
          style:{
            backgroundColor:'{rgb(0,0,0)}'
          },
        }
      },
      // methods:{
       
      //   }
    });
  
  }

)();