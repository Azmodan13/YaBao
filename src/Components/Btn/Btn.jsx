import './Btn.scss'

export default function Btn({ btnText, btnWidth, btnHeight, url = '', onclick }) {
    return (
        <button className="btn" onClick={()=> onclick} style={{ width: btnWidth, height: btnHeight }}>
            {btnText}
        </button>
    )
}
