/**
 * Created by wmj on 2016/2/24.
 */

var inherit=require('inherit');
var Player=require('library/player');
var FlashPlayer=inherit(Player,{

    __constructor:function(){

        this.__base();
        console.log('a FlashPlayer Object has been created!');
    },
    play:function(){
        this.__base();
        console.log('a FlashPlayer start play!');

    },
    pause:function(){
        this.__base();
        console.log('a FlashPlayer pause play!');
    },
    stop:function(){
        this.__base();
        console.log('a FlashPlayer stop play!');
    },
    resume:function(){
        this.__base();
        console.log('a FlashPlayer resume play!');
    }


},{

    getObjNums:function(){


        return this.__base();
    }
});

module.exports=FlashPlayer;