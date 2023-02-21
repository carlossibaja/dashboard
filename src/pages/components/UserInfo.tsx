import React from 'react'
import styles from '../../styles/UserInfo.module.css'
import profileImg from '../../../public/24.png'
import attachIcon from '../../../public/attach-2.svg'
import moreVerticalIcon from '../../../public/more-vertical.svg'
import Image from 'next/image'

export const UserInfo = () => {
  return (
    <div className={styles.container} >
        <div style={{display:'flex', alignItems:'center'}} >
            <Image style={{borderRadius:'100%', margin:'5px'}} src={profileImg} alt='sd' width={40} height={40} ></Image>
            <div style={{lineHeight:'13px'}} >
                <p style={{fontSize:'14px', fontWeight:'600'}} >Nika Jerrardo</p>
                <p style={{fontSize:'12px'}} >Last online 5 hours ago</p>
            </div>
        </div>
        <div style={{display:'flex'}} >
            <div className={styles.icons} >
                <Image src={attachIcon} alt='sd' width={20} height={20} ></Image>
            </div>
            <div className={styles.icons} >
                <Image src={moreVerticalIcon} alt='sd' width={20} height={20} ></Image>
            </div>
        </div>
    </div>
  )
}
