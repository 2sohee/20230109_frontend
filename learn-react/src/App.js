import Hello from "./components/Hello";

function App() {
  return (
    <>
      <Hello title="React" color="yellow" />
      <Hello title="이소희" color="green" />
      <Hello>
        {/* props.children으로 전달 */}
        <p>자식요소 입니다.</p>
      </Hello>
    </>
  );
}

export default App;
