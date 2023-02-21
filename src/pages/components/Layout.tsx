import Head from 'next/head'
import React, { FC } from 'react'
import styles from '../../styles/Layout.module.css'
import { Menu } from './Menu';

interface Props {
    title:string;
    children:React.ReactNode
}
export const Layout : FC<Props> = ({ children, title }) => {
    
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <div className={styles.Layout} >
            <div className={styles.menu} >
                <Menu></Menu>
            </div>
            <div>
                {children}
            </div>
        </div>
    </div>
  )
}
