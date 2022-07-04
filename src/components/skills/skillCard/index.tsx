import { DescriptionList, HabilityLevel, Image, SkillCardContainer, Title } from "./styles";

export interface SkillCardProps {
    title: string;
    image: string;
    description: boolean[];
}

export function SkillCard({ description, image, title, }: SkillCardProps) {

    return (
        <SkillCardContainer>
            {/* Habilidade */}
            <Title>{title}</Title>
            {/* Imagem */}
            <Image src={image} alt={title + 'img'} />
            {/* Nível de habilidade */}
            <HabilityLevel>
                {
                    description.map(item =>
                        <DescriptionList isActivated={item} />
                    )
                }
            </HabilityLevel>
        </SkillCardContainer>
    )
}