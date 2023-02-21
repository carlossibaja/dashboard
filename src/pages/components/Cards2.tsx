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

export default function Cards2 ({name, action, time, children, content}:Props) {

    return (
      <div className={styles.card2} >
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px'}} >
              <div style={{display:'flex', alignItems:'center'}} >
                  {children}
                  {/* <Image style={{borderRadius:'100%', marginRight:'10px'}} src={Imagen} alt='profile' width={40} height={40} ></Image> */}
                  <div style={{lineHeight:'17px'}} >
                      <p style={{fontSize:'17px', fontWeight:'600'}} >{name}</p>
                      <p style={{fontSize:'13px', color:'#2A8BF2'}} >{action}</p>
                  </div>
              </div>
              <p style={{fontSize:'13px',color:'white', marginRight:'15px'}}>{time}</p>
          </div>

          <div style={{margin:'10px'}} >
            <p>{content}</p>
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