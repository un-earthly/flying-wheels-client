import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({ product }) {
    const { name, desc, img, minOrdQty, availableQty, pricePerUnit, _id: id } = product;
    return (
        <div>

            <div className="card lg:w-96 h-full hover:shadow-xl p-3 duration-500 animate__animated animate__fadeInRight animate__delay-1s">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body space-y-2">
                    <div className="tooltip" data-tip={name}>
                        <h2 className="card-title">
                            {name.length > 25 ? name.slice(0, 25) + '...' : name}
                        </h2>
                    </div>
                    <div className="tooltip" data-tip={desc}>
                        <p className='text-left'> {desc.length > 110 ? desc.slice(0, 110) + '...' : desc}</p>
                    </div>
                    <div>
                        <p>Minimum Order Quantity:{minOrdQty} pcs</p>
                        <p>Available Quantity:{availableQty} pcs</p>
                        <p>Price Per Unit:${pricePerUnit}/pc</p>
                    </div>
                    <Link to={`/purchase/${id}`} className="card-actions justify-end">
                        <div className="badge badge-outline border-secondary hover:bg-secondary cursor-pointer">Buy Now</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
