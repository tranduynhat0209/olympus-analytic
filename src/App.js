
import './App.css';
import { Sidebar } from './components/Sidebar';
import {Box} from '@mui/material'
import Header from './components/Header';
import Home from './pages/olympus/home';
import {Routes, Route} from 'react-router-dom';
import Bond from './pages/olympus/bond';
import {makeStyles} from "@mui/styles"
import Stake from './pages/olympus/stake';
const useStyles = makeStyles(theme =>({
  root:{
    textAlign: 'center',
    display: 'flex',
    background: theme.palette.background.paper
  }
}))
function App() {
  const classes = useStyles({})
  return (
    <Box className={classes.root}>
      <Sidebar/>
      <Box sx={{width: `calc(100% - 300px)`,
      marginLeft: '20px',
      minHeight: '1500px'
      }}>
      <Header/>
      <Routes>
        <Route path='/olympus'>
          <Route path='overview' element ={ <Home/>}/>
          <Route path='bond' element ={ <Bond/>}/>
          <Route path='stake' element ={ <Stake/>}/>
          <Route path='ohmies' element ={ <Home/>}/>
          <Route path='treasury' element ={ <Home/>}/>
        </Route>
      </Routes>
      </Box>
      
    </Box>
  );
}

export default App; 
