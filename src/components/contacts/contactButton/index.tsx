import {
Button,
    ContactIcon,
ContactIconContainer

} from './styles'

export interface ContactButtonProps {
    contactType: "email" | "whatsapp";
    icon: string;
    link: string;
}

export function ContactButton({  contactType, icon, link }: ContactButtonProps) {
    return (
        <Button href={link} contactType={contactType}>
            <ContactIconContainer>
                <ContactIcon src={icon} alt={contactType}/>
            </ContactIconContainer>
        </Button>
    )

}
