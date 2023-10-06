import './home.css'
import image_banner from '../../assets/image/illustration/image_banner_4.png'
import stock from '../../assets/image/icons/stock.png'
import sales from '../../assets/image/icons/register.png'
import cash from '../../assets/image/icons/cash.png'
import { useContext } from 'react'
import { ProductContext } from '../../utils/context/context'
import { useNavigate } from 'react-router-dom'

function Home(){
    const [products, setProducts] = useContext(ProductContext)
    const navigate = useNavigate()

    return(
        <div className='dashboard'>

            <div className='left'>
                <div className='banner'>
                    <div className='intro_banner'>
                        <div>
                            <h4>Welcome Hantz</h4>
                            <h6>Cette plateforme offre à ces utilisateurs une gamme complète de ressources pour 
                                une meilleure gestion de leurs entreprises. Pour plus d'information sur nos services.
                            </h6>
                        </div>              
                        <button onClick={()=>navigate('/help')}>
                            cliquez ici
                        </button>
                    </div>
                    <div className='image_banner'>
                        <img src={image_banner} alt='illustration'/>
                    </div>
                    
                </div>
                <div className='overview'>
                    <h4>Overview</h4>
                    <div>
                        <div className='card_overview'>
                            <div className='card_overview_image'>
                                <img src={stock} alt=''/>
                            </div>
                            <div>
                                <h4>Products en stock</h4>
                                <h6>{products.length} en stock</h6>
                            </div>
                        </div>
                        <div className='card_overview'>
                            <div className='card_overview_image'>
                                <img src={sales} alt=''/>
                            </div>
                            <div>
                                <h4>Montant en caisse</h4>
                                <h6>Gdes</h6>
                            </div>
                        </div>
                        <div className='card_overview'>
                            <div className='card_overview_image'>
                                <img src={cash} alt=''/>
                            </div>
                            <div>
                                <h4>Total ventes / jour</h4>
                                <h6>Gdes</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='overview_order'>
                    <div className='card_tableau_overview'>
                        Tableau
                    </div>
                </div>
            </div>

            <div className='right'>
                <div className='overview_best_sales'>
                    <h3>Best Sales</h3>
                    <div>
                        Sales
                    </div>
                </div>
                <div className='overview_chart'>
                    <h3>Chart</h3>
                    <div>
                        Chart Sales
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home