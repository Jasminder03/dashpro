import "bootstrap/dist/css/bootstrap.min.css"
import Navibar from "../../Components/Navibar/Navibar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import './Home.css'
import { useAuth0 } from "@auth0/auth0-react"
import Dashboard from "../Dashboard/Dashboard"


const Home = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <div>
            <Navibar />
            <div className="row">
                <div className="col-xs-10 col-sm-3">
                    {isAuthenticated ?
                        <Sidebar />
                        :
                        <div>
                        </div>
                    }
                </div>
                <div className="col-xs-10 col-sm-9">
                    {
                        isAuthenticated ?
                            <div>
                                <Dashboard />
                            </div>
                            :
                            <p className="text-success fs-1 first">
                                LOGIN OR SIGNUP TO CONTINUE
                            </p>
                    }
                </div>

            </div>
        </div>
    )
}

export default Home