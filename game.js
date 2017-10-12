/**
 * Created by liang on 2017/10/6.
 */
//游戏的开始
(function(window){
   /* 所有的关于游戏逻辑的代码都写在这个对象里
    游戏里面有  食物 蛇 地图 让游戏开始的方法*/

    var that=null;

    function Game(map){
        this.food=new Food();
        this.snake=new Snake();
        this.map=map;
        that=this;
    }

    //2.游戏运行的方法
    Game.prototype.start=function(){
        //让蛇和食物都显示出来
        this.food.show(this.map);
        //蛇最初的位置
        this.snake.show(this.map);
        //b.让蛇动起来
        runSnake();

        //c、让蛇根据按键移动
        bindKey();
    }

    //4.蛇自动动起来-私有方法
    function runSnake(){
        var timerID=setInterval(function(){
            //调用移动
            this.snake.move(this.food,this.map);
            //移动后重新显示
            this.snake.show(this.map);

            var headX=this.snake.body[0].x;
            var headY=this.snake.body[0].y;
            if(headX<0||headX>=this.map.offsetWidth/this.snake.width){

                clearInterval(timerID);
                alert("GAVE OVER");
            }

            if(headY<0||headY>=this.map.offsetHeight/this.snake.height){
                clearInterval(timerID);
                alert("GAVE OVER");
            }

            for(var i= 1;i<this.snake.body.length;i++){
                if(headX==this.snake.body[i].x&&headY==this.snake.body[i].y){
                    clearInterval(timerID);
                    alert("GAVE OVER");
                }
            }

        }.bind(that),500)
    }


    function bindKey(){
        document.addEventListener("keydown",function(e){
            console.log(e.keyCode+"rtweghhhhhhhhhhhhhhhhhhhhhhh");
            switch (e.keyCode){
                case 37:
                    this.snake.direction="left";
                    break;
                case 38:
                    this.snake.direction="top";
                    break;
                case 39:
                    this.snake.direction="right";
                    break;
                case 40:
                    this.snake.direction="bottom";
                    break;
            }
        }.bind(that))
    }

    //3.把创建游戏对象的构造函数Game暴露出去
    window.Game=Game;
}(window))
//游戏的结束