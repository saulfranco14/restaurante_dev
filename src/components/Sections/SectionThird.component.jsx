import React, {useState}        from 'react';
import { useNavigate }          from 'react-router-dom';
import ImageSectionThree        from '../../Images/section_3.png';
import ImageDateNow             from '../../Images/now_button.png';
import ImageDate                from '../../Images/date_button.png';
import ImageSale                from '../../Images/sale_tota_button.png';
import FormControl              from '@mui/material/FormControl';
import InputLabel               from '@mui/material/InputLabel';
import MenuItem                 from '@mui/material/MenuItem';
import Select                   from '@mui/material/Select';
import {
    WrapperSection
}                               from '../Report/Report.styles';


const SectionThird = () => {

    const navigate          = useNavigate();
    const [enabledDate, setEnabledDate ] = useState({
        value: '',
        enabled: false
    })

    const  sectionNavigate = (value) => {
        value === 'datetime_manual' ? navigate(`/four_section_datetime`) : navigate(`/view_report`)
    }

    const clickDate = (value) => {
        setEnabledDate({
            value: value,
            enabled: true
        })
    }
    return ( 
        <WrapperSection>
           <img
                className='image_section'
                src={ImageSectionThree}
                alt="Escoge la fecha"
            />
            <h4
                className='text_section'
            >
               Estas a unos pasos de obtener tu reporte, ahora selecciona el tipo la fecha que quieres de tu reporte.
            </h4>
            <div className='section_datetime'>
                <div className='select_div'>
                <FormControl sx={{ width:'100%'}}>
                    <InputLabel id="demo-simple-select-label">Escoge el mesero</InputLabel>
                    <Select
                        labelId="seleccione"
                        id="demo-simple-select"
                        label="select_category"
                        defaultValue = ""
                    >
                        <MenuItem value={'Ninguna'}>Ninguna</MenuItem>
                        <MenuItem value={'Baja'}>Baja</MenuItem>
                        <MenuItem value={'Media'}>Media</MenuItem>
                        <MenuItem value={'Alta'}>Alta</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <div className='section_date'>
                        <div
                            className='section_div_date'
                            onClick ={() => clickDate('month_now')}
                            style ={{
                                filter: (enabledDate.enabled && 'month_now' === enabledDate.value)  ? 'brightness(0.5)' : null
                            }}
                        >
                            <h4
                                className='text_section_div_date'
                            >
                               Mes actual
                            </h4>
                            <img
                                className='image_section_div_date'
                                src={ImageDateNow}
                                alt = "imagen"
                            />
                        </div>    
                </div>
                <div>
                    <div
                        className='section_div_date'
                        onClick ={() => clickDate('datetime_manual')}
                        style ={{
                            filter: (enabledDate.enabled && 'datetime_manual' === enabledDate.value)  ? 'brightness(0.5)' : null
                        }}
                    >
                        <h4
                            className='text_section_div_date'
                        >
                            Fecha
                        </h4>
                        <img
                            className='image_section_div_date'
                            src={ImageDate}
                            alt = "imagen"
                        />
                    </div>
                </div>
                <div className='sale_button'>
                    <div
                        className='section_div_sale'
                        onClick ={() => clickDate('sale_manual')}
                        style ={{
                            filter: (enabledDate.enabled && 'sale_manual' === enabledDate.value)  ? 'brightness(0.5)' : null
                        }}
                    >
                        <h4
                            className='text_section_div_sale'
                        >
                            Venta Total
                        </h4>
                        <img
                            className='image_section_div_sale'
                            src={ImageSale}
                            alt = "venta total"
                        />
                    </div>
                </div>
            </div>
            <button
                className='button_section'
                onClick={() => sectionNavigate(enabledDate.value )}
            >
                Siguiente
            </button>
        </WrapperSection>
     );
}
 
export default SectionThird;