import React from 'react';
import styles from './footer.module.scss';
import Logo from './../../assets/_logo/logo.png';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.topShape}></div>
            <div className={styles.tint}></div>
            <div className={styles.row1}>
                <div className={styles.col1}>
                    <div className={styles.top}>
                        <img className={styles.logo} src={Logo} alt="" />
                    </div>
                    <a href="mailto:kaustubh.namjoshi1@gmail.com">
                        kaustubh.namjoshi1@gmail.com
                    </a>
                    <div className={styles.socialDiv}>
                        <a href="https://github.com/">
                            <UseAnimations
                                className={styles.icon}
                                animation={github}
                                size={30}
                                loop={true}
                                strokeColor="#ffffff"
                                speed={1}
                            />
                        </a>
                        <a href="https://www.linkedin.com/company/Jobs_3.0/">
                            <UseAnimations
                                className={styles.icon}
                                animation={linkedin}
                                size={30}
                                loop={true}
                                strokeColor="#ffffff"
                                speed={1}
                            />
                        </a>
                        <a
                            href="https://discord.com/"
                            className={styles.discordIcon}
                        >
                            <FontAwesomeIcon
                                icon={faDiscord}
                                size="2x"
                                color="white"
                            />
                        </a>
                    </div>
                </div>
                <div className={styles.col2}>
                    <div className={styles.subColumn}>
                        <p className={styles.head}>Organization</p>
                        <ul className={styles.category}>
                            <a href="/">Home</a>
                            <a href="/#">About</a>
                            <a href="/#">FAQs </a>
                        </ul>
                    </div>
                    <div className={styles.subColumn}>
                        <p className={styles.head} text-align="centre">
                            Resources
                        </p>
                        <ul className={styles.category}>
                            <a href="/#">Projects</a>
                            <a href="/#">Docs</a>
                            <a href="/#">Learn More</a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.row2}>
                <p className={styles.footerText}>Made with ❤️ in Belgium</p>
                <p className={styles.footerText}>© Copyright 2021 Jobs 3.0</p>
                <p className={styles.footerText}>
                    <a href="/#">Privacy Policy</a> &nbsp; | &nbsp;
                    <a href="/#">Site Map</a>&nbsp; | &nbsp;
                    <a href="/#">Report a bug</a>
                </p>
            </div>
        </footer>
    );
}
