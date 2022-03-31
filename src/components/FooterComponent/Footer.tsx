import * as React from 'react';
import { Footer, Span } from './Footer.styled'

const FooterContainer: React.FC = () => {
    return (
        <div>
            <Footer>
                <Span>All Rights Reserved. | skillupmentor.com</Span>
            </Footer>
        </div>
    );
}

export default FooterContainer;