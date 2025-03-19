import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import waiterBilling from './page/WaiterBilling.jsx'
import WaiterOrders from './page/WaiterOrders.jsx'
import WaiterLogin from './page/WaiterLogin.jsx'
import UserBill from './page/UserBill'
import UserMenu from './page/UserMenu'
import ChefLogin from './page/ChefLogin'
import ChefOrders from './page/ChefOrders'
import AdminLogin from './page/AdminLogin'
import AdminMenu from './page/AdminMenu'
import AdminUserRegistration from './page/AdminUserRegistration'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './page/HomePage.jsx'
import Navbar from './component/Navbar.jsx'
import WaiterMenu from './page/WaiterMenu.jsx'
 
function App() {
  

  return (
    <div>
 
       <BrowserRouter>
       <Navbar/>

       <Routes>
        <Route path="/Home/Page" Component={HomePage}/>
        <Route path="/Waiter/Orders" Component={WaiterOrders}/>
        <Route path="/Waiter/Menu" Component={WaiterMenu}/>
        <Route path="/Waiter/Billing" Component={waiterBilling}/>
        <Route path="/Waiter/Login" Component={WaiterLogin}/>
        <Route path="/User/Menu" Component={UserMenu}/>
        <Route path="/User/Bill" Component={UserBill}/>
        <Route path="/Chef/Orders" Component={ChefOrders}/>
        <Route path="/Chef/Login" Component={ChefLogin}/>
        <Route path="/Admin/UserRegistration" Component={AdminUserRegistration}/>
        <Route path="/Admin/Menu" Component={AdminMenu}/>
        <Route path="/Admin/Login" Component={AdminLogin}/>

        
       </Routes>
       </BrowserRouter>
      {/* <WaiterLogin/> */}




    </div>
  )
}

export default App
