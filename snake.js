/**
 *
 * Created by liang on 2017/10/6.
 */
//蛇的开始
(function(window){
    //0.声明一个数组，用来保存显示蛇的那些个div
    var list=[];

    //1.构造函数
    function Snake(width,height,direction){
        this.width=width||20;
        this.height=height||20;
        this.direction=direction||"right";
        this.body=[
            {x:3,y:1,color:"red"},
            {x:2,y:1,color:"blue"},
            {x:1,y:1,color:"yellow"},
        ];
    }


    //4.让蛇动起来
    Snake.prototype.move=function(food,map){
        console.log(map);

        var i=this.body.length-1;
        for (; i>0; i--) {
            this.body[i].x=this.body[i-1].x;
            this.body[i].y=this.body[i-1].y;
        }


        switch (this.direction){
            case "left":
                this.body[0].x--;
                break;
            case "right":
                this.body[0].x++;
                break;
            case "top":
                this.body[0].y--;
                break;
            case "bottom":
                this.body[0].y++;
                break;
        }

        //判断蛇有没有吃到食物- 就是看蛇头的坐标和食物的坐标是否重合
        var foodX=food.x;
        var foodY=food.y;
        var headX=this.body[0].x;
        var headY=this.body[0].y;
        if(foodX==headX&&foodY==headY){
            console.log("111");
            var foodUnit={
                x:this.body[this.body.length-1].x,
                y:this.body[this.body.length-1].y,
                color:food.color
            }

            this.body.push(foodUnit);


            food.show(map);
        }



    }


    Snake.prototype.show=function(map){
        //显示新位置上的蛇之前，把老位置上的蛇给删掉
        remove();

        for (var i = 0; i < this.body.length; i++) {
            var unit=this.body[i];
            var snakeUnit=document.createElement("div");
            snakeUnit.style.width=this.width+"px";
            snakeUnit.style.height=this.height+"px";
            snakeUnit.direction=this.direction;
            snakeUnit.style.position="absolute";
            snakeUnit.style.border="1px solid black";
            snakeUnit.style.left=unit.x*this.width+"px";
            snakeUnit.style.top=unit.y*this.height+"px";
            snakeUnit.style.backgroundColor=unit.color;
            map.appendChild(snakeUnit);
            //把这个div装进数组list中
            list.push(snakeUnit);
        }
    }


    //5.删除蛇的方法-私有方法
    function remove(){
        for (var i = list.length-1; i >=0; i--) {
            list[i].parentNode.removeChild(list[i]);
            list.pop();
        }
    }
    window.Snake=Snake;
}(window))

//蛇的结束