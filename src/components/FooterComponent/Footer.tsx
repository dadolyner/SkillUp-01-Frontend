import * as React from 'react';
import { Footer, Logo, Span } from './Footer.styled'
import WhiteLogo from '../../multimedia/WhiteLogo.png'

const FooterContainer: React.FC = () => {
    return (
        <div>
            <Footer>
                <Logo src={WhiteLogo}/>
                <Span>All Rights Reserved. | skillupmentor.com</Span>
            </Footer>
        </div>
    );
}

export default FooterContainer;