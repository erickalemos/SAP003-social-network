// import Button from '../components/button.js'

function Input(props) {
  const template = `
        <input
        class='${props.class}'
        placeholder='${props.placeholder}'
        type='${props.type}'/>

    `;

  return template;
}
export default Input;
