import css from './BackLink.module.css';
import { Link } from 'react-router-dom';
import { TbArrowBackUp } from "react-icons/tb";

const BackLink = ({ href, children }) => {
  return (
    <div className={css.container}>
    <TbArrowBackUp />
    <Link to={href} className={css.backlink}>{children}</Link>
  </div>
  )
  
};

export default BackLink;