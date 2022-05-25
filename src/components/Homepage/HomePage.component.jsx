import React                from 'react';
import {
    WrapperHomePage
}                           from './HomePage.styles';
import ImagePlus            from '../../Images/plus_report.png';
import ImageViewReport      from '../../Images/report_section_1.png';
import ImageViewProduct     from '../../Images/products_section_1.png';
import ImageViewWaiters     from '../../Images/waiters_section_1.png';
import ImageViewCashier     from '../../Images/cashier_section_1.png';
import ImageViewZone        from '../../Images/zone_section_1.png';

const HomePage = () => {
    return ( 
        <WrapperHomePage>
            <div className='button_section background_black'>
                <img
                    className='image_button'
                    src={ImagePlus}
                    alt="crear reporte"
                />
                <h3 className='text_button'>
                    Crear reporte
                </h3>
            </div>

            <div className='button_section background_blue'>
                <img
                    className='image_button'
                    src={ImageViewReport}
                    alt="ver mis reportes"
                />
                <h3 className='text_button'>
                    Ver mis reportes
                </h3>
            </div>

            <div className='button_section background_orange'>
                <img
                    className='image_button'
                    src={ImageViewProduct}
                    alt="ver mis productos"
                />
                <h3 className='text_button'>
                    Ver mis productos
                </h3>
            </div>

            <div className='button_section background_orange'>
                <img
                    className='image_button'
                    src={ImageViewWaiters}
                    alt="ver mis meseros"
                />
                <h3 className='text_button'>
                    Ver meseros
                </h3>
            </div>

            <div className='button_section background_orange'>
                <img
                    className='image_button'
                    src={ImageViewCashier}
                    alt="ver mis cajeros"
                />
                <h3 className='text_button'>
                    Ver cajeros
                </h3>
            </div>

            <div className='button_section background_orange'>
                <img
                    className='image_button'
                    src={ImageViewZone}
                    alt="ver mis zonas"
                />
                <h3 className='text_button'>
                    Ver zonas
                </h3>
            </div>

        </WrapperHomePage>
     );
}
 
export default HomePage;