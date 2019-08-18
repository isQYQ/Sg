// import React from 'react'
// import { List, Switch } from 'antd-mobile';
// import { createForm } from 'rc-form';
// // import './ant.css'
//  class SwitchExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       checked: false,
//       checked1: true,
//     };
//   }

//   render() {
//     const { getFieldProps } = this.props.form;
//     return (
      
//         <List.Item
//           extra={<Switch
//             {...getFieldProps('Switch1', {
//               initialValue: this.state.checked1,
//               valuePropName: 'checked',
//               onChange: (val) => {
//                 console.log(val);
//                 // Do not `setState` with rc-form
//                 // this.setState({ checked1: val });
//               },
//             })}
//             onClick={(checked) => {
//               // set new value
//               this.props.form.setFieldsValue({
//                 Switch1: checked,
//               });
//             }}
//           />}
//         >推送消息</List.Item>
      
        
     
//     );
//   }
// }

// const Se = createForm()(SwitchExample);
// export default Se;
// // ReactDOM.render(<Se />, mountNode);