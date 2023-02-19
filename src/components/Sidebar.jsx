import Curriculo from '../cv/profile.pdf';
import Avatar from '../img/eu.jpeg'
import SocialNetworks from './SocialNetworks';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Lucas Eduardo"  />
        <p className="title">Desenvolvedor React</p>
        < SocialNetworks />
        < InformationContainer />
        <a href={Curriculo} target="_blank" className="btn">
            Download Currículo
        </a>
    </aside>
};

export default Sidebar