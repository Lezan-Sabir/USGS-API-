import { Link } from "react-router-dom";

const ear = [
    {
        eventid: 1,
        place: "10km WNW of The Geysers, CA",
        time: 1642025636650,
        latitude: "38.8265",
        longitude: "-122.8573333",
        magnitude: "1.47"
    }
    
];

export default ear;
const Details= props =>
{
  return(
ear.map(el=>{
  return(
   
    <Link to={`/Details/${el.eventid}`} >
  <div>
 
   <h4>{el.eventid}</h4>

</div>
</Link>

  )
}
)
      
  )
}
export default Details;