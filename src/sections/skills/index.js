import React from "react";
import { icons } from "../../components/icons";
import "./skills.scss";

export function SkillsSection({skills}) {
    return (
        <section id="skills" className="skills-container">
            <h2 className="header-2">Skills</h2>
            <ul className="skills">
                {skills.map(({ label, icon, mono }, index) => {
                    return (
                        <li key={label} className="skill">
                            <span className={`li-icon ${mono ? "mono" : ""}`}>
                                {icons[icon]}
                            </span>
                            {label}
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}