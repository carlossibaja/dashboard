import Image from 'next/image'
import React, { FC } from 'react'
import Imagen from '../../../public/34.png'
import styles from '../../styles/Cards.module.css'

interface Props {
    name:string,
    action:string,
    time:string,
    color:string,
    children: JSX.Element,
    content: string
}

export default function Cards ({name, action, time, color, children, content}:Props) {

  return (
    <div className={styles.card} style={{backgroundColor:color}} >
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px'}} >
            <div style={{display:'flex', alignItems:'center'}} >
                {children}
                {/* <Image style={{borderRadius:'100%', marginRight:'10px'}} src={Imagen} alt='profile' width={40} height={40} ></Image> */}
                <div style={{lineHeight:'19px'}} >
                    <p style={{fontSize:'17px', fontWeight:'600'}} >{name}</p>
                    <p style={{fontSize:'13px', color:'#2A8BF2'}} >{action}</p>
                </div>
            </div>
            <p style={{fontSize:'13px', marginRight:'15px'}}>{time}</p>
        </div>
        <div style={{margin:'10px'}} >
            <p>{content}</p>
        </div>
    </div>
  )
}
