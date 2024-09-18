import React from 'react'

function Cards({ item }) {
    console.log(item);
  return (
    <>
        <div className='mt-5 my-3 gap-5'>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={item.image}
                  alt="Books" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions flex justify-between">
                  <div className="badge badge-outline">$ {item.price}</div>
                  <div className="badge badge-outline hover:text-bg-pink-500 hover:text-white p-2 duration-200">Buy Now</div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Cards