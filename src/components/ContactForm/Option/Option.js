// import React
import React from 'react';

const Option = (props) => {
   const { key,val } = props;
   return (
      <React.Fragment>
         <option value={key}>{val}</option>
      </React.Fragment>
   );
};

export default Option;
