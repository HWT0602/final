import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header_for_home from '../components/Header_for_home';
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import SimpleSlider from '../components/Home/Roundimg';
import '../../src/index.css'
import Service from '../components/Home/Service';

function Home() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    const { categoryName } = useParams();
    const _products = !categoryName
        ? products
        : products.filter(
            x => x?.category.toUpperCase() === categoryName.toUpperCase()
        );

    const title = !categoryName
        ? "越氣樂器行"
        : _products[0]?.category;

    return (
        <div className="mainLayout">
            <Helmet>
                <title>{title}</title>
                <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
            </Helmet>
            <Header_for_home
                className="layoutHeader"
                title={title}
                slogan="讓你越買越生氣"
            />
            <div className="layoutCOntent container">
                <img className="mainimg" src="/images/main.jpg" alt="main" />
            </div>
            <Service/>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Home;
