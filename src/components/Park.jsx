import {
    useParams
  } from 'react-router-dom'
  import { 
    useState, 
    useEffect 
  } from 'react'
  import axios from 'axios'

  import {Container, Row, Col} from 'react-bootstrap'

  let API_KEY = process.env.REACT_APP_API_KEY


  
export default function Park() {
    const {parkCode} = useParams()

    const [post, setPost] = useState([])

    useEffect (() => {
      async function getPost() {
        try{
          const url = `https://developer.nps.gov/api/v1/parks/?parkCode=${parkCode}limit=600&api_key=${API_KEY}`
          const response = await axios.get(url)
        
          setPost(response.data.data)
          console.log('inside the park.jsx' + response.data)
        } catch (err) {
          console.log(err)
        }
      }
      getPost()
    }, [])

    const park = {
        fullName: "Abraham Lincoln National Historic Park",
        image: "https://api.time.com/wp-content/uploads/2016/08/gettyimages-535829001.jpg",
        fees: "test description",
        hours: "9am - 8pm",
        alerts: 'Weather Advisory',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur. Mauris ullamcorper tortor eget laoreet ultricies. Nullam sit amet convallis erat. Donec venenatis dolor erat, sit amet sollicitudin tellus euismod sed. Donec eu ornare turpis. Vestibulum eu placerat diam. In a mauris quis dolor ultrices porttitor sed nec nibh. Donec blandit tortor auctor, tempor metus in, consectetur dui.',
        weather: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat.',
        activities: [
            'Biking',
            'Hiking',
            'Swimming'

        ],
        amenities: [
            'Water Pump',
            'Bathrooms',
            'Campground'
        ]
    }

    return(
        <div>
            <img src={park.image} alt="" width="800px"/>
            <h2>{park.fullName}</h2>
            <Container>
                <Row>
                    <Col xs={8}>
                        <p>United States of America/ Kentucky/ Abraham Lincoln National Historic Park</p>
                        <h4>Alerts & Conditions</h4>
                        <p>{park.alerts}</p>
                        <p>Open {park.hours}</p>
                        <h4>Description</h4>
                        <p>{park.description}</p>
                    </Col>


                    <Col>
                    <h4>Basic Information</h4>
                    <h6>Fees & Passes ></h6>
                    <h6>Operating Hours ></h6>
                    <h6>Weather ></h6>

                    <div>
                        <h4>Activities / Amenities</h4>
                        
                    </div>

                    </Col>
                </Row>
            </Container>

            
        </div>
    )
}