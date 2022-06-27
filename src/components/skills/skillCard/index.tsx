import { DescriptionList, DescriptionListContainer, Image, SkillCardContainer, Title } from "./styles";

export interface SkillCardProps {
    title: string;
    image: string;
    description: boolean[];
}

export function SkillCard({ description, image, title, }: SkillCardProps) {

    return (
        <SkillCardContainer>
            <Title>{title}</Title>
            <Image src={image} alt={title+'img'} />

            <DescriptionListContainer>

                {
                    description.map(item =>
                        <DescriptionList isActivated={item} />
                    )
                }
            </DescriptionListContainer>
        </SkillCardContainer>
    )
}