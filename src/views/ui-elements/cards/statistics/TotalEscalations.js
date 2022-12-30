import React from 'react'
import { Card, CardBody } from 'reactstrap'

const TotalEscalations = () => {
  return (
    <Card>
    <CardBody>
        <div class="card-body">
            <h2 class="card-title">Total Escalations</h2>
              <p class="card-number">1934</p>
                <a href="#" class="card-link">
                    View all Escalations
                </a>  
            {/* <Avatar icon={<Award size={28} />} className='shadow' color='primary' size='xl' />                 */}
        </div>
      </CardBody>
  </Card>
  )
}

export default TotalEscalations
