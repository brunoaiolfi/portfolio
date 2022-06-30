import React from "react";
import { ContactButton, ContactButtonProps } from "./contactButton";
import {
  Container,
  Phone,
  ContactsButtonContainer,
  Title,
  TitleWrapper,
} from "./styles";


export function Contacts() {
  const contactsList: ContactButtonProps[] = [
    {
      contactType: 'email',
      icon: 'https://img.icons8.com/color/48/000000/gmail.png',
      link: "mailto:bruno.aiolfi154@gmail.com",
    },
    {
      contactType: 'whatsapp',
      icon: 'https://img.icons8.com/color/48/000000/whatsapp.png',
      link: 'https://wa.me/88060117',
    },
   
  ]

  return (
    <Container>
      <TitleWrapper>
        <Phone>☎️</Phone>
        <Title>
          Entre em contato
        </Title>
      </TitleWrapper>

      <ContactsButtonContainer>

        {
          contactsList.map(({
             contactType, icon, link
          }) =>
            <ContactButton key={link} contactType={contactType} icon={icon} link={link} />
          )
        }

      </ContactsButtonContainer>


    </Container>
  );
}
