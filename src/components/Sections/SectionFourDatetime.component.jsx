import React, {useState}            from 'react';
import { useNavigate }              from 'react-router-dom';
import ImageDateTime                from '../../Images/section_4.png';
import {
    WrapperSection
}                                   from '../Report/Report.styles';
import TextField                    from '@mui/material/TextField';
import { DateRangePicker }          from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns }           from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider }     from '@mui/x-date-pickers/LocalizationProvider';

const SectionFourDatetime = () => {

    const [value, setValue] = useState([null, null]);
    const navigate          = useNavigate();
    
    const  sectionNavigate  = (redirect) => {
        navigate(`/${redirect}`)
    }


    return ( 
        <WrapperSection
            justifyContent = 'center'
        >
             <img
                className='image_section_report'
                src={ImageDateTime}
                alt="agregar la fecha seleccionada"
            />
            <h4
                className='text_section_report'
            >
              Selecciona la fecha deseada:
            </h4>
            <div className='section_datetime_input'>
                <LocalizationProvider 
                    dateAdapter={AdapterDateFns}
                    style={{
                        marginBottom: '40px',
                    }}
                >
                    <DateRangePicker
                        startText="Agrega la fecha de inicio"
                        endText="Agrega al fecha de Termino"
                        value={value}
                       
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} />
                           
                            <TextField {...endProps} />
                        </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
            </div>
            <button
                className='button_section'
                onClick={() => sectionNavigate('view_report')}
            >
                Siguiente
            </button>
        </WrapperSection>
           
     );
}
 
export default SectionFourDatetime;