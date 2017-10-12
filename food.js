/**
 * Created by liang on 2017/9/30.
 */

//食物的开始
(function(window){
    //食物，有x，y坐标，还有width，height卡U你高，还有颜色，所以外面说食物应该就是一个对象。
    //每个食物都要显示在地图。所以把食物显示在地图这个方法，写在原型内。

    var list=[];

    var colorArr = ["skyblue","yellowgreen","greenyellow","purple","yellow","orange","hotpink","pink"];

    //1.构造函数来创建食物
    function Food(width,height){
        this.width= width||20;
        this.height= height||20;
    }

    //2.在原型中添加显示食物的方法
    Food.prototype.show=function(map){
        remove();


        //如何把这个食物显示在这个地图上？可以创建一个div。，让这个div拥有这个食物的所有显示信息，让这个div装进这个地图中。
        var divFood=document.createElement("div");
        //随机产生食物的坐标
        this.x=Math.floor(map.offsetWidth/this.width*Math.random());
        this.y=Math.floor(map.offsetHeight/this.height*Math.random());
        this.color=colorArr[Math.floor(Math.random()*colorArr.length)];
        divFood.style.position="absolute";
        divFood.style.left= this.x*this.width+"px";
        divFood.style.top=this.y*this.height+"px";
        divFood.style.width=this.width+"px";
        divFood.style.height=this.height+"px";
        divFood.style.backgroundColor=this.color;
        map.appendChild(divFood);

        list.push(divFood);
    }

    //移除食物的方法
    function remove(){
        for (var i = list.length-1; i >=0 ; i--) {
            list[i].parentNode.removeChild(list[i]);
            list.pop();
        }
    }
    //3.把构造函数暴露出去
    window.Food=Food;
}(window))
//食物的结束