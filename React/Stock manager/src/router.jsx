import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Items from "./pages/Items";
import Item from "./pages/Item";
import NewItem from "./pages/NewItem";
import EditItem from "./pages/EditItem";
import Home from "./pages/Home";



const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<RootLayout/>,
      children:[{
      index:true,
      element:<Home/>
      },{
      path:'items',
      element:<Items/>
      },{
      path:'items/:itemId',
      element:<Item/>  
      },{
      path:'new-item',
      element:<NewItem/>  
      },{
      path:'edit-item/:itemId',
      element:<EditItem/>
      }
    ]
    }
  ]
)

export default router