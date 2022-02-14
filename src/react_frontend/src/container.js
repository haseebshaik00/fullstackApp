import React from 'react';

const Container = props => (
    <div style={{width: '1000px', margin:'0 auto', marginTop: '5%'}}>
        {props.children}
    </div>
);
console.log("container calling");

export default Container;