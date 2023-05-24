
export default function Apps(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="main--div">
            {badgeText && <div className="main--badge">{badgeText}</div>}
            < img className="main--img1" src={props.item.coverImage} alt="img" />
            <div className="main--star">
                <img className="main--star__image" src={props.item.image} alt="star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">{props.item.stats.reviewCount}</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="text">{props.item.title}</p>
            <p className="text"><span className="bold">from ${props.item.price}</span> / person</p>
        </div>
    )
}
