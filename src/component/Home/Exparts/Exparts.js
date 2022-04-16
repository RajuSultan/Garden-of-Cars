import React from 'react';
import { useState } from 'react';
import img1 from '../../../images/img1.avif';
import img2 from '../../../images/img2.avif';
import img3 from '../../../images/img3.avif';
import img4 from '../../../images/img4.avif';
import img5 from '../../../images/img5.avif';
import img6 from '../../../images/img6.avif';
import img7 from '../../../images/img7.avif';
import img8 from '../../../images/img8.avif';
import Expart from './Expart/Expart';



const Exparts = () => {
    const expats = [
        { id: 1, name: "Alben alda", thinking: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aut?", ratings: 2, exprience: 6, image: img1 },
        { id: 2, name: "Dolda alda", thinking: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aut?", ratings: 5, exprience: 7, image: img2 },
        { id: 3, name: "kalda alda", thinking: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aut?", ratings: 2, exprience: 6, image: img3 },
        { id: 4, name: "Alben gulu", thinking: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aut?", ratings: 2, exprience: 17, image: img4 },
        { id: 5, name: "chali palis", thinking: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aut?", ratings: 3, exprience: 1, image: img5 },
        { id: 6, name: "doldo arin", thinking: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aut?", ratings: 2, exprience: 10, image: img6 },
        { id: 7, name: "kalda kiko", thinking: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aut?", ratings: 6, exprience: 10, image: img7 },
        { id: 8, name: "difal kiray", thinking: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aut?", ratings: 8, exprience: 10, image: img8 },
    ]
    return (
        <div className='container my-5 '>
            <div>
                <h1 className='text-primary text-center'>Exparts are Here!</h1>
                <div className='row g-4 mt-4'>
                    {
                        expats.map(expart => <Expart key={expart.id} expart={expart}></Expart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Exparts;