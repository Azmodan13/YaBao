import './Btn.scss'

export default function Btn({ btnText, btnWidth, btnHeight, handelClick }) {
    return (
        <button className="btn" onClick={(event)=> handelClick(event)} style={{ width: btnWidth, height: btnHeight }}>
            {btnText}
        </button>
    )
}
