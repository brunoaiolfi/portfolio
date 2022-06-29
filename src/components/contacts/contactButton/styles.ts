import styled from "styled-components";
interface ContactButtonProps {
  contactType: "email" | "whatsapp";
}

export const Button = styled.button<ContactButtonProps>`
  position: relative;

  width: 30rem;
  height: 5rem;

  padding: 1rem;
  border-radius: 35px;

  background-color: ${({ contactType }) =>
    contactType === "email" ? "#DB4437" : "#25D366"};

  font-size: 1rem;
  color: var(--white);

  display: flex;
  align-items: center;

  gap: 2rem;

  border: none;

  transition: 1s all ease;

  :hover {
    animation: goRight 350ms forwards;
  }

  :not(:hover) {
    animation: return 1000ms forwards;
  }

  @keyframes goRight {
    0% {
      transform: translateX(3%);
    }
    50%,
    100% {
      transform: translateX(10%);
    }
  }

  @keyframes return {
    100% {
      transform: translateX(0);
    }
    0% {
      transform: translateX(10%);
    }
  }
`;

export const ContactIconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: var(--white);
`;

export const ContactIcon = styled.img`
  width: 75%;
  height: 75%;
`;

export const Contact = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
`;
