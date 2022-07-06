import { DescriptionList, HabilityLevel, Header, Image, SkillCardContainer, Title, ToolTipButton } from "./styles";
import ReactTooltip from "react-tooltip";

export interface SkillCardProps {
    title: string;
    image: string;
    description: boolean[];
}

export function SkillCard({ description, image, title, }: SkillCardProps) {

    return (
        <SkillCardContainer>
            {/* Habilidade */}
            <ReactTooltip
                id={"edit"}
                place="top"
                effect="solid"
            >
                Teste
            </ReactTooltip>

            <ToolTipButton
                data-tip
                data-for='edit'
            >
                <p>
                    ?
                </p>
            </ToolTipButton>
            <Header>
                <Title>{title}</Title>

            </Header>

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