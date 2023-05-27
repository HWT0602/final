import { theme } from 'antd';
import styles from './footer.module.css';

export default function Footer() {
    const {
        token: { colorBgFooter, colorTextFooter },
      } = theme.useToken();
    return (
        <div style={{
            backgroundColor: colorBgFooter,
            color: colorTextFooter,}}>
            <div className="container">
                <footer className={styles.footer}>
                    <div className={styles.content}>
                        <p style={{ fontWeight: 800 ,fontSize:'2rem'}}>越氣樂器行</p>
                        <p style={{ textIndent: '1rem' }}>營業時間/Open Time:週一至週日 12:00~21:00</p>
                        <p style={{ textIndent: '1rem' }}>地址:台北市小安區和平西路87段87號</p>
                    </div>
                    <div className={styles.followUS}>
                        <p style={{ fontWeight: 800 }}>更多資訊</p>
                        <div className={styles.iconsArea}>
                            <a href="#">
                                <img className={styles.icon} src="/images/nn-icon-facebook.svg" alt="facebook" />
                            </a>
                            <a href="#">
                                <img className={styles.icon} src="/images/nn-icon-instagram.svg" alt="instagram" />
                            </a>
                            <a href="#">
                                <img className={styles.icon} src="/images/nn-icon-tiktok.svg" alt="tiktok" />
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.contactUS}>
                        <p style={{ fontWeight: 800 }}>聯絡我們</p>
                        <p>02 5719 3946</p>
                    </div>
                    
                    <p className={styles.copyRight}>
                        © 2006 - 2023 Copyright angry music
                    </p>
                    
                </footer>                
            </div>

        </div>

    );
}