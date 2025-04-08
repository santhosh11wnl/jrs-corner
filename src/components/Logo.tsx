
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <div className="bg-pitstop-red p-2 rounded-md mr-2">
          <span className="text-white font-diner text-xl">HF</span>
        </div>
        <div>
          <span className="font-diner text-pitstop-darkblue text-2xl tracking-wider">Highway</span>
          <span className="font-diner text-pitstop-red text-2xl tracking-wider">Feast</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
