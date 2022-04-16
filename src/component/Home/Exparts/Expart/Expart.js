import React from 'react';
import { useNavigate } from 'react-router-dom';

const Expart = ({ expart }) => {
    const { id, image, thinking, ratings, name, exprience } = expart;
    const navigate = useNavigate();
    const getDetails = id => {

        navigate(`/details/${id}`);
        console.log(id)

    }
    return (
        <div className='col-lg-4 col-sm-12 col-md-6 d-flex justify-content-center'>
            <div className="card " style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body mx-2">
                    <h3>{name}</h3>
                    <p className="card-text">{thinking}</p>
                    <p className='d-flex justify-content-center'>
                        <button onClick={() => getDetails(id)} className='bg-primary border-0 p-2 border-radius rounded text-white'>Get Details</button>
                    </p>
                </div>
            </div>
        </div>


    );
};

export default Expart;