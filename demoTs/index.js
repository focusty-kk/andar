/**
 * Created by yanghui on 2017/1/4.
 */
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // 打印: a b {}
});
myEmitter.emit('event', 'a', 'b');

<div class="tb-item-common">
    <div class="tb-item-icon">
        <img src="/BsfwtWeb/images/xjgs-ewm.png" alt="">
    </div>
    <span class="tb-item-tx">国税App</span>
</div>