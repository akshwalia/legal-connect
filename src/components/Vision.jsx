import visionImage1 from '../assets/images/vision1.png'
import visionImage2 from '../assets/images/vision2.png'

export default function Vision() {
    return (
        <div className="about py-5" id="vision">
            <div className="about_heading my-2">
                <h1 className="display-5">OUR VISION</h1>
                <p className="lead">
                    Can We Make Legal Services Accessible to All?
                </p>
            </div>
            <div className="about_content container my-5 px-4">
                <div className="about_content_text">
                    <p className="lead first">
                        In India, where access to legal servies can often be challenging, our platform
                        takes on the mission of addressing this critical issue head-on. Our vision is to revolutionize
                        the legal landscape by providing a user-friendly, inclusive, and comprehnsive platform that makes legal
                        services easily accessible to the public across the country.
                    </p>
                </div>
                <div className="about_content_image">
                    <img src={visionImage1} alt="" />
                </div>
            </div>
            <div className="about_content container my-5 px-4">
                <div className="about_content_image">
                    <img src={visionImage2} alt="" id='visionImage2'/>
                </div>
                <div className="about_content_text">
                    <p className="lead second">
                        Imagine a platform where individuals seeking legal guidance can browse profiles, reviews, and credentials of
                        a diverse range of legal professionals, making informed decisions about who to collaborate with based on their
                        unique needs. This digital marketplace fosters competition, driving innovation and quality in legal services
                        while offering flexible pricing models to accommodate various budgets. Through this vision, we aspire to bridge
                        the gap between the legal community and the public, fostering a collaborative environment where legal experts can
                        thrive and serve the needs of a broader audience.
                    </p>
                </div>
            </div>
        </div>
    )
}