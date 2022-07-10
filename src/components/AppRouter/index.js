/* eslint-disable*/

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
import { publicRoutes, privateRoutes } from '../../router';
import Header from '../Header';

const isAuth = false;

const AppRouter = () => {

  const routes = isAuth ? privateRoutes : publicRoutes;

  return (
    <BrowserRouter> 
         <Header/>
         <Routes>
           {routes.map((route) => (
                <Route
                    key={route.path}
                    element={route.component}
                    path={route.path}
                />
            ))}
       </Routes> 
    </BrowserRouter>
  );
};

export default AppRouter;