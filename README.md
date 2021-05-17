# js-md5
使用JavaScript获取文件的md5值

# 原理简介
文件上传后，使用`FileReader`读取文件，使用js-md5插件计算md5值。为了实现文件读取和md5计算不阻塞主线程，特使用`Worker`开启多线程。

# 核心代码
```js
// 利用FileReader，读取文件并转换为ArrayBuffer
const fileReader = new FileReader();
fileReader.readAsArrayBuffer(file);

fileReader.onload = (ev) => {
  const arrayBuffer = ev.target.result;
  // 利用js-md5插件获取MD5值
  const md5Value = md5(arrayBuffer);
};
```

# 参考链接

- [js-md5](https://github.com/brix/crypto-js)
- [web-worker](https://html.spec.whatwg.org/multipage/workers.html#workers)
- [FileReader](https://w3c.github.io/FileAPI/#reading-data-section)
