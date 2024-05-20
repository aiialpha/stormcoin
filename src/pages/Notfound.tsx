import { Link } from "react-router-dom";


export default function Notfound() {
  return (
    <div style={{
        placeContent:'center',
        height:800
    }}>
        
        In development
        <br />
        <br />
    <Link to='stormcoin' style={{
        backgroundColor:'white',
        borderRadius:50,
        padding:15,
        marginTop:15
    }}>
    Back to app
    </Link>


    </div>
  )
}
