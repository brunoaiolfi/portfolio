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
        <Container>
            <HeaderContainer colorBackgroundHeader={colorBackground}>
                <ProjectName>{name}</ProjectName>
            </HeaderContainer>

            <DescriptionWrapper>
                <Description>
                    {description}
                </Description>
                <RepositoryLink href={repositoryLink}>/{name}</RepositoryLink>
            </DescriptionWrapper>
        </Container>
    )
}