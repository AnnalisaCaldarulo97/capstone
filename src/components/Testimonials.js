import { Swiper, SwiperSlide } from "swiper/react";


function Testimonials() {

    const testimonials = [
        {
            name: 'Tizio',
            vote: 5,
            description: "Delicious Mediterranean with a modern twist! Perfect for families.",
            getImageSrc: () => require("../assets/p1.png")
        },
        {
            name: 'Caio',
            vote: 4,
            description: "Wow! Flavorful dishes at Little Lemon. Modern take on classics - a must try!",
            getImageSrc: () => require("../assets/p2.png")
        },
        {
            name: 'Sempronio',
            vote: 4.5,
            description: "Fresh, delightful Mediterranean at Little Lemon. Can't wait to try more!",
            getImageSrc: () => require("../assets/p4.png")
        },
        {
            name: 'Genoveffa',
            vote: 5,
            description: 'Great value, generous portions, delicious food with a modern twist!',
            getImageSrc: () => require("../assets/p5.png")
        },
    ]
    return (
        <div className="vh-100 container">
            <div className="row py-5">
                <h1 className="title-font title orange mb-5">Testimonials</h1>
            </div>
            <div className="row justify-content-center align-items-center">
                {testimonials.map((p) =>
                    <div className="col-12 col-md-3">
                        <div className="testimonial-card py-2 mb-3 light text-font">
                            <img src={p.getImageSrc()} class="" className="testimonal-img" alt="..." />
                            <h3 className="title-font">{p.name}</h3>
                            <div className="vote d-flex justify-content-center">
                                <p>{p.vote}  </p>
                                <span className="d-flex"> <img src="/media/star.png" className="" height='25px' /> </span>
                            </div>
                            <p>{p.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Testimonials;