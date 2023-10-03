import styled from "styled-components";

const MyStackStyled = styled.article`
width: 100%;
text-align: center;
background-color: ${(props) => props.theme.colors.primary};
<<<<<<< Updated upstream

.title-myStack {
text-align: center;
padding: 30px;
margin: 0;
font-size: ${(props) => props.theme.fontSizes.regular};
font-weight: ${(props) => props.theme.fontWeigth.bold};
color: ${(props) => props.theme.colors.secondary};


@media screen and (min-width: 481px) {
text-align: center;
}
}


.logo-stack {
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: 20px auto 0 auto;
gap: 20px;
padding: 30px 4px 3px 52px;
max-width: 800px;
}
  }
  


@media (max-width: 320px) {
.logo-stack {
display: block;
}
}

=======

<<<<<<< HEAD
  .title-myStack {
    text-align: center;
    padding: 30px;
    margin: 0;
    font-size: ${(props) => props.theme.fontSizes.regular};
    font-weight: ${(props) => props.theme.fontWeigth.bold};
    color: ${(props) => props.theme.colors.secondary};
=======
.title-myStack {
text-align: center;
padding: 30px;
margin: 0;
font-size: ${(props) => props.theme.fontSizes.regular};
font-weight: ${(props) => props.theme.fontWeigth.bold};
color: ${(props) => props.theme.colors.secondary};
>>>>>>> a65d5ee (Fix the alignment in MyStack component)

@media screen and (min-width: 481px) {
text-align: center;
}
}

.logo-stack {
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: 20px auto 0 auto;
gap: 20px;
padding: 30px 4px 3px 52px;
max-width: 800px;
}

@media (max-width: 320px) {
.logo-stack {
display: block;
}
}

>>>>>>> Stashed changes
.icon-wrapper {
display: inline-flex;
align-items: center;
gap: 5px;
}
`;

export default MyStackStyled;
