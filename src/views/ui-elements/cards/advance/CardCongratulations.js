// ** Icons Imports
import { Award } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardBody, CardText } from 'reactstrap'



const CardCongratulations = () => {
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

export default CardCongratulations
