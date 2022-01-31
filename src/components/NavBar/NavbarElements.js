import styled from 'styled-components'



export const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #1de9b6;
    padding-top: 10px;
   
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: space-around;

`;

export const LogoContainer = styled.div`
    font-size: 1.2rem;
    margin-left: 0.5rem;
`;

export const Menu = styled.ul`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;

    list-style: none;
    margin-top: 15px;


    @media screen and (max-width: 960px){
        position: absolute;
        top: 65px;
        left: ${({open}) => open ? "0" : "-100%"};
        width: 100%;
        height: 30vh;
        background: #1de9b6;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.6s all ease;
    }
`;

export const MenuItem = styled.li`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    
    &:hover {
        background: #00695c;
    }
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        align-items: center;
        height: 30px;
        margin-top: 10px;
        cursor: pointer;
    }
`





