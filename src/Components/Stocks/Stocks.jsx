import './Stocks.scss'
import Btn from '../Btn/Btn'
import {Link} from 'react-router-dom'
export default function Stocks() {
    return (
        <div id="stocks" className="stocks">
            <p className="stocks__title">
                Наші <span>акції</span>
            </p>
            <div className="stocks__wrapper">
                <div className="stocks__big">
                    <img
                        src="https://nzl.theukrainians.org/wp-content/uploads/2022/02/come.back_.alive_.jpg"
                        alt="stocOne"
                    />
                </div>
                <div className="stocks__litle">
                    <img
                        src="https://nzl.theukrainians.org/wp-content/uploads/2022/02/come.back_.alive_.jpg"
                        alt="stocOne"
                    />
                    <img
                        src="https://nzl.theukrainians.org/wp-content/uploads/2022/02/come.back_.alive_.jpg"
                        alt="stocOne"
                    />
                    <img
                        src="https://nzl.theukrainians.org/wp-content/uploads/2022/02/come.back_.alive_.jpg"
                        alt="stocOne"
                    />
                    <img
                        src="https://nzl.theukrainians.org/wp-content/uploads/2022/02/come.back_.alive_.jpg"
                        alt="stocOne"
                    />
                </div>
            </div>
            <Link to="stock">
            <Btn btnText="Всі акції" btnWidth={'160px'} btnHeight={'48px'} />
            </Link>
        </div>
    )
}
