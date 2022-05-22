import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({ product, id }) {
    const { name, desc, img, minOrdQty, availableQty, pricePerUnit } = product;
    return (
        <div>

            <div class="card lg:w-96 h-full hover:shadow-xl p-3 duration-500 animate__animated animate__fadeInRight animate__delay-1s">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body space-y-2">
                    <div class="tooltip" data-tip={name}>
                        <h2 class="card-title">
                            {name.length > 25 ? name.slice(0, 25) + '...' : name}
                        </h2>
                    </div>
                    <div class="tooltip" data-tip={desc}>
                        <p className='text-left'> {desc.length > 110 ? desc.slice(0, 110) + '...' : desc}</p>
                    </div>
                    <div>
                        <p>Minimum Order Quantity:{minOrdQty} pcs</p>
                        <p>Available Quantity:{availableQty} pcs</p>
                        <p>Price Per Unit:${pricePerUnit}/pc</p>
                    </div>
                    <Link to={`/purchase/${id}`} class="card-actions justify-end">
                        <div class="badge badge-outline border-secondary hover:bg-secondary cursor-pointer">Buy Now</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
