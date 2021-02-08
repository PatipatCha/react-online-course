import React from "react";

const Sidebar = () => {
  let name = "Patipat Chan";
  const [fullname, setFullname] = React.useState(name);
  const [isShow, setIsShow] = React.useState(true);
  var d = new Date();
  var n = d.toLocaleTimeString();
  const chName = () => {
    let chname = "Pat Pat";
    setFullname(chname);
    setIsShow(!isShow);
  };

  React.useEffect(() => {
    console.log('Hello');
  },[])

  React.useEffect(() => {
    console.log('Click Time '+n);
  })

  React.useEffect(() => {
    console.log('Fullname change'+fullname);
  },[fullname])

  return (
    <div>
      {isShow ? <h1>Hi</h1> : <h1>Hello</h1>}
      <h1>{fullname}</h1>
      <p>
        <button onClick={chName}> Change </button>
      </p>
    </div>
  );
};

export default Sidebar;
