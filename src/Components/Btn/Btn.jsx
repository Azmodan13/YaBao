import './Btn.scss'

export default function Btn({ btnText, btnWidth, btnHeight, url = '' }) {
    return (
        <button className="btn" style={{ width: btnWidth, height: btnHeight }}>
            {btnText}
        </button>
    )
}
