import {styled} from "styled-components"

export const PdfFileWrapper = styled.a`
text-decoration: none;
display: flex;
align-items: center;
height: 60px;
padding: 0 8px;
gap: 0.5rem;
background-color: var(--light_dark);
cursor: pointer;
border-radius: 4px;
svg{
    font-size: 15px;;
    fill: white;
}
.pdfName{
    font-size: 14px;
    letter-spacing: 0.9px;
    color: white;

}
`