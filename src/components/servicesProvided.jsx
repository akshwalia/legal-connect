export default function ServicesProvided() {
    return (
        <div className="services py-5" id="services">
            <div className="services_heading my-2">
                <h1 className="display-5">EXPLORE OUR SERVICES</h1>
                <p className="lead">
                    Your Gateway to a Diverse Spectrum of Legal Services Designed to Address Your Every Legal Need!
                </p>
            </div>
            
            <div className="services_content my-5 container">
                
                <div className="service">
                    <h2>LEGAL CONSULTATIONS</h2>
                    <p className="lead">
                        This service provides users with the opportunity to connect with experienced
                        lawyers and advocates for one-on-one consultations. During these consultations,
                        users can discuss their legal concerns, receive guidance on their rights and
                        options, and gain insights into how to approach their specific legal issues.

                    </p>
                    <p className="lead">
                        Legal consultations are invaluable for individuals and businesses seeking clarity
                        and expert advice on various legal matters.
                    </p>
                    <a href="#">
                        <button
                            type="button"
                            className="btn mainButton btn-outline-info text-xs mx-1"
                            id="login_button"
                        >
                            LEARN MORE
                        </button>
                    </a>
                </div>
                <div className="line"></div>
                <div className="service">
                    <h2>MEDIATION SERVICES</h2>
                    <p className="lead">
                        Mediation services facilitate the resolution of disputes without going to court.
                        Professional mediators guide parties involved in conflicts through open and
                        constructive dialogue. They help participants find common ground, explore potential
                        solutions, and reach mutually acceptable agreements. .
                    </p>
                    <p className="lead">
                        Mediation can be a
                        cost-effective and efficient alternative to litigation, promoting cooperation
                        and preserving relationships
                    </p>
                    <a href="#">
                        <button
                            type="button"
                            className="btn mainButton btn-outline-info text-xs mx-1"
                            id="login_button"
                        >
                            LEARN MORE
                        </button>
                    </a>
                </div>
                <div className="line"></div>
                <div className="service">
                    <h2>DOCUMENT ASSISTANCE</h2>
                    <p className="lead">
                        Our document assistance service provides users with professional support in drafting,
                        reviewing, editing, and revising legal documents. Whether you need a contract,
                        agreement, will, or any other document, our experts ensure that your paperwork is
                        legally sound, precisely crafted, and aligned with your specific needs. 
                    </p>
                    <p className="lead">
                        This service
                        offers peace of mind by guaranteeing the accuracy and compliance of your legal documents.
                    </p>
                    <a href="#">
                        <button
                            type="button"
                            className="btn mainButton btn-outline-info text-xs mx-1"
                            id="login_button"
                        >
                            LEARN MORE
                        </button>
                    </a>
                </div>
                
            </div>
            
        </div>
    )
}