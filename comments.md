### 完成度：


__Details:__



### 测试：


__Details:__



### 知识点：


__Details:__
+ \+ html 标签使用合理
- \- 不建议把componentDidMount写成箭头函数，https://github.com/keajs/kea-saga/issues/2

### 工程实践：
* 这里可以不用在onChange的处理输入值，state也就不用管理newStudentName，onKeyPress的时候就可以直接拿到event.target.value
* 这块跟StudentList里面有重复，建议提取共用的组件

__Details:__
+ \+ 复杂逻辑抽取方法，（这里也可以提取一个单独的组件）
+ \+ 有把数据请求提取到单独的service，并且提取URL常量
+ \+ 有小步提交，提交信息符合语义
- \- url 不太符合restful

### 综合：


__Details:__
+ \+ 功能完整实现，组件划分合理，文件结构合理


