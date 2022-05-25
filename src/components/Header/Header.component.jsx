import React        from 'react';
import { Link }     from 'react-router-dom';
import{
    WrapperHeader
} from './Header.styles'

const Header = () => {
    return ( 
        <WrapperHeader>
            <Link to={'/'} className='text_logo' >
                <h5 >TOTEAT</h5>
            </Link> 
        </WrapperHeader>
     );
}
 
export default Header;