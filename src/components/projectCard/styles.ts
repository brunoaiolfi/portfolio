import styled from "styled-components";

interface backgroundHeader {
  colorBackgroundHeader: string;
}
export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 18rem;
  height: 20rem;

  border-radius: 8px;
  border: 1px solid var(--gray_500);

  box-shadow: 0px 8px 8px 0px ${({theme}) => theme.colors.gray_700} ;

`;

export const HeaderContainer = styled.header<backgroundHeader>`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ colorBackgroundHeader }) => colorBackgroundHeader};

  border-radius: 8px 8px 0 0;
`;

export const ProjectName = styled.h1`
  color: #fff;

  font-size: 1.5rem;
`;

export const DescriptionWrapper = styled.article`
  width: 100%;
  height: 60%;

  padding: 0.5rem;

  border-top: none;
  border-radius: 0 0 8px 8px;

  display: flex;
  flex-direction: column;

  align-items: left;
  justify-content: space-between;
`;

export const Description = styled.h1`
  color: var(--gray_500);

  font-size: 1rem;
  font-weight: 500;

  text-align: justify;
`;

export const RepositoryLink = styled.a`
  font-size: 1.25rem;

  color: var(--cyan_500);
  text-align: left;
`;
