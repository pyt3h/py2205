import { useSliceSelector, useSliceStore } from 'utils/reduxHelper';

function Component1() {
  const {counter} = useSliceSelector('app', ['counter']);
  return <div>{counter}</div>
}

function Component2() {
  const store = useSliceStore('app');
  function btnClick(){
    const {counter} = store.getState();
    store.setState({counter: counter+1});
  }
  return (
    <button onClick={btnClick}>Increase</button>
  )
}

function App() {
  return(
    <>
      <Component1/>
      <Component2/>
    </>
  )
}

export default App;