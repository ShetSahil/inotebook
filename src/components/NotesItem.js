import React from 'react'

const Noteitem = (props) => {
    const { title, description } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    {/* <div className="d-flex align-items-center"> */}
                        <h5 className="card-title">{title}</h5>
                      
                    {/* </div> */}
                    <p className="card-text">{description}</p>
                    <i className="fa-sharp fa-solid fa-trash mx-2 "></i>
                        <i className="fa-solid fa-pen-to-square mx-2"></i>

                </div>
            </div>
        </div>
    )
}

export default Noteitem