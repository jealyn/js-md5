/**
 * @description 动态加载js-md5文件
 * @reference https://html.spec.whatwg.org/multipage/workers.html#importing-scripts-and-libraries
 */
importScripts("https://cdn.jsdelivr.net/gh/emn178/js-md5/build/md5.min.js");

/**
 * @description 获取文件的md5值，利用FileReader和js-md5
 * @param {File} file 文件对象
 * @reference FileReader https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
 * @reference js-md5 https://github.com/emn178/js-md5
 */
self.onmessage = ({ data: file }) => {
  try {
    // 利用FileReader，读取文件并转换为ArrayBuffer
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (ev) => {
      const arrayBuffer = ev.target.result;
      // 利用js-md5插件获取MD5值
      const md5Value = md5(arrayBuffer);
      // 向主线程传递消息
      postMessage(md5Value);
    };
    fileReader.onerror = (err) => {
      throw new Error(err);
    };
  } catch (err) {
    // 向主线程抛出错误
    throw new Error(err);
  }
};
