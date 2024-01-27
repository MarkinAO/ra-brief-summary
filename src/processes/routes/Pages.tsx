import { Route, Routes } from 'react-router-dom';
import PageWrap from './PageWrap';
import Home from '../../pages/Home';
import Skills from '../../pages/Skills';
import Portfolio from '../../pages/Portfolio';
import NotFound from '../../pages/NotFound';

export default function Pages() {
    return(
        <Routes>
            <Route path='/' element={<PageWrap />} >
                <Route path='/' element={<Home />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='*' element={<NotFound />} />
            </Route>                
        </Routes>
    )
}