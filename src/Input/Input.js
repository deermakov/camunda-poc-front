const Input = (props) => {
  const {text, handleInput} = props;
  return <input type='text' value={text} onChange={handleInput}/>
}

export default Input