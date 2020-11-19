import React from 'react';

function PortCard(props) {
    return (
        <div className="card">
        <img className="portfolioImage" src={props.imgSrc} alt={props.title} width={500} />
            <div className="card-title">{props.title}</div>
            <div className="card-body">{props.subTitle}</div>
        
        </div>
    )
}

export default PortCard;