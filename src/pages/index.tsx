import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import  Menu  from './components/Menu'
import Layout from './components/Layout'
import IconSearch from '../../public/search-outline.svg' 
import Cards from './components/Cards'
import  UserInfo  from './components/UserInfo'
import  Chat  from './components/Chat'
import Cards2 from './components/Cards2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Chat Dashboard' >
      <main className={styles.main} >
        {/* primer rectangulo */}
        <div className={styles.rectangle1} >
          <div className={styles.chats} >
            <div>
              <p style={{fontSize:'25px', fontWeight:'600'}} >Chats</p>
              <p>Recent Chats</p>
            </div>
            <button className={styles.button} >
              + Create New Chat
            </button>
          </div>

          <div className={styles.containerSearch} >
            <Image style={{backgroundColor:'white', padding:'10px', marginRight:'4px'}} src={IconSearch} alt='busqueda' width={15} height='15' ></Image>
            <input className={styles.input} placeholder='Search' type="text" />
            <div style={{ backgroundColor:'white', width:'200px' ,display:'flex', justifyContent:'center', alignItems:'center'}} >
              <p>Messages</p>
            </div>
          </div>

          {/* --------------------CARDS----------- */}
          <div>
            <Cards color='white' name="Luy Robin" action='Writes' time='1 minute ago' ></Cards>
            <Cards2 color='' name="Jared Sunn" action='Records voice message' time='1 minute ago' ></Cards2>
            <Cards color='#7CB8F7' name="Nika Jerrardo" action='Last online 5 hours ago' time='3 day ago' ></Cards>
          </div>
        </div>

        {/* segundo rectangulo */}
        <div className={styles.rectangle2} >
          <Chat></Chat>
        </div>
      </main>
    </Layout>
  )
}
