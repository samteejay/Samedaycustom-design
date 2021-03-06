import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Orders from './Operations/components/Orders';
import Records from './Records';
import MainContainer from './MainContainer';
import ProductionHouse from './Operations/components/ProductionHouse';
import ProductionDetails from './Operations/components/ProductionDetails';


const routes = [
    { component: Dashboard, exact: true, url: '' },
    { component: Orders,  url: '/orders' },
    { component: Records, url: '/records' },
    { component: ProductionHouse,exact: true, url: '/production' },
    { component: ProductionDetails, url: '/production/details' },
]

const routeSwitch = path =>( 
    routes.map(route => {
        const {component, exact, url } = route;
        const link = `${path}${url}`;
        return (
            <Route key={url} path={link} exact={exact} component={component} />
        );
    })
    )

    const MainDashboard = () => {
        const { path } = useRouteMatch();
        return (
            <div>
                <MainContainer>
                    <Switch>{routeSwitch(path)}</Switch>
                </MainContainer>
            </div>
        )
    }

    export default MainDashboard;