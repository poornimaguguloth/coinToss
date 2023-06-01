// Write your code here
import {Component} from 'react'

import './index.css'

const heads_img = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tails_img = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    tossResultImage: heads_img 
  }

  btnClicked = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImg = ''
  //  let newHeadsCount = headsCount
    //let newTailsCount = tailsCount
  
    if (tossResult === 0) {
        this.setState({
            tossImg = heads_img
             headsCount += 1,
        })
    }
    else {
        this.setState({ 
            tossImg = tails_img
            tailsCount += 1, 
            )}
        }
}

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails-text">Heads (or) Tails</p>

            <img 
               src={tossResultImage} 
               alt="toss result" 
               className="toss-result-img" 
            /> 

          <button className="coin" type="button" onClick={this.btnClicked}>
            Toss Coin
          </button>

          <div>
            <p className="totalNo">Total:{totalCount}</p>
            <p className="totalHeads">Heads:{headsCount}</p>
            <p className="totalTails">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
