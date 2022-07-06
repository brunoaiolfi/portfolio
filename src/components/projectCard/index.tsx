import { Container, Description, DescriptionWrapper, HeaderContainer, ProjectName, RepositoryLink } from "./styles";

export interface ProjectCardProps {
    name: string;
    colorBackground: string;
    description: string;
    repositoryLink: string;
}

export function ProjectCard({
    colorBackground,
    description,
    name,
    repositoryLink
}: ProjectCardProps) {
    return (
        <Container href={repositoryLink}>
            <HeaderContainer colorBackgroundHeader={colorBackground}>
                <ProjectName>{name}</ProjectName>
            </HeaderContainer>

            <DescriptionWrapper>
                <RepositoryLink >/{name}</RepositoryLink>
            </DescriptionWrapper>
        </Container>
    )
}