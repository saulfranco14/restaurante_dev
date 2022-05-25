import React,{useState}     from 'react';
import {
    WrapperHomePage
}                           from './HomePage.styles';
import { useNavigate }      from 'react-router-dom';
import ImagePlus            from '../../Images/plus_report.png';
import ImageViewReport      from '../../Images/report_section_1.png';
import ImageViewProduct     from '../../Images/products_section_1.png';
import ImageViewWaiters     from '../../Images/waiters_section_1.png';
import ImageViewCashier     from '../../Images/cashier_section_1.png';
import ImageViewZone        from '../../Images/zone_section_1.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styleModal} from '../../utils/modal';

const HomePage = () => {

    const navigate          = useNavigate();
    const [open, setOpen]   = useState(false);
    const handleClose       = () => setOpen(false);
    const [dataSection, setDataSection] = useState({
        section: ''
    })

    function sectionNavigate(redirect) {
        navigate(`/${redirect}`)
    }

    const handleOpen        = (data) => {
        setOpen(true);
        setDataSection({section: data})
    }

    return ( 
        <WrapperHomePage>
            
            <div 
                className='button_section background_black'
                onClick={() => sectionNavigate('create_report')}
            >
                <img
                    className='image_button'
                    src={ImagePlus}
                    alt="crear reporte"
                />
                <h3 className='text_button'>
                    Crear reporte
                </h3>
            </div>

            <div 
                className='button_section background_blue'
                onClick={() => sectionNavigate('my_reports')}
            >
                <img
                    className='image_button'
                    src={ImageViewReport}
                    alt="ver mis reportes"
                />
                <h3 className='text_button'>
                    Ver mis reportes
                </h3>
            </div>

            <div 
                className='button_section background_orange'
                onClick={() => handleOpen('Productos')}
            >
                <img
                    className='image_button'
                    src={ImageViewProduct}
                    alt="ver mis productos"
                />
                <h3 className='text_button'>
                    Ver mis productos
                </h3>
            </div>

            <div 
                className='button_section background_orange'
                onClick={() => handleOpen('Meseros')}
            >
                <img
                    className='image_button'
                    src={ImageViewWaiters}
                    alt="ver mis meseros"
                />
                <h3 className='text_button'>
                    Ver meseros
                </h3>
            </div>

            <div 
                className='button_section background_orange'
                onClick={() => handleOpen('Cajeros')}
            >
                <img
                    className='image_button'
                    src={ImageViewCashier}
                    alt="ver mis cajeros"
                />
                <h3 className='text_button'>
                    Ver cajeros
                </h3>
            </div>

            <div 
                className='button_section background_orange'
                onClick={() => handleOpen('Zonas')}
            >
                <img
                    className='image_button'
                    src={ImageViewZone}
                    alt="ver mis zonas"
                />
                <h3 className='text_button'>
                    Ver zonas
                </h3>
            </div>

            {/* MODAL */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={styleModal}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Modal para ver: {dataSection.section}
              </Typography>
            </Box>
          </Modal>

        </WrapperHomePage>
     );
}
 
export default HomePage;