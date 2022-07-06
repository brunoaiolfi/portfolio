import styled from "styled-components";

interface backgroundHeader {
  colorBackgroundHeader: string;
}
export const Container = styled.a`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 18rem;
  height: 15rem;

  padding: 1rem;

  border: 1px solid var(--gray_500);

  box-shadow: 0px 8px 8px 0px ${({ theme }) => theme.colors.gray_700};

  transition: all 0.3s ease-in-out;

  cursor: pointer;

  :hover {
    border: 1px solid var(--yellow_500);
    box-shadow: 0px 8px 8px 0px ${({ theme }) => theme.colors.yellow_500};
  }
  
  @media only screen and (max-width: 600px) {
    /* For phone: */
    /* flex-direction: column; */

    width: 15rem;
    height: 12rem;
  }

 
`;

export const HeaderContainer = styled.header<backgroundHeader>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ colorBackgroundHeader }) => colorBackgroundHeader};
`;

export const ProjectName = styled.h1`
  color: #fff;

  font-size: 1.5rem;

  @media only screen and (max-width: 600px) {
    /* For phone: */
    font-size: 1rem;
  }

`;

export const DescriptionWrapper = styled.article`
  width: 100%;

  border-top: none;
  border-radius: 0 0 8px 8px;

  display: flex;
  flex-direction: column;

  align-items: left;
  justify-content: space-between;

  margin-top: 1rem;
`;

export const Description = styled.h1`
  color: var(--gray_500);

  font-size: 1rem;
  font-weight: 500;

  text-align: justify;
`;

export const RepositoryLink = styled.p`
  font-size: 1.25rem;

  color: var(--cyan_500);
  text-align: left;
`;
