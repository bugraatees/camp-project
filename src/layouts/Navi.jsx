import React , {useState} from 'react';
import CartSummary from './CartSummary';
import { Container, Menu } from 'semantic-ui-react';
import SignedOut from './SignedOut';
import SingnedIn from './SingnedIn';
import { useSelector } from 'react-redux'


export default function Navi() {

    const {cartItems} = useSelector(state => state.cart)

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    

    function handleSignOut (params){
        setIsAuthenticated(false)
        
    }

    function handleSingIn (params){
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed = "top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        {cartItems.length>0&&<CartSummary />}
                        {isAuthenticated?<SingnedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSingIn}/>}
                        </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
