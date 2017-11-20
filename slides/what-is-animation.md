##What is css animation?
<section>
<p>CSS animation 是</p>
    CSS3 可以让大多数HTML元素呈现动画效果的技术
</section>
<section>
<p>Animation 的关键属性</p>
<ol>
    <li class="fragment">
        animation-name
    </li>
    <li class="fragment">
        animation-duration
    </li>
    <li class="fragment">
        animation-iteration-count
    </li>
    <li class="fragment">
        animation-play-state
    </li>
    <li class="fragment">
        animation-fill-mode
    </li>
    <li class="fragment">
        animation-direction
    </li>
    <li class="fragment">
        animation-timing-function
    </li>
    <li class="fragment">
        animation-delay
    </li>
</ol>
</section>
<section>
1. animation-name: <你的动画名称>
<pre><code data-trim data-noescape>//定义一个名为 text-animation 的动画
@keyframes text-animation {
    from {
        font-size: 1em; //起始状态
    }

    40% {
        font-size: 1.4em; //中间状态 
    }
    //中间状态可以有任意多个...
    to {
        font-size: 2em; //最终状态
    }
}
</code></pre>
</section>
<section>
2.animation-duration:  <单次动画执行时间>
<pre><code data-trim data-noescape>.element {
    animation-duration: .3s; //0.3 秒
    //animation-duration: 3s; //3秒
    //animation-duration: 300ms; //300毫秒
}
</code></pre>
</section>
<section>
3. animation-iteration-count: <动画执行次数>
<pre><code data-trim data-noescape>.element {
    animation-iteration-count: 2; //动画执行两次
    //animation-iteration-count: <mark>infinite;</mark>//一直执行动画
}
</code></pre>
</section>
<section>
看个栗子
<pre><code data-trim data-noescape>
HTML
```
<div class="text-animation">
    我是栗子
</div>
```
</code></pre>
<pre><code data-trim data-noescape>.text-animation {
    animation-name: text-animation;
    animation-duration: .3s;
    animation-iteration-count: infinite;
}
</code></pre>

<div class="fragment text-animation">
    我是栗子
</div>
</section>
<section>
4. animation-play-state: `<paused|running>`
<pre><code data-trim data-noescape> //加点料
.text-animation.is-active {
    animation-play-state: paused;
}
</code></pre>
<div class="fragment text-animation js-text-animation">
    我是栗子
</div>
<div class="fragment" data-type="text-animation" data-index=0 />
</section>
<section>
<p>5. animation-fill-mode: <填充模式></p>
<small>
    <table class="dataintable">
    <tbody><tr>
    <th style="width:15%;">值</th>
    <th>描述</th>
    </tr>
    <tr>
    <td>none</td>
    <td>不改变默认行为。</td>
    </tr>
    <tr>
    <td>forwards</td>
    <td>当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。</td>
    </tr>
    <tr>
    <td>backwards</td>
    <td>在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。</td>
    </tr>
    <tr>
    <td>both</td>
    <td>向前和向后填充模式都被应用。</td>
    </tr>
    </tbody></table>
</small>
</section>
<section>
<p>啊...大脑一团浆糊，必须来个栗子</p>
<pre><code data-trim data-noescape>
HTML
```
<div class="text-animation-none">
    none
</div>
<div class="text-animation-forwards">
    forwards
</div>
<div class="text-animation-backwards">
    backwards
</div>
<div class="text-animation-both">
    both
</div>
```
</code></pre>
</section>
<section>
<pre><code data-trim data-noescape>
@keyframes text-color-animation {
    from {
        color: red;
    }
    to {
        color: blue;
    }
}
.text-animation-none {
    color: white;
    animation-name: text-color-animation ;
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-play-state: paused;
    animation-fill-mode: none;
    animation-delay: .5s;
    margin-bottom: 1rem;
}
.text-animation-none.is-active {
    animation-play-state: running;
}
...
</code></pre>
</section>
<section>
<div>
    <span class="font-color-symbol">起始值</span>
    <span class="font-color-symbol-red">第一帧</span>
    <span class="font-color-symbol-blue">最后一帧</span>
    <div class="example-panel">
        <div class="example-panel-individual">
            <div class="text-animation-none js-fill-mode">
                none
            </div>
            <div class="fragment" data-type="fill-mode" data-index=0> </div>
            <ol class="fragment">
                <li>白</li>
                <li>红</li>
                <li>蓝</li>
                <li>白</li>
            </ol>
        </div>
        <div class="example-panel-individual">
            <div class="text-animation-forwards js-fill-mode">
                forwards
            </div>
            <div class="fragment" data-type="fill-mode" data-index=1 ></div>
            <ol class="fragment">
                <li>白</li>
                <li>红</li>
                <li>蓝</li>
            </ol>
        </div>
        <div class="example-panel-individual">
            <div class="text-animation-backwards js-fill-mode">
                backwards
            </div>
            <div class="fragment" data-type="fill-mode" data-index=2 ></div>
            <ol class="fragment">
                <li>红</li>
                <li>蓝</li>
                <li>白</li>
            </ol>
        </div>
        <div class="example-panel-individual">
            <div class="text-animation-both js-fill-mode">
                both
            </div>
            <div class="fragment" data-type="fill-mode" data-index=3 ></div>
            <ol class="fragment">
                <li>红</li>
                <li>蓝</li>
            </ol>
        </div>
    </div>
</div>
</section>
<section> 
    <p>6. animation-direction: `<normal|alternate>`</p>
    <table class="dataintable">
        <tbody><tr>
            <th>值</th>
            <th>描述</th>
            </tr>
            <tr>
                <td>normal</td>
                <td>默认值。动画应该正常播放。</td>
            </tr>
            <tr>
                <td>alternate</td>
                <td>动画应该轮流反向播放。</td>
            </tr>
        </tbody>
    </table>
    <small class="fragment" data-fragment-index="1">
        <p class="fragment highlight-red" data-fragment-index="1">
            如果 animation-direction 值是 "alternate"，则动画会在奇数次数（1、3、5 等等）正常播放，而在偶数次数（2、4、6 等等）向后播放。
        </p>
    </small>
</section>
<section>
<p>&nbsp;</p>
<pre><code>//动画定义
@keyframes running-box-animation {
    from {
        left: 0;
    }

    to {
        left: calc(100% - 200px);
    }
}
.runing-box-animation {
    animation-name: running-box-animation;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: normal;
}
.runing-box-animation.alternate {
        animation-direction: alternate;
}
.runing-box-animation.reverse {
    animation-direction: reverse;
}
</code></pre>
</section>
<section>
<div class="example-panel" style="min-height:200px;">
    <div class="example-panel-individual">
        <div class="runing-box-container">
            <div class="runing-box-animation">
                normal
            </div>
        </div>
        <div class="runing-box-container">
            <div class="runing-box-animation reverse">
                reverse
            </div>
        </div>
        <div class="runing-box-container">
            <div class="runing-box-animation alternate">
                alternate
            </div>
        </div>
    </div>
</div>
</section>
<section>
    <p>
        6. animation-timing-function
    </p>
    <div class="fragment"> 和 CSS Transition timing function 一样</div>
</section>
<section>
    <p>
        7. animation-delay: <延时开始动画的时间>
    </p>
<pre><code>//延迟4s开始动画
.element {
    animation-delay: 4s;
}
</code></pre>
</section>