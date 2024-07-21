import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

function About() {
    return (
        <div className="about-cointainer">
            <div className="container pt-5 h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-12 col-md-6 text-start">
                        <h1 className="title yellow title-font">About us</h1>
                        <p className='text-font light'>At Little Lemon, we bring a taste of the Mediterranean to your table, seasoned with a touch of modern flair. We're a family-owned restaurant, pouring our passion for fresh, seasonal ingredients into every dish. Our menu reimagines traditional recipes with a creative twist, offering a delightful dining experience that warms your heart and tantalizes your taste buds. Come join us and discover the Little Lemon difference!</p>
                    </div>
                    <div className="col-12 col-md-6 about-images ">
                        <div className='img-1'>
                            <img className='' src='/media/Mario and Adrian A.jpg' />
                        </div>
                        <div className='img-2'>
                            <img className='' src='/media/Mario and Adrian b.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;