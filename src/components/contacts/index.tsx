import React from "react";
import { ContactButton, ContactButtonProps } from "./contactButton";
import {
  Container,
  ContentWrapper,
  Phone,
  ContactsContainer,
  ContactsButtonContainer,
  Title,
} from "./styles";


export function Contacts() {
  const contactsList: ContactButtonProps[] = [
    {
      contact: 'bruno.aiolfi154@gmail.com',
      contactType: 'email',
      icon: 'https://img.icons8.com/color/48/000000/gmail.png',
      onClick: () => openEmail(),
    },
    {
      contact: '+55 48 98806-0117',
      contactType: 'whatsapp',
      icon: 'https://img.icons8.com/color/48/000000/whatsapp.png',
      onClick: () => openWhatsApp(),
    },
  ]

  function openEmail() {
    window.location.href = "mailto:bruno.aiolfi154@gmail.com"
  }
  function openWhatsApp() {
    window.location.href = 'https://wa.me/88060117'
  }

  return (
    <Container>
      <ContentWrapper>
        <Phone>☎️</Phone>
        <ContactsContainer>

          <Title>
            Contatos
          </Title>

          <ContactsButtonContainer>

            {
              contactsList.map(({
                contact, contactType, icon, onClick
              }) =>
                <ContactButton key={contact} contact={contact} contactType={contactType} icon={icon} onClick={onClick} />
              )
            }

          </ContactsButtonContainer>


        </ContactsContainer>

      </ContentWrapper>
    </Container>
  );
}
