import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import RestCard from '../Components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../Redux/restaurantSlice'

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurant()); // Make sure to invoke fetchRestaurant by adding ()
  }, [dispatch]);
  const allRestaurant = useSelector((state) => state.restaurantSlice.allRestaurant.restaurants);
  console.log("******");
  console.log(allRestaurant);

  return (
    <>
      <Row>{
        allRestaurant?.length > 0 ?
          allRestaurant.map((restaurant) => (
            <Col className='px-5 py-3b' sm={6} md={4} lg={4}>
              <RestCard restaurant={restaurant} />
            </Col>
          )):
          <p>No Restaurant Found</p>

}
      </Row>
    </>
  )
}

export default Home