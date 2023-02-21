import Image from 'next/image'
import React from 'react'
import profileImg from '../../../public/24.png'
import moreHorizontal from '../../../public/more-horizontal.svg'
import styles from '../../styles/Message.module.css'

export default function Message () {
  return (
    <div style={{display:'flex', alignItems:'center', marginBottom:'10px' }} >
        <Image style={{borderRadius:'100%'}} src={profileImg} width={30} height={30} alt='' ></Image>
        <div className={styles.mensaje} >
            <p>Aqui va el mensaje</p>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'10px',borderRadius:'100%', padding:'5px'}} >
            <Image src={moreHorizontal} width={20} height={20} alt='' style={{borderRadius:'100%'}}  ></Image>
        </div>
    </div>
  )
}
