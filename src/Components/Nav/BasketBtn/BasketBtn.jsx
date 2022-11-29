import "./BasketBtn.scss"

export default function BasketBtn({total}) {

    return(
        <div className="basket__btn">
            {total}
    </div>
    )
}