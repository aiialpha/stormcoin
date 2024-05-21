import { Link } from "react-router-dom";


export default function Notfound() {
  return (
    <div style={{
        placeContent:'center',
        height:'90vh'
    }}>
        
        In development
        <br/><br/>
        <br />
        <Link to='test' style={{
        backgroundColor:'white',
        borderRadius:20,
        padding:15,
        paddingInline:25,
        marginTop:15
        }} >
        Test
        </Link>
        <br /><br/>
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
