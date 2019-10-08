import Button from '../components/button.js'

function login(){
    const template = 
    `
    <h1> Login</h1>
    <form> 
        <input placeholder ="email" type ="email" />
        <input placeholder="senha" type="password" />
    </form>
    `
    return template
}
export default login