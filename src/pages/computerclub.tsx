//コンピュータ部ホームページを作成

import styles from 'src/styles/computerclub.module.css'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import ComputerclubHeader from 'components/ComputerclubHeader'
import ComputerclubFooter from 'components/ComputerclubFooter'
import Image from 'next/image'

export default function Computerclub() {

    const [windowWidth, setWindowWidth] = useState(1366);
    const [scaleRatio, setScaleRatio] = useState(1);
    const [elementWidth, setElementWidth] = useState(1366);
    const [elementHeight, setElementHeight] = useState(450);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = document.documentElement.clientWidth; // スクロールバーを抜いた横幅を取得
            const ratio = screenWidth <= 1366 ? screenWidth / 1366 : 1; // 画面幅に合わせて要素の縮尺を変更, 1366px以上では要素の縮尺を固定
            const width = Math.round(ratio * 1366);
            const height = Math.round(ratio * 450);
            setElementWidth(width);
            setElementHeight(height);
            setWindowWidth(screenWidth);
            setScaleRatio(ratio);
        };

        handleResize(); // コンポーネント初期表示時にも実行

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Head>
                <link rel="styleSheet" href="https://unpkg.com/destyle.css@1.0.5/destyle.css" />
            </Head>

            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <ComputerclubHeader />

                <div className={styles.layout} style={{ transform: `scale(${scaleRatio})`, transformOrigin: 'top' }}>
                    <div className={styles.contents_container}>
                        <div className={styles.big_tytle1}>文化祭2023</div>

                        <div className={styles.separate_line}>
                            <svg width="1326" height="12">
                                <defs>
                                    <linearGradient id="line_Gradient" gradientTransform="rotate(90)">
                                        <stop offset="0%" stop-color="rgba(9,111,224,1)" />
                                        <stop offset="100%" stop-color="rgba(11,27,103,1)" />
                                    </linearGradient>
                                </defs>

                                <polygon points="0,6 4,0 8,6 20,3 1306,3 1318,6 1322,0 1326,6 1322,12 1318,6 1306,9 20,9 8,6 4,12" fill="url(#line_Gradient)" />
                            </svg>
                        </div>

                        <div className={styles.introduction1_container}>
                            <Image className={styles.introduction1_image1} src="/image/GenerateAI.jpeg" width={520} height={260} alt="GenerateAI" />
                            <div className={styles.line1} />
                            <div className={styles.small_line1} />
                            <div className={styles.tytle1}>画像生成AI</div>
                            <div className={styles.explanation_text1}>
                                巷で話題の画像生成AIを体験できます。<br />
                                文字で指示を与えるだけで、イラストや写真が一瞬で出力されます。 AIの凄さ（と限界）をぜひ自分の目で確かめてみてください！
                            </div>

                            <div className={styles.square_loader}>
                                <span className={styles.loader_cube__color}></span>
                                <span className={styles.loader_cube__glowing}></span>
                            </div>
                        </div>

                        <div className={styles.introduction2_container}>
                            <Image className={styles.introduction2_image1} src="/image/Vtuber3Dmodel.jpeg" width={520} height={260} alt="Vtuber3Dmodel" />
                            <div className={styles.line2} />
                            <div className={styles.small_line2} />
                            <div className={styles.tytle2}>Vtuber体験</div>
                            <div className={styles.explanation_text2}>
                                誰でもかわいい女の子になれます。
                                AIで喋らせることも可能です。
                            </div>

                            <div className={styles.speaker}>
                                <div className={styles.dot}></div>
                                <div className={styles.dot}></div>
                                <div className={styles.dot}></div>
                            </div>
                        </div>


                        <div className={styles.introduction3_container}>
                            <Image className={styles.introduction3_image1} src="/image/ChatGPT.jpeg" width={520} height={260} alt="ChatGPT" />
                            <div className={styles.line3} />
                            <div className={styles.small_line3} />
                            <div className={styles.tytle3}>ChatGPT体験</div>
                            <div className={styles.explanation_text3}>
                                世界的に注目されているChatGPTを実際に扱えます。<br />
                                使ったことが無い、聞いたことはあるけど良く分からない、という方大歓迎です！
                            </div>

                            <div className={styles.square_loader}>
                                <span className={styles.loader_cube__color}></span>
                                <span className={styles.loader_cube__glowing}></span>
                            </div>
                        </div>
                    </div>
                </div>

                <ComputerclubFooter />
            </div>
        </>
    )
}