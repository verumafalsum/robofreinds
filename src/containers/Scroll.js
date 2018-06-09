import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', borderTop: '5px solid', height: '550px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;