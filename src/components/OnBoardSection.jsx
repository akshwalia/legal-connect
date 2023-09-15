import onboardImage1 from "../assets/images/step1.png";
import onboardImage2 from "../assets/images/step2.png";
import onboardImage3 from "../assets/images/step3.png";

export default function OnBoardSection() {
    return (
        <div className="onboard">
            <div className="onboard_heading">
                <h1>ONBOARD AS A LEGAL SERVICE PROVIDER</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
                    voluptatem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Volu.
                </p>
            </div>
            <div className="onboarding_content">
                <div className="stepOne">
                    <div className="onboard_step">
                        <div className="onboard_1">
                            <div className="onboard_step_content">
                                <h1>
                                    STEP{" "}
                                    <span
                                        style={{
                                            backgroundColor: "white",
                                            padding: "7px 20px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                        1
                                    </span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem
                                    ipsum dolor sit.{" "}
                                </p>
                                <div className="step_line" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus
                                    suscipit nulla incidunt laudantium minima atque ducimus delectus
                                    repellat, omnis modi, eum, voluptatem quas id.
                                </p>
                                <a href="#">
                                    <button
                                        type="button"
                                        className="btn btn-outline-info text-xs mx-1"
                                        id="login_button"
                                    >
                                        GET STARTED &gt;&gt;
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="onboard_line"></div>

                        <div className="onboard_1_image">
                            <img src={onboardImage1} alt="" />
                        </div>
                    </div>

                </div>

                <div className="stepTwo">

                    <div className="onboard_step">
                        <div className="onboard_1_image">
                            <img src={onboardImage2} alt="" />
                        </div>
                        <div className="onboard_line"></div>
                        <div className="onboard_2">

                            <div className="onboard_step_content">
                                <h1>
                                    STEP{" "}
                                    <span
                                        style={{
                                            backgroundColor: "white",
                                            padding: "7px 20px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                        2
                                    </span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem
                                    ipsum dolor sit.{" "}
                                </p>
                                <div className="step_line" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus
                                    suscipit nulla incidunt laudantium minima atque ducimus delectus
                                    repellat, omnis modi, eum, voluptatem quas id.
                                </p>
                                <a href="#">
                                    <button
                                        type="button"
                                        className="btn btn-outline-info text-xs mx-1"
                                        id="login_button"
                                    >
                                        GET STARTED &gt;&gt;
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="stepThree">
                    <div className="onboard_step">
                        <div className="onboard_1">
                            <div className="onboard_step_content">
                                <h1>
                                    STEP{" "}
                                    <span
                                        style={{
                                            backgroundColor: "white",
                                            padding: "7px 20px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                        3
                                    </span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem
                                    ipsum dolor sit.{" "}
                                </p>
                                <div className="step_line" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus
                                    suscipit nulla incidunt laudantium minima atque ducimus delectus
                                    repellat, omnis modi, eum, voluptatem quas id.
                                </p>
                                <a href="#">
                                    <button
                                        type="button"
                                        className="btn btn-outline-info text-xs mx-1"
                                        id="login_button"
                                    >
                                        GET STARTED &gt;&gt;
                                    </button>
                                </a>
                            </div>

                        </div>
                        <div className="onboard_line"></div>
                        <div className="onboard_3_image">
                            <img src={onboardImage3} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}