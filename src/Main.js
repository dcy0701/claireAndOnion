/**
 * Created by Rychou on 2018/4/19.
 */
import React, {Component} from  'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3'


class Main extends Component{
    state={
        date:{},
    }
    componentDidMount(){
        this.print();
        setInterval(()=>{
                this.time(2017,10,1)
            },1000
        )
        var audio = document.getElementById("audio");
        setTimeout(()=>audio.play(),2500)
    }
    print = ()=>{
        $.fn.autotype = function() {
            var _this=$(this);
            var str=_this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str=str.replace(/(\s){2,}/g,"$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args=arguments;
                var current = str.slice(index, index+1);
                // html标签完整输出,如：<p>
                if (current == '<'){
                    index = str.indexOf('>', index) + 1;
                }
                else{
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length-1){ //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                }else{
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn,200)
            };
            // 延迟1s开始
            setTimeout(timer,1000);
        };
        $("#autotype").autotype();
    }
    time =(year,month,day)=>{
        var dateNow = new Date();
        var dateJNR = new Date(year,month-1,day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR)/(24*3600*1000));
        var hour = parseInt(((dateNow - dateJNR)/(3600*1000))%24);
        var minute = parseInt((dateNow - dateJNR)/(1000*60)%60);
        var second = parseInt((dateNow - dateJNR)/1000%60);
        this.setState({date:{d:d,hour:hour,minute:minute,second:second}});
    };
    render(){
        const date =()=>{
            if (this.state.date.d!==undefined){
                const {d,hour,minute,second} = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return(
            <div className="App animated bounceInLeft">
            <div className="date">{date()}</div>
            <div id="autotype">
                <h1 style={{fontWeight:900}}>哈喽！龚小宝</h1>
                <p >在煽情开始之前，先放首歌当背景音乐吧！Music!</p>
                <p> 明天我们就要结婚了！！现在特别的期待！</p>
                <p> 我们已经在一起{this.state.date.d}天了，感觉真的很快！走过了漫长的异地恋，想起来当初的那句“熬过异地，便是一生”，我们现在终于实现了这个目标！
                </p>
                <p>“怎么会爱上了她，就这样跟她回家，忘记了我的所有我的一切无所谓。”
                </p>
                <p>
                    当我认定你以后，我的人生目标就改变了，从只知道写代码到生命里只有你，义无反顾的离开了漂了6年的北京。
                    到一个没有任何朋友任何亲人的陌生城市，现在我的世界只有你了。
                    但是我从来都不后悔，因为如果没有你的拯救，我现在也许还在利泽西园的小黑屋里...
                    也可能一辈子住在出租屋里，半辈子在外游荡没有自己的家。
                </p>
                <p>
                    我知道我不是一个很优秀的人，有很多坏习惯，坏脾气。感谢小宝一直以来对我的包容，帮忙改掉这些坏毛病。
                    虽然我们也吵过很多架，但是我们也越来越会互相理解，互相扶持了。
                    我也会保证，以后每次吵架后还像往常一样，去跟你去认错的。
                </p>
                <p>明天你就是我的合法妻子了，我很幸运也很幸福的娶到了你！
                </p>
                <p>
                   我会用我的下半生去爱你，我会尽职尽责，做一个好丈夫，一个未来的好爸爸，更是一个负责的人。
                   也许现在我们经济上有一些负担，但是我会努力赚钱，为了我们婚后的美好生活打拼！希望未来不会在经济上让你委屈！
                   当然，无论未来 <del>贫穷</del> 与富贵，我都永远只爱你一人，不离不弃。
                </p>
                <p>祝我们新婚快乐！❤️❤️❤️ </p>
                <div style={{textAlign:'right'}}>
                    <p>爱你的♥Onion</p>
                    <p>2019年3月13日</p>
                </div>
            </div>
                <audio id="audio" src={url}></audio>
            </div>
        )
    }
}
export default Main