const Card = ({ title, price, description, imageSrc }) => {
    return (
        <div className="Card mx-auto mt-5">
            <img src={imageSrc} className="card-image" />
            <div className="card-body text-start px-4 py-3">
                <div className="card-titles title-font d-flex justify-content-between align-items-center ">
                    <h3 className=" my-auto">{title}</h3>
                    <p className="yellow price  my-auto">{price}</p>
                </div>
                <p className="text-font">
                    {description}
                </p>
            </div>
            <div className="card-end text-start px-4 pb-4">
                <span className=" d-flex align-items-center ">
                    <a className="text-dark text-font me-2 delivery" href="#">Order a delivery</a>
                    <i className="bi bi-bicycle i"></i>
                </span>
            </div>
        </div>

    )
};

export default Card;
