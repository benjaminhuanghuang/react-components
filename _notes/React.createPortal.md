一般使用 React 的组件都是挂到父组件的 this.props.children 上面，总是被最近的父组件所捕获，最终到 React 根组件上。

而 Protals 则提供了一种将组件直接挂载到直接父组件 DOM 层次之外的一类方式。

in React 16, react-dom 提供的具体方法是 
```
ReactDOM.createPortals(child, container)
```
这个方法需要两个参数，第一个参数是需要挂载的组件实例，而第二个参数则是要挂载到的DOM节点。一般来说第一个参数可能传递的是需要挂载的 this.props.children



## 应用场景
dialog, toolTip