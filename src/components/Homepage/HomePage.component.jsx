import React,{
    useState, 
    useEffect
}                               from 'react';
import {
    WrapperHomePage
}                               from './HomePage.styles';
import { useNavigate }          from 'react-router-dom';
import ImagePlus                from '../../Images/plus_report.png';
import ImageViewReport          from '../../Images/report_section_1.png';
import ImageViewProduct         from '../../Images/products_section_1.png';
import ImageViewWaiters         from '../../Images/waiters_section_1.png';
import ImageViewCashier         from '../../Images/cashier_section_1.png';
import ImageViewZone            from '../../Images/zone_section_1.png';
import Box                      from '@mui/material/Box';
import Typography               from '@mui/material/Typography';
import Modal                    from '@mui/material/Modal';
import  {styleModal}            from '../../utils/modal';
import  {getAllWaiter}          from '../../actions/waiters_action';
import  {getAllCashier}         from '../../actions/cashier_action';
import  {getAllProduct}         from '../../actions/product_action';
import  {getAllZone}            from '../../actions/zone_action';
import { 
    useDispatch,
    useSelector 
}                           from 'react-redux';

const HomePage = () => {

    const dispatch          = useDispatch();
    const navigate          = useNavigate();
    const [open, setOpen]   = useState(false);
    const handleClose       = () => setOpen(false);
    const loadingWaiter     = () => dispatch( getAllWaiter() );
    const loadingCashier    = () => dispatch( getAllCashier() );
    const loadingProduct    = () => dispatch( getAllProduct() );
    const loadingZone       = () => dispatch( getAllZone() );

    const [dataSection, setDataSection] = useState({
        section: '',
        information: [],
    })
    const all_waiter        = useSelector ( state => state.waiters?.waiters || {});
    const all_cashier       = useSelector ( state => state.cashier?.cashier || {});
    const all_product       = useSelector ( state => state.product?.product || {});
    const all_zone          = useSelector ( state => state.zone?.zone || {});

    const  sectionNavigate = (redirect) => {
        navigate(`/${redirect}`)
    }

    const handleOpen        = (data, action) => {
        setOpen(true);
        setDataSection({section: data, information: action})
    }

    // USE EFFECT LOADER
    useEffect( () => {
        loadingWaiter();
        loadingCashier();
        loadingProduct();
        loadingZone();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

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
                onClick={() => handleOpen('Productos', all_product)}
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
                onClick={() => handleOpen('Meseros', all_waiter)}
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
                onClick={() => handleOpen('Cajeros', all_cashier)}
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
                onClick={() => handleOpen('Zonas', all_zone)}
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
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center'}}>
                     {dataSection.section}
                </Typography>
                    {
                        dataSection.information.map((data) => (
                            <h4 
                                key={data}
                            >
                                {data}
                            </h4>
                        ))
                    }
                </Box>
            </Modal>

        </WrapperHomePage>
     );
}
 
export default HomePage;