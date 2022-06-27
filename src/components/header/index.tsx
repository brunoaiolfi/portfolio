import { Container, SectionHeader } from "./styles";

interface headerProps {
  pageOnView: "welcome" | "projects" | "skills" | "carrer" | "contact";
}

export function Header({ pageOnView }: headerProps) {
  return (
    <Container>
      <header>
        <h1>Bruno Aiolfi</h1>

        <article>
          <SectionHeader href="#" isSelected={pageOnView === "welcome"}>
            <p>Boas-vindas!</p>
          </SectionHeader>
          <SectionHeader href="#" isSelected={pageOnView === "projects"}>
            <p>Projetos &amp; participações</p>
          </SectionHeader>
          <SectionHeader href="#" isSelected={pageOnView === "skills"}>
            <p>My Skills</p>
          </SectionHeader>
          <SectionHeader href="#" isSelected={pageOnView === "carrer"}>
            <p>Carreira</p>
          </SectionHeader>
          <SectionHeader href="#" isSelected={pageOnView === "contact"}>
            <p>Contato</p>
          </SectionHeader>
        </article>
      </header>
    </Container>
  );
}
