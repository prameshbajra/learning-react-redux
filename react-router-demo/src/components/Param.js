import React from 'react';

const Param = (props) => {
    return (
        <div>
            <h1>You have just clicked number</h1>
            {props.match.params.param_id}
        </div>
    );
}

export default Param
    ;
