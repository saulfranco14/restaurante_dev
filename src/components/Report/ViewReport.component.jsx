import React from 'react';
import ImageViewFinal           from '../../Images/section_final.png';
import {
    WrapperSection
}                               from '../Report/Report.styles';

const ViewReport = () => {
    return ( 
        <WrapperSection
            justifyContent = 'start'
        >
            <img
                className='image_section_report'
                src={ImageViewFinal}
                alt="ver reporte"
            />
            <h4
                className='text_section_report'
            >
               ¡Este arroz ya se coció!
            </h4>
            <h5 className='text_report'>
                Tu reporte es:
            </h5>
            <div className='section_report'>
                <div>
                    <h6>
                        Categoria:
                        <span>
                            Mesero
                        </span>
                    </h6>
                    
                </div>
                <div>
                    <h6>
                        Mesero:
                        <span>
                        Jesus Romero
                        </span>
                    </h6>
                    
                </div>
                <div>
                    <h6>
                    Fecha:
                        <span>
                        2022/01/13 - 2022/01/23
                        </span>
                    </h6>
                    
                </div>
                <div>
                    <h6>
                    Tipo de fecha:
                        <span>
                        Fecha Manual
                        </span>
                    </h6>
                    
                </div>
                <div>
                    <h6>
                    Venta total:
                        <span>
                        $90,000
                        </span>
                    </h6>
                    
                </div>
            </div>

            <div className='section_button'>
                <button 
                    className='button_report save_report'
                >
                    Guardar reporte
                </button>
                <button 
                    className='button_report download_pdf'
                >
                    Descargar pdf
                </button>
                <button 
                    className='button_report retry_report'
                >
                    Guardar reporte
                </button>
            </div>

        </WrapperSection>
     );
}
 
export default ViewReport;