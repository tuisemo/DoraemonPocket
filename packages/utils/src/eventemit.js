class EventEmiter {
	constructor() {
	  this._events = {}
	}
	// 添加事件监听
	on = (eventName, callback) => {
	  if (this._events[eventName]) {
		// 如果已有监听事件，则增加一个回调
		this._events[eventName].push(callback)
	  } else {
		// 如果没有就创建一个数组
		this._events[eventName] = [callback]
	  }
	}
	// 触发事件执行
	emit = (eventName, ...rest) => {
	  if (this._events[eventName]) { // 循环一次执行
		this._events[eventName].forEach((item) => {
		  item.apply(this, rest)
		})
	  }
	}
	// 移除监听事件
	removeListener = (eventName, callback) => {
	  if (this._events[eventName]) {
		// 当前数组和传递过来的callback相等则移除掉
		this._events[eventName] =
		  this._events[eventName].filter(item => item !== callback)
	  }
	}
	// 仅订阅执行一次
	once = (eventName, callback) => {
	  function one() {
		// 在one函数运行原来的函数，只有将one清空
		callback.apply(this, arguments)
		// 先绑定 执行后再删除
		this.removeListener(eventName, one)
	  }
	  this.on(eventName, one)
	  // 此时emit触发会执行此函数，会给这个函数传递rest参数
	}
  }
  export default EventEmiter
  