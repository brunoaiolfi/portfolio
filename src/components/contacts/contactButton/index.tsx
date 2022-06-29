import {
Button,
    Contact,
    ContactIcon,
ContactIconContainer

} from './styles'

export interface ContactButtonProps {
    contactType: "email" | "whatsapp";
    contact: string;
    icon: string;
    onClick: () => void;
}

export function ContactButton({ contact, contactType, icon, onClick }: ContactButtonProps) {
    return (
        <Button contactType={contactType} onClick={onClick}>
            <ContactIconContainer>
                <ContactIcon src={icon} alt={contactType}/>
            </ContactIconContainer>
            <Contact>
                {contact}
            </Contact>
        </Button>
    )

}
