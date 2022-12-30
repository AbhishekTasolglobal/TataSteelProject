import React from 'react'
import { Card, CardBody } from 'reactstrap'

const TotalWorkOrder = () => {
  return (
    <Card>
    <CardBody>
        <div class="card-body">
            <h2 class="card-title">Total Work Order Issued</h2>
              <p class="card-number">2341</p>
                <a href="#" class="card-link">
                    View all Total Work Order
                </a>  
            {/* <Avatar icon={<Award size={28} />} className='shadow' color='primary' size='xl' />                 */}
        </div>
      </CardBody>
  </Card>
  )
}

export default TotalWorkOrder
