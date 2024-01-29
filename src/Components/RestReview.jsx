import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

function RestReview({ selectedRestaurant }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button className='btn btn-dark ms-3' onClick={() => setOpen(!open)}>Click Here to see Reviews </button>
            <Collapse in={open} className='bg-light'> 
                <div className='my-2 '>
                    <hr />
                    {
                        selectedRestaurant[0]?.reviews.length > 0 ?
                            selectedRestaurant[0].reviews.map(item => (
                                <div className='mt-5'>
                                    <h6>{item.name}</h6>
                                    <h6>{item.date}</h6>
                                    <h6>{item.rating}</h6>
                                    <h6>{item.comments}</h6>

                                </div>

                            )):
                            <p> No Reviews Found</p>
                    }

                </div>
            </Collapse>
        </>
    )
}

export default RestReview