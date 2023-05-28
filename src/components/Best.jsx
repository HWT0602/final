import { Link } from 'react-router-dom';

export default function Best() {
    return (
        <div className="best-product">
            <div className="product-text">
                <div className="line"></div>
                <h1>精選商品</h1>
                <div className="line"></div>
            </div>

            <div className="product-container">

                <div className="product-item row">
                    <div className="product-item-link col">
                        <div className="product-item-pic">
                            <Link to="/products/id/1">
                                <img src="/images/best product 1.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                            
                        </div>
                        <Link to="/products/id/1">
                            <div className="product-item-text">
                                <p>Roland TD-17KVX2 電子鼓組</p>
                            </div>
                        </Link>
                        <div className="item-detail row">
                            <Link to="/products/id/1" className="col-md-6" >
                                <div className="price">
                                    <p>NT$68500</p>
                                </div>
                            </Link>
                            <Link to="/products/id/1" className="col-md-1">
                                <div className="buy-car">
                                    <img src="/images/shopptin cart.png" width="44px" height="44px" alt="車車" />
                                </div>
                            </Link>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="product-item-link col">
                        <div className="product-item-pic">
                            <Link to="/products/id/2">
                                <img src="/images/best product 2.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                        </div>
                        <Link to="/products/id/2" >
                            <div className="product-item-text">
                                <p>【新品上市】Roland F107 88鍵 數位電鋼琴 黑色款</p>
                            </div>
                        </Link>
                        <div className="item-detail row">
                            <Link to="/products/id/2" className="col-md-6" >
                                <div className="price">
                                    <p>NT$37800</p>
                                </div>
                            </Link>
                            <Link to="/products/id/2" className="col-md-1">
                                <div className="buy-car">
                                    <img src="/images/shopptin cart.png" width="44px" height="44px" alt="車車" />
                                </div>
                            </Link>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="product-item-link col">
                        <div className="product-item-pic">
                            <Link to="/products/id/3">
                                <img src="/images/best product 3.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                        </div>
                        <Link to="/products/id/3" >
                            <div className="product-item-text">
                                <p>Keeley Halo Andy Timmons Dual Echo 簽名延遲 效果器</p>
                            </div>
                        </Link>
                        <div className="item-detail row">
                            <Link to="/products/id/3" className="col-md-6" >
                                <div className="price">
                                    <p>NT$11130</p>
                                </div>
                            </Link>
                            <Link to="/products/id/3" className="col-md-1">
                                <div className="buy-car">
                                    <img src="/images/shopptin cart.png" width="44px" height="44px" alt="車車" />
                                </div>
                            </Link>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="product-item-link col">
                        <div className="product-item-pic">
                            <Link to="/products/id/4">
                                <img src="/images/best product 4.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                        </div>
                        <Link to="/products/id/4" >
                            <div className="product-item-text">
                                <p>Marshall BluesBreaker 效果器</p>
                            </div>
                        </Link>
                        <div className="item-detail row">
                            <Link to="/products/id/4" className="col-md-6" >
                                <div className="price">
                                    <p>NT$7500</p>
                                </div>
                            </Link>
                            <Link to="/products/id/4" className="col-md-1">
                                <div className="buy-car">
                                    <img src="/images/shopptin cart.png" width="44px" height="44px" alt="車車" />
                                </div>
                            </Link>
                            <div className="col-md-2"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}