import React from"react";

const rightcontainer=()=>{

    return(
        <>
           <div className="right-content-container"></div>
           <style jsx>
            {
                `
                .right-content-container{
                    width:30%;
                    border-radius: 5px;
                    background-color: black;
                    height: max-content;
                    min-height: calc(100vh - 56px);
                    max-width:325px;
                    display: none;
                }
                @media screen and (min-width: 1050px){
                    .right-content-container{
                        display: inline-block;
                
                    }

                
                `
            }
           </style>
        </>
    )
}

export default rightcontainer;