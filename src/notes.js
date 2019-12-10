/*
1.react性能优化是哪个周期函数
shouldComponentUpdate 这个方法用来判断是否需要调用render方法重新描绘dom。
因为dom的描绘非常消耗性能,如果我们能在shouldComponentUpdate这个方法中能够
写出更优化的dom diff算法，可以极大的提高性能
 */