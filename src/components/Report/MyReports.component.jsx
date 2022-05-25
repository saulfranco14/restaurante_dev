import React from 'react';
import ImageReport           from '../../Images/section_report.png';
import {
    WrapperSection
}                               from '../Report/Report.styles';

const MyReports = () => {
    return ( 
        <WrapperSection
            justifyContent = 'start'
        >
            <h5 className='text_view_report'>Reportes</h5>
            <div
                className='section_view_report'
            >
                <div
                    className='section_image_view_report'
                >
                    <img
                        className='image_view_report'
                        src={ImageReport}
                        alt="imagen de reporte"
                    />
                </div>
                <div 
                    className='text_section_report_view margin10'
                >
                    <h6>
                        Categoria:
                        <span>
                            Mesero
                        </span>
                    </h6>
                </div>  
                <div className='text_section_report_view'>
                    <h6>
                        Categoria:
                        <span>
                            Mesero
                        </span>
                    </h6>
                </div>  
                <div className='text_section_report_view'>
                    <h6>
                        Categoria:
                        <span>
                            Mesero
                        </span>
                    </h6>
                </div>  
                <div className='text_section_report_view'>
                    <h6>
                        Categoria:
                        <span>
                            Mesero
                        </span>
                    </h6>
                </div>  
                <div className='text_section_report_view'>
                    <h6>
                        Categoria:
                        <span>
                            Mesero
                        </span>
                    </h6>
                </div>  
                <div
                    className='button_view_report'
                >
                    <button
                        className='button_view_report_pdf'
                    >
                        Descargar pdf
                    </button>
                </div>    
            </div>
        </WrapperSection>
     );
}
 
export default MyReports;