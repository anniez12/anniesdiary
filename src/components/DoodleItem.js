import React from 'react';

const DoodleItem = (props) => {
    const { img, alt, title, softwares, desc } = props;
    return (
        <div className="doodles-work-item">
            <div className="doodles-work-img">
                <img src={img} className="no-select" alt={alt} onClick={() => {
                    document.querySelector("#popup-bg").style.display="flex";
                    document.querySelector("#popup-image").src = img;
                }}/>
            </div>            
            <div className="doodles-work-desc">
                <h4>{title}</h4>
                <h5>{softwares}</h5>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default DoodleItem;