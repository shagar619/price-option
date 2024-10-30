import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {path, name} = route;


    return (
   <li className="mr-12 hover:bg-slate-500 hover:text-black p-4 rounded-sm" >
            <a href={path}>{name}</a>
                    </li>
    );
};


Link.propTypes = {
    route: PropTypes.object
} 
export default Link;