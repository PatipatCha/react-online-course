import React from "react";

const Footer = () => {
  const addr = <p> Bangkok</p>;
  let num = 10;
  const showMessage = () => {
    return addr + ".com";
  };
  const isLogin = true;

  const products = [
    { id: 1, name: "Coke" },
    { id: 2, name: "Pepsi" },
  ];

  return (
    <div>
      <h1>
        {num + 100} <br />
        {showMessage()}
        {isLogin == true && (
          <>
            <p> Welcome </p>
            <p>Thailand</p>
          </>
        )}
        {isLogin ? "Yes" : "What"}
        <hr />
      </h1>
      <b>
        <ul>
          {products.map((product, index) => {
            return (
              <>
                <li key={products.id}>
                  {products.name} {index}
                </li>
              </>
            );
          })}
        </ul>
      </b>
    </div>
  );
};

export default Footer;
