/**
 * Created by wmj on 2016/2/24.
 */

var inherit=require('inherit');

var Player=inherit({
   __constructor:function(){

       console.log('a Player Object has been created!');
       this.__self.objNums++;
   },
    play:function(){
        console.log('start play!');

    },
    pause:function(){
       console.log('pause play!');
    },
    stop:function(){
        console.log('stop play!');
    },
    resume:function(){
        console.log('resume play!');
    }
},{
   objNums:0,
    getObjNums:function(){
        return this.objNums;
    }
});

module.exports=Player;



