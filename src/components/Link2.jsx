import { Link } from 'react-router-dom';

const Link2 = ({ to, children, ...rest }) => {
    return (
      <Link to={to} className="link2" {...rest}>
        {children}
      </Link>
    );
  };
  
  export default Link2;