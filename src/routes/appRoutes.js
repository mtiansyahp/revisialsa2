import { Homepage } from 'pages';



    const appRoutes = [
        {
          name: "Homepage",
          component: Homepage,
          exact: true,
          path: "/"
        }
        
      ];





export default appRoutes;

{/* <Route path='/' exact component={Home} />
<Route path='/services' component={Services} />
<Route path='/products' component={Products} />
<Route path='/sign-up' component={SignUp} />  */}