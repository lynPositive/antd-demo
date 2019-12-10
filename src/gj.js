import React, {Component} from 'react'

export default (WrappedComponent) => {
  class NewComponent extends Component {
      constructor() {
        super();
        this.state = {
          username: ''
        }
      }

      componentWillMount() {
        let username = localStorage.getItem('username');
        this.setState({
          username: username
        })
      }

      render() {
        return <WrappedComponent username={this.state.username}/>
      }
  }

  return NewComponent
}




// import React from 'react';

// const CommentListWithSubscription = withSubscription(
//   CommentList, // 被包裹的组件
//   (DataSource) => DataSource.getComments() // 作为props传入的数据
// );

// const BlogPostWithSubscription = withSubscription(
//   BlogPost, // 被包裹的组件
//   (DataSource, props) => DataSource.getBlogPost(props.id) // 作为props传入的数据
// );

// // ---- 高阶组件 ------------------------------------------
// // 接受一个组件WrappedComponet作为参数
// function withSubscription(WrappedComponent, selectData) {
//   // 返回一个新的组件
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {
//         data: selectData(DataSource, props)
//       };
//     }

//     componentDidMount() {
//       // 横切关注点(cross-cutting concerns，面向切面编程)
//       DataSource.addChangeListener(this.handleChange);
//     }

//     componentWillUnmount() {
//       // 横切关注点
//       DataSource.removeChangeListener(this.handleChange);
//     }

//     // 横切关注点
//     handleChange() {
//       this.setState({
//         data: selectData(DataSource, this.props)
//       });
//     }

//     render() {
//       // 给包含的组件传递数据
//       // 注意，所有的props里的东西都要传递给被包裹的组件
//       return <WrappedComponent data={this.state.data} {...this.props} />;
//     }
//   };
// }

// export default CommentListWithSubscription;

