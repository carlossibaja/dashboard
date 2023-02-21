import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Menu.module.css'
import profileIMG from '../../../public/34.png'
import Link from 'next/link'
import { Links } from './Links'
import { LinkNav } from './LinkNav'
import LogoLogOut from '../../../public/person.svg'

export const Menu = () => {
  return (
    <div className={styles.containerMenu} >
        <Image className={styles.profileIMG} alt='logoProfile' src={profileIMG} width={86} height={86} ></Image>
        <p className={styles.name} >Henry Jabbawockiez</p>
        <Links></Links>
        <div className={styles.containerLogOut} >
            <Image style={{marginRight:'5px'}} src={LogoLogOut} alt='' width={20} height={20} ></Image>
            <Link style={{color:'#707C97', textDecoration:'none'}} href={''} >LOG OUT</Link>
        </div>
    </div>
  )
}
