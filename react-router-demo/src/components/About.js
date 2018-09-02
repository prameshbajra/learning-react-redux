import React from 'react';

const onClickHandler = (param_id, props) => {
    props.history.push(`/Param/${param_id}`)
}
const About = (props) => {
    return (
        <div>
            <h1>About US</h1>
            <button onClick={() => onClickHandler(1, props)}>One</button>
            <button onClick={() => onClickHandler(2, props)}>Two</button>
            <button onClick={() => onClickHandler(3, props)}>Three</button>
            <button onClick={() => onClickHandler(4, props)}>Four</button>
        </div>
    );
}

export default About;
