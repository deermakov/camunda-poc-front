import logo from '../logo.svg';

const Logo = (props) => {
  const {text} = props;
  return text === 'logo' ? <img src={logo} alt="logo" width='50' height='50'/> : null;
}

export default Logo