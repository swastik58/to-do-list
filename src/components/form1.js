import React from 'react';

const Name = ({ setInputName }) =>
{
  //JS code and funnction
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputName(e.target.value);
  }
    return(
      <form>
        <input onChange={inputTextHandler} type="text" className="todo-name" placeholder="Enter your name" />
    </form>
    )
};

export default Name;