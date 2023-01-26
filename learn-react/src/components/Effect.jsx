import { useEffect, useState } from "react";

function Effect() {
  const [count] = useState(0);

  useEffect(() => {
    console.log("렌더링!");
  });
  console.log("rendering");
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Effect;
