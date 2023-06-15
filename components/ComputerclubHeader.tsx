import { faAnglesRight, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from 'src/styles/Computerclubheader.module.css';

const Slideshow = () => {
    const slides = [
        '/image/topimage1.jpeg',
        '/image/topimage2.jpeg',
        '/image/topimage3.jpeg'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slideshow}>
            <button className={styles.leftButton} onClick={goToPreviousSlide}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <div className={styles.slideContainer}>
                <Image
                    src={slides[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    width={1366}
                    height={450}
                />
            </div>
            <button className={styles.rightButton} onClick={goToNextSlide}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    );
};
export default function Computerclubheader() {

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
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    justifyContent: 'center',
                }}
            >
                <div className={styles.header_container} style={{ transform: `scale(${scaleRatio})`, transformOrigin: 'top' }}>
                    <div className={styles.header_upper}>
                        <h1>Sum</h1>

                        <h2>a</h2>

                        <div className={styles.i}>
                            <span></span>
                        </div>

                        <h3>/</h3>

                        <div className={styles.o_container}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <h4>Computer Club<FontAwesomeIcon icon={faAnglesRight} /></h4>
                    </div>

                    <div className={styles.header_lower} />

                    <Slideshow />
                </div>
            </div>
        </>
    )
}