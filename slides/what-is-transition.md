##what is transition?
<section>
    <p>简而言之</p>
    Transition 就是可以让你的元素在<span class="fragment highlight-red">规定时间</span>内<span class="fragment highlight-red">平滑</span>地改变<span class="fragment highlight-red">属性值</span>（从一个值到另一个）
</section>
<section>
    <pre><code data-trim data-noescape>
.element {
    //属性值：让该属性应用平滑变化机制（all代表应用于所有属性)
    transition-property: width, opacity;
    //规定时间： 定义多长时间内完成变化 （单位可是 s、ms...)
    transition-duration: .5s;
    //如何平滑： 定义变换进度和时间之间的关系
    transition-timing-function: ease;
    //何时开始： 定义多久后开始平滑变化
    transition-dely: .5s;
}
        </code></pre>
</section>
<section>
    咦，后排的老王怎么已经睡着了？
    <p class="fragment">我们还是举栗子吧！</p>
</section>
<section>
来看看代码
<pre><code data-trim data-noescape>
HTML
```
<div class="popout-window with-animation"></div>
<div class="popout-window"></div>
```
</code></pre>
        <pre><code data-trim data-noescape>
.popout-window {
    width: 10%;
    background-color: #525252;
}

.popout-window.is-active {
    width: 100%;
}

.popout-window.with-animation {
    transition: width 1s ease-in;
}
        </code></pre>
</section>
<section>
    平滑与不平滑
    <div class="example-panel">
        <div class="example-panel-individual">
            <div class="popout-window with-animation js-popout-window"></div>
        </div>
        <div class="example-panel-individual">
            <div class="popout-window js-popout-window"></div>
        </div>
    </div>
    <div class="fragment" data-type="popout-window" data-index=0 />
    <div class="fragment" data-type="popout-window" data-index=1 />
</section>
<section>
再加点料
        <pre><code data-trim data-noescape>
.popout-window {
    width: 10%;
    background-color: #525252;
    opacity: 0.3; //透明度0.3
}

.popout-window.is-active {
    width: 100%;
    opacity: 1; //透明度1
}

.popout-window.with-animation {
    transition: width,opacity 1s ease-in;
}
        </code></pre>
</section>
<section>
    再来看看效果
    <div class="example-panel">
        <div class="example-panel-individual">
            <div class="popout-window with-animation with-opacity js-popout-window-opacity"></div>
        </div>
        <div class="example-panel-individual">
            <div class="popout-window with-opacity js-popout-window-opacity"></div>
        </div>
    </div>
    <div class="fragment" data-type="popout-window-opacity" data-index=0 />
    <div class="fragment" data-type="popout-window-opacity" data-index=1 />
</section>
<section>
    <p>问题: 平滑过度的进度和时间的关系怎么处理？</p>
    <p class="fragment">Timing Function！</p>
</section>
<section> 
<p>常用的 Timing Function:</p>
<ol>
<li class="fragment">linear</li>
<li class="fragment">ease</li>
<li class="fragment">ease-in</li>
<li class="fragment">ease-out</li>
<li class="fragment">ease-in-out</li>
<li class="fragment">steps</li>
<li class="fragment">cubic-bezier</li>
<ol>
</section>
<section>
<pre><code data-trim data-noescape>
```
<div class="runing-box liner">
    liner
</div>
<div class="runing-box ease">
    ease
</div>
...
<div class="runing-box ease-out">
    ease-out
</div>
<div class="runing-box ease-in-out">
    ease-in-out
</div>
<div class="runing-box ease-in-out">
    steps
</div>
```
</code></pre>
</section>
<section>
<pre><code data-trim data-noescape>
.runing-box {
    position: absolute;
    left: 0;
    //...
    transition-property: left;
    transition-duration: 3s;
}
.running-box.is-active {
    left: calc(100% - 200px);
}
.liner {
    transition-timing-function: linear;
}
...
.steps {
    transition-timing-function: steps(5, start);
}
</code></pre>
</section>
<section>
    <div class="example-panel">
        <div class="example-panel-individual js-running-box">
            <div class="runing-box-container">
                <div class="runing-box liner">
                    liner
                </div>
            </div>
            <div class="runing-box-container">
                <div class="runing-box ease">
                    ease
                </div>
            </div>
            <div class="runing-box-container">
                <div class="runing-box ease-in">
                    ease-in
                </div>
            </div>
            <div class="runing-box-container">
                <div class="runing-box ease-out">
                    ease-out
                </div>
            </div>
            <div class="runing-box-container">
                <div class="runing-box ease-in-out">
                    ease-in-out
                </div>
            </div>
            <div class="runing-box-container">
                <div class="runing-box steps">
                    steps
                </div>
            </div>
        </div>
    </div>
    <div class="fragment" data-type="running-box" data-index=0 />
</section>
<section>
    <p>What we missed?</p>
    <p class="fragment">cubic-bezier</p>
    <a class="fragment" href="http://cubic-bezier.com/#.17,.67,.83,.67" target="_blank">Let's play!</a>
</section>
<section>
<p>加上 cubic-bezier </p>
<pre><code>
.cubic-bezier {
    transition-timing-function: cubic-bezier(0, 2, 1, -2);
}
</code></pre>
</section>
<section>
    <div class="example-panel">
        <div class="example-panel-individual js-running-box">
            <div class="runing-box-container">
                <div class="runing-box liner">
                    liner
                </div>
            </div>
            <div class="runing-box-container">
                <div class="runing-box ease">
                    ease
                </div>
            </div>
            <div class="runing-box-container">
                <div class="runing-box ease-in">
                    ease-in
                </div>
            </div>
            <div class="runing-box-container">
                <div class="runing-box ease-out">
                    ease-out
                </div>
            </div>
            <div class="runing-box-container">
                <div class="runing-box ease-in-out">
                    ease-in-out
                </div>
            </div>
            <div class="runing-box-container">
                <div class="runing-box steps">
                    steps
                </div>
            </div>
            <div class="runing-box-container">
                <div class="runing-box cubic-bezier">
                    cubic-bezier
                </div>
            </div>
        </div>
    </div>
    <div class="fragment" data-type="running-box" data-index=1 />
</section>
<section>
    <p>Transition 是不是无所不能了？<p>
    <h4 class="fragment">当然不是！</h4>
</section>
<section>
    <p>不信试试这个？<p>
    <div class="example-panel">
        <div class="example-panel-individual">
            <div class="hamburger js-hamburger hamburger-with-infinite js-all-is-animation">
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </div>
            <div class="drawer-box drawer-with-infinite">
                <div class="drawer-box-text">
                    <p>我全是动画</p>
                </div>
            </div>
        </div>
    </div>
    <div class="fragment" data-type="all-is-animation" data-index=0 />
</section>
<section>
    <p>真的好绝望！我该怎么办？</p>
    <div class="fragment" data-fragment-index="1">
        <h3 class="fragment highlight-red" data-fragment-index="1">
            CSS Animation 可以做到!
        </h3>
    </div>
</section>