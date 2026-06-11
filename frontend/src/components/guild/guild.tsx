import { Link } from "react-router";
import styles from "./guild.module.css";

type Quest = {
    title: string;
    tag: string;
    desc: string;
    reward: string;
};

type Stat = {
    label: string;
    value: string;
};

const stats: Stat[] = [
    { label: "Level", value: myAge().toString() },
    { label: "Main Skill", value: "Python / JAVA / LLM / Agent" },
];

const quests: Quest[] = [
    {
        title: "Portfolio Website",
        tag: "Main Quest",
        desc: "打造具備響應式介面、清楚作品展示與個人品牌感的網站首頁。",
        reward: "+120 EXP",
    },
    {
        title: "UI Components",
        tag: "Side Quest",
        desc: "設計可重複使用的卡片、按鈕、導覽列與互動式區塊。",
        reward: "+80 EXP",
    },
    {
        title: "Visual Identity",
        tag: "Guild Work",
        desc: "以像素風、RPG 遊戲介面與暖色光影建立記憶點。",
        reward: "+95 EXP",
    },
];

function myAge(): number {
    const birth_year = 2000;
    const current_year = new Date().getFullYear();
    return current_year - birth_year;
}

export default function Guild() {
    return (
        <main className={styles.var}>
            <div className={styles.skyGlow} />

            <section className={styles.hero}>
                <div className={styles.heroGrid}>
                    <section className={styles.heroText}>
                        <p className={styles.kicker}>WELCOME, TRAVELER</p>

                        <h1>
                           Adventurer's Log
                        </h1>

                        <p className={styles.description}>
                            "歡迎來到冒險者公會！在這裡，你可以探索我的專案、技能與冒險紀錄"<br/>
                            "每一個專案都是一項任務，每一篇文章都是角色成長的一部分"<br/>
                            "準備好一起踏上這段旅程了嗎？"
                        </p>

                        <div className={styles.heroActions}>
                            <Link to="/quests" className={styles.primaryButton}>
                                View Quests
                            </Link>
                            <a href="https://github.com/CT-12" className={styles.secondaryButton} target="_blank" rel="noreferrer">
                                Github
                            </a>
                        </div>
                    </section>

                    <aside className={styles.characterCard} id="about">
                        <div className={styles.avatarFrame}>
                            <div className={styles.avatar}>
                                <div className={styles.hair} />
                                <div className={styles.face} />
                                <div className={styles.body} />
                                <div className={styles.cape} />
                            </div>
                        </div>

                        <div className={styles.namePlate}>
                            <h2>Chia Tai, Lee</h2>
                            <p>Master Student <br/> National Taiwan University</p>
                        </div>

                        <div className={styles.statsGrid}>
                            {stats.map((stat) => (
                                <div className={styles.statBox} key={stat.label}>
                                    <span>{stat.label}</span>
                                    <strong>{stat.value}</strong>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </section>

            <section className={styles.boardSection} id="quests">
                <div className={styles.boardHeader}>
                    <p>QUEST BOARD</p>
                    <h2>Featured Projects</h2>
                </div>

                <div className={styles.questBoard}>
                    {quests.map((quest) => (
                        <article className={styles.questCard} key={quest.title}>
                            <div className={styles.questTop}>
                                <span>{quest.tag}</span>
                                <strong>{quest.reward}</strong>
                            </div>

                            <h3>{quest.title}</h3>
                            <p>{quest.desc}</p>

                            <button className={styles.questButton}>Inspect</button>
                        </article>
                    ))}
                </div>
            </section>
            
            {/* 現在不用，但感覺未來會用到這個設計，先留著 */}
            {/* <section className={styles.contactSection} id="contact">
                <div className={styles.dialogBox}>
                    <p className={styles.dialogName}>Guild Master</p>
                    <p>
                        「想一起完成下一個任務嗎？留下訊息，我們可以開始規劃你的下一個網站、
                        介面或作品集。」
                    </p>
                </div>
            </section> */}
        </main>
    );
}