import React from 'react';
import "./Navigate.scss"
const Navigate = () => {
    return (
        <div id="nav1">
            <select>
                <option style={{display: "none"}}>👀</option>
                <option value="all">all</option>
                <option value="rent">rent</option>
            </select>
        </div>
    );
};

export default Navigate;