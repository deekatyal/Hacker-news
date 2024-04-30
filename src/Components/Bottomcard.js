import React from 'react';

function Bottomcard(props) {
    const { title, url, number, by, score } = props;

    const handleClick = () => {
        window.open(url, '_blank');
    };

    return (
        <div className='bottom' onClick={handleClick} style={{ width:'90vw' }}>
            <p style={{ marginLeft: '23px', marginTop:'0px', marginBottom:'0px', cursor: 'pointer'}}>{number}. {title}</p>
            <p style={{ marginLeft: '40px', marginTop:'0px', marginBottom:'0px', fontSize:'10px' }}>{score} points by {by} </p>
        </div>
    );
}

export default Bottomcard;