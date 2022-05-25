import styled from 'styled-components';

export const WrapperSection = styled.div`

    display         : flex;
    flex-direction  : column; 
    margin          : 0 auto;
    align-items     : center;
    justify-content : ${props => props.justifyContent ? props.justifyContent : 'space-evenly'} ;
    height          : 100vh;

    .image_section{
        margin-top: 0px;
    }

    .image_section_report{
        margin-top: 10px;
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

    .text_section_report{
        justify-content : center;
        align-items     : center;
        display         : flex;
        width           : 100% ;
        margin-top      : 24px
    }

    .text_report{
        font-family     : inherit;
        font-style      : normal;
        font-weight     : 800;
        font-size       : 16px;
        line-height     : 19px;
        margin          : 0 ;
        margin-bottom   : 21px;
    }

    .text_section_div{
        font-family         : inherit;
        font-style          : normal;
        font-weight         : 700;
        font-size           : 16px;
        line-height         : 19px;
        color               : #FFFFFF;
    }

    .button_section{
        width           : 250px;
        height          : 50px;
        background      : #000000;
        border-radius   : 10px;
        color           : #FFFF;
    }

    .image_section_div{
        width       : 32px;
        height      : 25px;
        margin-left : 7px;
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

    .section_report{
        width               : 76%;
        height              : 180px;
        background          : rgba(217, 217, 217, 0.42);
        border-radius       : 5px;
        color               : black;
        display             : flex ;
        justify-content     : start;
        align-items         : start;
        padding-left        : 12px;
        padding-right       : 12px;
        padding-top         : 20px;
        flex-direction      : column;
        h6{
            font-style  : normal;
            font-weight : 400;
            font-size   : 14px;
            line-height : 17px;
            margin      : 8px ;
        }
        span{
            margin-left : 10px;
            font-weight : 700;
            font-size   : 14px;
            line-height : 17px;
        }
    }

    .section_button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80% ;
        flex-direction: column;
        margin-top: 20px;
        
        .button_report{
            width: 100%;
            height: 50px;
            border-radius: 10px;
            font-family: inherit;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
            padding: 0;
            border: none;
            margin-bottom: 20px;
        }   
        .save_report{
            background: #009117;
        }
        .download_pdf{
            background: #BA0000;
        }
        .retry_report{
            background: #046EBB;
        }
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
