<h2>Let's go deeper</h2>
<section>
    <ol>
        <li class="fragment">
            Animation and Transition 浏览器的支持情况
        </li>
        <li class="fragment">
            不是所有的DOM属性都可以运用动画
        </li>
        <li class="fragment">
            关于动画的优化
        </li>
    </ol>
</section>
<section>
    <h4>Animation and Transition 的浏览器支持情况</h4>
</section>
<section>
    <h3>可以运用动画的属性都需要具备以下特征</h3>
    <ol>
        <li class="fragment">属性起始状态是特定的数值</li>
        <li class="fragment">属性结束状态是特定的数值</li>
    <ol>
</section>
<section>
看个栗子
<pre><code data-trim data-noescape>
```
<div class="box"></div>
```
</code></pre>
<pre><code data-trim data-noescape>
.box {
    display: none;
    height: 200px;
    width: 200px;
    transition: display 1s;
}
.box.is-active {
    display:block;
}
<div class="display-box js-display-box">box</div>
</code></pre>
<div class="fragment" data-type="display-box" data-index=0></div>
</section>
<section>
再看个栗子
<pre><code data-trim data-noescape>
```
<div class="box"></div>
```
</code></pre>
<pre><code data-trim data-noescape>
.box {
    width: 200px;
    transition: height 1s;
}
.box.is-active {
    height: 200px;
}
<div class="height-box js-height-box">box</div>
</code></pre>
<div class="fragment" data-type="height-box" data-index=0></div>
<p class="fragment"> 因为 height 属性默认值为：auto </p>
</section>
<section>
    <a href="http://oli.jp/2010/css-animatable-properties/" target="_blank">animation and transition 支持的属性</a>
</section>
<section>
    <h3>关于性能优化</h3>
    <small class="fragment">当我们在动画中使用 left 或者 padding 这种属性时，导致浏览器会在每一个动画帧完成时重新计算样式，这种计算的代价是非常高的，甚至会引起浏览器多次不必要对re-paint.针对该类型动画我们可以使用 Transform 来做优化，因为 Transform 使用GPU来帮助渲染，这样会大大降低动画对CPU的使用率。</small>
</section>
<section>
<pre><code data-trim data-noescape>
.box {
    height: 100px;
    width: 100px;
    margin-left: 0;
    transition: margin-left 1s;
}
.box.is-active {
    margin-left: 500px;
}
</code></pre>
<div class="padding-box js-padding-box">
</div>
<div class="fragment" data-type="padding-box" data-index=0></div>
</section>
<section>
我们来改造一下
<pre><code data-trim data-noescape>
.box {
    height: 100px;
    width: 100px;
    transform: translateX(0);
    transition: transform 1s;
}
.box.is-active {
    transform: translateX(500px);
}
</code></pre>
<div class="transform-box js-transform-box">
</div>
<div class="fragment" data-type="transform-box" data-index=0></div>
</section>