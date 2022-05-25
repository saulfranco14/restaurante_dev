import React                    from 'react';
import { useNavigate }          from 'react-router-dom';
import ImageSectionOne          from '../../Images/inicio.png';
import {
    WrapperSection
}                               from './Report.styles';

const InitReport = () => {
    const navigate          = useNavigate();

    function sectionNavigate(redirect) {
        navigate(`/${redirect}`)
    }
    
    return ( 
        <WrapperSection>
            <img
                className='image_section'
                src={ImageSectionOne}
                alt="crear reporte"
            />
            <h4
                className='text_section'
            >
                Tu herramienta digital para obtener información de tu negocio.
            </h4>
            <button
                className='button_section'
                onClick={() => sectionNavigate('second_section')}
            >
                Siguiente
            </button>
       </WrapperSection>
     );
}
 
export default InitReport;