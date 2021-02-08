import React from "react";

import PropTypes from 'prop-types';

const L2 = ({title,zipcode,isOpen}) => {

    // const {title,zipcode} = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{zipcode} {isOpen.toString()}</p>
    </div>
  );
};

L2.propTypes ={
    title: PropTypes.string ,
    zipcode: PropTypes.number
};

export default L2;
