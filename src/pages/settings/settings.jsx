import './settings.css'
import settings from '../../assets/image/icons/settings.png'
import { Link } from 'react-router-dom'

function Settings(){
    return(
        <div className="container">
            <div className="container_settings">
                <div className="menu_settings">

                    <div className='header_settings'>
                        <div className='settings_image'>
                            <img src={settings} alt='settings'/>
                        </div>
                        <div>
                            <h4>Parametres</h4>
                            <h6>Les paramètres du systeme</h6>
                        </div>
                    </div>

                    <div className='liste_settings'>
                        <ul>
                            <li>
                                <Link to='' className='lien'>
                                    <h5>Profil</h5>
                                </Link>
                            </li>

                            <li>
                                <Link to='' className='lien'>
                                    <h5>Types de paiement</h5>
                                </Link>
                            </li>

                            <li>
                                <Link to='' className='lien'>
                                    <h5>Impots</h5>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to='' className='lien'>
                                    <h5>Reçu</h5>
                                </Link>
                            </li>

                            <li>
                                <Link to='' className='lien'>
                                    <h5>Taxe</h5>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="main_settings">main</div>
            </div>
        </div>
    )
}

export default Settings