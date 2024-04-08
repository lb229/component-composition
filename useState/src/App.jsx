import { Container } from "./components/Container";
import { Counter } from "./components/Counter";
import { Welcome } from "./components/Welcome";



export function App() {

  return (
    <>
    <Container title={<Welcome />}>
      <hr />
      <Counter />
      </Container>
</>
  );
}