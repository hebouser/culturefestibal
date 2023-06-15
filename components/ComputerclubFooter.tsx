import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from 'src/styles/Computerclubfooter.module.css'

export default function Computerclubfooter() {
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
                <div className={styles.footer_container}>
                    <div className={styles.footer_upper}>
                        <ul className={styles.navi_container}>
                            <li>
                                <span>2023｜</span>
                            </li>
                            <li>
                                <span>須磨学園｜</span>
                            </li>
                            <li>
                                <span>@コンピュータ部</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}