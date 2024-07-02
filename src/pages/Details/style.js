import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    

    display: grid;
    grid-template-rows: 105px auto;

    > main {
        padding: 64px 0;
    }
`
export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        margin-top: 64px;
        align-self: end;
    }

    > h1 {
        font-size: 36px;
        font-weight: bold;
        padding-top: 64px;
    }

    > p {
        font-size: 16px;
        font-weight: 400;
        margin-top: 16px;

        text-align: justify;
    }
`