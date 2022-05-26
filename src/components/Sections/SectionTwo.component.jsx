import React, { useState }                    from 'react';
import ImageSectionTwo          from '../../Images/section_2.png';
import { useNavigate }          from 'react-router-dom';
import {
    WrapperSection
}                               from '../Report/Report.styles'
import {
    categorySection
}                               from '../../utils/category';
import { useDispatch }          from 'react-redux';
import { addDataReport }        from '../../actions/report_action';


const SectionTwo = () => {

    const navigate          = useNavigate();
    const dispatch          = useDispatch();
    const dataReport     = (information) => dispatch( addDataReport(information) );

    const [ disabledButton, setDisabledButton] = useState(true)
    const [enabledCategory, setEnabledCategory ] = useState({
        value: '',
        enabled: false
    })

    const  sectionNavigate = (redirect) => {
        dataReport(enabledCategory.value)
        navigate(`/${redirect}`)
    }

    const clickCategory = (value) => {
        setDisabledButton(false);
        setEnabledCategory({
            value: value,
            enabled: true
        })
    }

    return ( 
        <WrapperSection>
            <img
                className='image_section'
                src={ImageSectionTwo}
                alt="Escoger categoria"
            />
            <h4
                className='text_section'
            >
                Escoge una de las diferente categorías para obtener tu reporte.
            </h4>
            <div className='category_section'>
                {
                    categorySection.map((data) => (
                        <div
                            className='section_div'
                            key={data.value}
                            onClick ={() => clickCategory(data.value)}
                            style ={{
                                filter: (enabledCategory.enabled && data.value === enabledCategory.value)  ? 'brightness(0.5)' : null
                            }}
                        >
                            <h4
                                className='text_section_div'
                            >
                                {data.name}
                            </h4>
                            <img
                                className='image_section_div'
                                src={require('../../Images/' + data.image + '.png')}
                                alt = "imagen"
                            />
                        </div>
                    ))
                }
            </div>
            <button
                className='button_section'
                onClick={() => sectionNavigate('third_section')}
                style={{
                    filter: disabledButton ? 'opacity(0.5)' : null,
                }}
                disabled = { disabledButton }
            > 
                Siguiente
            </button>
       </WrapperSection>
     );
}
 
export default SectionTwo;