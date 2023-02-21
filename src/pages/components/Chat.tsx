import React from 'react'
import { Message } from './Message'
import { UserInfo } from './UserInfo'
import styles from '../../styles/Chat.module.css'
import Image from 'next/image'
import IconEnviar from '../../../public/navigation-2.svg'
import IconMas from '../../../public/plus.svg'
import IconSmile from '../../../public/Smile-icon.png'

export const Chat = () => {
  return (
    <div className={styles.chat} >
        <UserInfo></UserInfo>
        <div style={{padding:'20px'}} className={styles.containerMessage} >
            <Message></Message>
            <Message></Message>
        </div>
        <div className={styles.writes} >
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}} >
                <div className={styles.Icons} >
                    <Image src={IconMas} alt='' width={20} height='20'  ></Image>
                </div>
                <input placeholder='Type a message here' className={styles.input} type="text" />
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                    <Image style={{margin:'5px'}} src={IconSmile} alt='' width={20} height='20'  ></Image>
                    <div className={styles.Icons} >
                        <Image style={{}} src={IconEnviar} alt='' width={20} height='20'  ></Image>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}
