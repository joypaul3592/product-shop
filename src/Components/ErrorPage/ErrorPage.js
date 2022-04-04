import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ErrorPage = () => {
    const naviget = useNavigate()
    return (
        <div>
            <img className='w-8/12 mx-auto px-16 ' src='https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg&ga=GA1.2.1848158565.1598459348' alt="" />
            <div className="flex justify-center">
                <button onClick={() => naviget(-1)} className='px-6 py-2 my-5 font-semibold rounded bg-amber-500'><FontAwesomeIcon className='mx-2' icon={faArrowLeft} />Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;