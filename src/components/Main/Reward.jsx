import React, { Component } from 'react'
import { ProductsContextProvider } from '../Rewards/Global/ProductsContext'
import { Home } from '../Rewards/Components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Signup } from '../Rewards/Components/Signup'
import { Login } from '../Rewards/Components/Login'
import { NotFound } from '../Rewards/Components/NotFound'
import { auth, db } from '../FbConfig'
import { CartContextProvider } from '../Rewards/Global/CartContext'
import { Cart } from '../Rewards/Components/Cart'
import { AddProducts } from '../Rewards/Components/AddProducts'
import { Cashout } from '../Rewards/Components/Cashout'

export class Reward extends Component {

    state = {
        user: null,
    }

    componentDidMount() {

        // getting user info for navigation bar
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                    this.setState({
                        user: snapshot.data().Name
                    })
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
        })

    }

    render() {
        return (
            <ProductsContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <Switch>
                            {/* home */}
                            <Route exact path='/' component={() => <Home user={this.state.user} />} />
                            {/* signup */}
                            <Route path="/signup" component={Signup} />
                            {/* login */}
                            <Route path="/login" component={Login} />
                            {/* cart products */}
                            <Route path="/cartproducts" component={() => <Cart user={this.state.user} />} />
                            {/* add products */}
                            <Route path="/addproducts" component={AddProducts} />
                            {/* cashout */}
                            <Route path='/cashout' component={() => <Cashout user={this.state.user} />} />
                            <Route component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </CartContextProvider>
            </ProductsContextProvider>
        )
    }
}

export default Reward
