import React, { useState } from 'react'
import "../assets/css/portfolio.css"
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

const Skills = ({ theme }) => {
    const [staticSkill, setStaticSkill] = useState(false);
    const toggleSkill = () => {
        setStaticSkill(!staticSkill);
    };
    
    let skillsList = [
        {
            id: 1,
            skillIcon: <FaReact style={{ color: "#61DBFB" }} />,
            skillName: "React",
        },
        {
            id: 2,
            skillIcon: <IoLogoJavascript style={{ color: "#F7DF1E" }} />,
            skillName: "Javascript",
        },
        {
            id: 3,
            skillIcon: <SiRedux style={{ color: "#764ABC" }} />,
            skillName: "Redux",
        },
        {
            id: 4,
            skillIcon: <RiNextjsFill style={{ color: "#fff" }} />,
            skillName: "Next",
        },
        {
            id: 5,
            skillIcon: <FaBootstrap style={{ color: "#7952B3" }} />,
            skillName: "Bootstrap",
        },
        {
            id: 6,
            skillIcon: <FaCss3Alt style={{ color: "#2965F1" }} />,
            skillName: "CSS3",
        },
        {
            id: 7,
            skillIcon: <FaHtml5 style={{ color: "#E34F26" }} />,
            skillName: "HTML5",
        },
        {
            id: 8,
            skillIcon: <SiReactquery style={{ color: "#FF4154" }} />,
            skillName: "React Query",
        },
        {
            id: 9,
            skillIcon: <SiGit style={{ color: "#F05032" }} />,
            skillName: "Git",
        },
        {
            id: 10,
            skillIcon: <SiWebpack style={{ color: "#8DD6F9" }} />,
            skillName: "Webpack",
        },
    ];

    return (
        <>
            <div className={`skills-cover`}>

                <div className='skills-title'>
                    <h2>Technologies/Frameworks</h2>
                </div>

                <div className={`${staticSkill ? "static_content":"skills-box"}`}>

                    {skillsList?.map((skill, index) => {
                        return (
                            <div className='skills-box-content'>
                                <div className='skills-box-icon'>
                                    {skill?.skillIcon}
                                </div>
                                <div className='skills-box-text'>
                                    {skill?.skillName}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                {!staticSkill && <div className='skills-box reverse'>
                    {skillsList?.map((skill, index) => {
                        return (
                            <div className='skills-box-content'>
                                <div className='skills-box-icon'>
                                    {skill?.skillIcon}
                                </div>
                                <div className='skills-box-text'>
                                    {skill?.skillName}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>}
                <div class="toggle_text">
                    <button onClick={toggleSkill}>
                        {staticSkill ? (
                            <>Show All <FaArrowAltCircleDown /></>
                        ) : (
                            <>Show Less <FaArrowAltCircleUp /></>
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Skills