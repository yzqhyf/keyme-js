import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import ProductList from '../pages/ProductListPage/ProductList';
import AddressEntry from '../pages/AddressFormPage/AddressForm';

class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/productList'>
                            <ProductList />
                        </Route>
                        <Route exact path='/AddressEntry'>
                            <AddressEntry />
                        </Route>
                        <Route path='/' render={() => <Redirect to='/productList' />} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    };
}

export default App;
