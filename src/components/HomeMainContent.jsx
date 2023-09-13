import { Link } from "react-router-dom";
import homePageImage from '../assets/images/test.png'

import { useDisclosure } from "@chakra-ui/react";
import SignUpDialogue from "./SignUpDialogue";

export default function HomeMain() {
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <div className="homepage ">
            <div className="translucentBackground">
                <div className="homepage_content mb-5">
                    {/* text on homepage */}
                    <h1 className="mainName">LEGALCONNECT</h1>
                    <p className="lead">CONNECTING LEGAL MINDS, BUILDING JUSTICE TOGETHER</p>
                    
                    <button
                        type="button"
                        className="btn mainButton btn-outline-info text-xs mx-2"
                        id="signup_button"
                        onClick={onOpen}
                    >
                        JOIN NOW
                    </button>
                    <SignUpDialogue isOpen={isOpen} onClose={onClose} />
                </div>
                <div className="homepage_image">
                    {/* image on homepage */}
                    <img src={homePageImage} alt="" />
                </div>
            </div>
        </div>
    )
}