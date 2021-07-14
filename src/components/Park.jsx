
import axios from 'axios' 

import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect, 
    useParams
  } from 'react-router-dom'
  
  import {
    useState,
    useEffect
  } from 'react'

  import {Container, Row, Col} from 'react-bootstrap'
<<<<<<< HEAD
=======

  let API_KEY = process.env.REACT_APP_API_KEY
>>>>>>> 2c899dcb6aeb1549b1988a798c265a2a4dcdd9d8

  let API_KEY = process.env.REACT_APP_API_KEY

export default function Park(props) {

    const [indvPark, setIndvPark] = useState(null)

    const {id} = useParams()
    
    // console.log({id}.id)
    // console.log(props.match.params.id)
    useEffect (() => {
        async function getState() {
          try{
            const response = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${id}&api_key=${API_KEY}`)
            
            
            console.log(response.data.fullName)
            
            console.log(typeof response.data.data[0].activities)
            setIndvPark(response.data.data[0])
            
            


          } catch (err) {
            console.log(err)
          }
        }
        getState()
      }, [])
          
            let images, activities, parkfullName, parkDescription, parkDirectionsInfo, parkDirectionsUrl, parkWeatherInfo, parkUrl, parkStates
      
      if(indvPark){


          //   console.log(indvPark.images)
            images = Object.values(indvPark.images).map((pic, index) => <img style={{width: "300px"}}  src={pic.url} alt="cool park image" />)
            activities = Object.values(indvPark.activities).map((park, index) => <span key={index}> {park.name} |</span>)
          //  console.log(typeof indvPark.activities)
          parkfullName = (
              <>
              <h1>{indvPark.fullName}</h1>
              </>)
          parkStates = (
              <>
              <p>{indvPark.states}</p>
              </>)
          parkDescription = (
              <>
              <p>{indvPark.description}</p>
              </>)
          parkDirectionsInfo = (
              <>
              <p>{indvPark.directionsInfo}</p>
              </>)
          parkDirectionsUrl = (
              <>
              <p>{indvPark.directionsUrl}</p>
              </>)
          parkWeatherInfo = (
              <>
              <p>{indvPark.weatherInfo}</p>
              </>)
          parkUrl = (
              <>
              <p>{indvPark.url}</p>
              </>)
     
          
        }

     

   

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


          <Container className="text-left">
            <Row>
              <Col xs={8}>
              

                
              <h1>{parkfullName}</h1>
              <p>United States of America / {parkStates} </p>
              <h4 className="">Alerts & Conditions</h4>
              <p>{parkWeatherInfo}</p>
              <h4>Description</h4>
              <p>{parkDescription}</p>
              <p>{parkDirectionsInfo}</p>
              <p>{parkDirectionsUrl}</p>
              
              <p>{parkUrl}</p>
              </Col>
              <Col>
              <h4>Basic Information</h4>
              <h6>Fees & Passes </h6>
              <h6>Operating Hours </h6>
              <h6>Weather </h6>

              <h4>Activities/Amenities</h4>
                {activities}
              </Col>
            </Row>
          </Container>
          {images}
            
           
        </div>
    )
}