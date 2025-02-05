import React from 'react';

const Gallery = () => {
    const images = [
        'photos/photo1.jpg',
        'photos/photo2.jpg',
        'photos/photo3.jpg',
        'photos/photo4.JPG',
        'photos/photo5.jpg',
        'photos/photo6.jpg',
        'photos/photo7.jpg',
        'photos/photo8.jpg',
        'photos/photo9.jpeg',
        'photos/photo10.jpeg',
        'photos/photo11.JPG',
        'photos/photo12.jpg',
        'photos/photo14.jpg',
        'photos/photo15.jpg',
        'photos/photo16.jpg',
        'photos/photo17.jpg',
        'photos/photo18.jpg',
        'photos/photo19.jpg',
    ];

    return (
        <div className="bg-gray-900 text-center text-white py-8">
            <h1 className="text-5xl py-2 ">Here are some special photos of my life memories!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {images.map((src, index) => (
                    <div key={index} className="p-2">
                        <div className="w-full h-5/6 overflow-hidden rounded-lg">
                            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;