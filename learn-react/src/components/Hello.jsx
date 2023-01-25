//컴포넌트의 첫 번째 매개변수로 props 객체가 전달된다.
// Hello는 내가 그냥 지정한 객체(컴포넌트)임
// 비구조화 할당을 통해 간추릴 수 있다.
function Hello({ title, children, color }) {
  console.log({ title });

  return (
    <div>
      <h1 style={{ color, backgroundColor: "gray", fontSize: 20 }}>
        Hello {title}
      </h1>

      {children}
      <input type="text" />
      <img src="" alt="" />
    </div>
  );
}
//props가 전달되지 않았을 때 적용할 기본 값
Hello.defaultProps = {
  title: "리액트",
  color: "red",
};
export default Hello;
