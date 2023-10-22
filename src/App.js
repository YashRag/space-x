import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Head from "./components/Head";
import Home from "./components/Home";
import Body from "./components/Body";
import Launches from "./components/Launches";
import SingleLaunchDetails from "./components/SingleLaunchDetails";
import Rockets from "./components/Rockets";
import SingleRocketDetails from "./components/SingleRocketDetails ";



function App() {

  const appRoute = createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/launches',
          element:<Launches/>
        },
        {
          path:'/launches/:id',
          element:<SingleLaunchDetails/>
        },
        {
          path:'/rockets',
          element:<Rockets/>
        },
        {
          path:'/rockets/:id',
          element:<SingleRocketDetails/>
        }

      ]
    }
  ])
  return (
    <div>
    
    <RouterProvider router={appRoute}/>
    </div>
  );
}

export default App;
