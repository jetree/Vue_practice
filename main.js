(function(){
    'use strict'
  
    Vue.component('color-slider',{
      props:['color'],
      data:function(){
        return{
          value:"0",
        }
      },

      // templateは``で囲むと改行できる
      template:`
        <li>
          <p>{{color}}</p>
          <input type="range" @input="childMethod" v-model="value" min="0" max="255">
          <p><input type="number" @input="childMethod" v-model="value" min="0" max="255"></p>
          <p>{{value}}</p>
        </li>
        `,

      methods:{
        childMethod:function(){
          let color = this.$props.color
          let value = this.value
          console.log(color);
          console.log(value);
          this.$emit('parent-method',color,value);//第1引数:カスタムイベント,第２引数以降”親に渡すデータ”
        }
      }
    })

    let app = new Vue({
      el: "#app",
      data:function(){
        return{
          red:"0",
          green:"0",
          blue:"0",
          opacity:"1",
          style:{
            backgroundColor:"rgba(0,0,0,1)",
          },
        }
      },

      methods:{
        $changeColor:function(color,value){
          console.log(color)
          console.log(this.$data)
          this.$data[color] = value
          this.style.backgroundColor = 'rgba('+ this.red + ',' + this.green + ',' + this.blue + ',' + this.opacity +')'
          console.log(this.style.backgroundColor)
        },
        $changeOpacity:function(){
          console.log(this.opacity)
          this.style.backgroundColor = 'rgba('+ this.red + ',' + this.green + ',' + this.blue + ',' + this.opacity +')'
        },

      }
    });
  
  }

)();