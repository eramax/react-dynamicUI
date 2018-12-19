import DefaultLayout from '../Containers/DefaultLayout'
import Cards from '../TestJsons/views/Cards'
import Modals from '../TestJsons/views/Modals'
import Alerts from '../TestJsons/views/Alerts'
import Buttons from '../TestJsons/views/Buttons'
import Charts from '../TestJsons/views/Charts'
import Forms from '../TestJsons/views/Forms'

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/Cards', exact: true, name: 'Cards', component: Cards },
  { path: '/Modals', exact: true, name: 'Modals', component: Modals },
  { path: '/Alerts', exact: true, name: 'Alerts', component: Alerts },
  { path: '/Buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/Charts', exact: true, name: 'Charts', component: Charts },
  { path: '/Forms', exact: true, name: 'Forms', component: Forms }
]

export default routes
