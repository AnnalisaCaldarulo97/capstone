import Card from "./Card";
function Main() {
    const specials = [
        {
            key: 'special1',
            title: "Greek salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutouns.",
            getImageSrc: () => require("../assets/greek salad.webp")
        },
        {
            key: 'special2',
            title: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made rom frilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            getImageSrc: () => require("../assets/bruscheta.webp")
        },
        {
            key: 'special3',
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            getImageSrc: () => require("../assets/lemon dessert.webp")
        },
    ]
    return (
        <main className="min-vh-100 container ps-custom" id="main">
            <div className="row align-items-center justify-content-between ">
                <div className="col-12 col-md-6">
                    <h1 className="title-font title-main text-start">This weeks specials!</h1>
                </div>
                <div className="col-12 col-md-4">
                    <a href="#" className="btn-yellow py-3 px-5">Online Menu</a>
                </div>
            </div>
            <div className="row justify-content-between">
                {specials.map((special) => (
                    <div className="col-12 col-md-4">
                        <Card
                            key={special.key}
                            title={special.title}
                            price={special.price}
                            description={special.description}
                            imageSrc={special.getImageSrc()}
                        />
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Main;