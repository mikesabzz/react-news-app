import React from 'react'

function Header(props){
    return(
        <div className="text-lg-left text-uppercase text-white bg-dark">
            <h1 className="ml-4 font-weight-bold">{props.headline}</h1>
        </div>
    )
}
export default Header