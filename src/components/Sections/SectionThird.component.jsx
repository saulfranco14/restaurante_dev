import React, {useState}        from 'react';
import { useNavigate }          from 'react-router-dom';
import { 
    useDispatch, 
    useSelector 
}                               from 'react-redux';
import ImageSectionThree        from '../../Images/section_3.png';
import ImageDateNow             from '../../Images/now_button.png';
import ImageDate                from '../../Images/date_button.png';
import ImageSale                from '../../Images/sale_tota_button.png';
import FormControl              from '@mui/material/FormControl';
import InputLabel               from '@mui/material/InputLabel';
import MenuItem                 from '@mui/material/MenuItem';
import Select                   from '@mui/material/Select';
import { addDataReport }        from '../../actions/report_action';
import {
    WrapperSection
}                               from '../Report/Report.styles';
import {
    categorySection
}                               from '../../utils/category';


const SectionThird = () => {

    const navigate          = useNavigate();
    const [ disabledButton, setDisabledButton]  = useState(true);
    const [ dataForm, setDataForm]              = useState({});
    const [enabledDate, setEnabledDate ]        = useState({
        value: '',
        enabled: false
    })

    const all_waiter        = useSelector ( state => state.waiters?.waiters || {});
    const all_cashier       = useSelector ( state => state.cashier?.cashier || {});
    const all_product       = useSelector ( state => state.product?.product || {});
    const category          = useSelector ( state => state.report?.category || {});
    let data_map            = categorySection.filter(element => element.value === category);
    const dispatch          = useDispatch();
    const dataReport        = (information) => dispatch( addDataReport(information) );
   
    const  sectionNavigate = (value) => {

        let range_data ={
            date_select: value,
            type_select: dataForm?.select_category
        }

        dataReport(range_data);
        value === 'datetime_manual' ? navigate(`/four_section_datetime`) : navigate(`/view_report`)
    }

    const clickDate = (value) => {
        setDisabledButton(false);
        setEnabledDate({
            value: value,
            enabled: true
        })
    }

    const onChangeForm = ( event ) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
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
                    <InputLabel id="demo-simple-select-label">
                        {
                            [2,4,5,6,8].includes(category) ? 'No puedes seleccionar': 'Selecciona'
                        }
                    </InputLabel>
                    <Select
                        labelId="seleccione"
                        id="demo-simple-select"
                        label="select_category"
                        name="select_category"
                        onChange={onChangeForm}
                        defaultValue = ""
                        disabled = { [2,4,5,6,8].includes(category) ? true : false }
                        style={{
                            filter: [2,4,5,6,8].includes(category) ? 'opacity(0.5)' : null
                        }}
                    >   
                        {
                            data_map[0].information === 'all_waiter' ? 
                            all_waiter.map(( data) => (
                                <MenuItem 
                                    key={data}
                                    value={data}
                                >
                                    {data}
                                </MenuItem>
                            ))
                            :
                            null
                        }
                        {
                            data_map[0].information === 'all_cashier' ? 
                            all_cashier.map(( data) => (
                                <MenuItem 
                                    key={data}
                                    value={data}
                                >
                                    {data}
                                </MenuItem>
                            ))
                            :
                            null
                        }
                        {
                            data_map[0].information === 'all_product' ? 
                            all_product.map(( data) => (
                                <MenuItem 
                                    key={data}
                                    value={data}
                                >
                                    {data}
                                </MenuItem>
                            ))
                            :
                            null
                        }
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
                onClick={() => sectionNavigate( enabledDate.value )}
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
 
export default SectionThird;