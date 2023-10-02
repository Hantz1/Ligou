import styled from 'styled-components'
import './home.css'

function Home(){
    const Dashboard=styled.div`
        margin: 10px;
        display: flex;
        flex-direction: row;
        gap: 5px;
    `
    const Left=styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70%;
        gap: 15px;
    `

    const Right=styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
        gap: 15px;
    `

    return(
        <Dashboard>
            <Left>
                <div className='banner'>
                    <h4>Hello Hantz</h4>
                    <h6>Welcome back, nice to see you again!</h6>
                </div>
                <div className='overview'>
                    <h4>Overview</h4>
                    <div>
                        <div className='card_overview'>
                            card 1
                        </div>
                        <div className='card_overview'>
                            Card 2
                        </div>
                        <div className='card_overview'>
                            Card 3
                        </div>
                    </div>
                </div>
                <div className='overview_order'>
                    <h3>Sales Overview</h3>
                    <div className='card_tableau_overview'>
                        Tableau
                    </div>
                </div>
            </Left>
            <Right>
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
            </Right>
        </Dashboard>
    )
}

export default Home