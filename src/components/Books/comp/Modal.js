import React from 'react';

const Modal = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }

    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    return (
        <>
            <div className="overlay fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className="overlay-inner bg-white w-3/4 h-3/4 rounded-lg p-8 relative overflow-y-auto">
                    <button className="close absolute top-4 right-4" onClick={onClose}><i className="fas fa-times"></i></button>
                    <div className="inner-box flex items-center">
                        <img src={thumbnail} alt="" className="w-1/3 mr-4" />
                        <div className="info">
                            <h1 className="text-2xl font-bold mb-2">{item.volumeInfo.title}</h1>
                            <h3 className="text-lg font-semibold mb-2">{item.volumeInfo.authors}</h3>
                            <h4 className="text-base mb-2">{item.volumeInfo.publisher}<span className="ml-2">{item.volumeInfo.publishedDate}</span></h4>
                            <a href={item.volumeInfo.previewLink} className="block bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">More</a>
                        </div>
                    </div>
                    <p className="description mt-4">{item.volumeInfo.description}</p>
                </div>
            </div>
        </>
    );
}

export default Modal;
