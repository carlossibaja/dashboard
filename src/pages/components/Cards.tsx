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

export const Cards :FC<Props> = ({name, action, time, color}) => {

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

export const Cards2 :FC<Props> = ({name, action, time}) => {

    return (
      <div className={styles.card2} >
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px'}} >
              <div style={{display:'flex', alignItems:'center'}} >
                  <Image style={{borderRadius:'100%', marginRight:'10px'}} src={Imagen} alt='profile' width={40} height={40} ></Image>
                  <div style={{lineHeight:'17px'}} >
                      <p style={{fontSize:'17px', fontWeight:'600'}} >{name}</p>
                      <p style={{fontSize:'13px', color:'white'}} >{action}</p>
                  </div>
              </div>
              <p style={{fontSize:'13px',color:'white', marginRight:'15px'}}>{time}</p>
          </div>

          <div>
            <p>plicabo sunt accusamus, obcaecati necessitatibus aliquid impedit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsam autem, vero alias illum animi expedita facere consequuntur iusto sequi aliquid nam maiores dolorum rerum unde necessitatibus similique! Sint, quos. est doloribus laudantium. Accusantium cupiditate porro enim ea, officia eius quibusdam a.</p>
          </div>

          <div style={{backgroundColor:'',margin:'5px 0' ,display:'flex'}} >
              <div style={{backgroundColor:'#2A8BF225', padding:'10px 25px', borderRadius:'100px', marginRight:'10px'}} >
                <p style={{color:'#2A8BF2'}} >File</p>
              </div>
              <div style={{backgroundColor:'#FF336625', padding:'10px 25px', borderRadius:'100px', marginRight:'10px'}} >
                <p style={{color:'#FF3366'}} >Photo</p>
              </div>
          </div>
      </div>
    )
  }
