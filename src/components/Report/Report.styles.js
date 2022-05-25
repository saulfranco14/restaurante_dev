import styled from 'styled-components';

export const WrapperSection = styled.div`
    display         : flex;
    flex-direction  : column; 
    margin          : 0 auto;
    align-items     : center;
    justify-content : space-evenly;
    height          : 100vh;

    .image_section{
        margin-top: 0px;
    }
    .text_section{
        font-family     : inherit;
        font-style      : normal;
        font-weight     : 500;
        font-size       : 20px;
        line-height     : 24px;
        width           : 187px;
        height          : 104px;
        margin          : 0 auto ;
    }

    .button_section{
        width           : 250px;
        height          : 50px;
        background      : #000000;
        border-radius   : 10px;
        color           : #FFFF;
    }

    .category_section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 20px;
    }

    .section_div{
        background          : #FF7629;
        border-radius       : 10px;
        width               : 130px;
        height              : 55px ;
        display             : flex;
        flex-direction      : row;
        align-items         : center;
        justify-content     : space-around;
    }
    .text_section_div{
        font-family         : inherit;
        font-style          : normal;
        font-weight         : 700;
        font-size           : 16px;
        line-height         : 19px;
        color               : #FFFFFF;
    }
    .image_section_div{
        width       : 32px;
        height      : 25px;
        margin-left : 7px;
    }
    .section_datetime{
        display: grid;
        grid-template-columns   : repeat(2, 1fr);
        grid-template-rows      : repeat(3, 1fr);
        grid-column-gap         : 20px;
        grid-row-gap            : 0px;
        width                   : 76%;
        margin-top              : 50px;
        .select_div{
            grid-area: 1 / 1 / 2 / 3;
        }
        .sale_button{
            grid-area: 3 / 1 / 4 / 3;
        }
        .section_div_date{
            background          : #FF7629;
            border-radius       : 10px;
            display             : flex;
            flex-direction      : column;
            align-items         : center;
            justify-content     : space-evenly;
            width               : 140px;
            height              : 80px;
            .image_section_div_date{
                width       : 32px;
                height      : 32px;
            }
            .text_section_div_date{
                font-family         : inherit;
                font-style          : normal;
                font-weight         : 700;
                font-size           : 16px;
                line-height         : 19px;
                color               : #FFFFFF;
                margin              : 5px;
            }
        }
        .section_div_sale{
            background          : #FF7629;
            border-radius       : 10px;
            height              : 55px ;
            display             : flex;
            flex-direction      : column;
            align-items         : center;
            justify-content     : center;
            width               : 300px;
            height              : 100px;
            .image_section_div_sale{
                width       : 48px;
                height      : 48px;
            }
            .text_section_div_sale{
                font-family         : inherit;
                font-style          : normal;
                font-weight         : 700;
                font-size           : 18px;
                line-height         : 19px;
                color               : #FFFFFF;
                margin              : 10px;
            }
        }
    }
`
