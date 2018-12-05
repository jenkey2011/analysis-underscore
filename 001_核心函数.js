  // Create a safe reference to the Underscore object for use below.
  // 核心函数
  // `_` 其实是一个构造函数
  // 支持无 new 调用的构造函数（思考 jQuery 的无 new 调用）
  // 将传入的参数（实际要操作的数据）赋值给 this._wrapped 属性
  // OOP 调用时，_ 相当于一个构造函数
  // each 等方法都在该构造函数的原型链上
  // _([1, 2, 3]).each(alert)
  // _([1, 2, 3]) 相当于无 new 构造了一个新的对象
  // 调用了该对象的 each 方法，该方法在该对象构造函数的原型链上

  var _ = function (obj) {
    // 以下均针对 OOP 形式的调用
    // 如果是非 OOP 形式的调用，不会进入该函数内部

    // 如果 obj 已经是 `_` 函数的实例，则直接返回 obj
    if (obj instanceof _)
      return obj;

    // 如果不是 `_` 函数的实例
    // 则调用 new 运算符，返回实例化的对象
    if (!(this instanceof _))
      return new _(obj);

    // 将 obj 赋值给 this._wrapped 属性
    this._wrapped = obj;
  };
  _.size = function (obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };
  console.log(_([1,2,3]).size())