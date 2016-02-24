/**
 * Created by wmj on 2016/2/24.
 */

var inherit=require('inherit');

var Statistics=inherit({
    __constructor:function(){

        console.log('a Statistics Object has been created!');
        this.__self.objNums++;
    },
    pv:function(){
        console.log('trigger a pv  statistics!');

    },
    vv:function(){
        console.log('trigger a vv statistics!');
    },

},{
    objNums:0,
    getObjNums:function(){
        return this.objNums;
    }
});

module.exports=Statistics;

