import styled from 'styled-components';

export const WrapperHomePage = styled.div`
    display         : flex;
    margin          : 0 auto;
    flex-direction  : column;
    margin-bottom   : 30px;

    .button_section{

        width           : 85%;
        display         : flex;
        height          : 100px;
        flex-direction  : row;
        border-radius   : 10px;
        margin          : 0 auto;
        margin-top      : 30px;
        align-items     : center;
        cursor          : pointer;

        .image_button{
            width       : 64px ;
            height      : 64px ;
            margin-left : 22px;
        }

        .text_button{
            font-family : system-ui;
            font-style  : normal;
            font-weight : 700;
            font-size   : 24px;
            line-height : 29px;
            color       : #FFFFFF;
            margin-left : 33px;
        }
    }

    .background_black{
        background  : #000000;
    }
    .background_blue{
        background  : #046EBB;
    }
    .background_orange{
        background  : #FF7629;
    }
`
