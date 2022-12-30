// ** React Imports
import { useEffect, useState } from 'react'
import { Card,CardBody } from 'reactstrap'

// ** Third Party Components
import axios from 'axios'
import { Users } from 'react-feather'

// ** Custom Components
const SubscribersGained = () => {
  // ** State
  const [data, setData] = useState(null)

  // useEffect(() => {
  //   axios.get('/card/card-statistics/subscribers').then(res => setData(res.data))
  //   return () => setData(null)
  // }, [])

  return (
    <Card>
    <CardBody>
        <div class="card-body">
            <h2 class="card-title">Total Assets</h2>
              <p class="card-number">234</p>
                <a href="#" class="card-link">
                    View all assets
                </a>  
            {/* <Avatar icon={<Award size={28} />} className='shadow' color='primary' size='xl' />                 */}
        </div>
      </CardBody>
  </Card>
  )
}

export default SubscribersGained
