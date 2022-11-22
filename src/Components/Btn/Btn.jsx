import './Btn.scss'

export default function Btn({ btnText, btnWidth, btnHeight, url = '', onclick }) {
    return (
        <button className="btn" onClick={(event)=> onclick(event)} style={{ width: btnWidth, height: btnHeight }}>
            {btnText}
        </button>
    )
}
