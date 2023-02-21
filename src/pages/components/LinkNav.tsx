import Link from 'next/link'
import React, { FC } from 'react'
import styles from '../../styles/Links.module.css'
import logo  from '../../../public/34.png'
import { StaticImageData } from 'next/image';

interface Props {
    name:string;
    children:React.ReactNode
}

export const LinkNav : FC<Props> = ({ name, children }) => {
  return (
    <div className={styles.buttomLink} >
        {children}
        <Link className={styles.link} href={''} >{name}</Link>
    </div>
  )
}
