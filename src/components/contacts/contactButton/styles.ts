import styled from "styled-components";
import { ContactButtonProps } from ".";

type ContactButtonContainerProps = Omit<ContactButtonProps, "icon" | "link">;

export const Button = styled.a<ContactButtonContainerProps>`
  position: relative;

  padding: 0.5rem;
  border-radius: 35px;

  background: ${({ contactType }) =>
    contactType === "email"
      ? "#DB4437"
      : contactType === "whatsapp"
      ? "#25D366"
      : "#ffff"};

  font-size: 1rem;
  color: var(--gray_100);

  display: flex;
  align-items: center;

  gap: 2rem;

  border: none;

  transition: 1s all ease;

  :hover {
    animation: goTop 350ms forwards;
  }

  :not(:hover) {
    animation: return 1000ms forwards;
  }

  @keyframes goTop {
    0% {
      transform: translatey(-0.25rem);
    }
    50%,
    100% {
      transform: translatey(-0.5rem);
    }
  }

  @keyframes return {
    100% {
      transform: translatey(0);
    }
    0% {
      transform: translatey(-0.5rem);
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
`;

export const ContactIcon = styled.img`
  width: 75%;
  height: 75%;
`;
