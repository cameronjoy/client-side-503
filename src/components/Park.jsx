
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

  let API_KEY = process.env.REACT_APP_API_KEY

export default function Park(props) {

    const [indvPark, setIndvPark] = useState([])

    const {id} = useParams()
    
    console.log({id}.id)
    // console.log(props.match.params.id)
    useEffect (() => {
        async function getState() {
          try{
            const response = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${id}&api_key=${API_KEY}`)
            
            
            console.log(response.data.fullName)
            
            console.log(response.data.data[0])

            setIndvPark(response.data.data[0])
            
            


          } catch (err) {
            console.log(err)
          }
        }
        getState()
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
            <h1>{indvPark.fullName}</h1>
            <p>{indvPark.description}</p>
            <p>{indvPark.directionsInfo}</p>
            <p>{indvPark.directionsUrl}</p>
            <p>{indvPark.weatherInfo}</p>
            <p>{indvPark.url}</p>
           
        </div>
    )
}