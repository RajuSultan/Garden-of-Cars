import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex justify-conttent-center align-items-center mb-3'>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;