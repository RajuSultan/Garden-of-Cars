import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react/cjs/react.production.min';
import './service.css';

const Service = ({ service }) => {
    const { id, name, description, picture } = service;
    const navigate = useNavigate();

    return (
        <div className='car'>
            <img src={picture} alt="" />
            <div>
                <p>{name}</p>
                <p>{description}</p>
                <button onClick={() => navigate('/cardetails')} className='bg-primary border-0 p-2 border-radius rounded text-white'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Service;