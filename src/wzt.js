// function Component 一个普通的函数，不可以在其中使用this.state,setState(),
// 叫做“无状态组件”,所以一个组件需要用到状态的时候要用到class component。
// function Component 无生命周期

import React from 'react';

function ProfilePage(props) {
  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={ handleClick }>Follow</button>
  );
}

export default ProfilePage;