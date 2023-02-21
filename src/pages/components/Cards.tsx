import Image from 'next/image'
import React, { FC } from 'react'
import Imagen from '../../../public/34.png'
import styles from '../../styles/Cards.module.css'

interface Props {
    name:string,
    action:string,
    time:string,
    color:string
}

export default function Cards ({name, action, time, color}:Props) {

  return (
    <div className={styles.card} style={{backgroundColor:color}} >
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px'}} >
            <div style={{display:'flex', alignItems:'center'}} >
                <Image style={{borderRadius:'100%', marginRight:'10px'}} src={Imagen} alt='profile' width={40} height={40} ></Image>
                <div style={{lineHeight:'19px'}} >
                    <p style={{fontSize:'17px', fontWeight:'600'}} >{name}</p>
                    <p style={{fontSize:'13px', color:'#2A8BF2'}} >{action}</p>
                </div>
            </div>
            <p style={{fontSize:'13px', marginRight:'15px'}}>{time}</p>
        </div>
        <div>
            <p>plicabo sunt accusamus, obcaecati necessitatibus aliquid impedit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsam autem, vero alias illum animi expedita facere consequuntur iusto sequi aliquid nam maiores dolorum rerum unde necessitatibus similique! Sint, quos. est doloribus laudantium. Accusantium cupiditate porro enim ea, officia eius quibusdam a.</p>
        </div>
    </div>
  )
}
