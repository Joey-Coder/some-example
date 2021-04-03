/**
 * 判断类型
 * 自带的typeof 只能清晰识别Undefined、Boolean、Number、String、Symbol、Function
 * 无法识别Object， Date， null，Array识别结果都是Object
 * @param {Object} obj
 */
 function typeOf(obj) {
    let reg = /\[object (\w+)\]/;
    let res = reg.exec(Object.prototype.toString.call(obj))[1]; // [object xxx] => xxx
    return res.toLowerCase();
  }
  
  // 自带的typeof可以精确识别
  // console.log(typeof undefined, typeOf(undefined));
  // console.log(typeof 1, typeOf(1));
  // console.log(typeof "1", typeOf("1"));
  // console.log(typeof true, typeOf(true));
  // console.log(
  //   typeof function () {},
  //   typeOf(function () {})
  // );
  // 原生typeof无法精确识别，识别结果都是Object
  // console.log(typeof [], typeOf([]))
  // console.log(typeof {}, typeOf({}));
  // console.log(typeof (new Date()), typeOf(new Date()));
  // console.log(typeof null, typeOf(null))
  
 export default typeOf 