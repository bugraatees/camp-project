import React , {useState} from 'react';
import CartSummary from './CartSummary';
import { Container, Menu } from 'semantic-ui-react';
import SignedOut from './SignedOut';
import SingnedIn from './SingnedIn';


export default function Navi() {
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
                        <CartSummary />
                        {isAuthenticated?<SingnedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSingIn}/>}
                        </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
