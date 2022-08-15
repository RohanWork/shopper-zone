import { useSelector } from "react-redux";

function Header(){
    const state=useSelector((state)=>state);
    console.log("Header ",state.loggedin.Username)
    return (
        <div className="jumbotron p-3 mb-0 rounded-0 bg-transparent text-white">
            <img src={'shop.jpg'} style={{width:"100px"}} className="float-left"/>
            {state.loggedin.IsLoggedIn ?
            <>            
            {/* <h5 className="float-left">Role : {state.loggedin.Role}</h5> */}
            <h5 className="float-right">Welcome ! {state.loggedin.Username}</h5> </>:
            ''}
            <h4 className="text-center">Welcome to E-Commerce Website</h4>
            <div className="clearfix"></div>
        </div>
    )
}

export default Header;