import React from 'react'
import  LinkNav  from './LinkNav'
import styles from '../../styles/Links.module.css'
import Link from 'next/link'
import Image from 'next/image'
import LogoHome from '../../../public/grid.svg'
import LogoChat from '../../../public/message-circle.svg'
import LogoContact from '../../../public/person.svg'
import LogoNotifications from '../../../public/bell.svg'
import LogoCalendar from '../../../public/calendar.png'
import LogoSettings from '../../../public/settings-2.svg'

export default function Links() {
  return (
    <div className={styles.container} >
        <LinkNav name='HOME' >
          <Image src={LogoHome} alt='' width={15} height={15} ></Image>
        </LinkNav>
        <LinkNav name='CHAT' >
          <Image src={LogoChat} alt='' width={15} height={15} ></Image>
        </LinkNav>
        <LinkNav name='CONTACT' >
          <Image src={LogoContact} alt='' width={15} height={15} ></Image>
        </LinkNav>
        <LinkNav name='NOTIFICATIONS' >
          <Image src={LogoNotifications} alt='' width={15} height={15} ></Image>
        </LinkNav>
        <LinkNav name='CALENDAR' >
          <Image src={LogoCalendar} alt='' width={15} height={15} ></Image>
        </LinkNav>
        <LinkNav name='SETTINGS' >
          <Image src={LogoSettings} alt='' width={15} height={15} ></Image>
        </LinkNav>
        
    </div>
  )
}
