import { NavLink, Outlet } from "react-router-dom";

const Master = () => {
    return (
        <>
            <header>
                <div className="wrap">
                    <div className="outer-menu">
                        <input className="checkbox-toggle" type="checkbox" id="menu" />
                        <div className="hamburger">
                            <div />
                        </div>
                        <div className="menu">
                            <div>
                                <div>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src="./public/img/top/logo.svg" alt="logo" width={87} height={60} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">TOP</a>
                                        </li>
                                        <li>
                                            <a href="/form">買取お申し込み</a>
                                        </li>
                                        <li>
                                            <a href="/privacy-policy">プライバシーポリシー</a>
                                        </li>
                                        <li>
                                            <div className="text">電話番号でお問い合わせ</div>
                                            <a href="tel:000-0000-0000" className="btn">
                                                000-0000-0000
                                            </a>
                                            <div className="desc">営業時間：9：00～21：00 年中無休</div>
                                        </li>
                                        <li>
                                            <div className="text">メールでお問い合わせ</div>
                                            <a href="" className="btn">
                                                お問い合わせはこちら
                                            </a>
                                            <div className="desc">24時間受付中</div>
                                        </li>
                                        <li>
                                            <div className="text">LINEでお問い合わせ</div>
                                            <a href="" target="_blank" className="btn">
                                                友だち追加はこちら
                                            </a>
                                            <div className="desc">24時間受付中</div>
                                        </li>
                                        <li>
                                            <label htmlFor="menu" className="back">
                                                閉じる
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <a href="tel:000-0000-0000" className="btn">
                                000-0000-0000
                            </a>
                        </li>
                        <li>
                            <a href="/form" className="btn">
                                お申し込みはこちら
                            </a>
                        </li>
                        <li className="center">
                            <span>
                                営業時間内の
                                <br className="br-sp" />
                                お申し込み即日の
                                <br className="br-sp" />
                                お振込可能です。
                            </span>
                            <br />
                            9:00〜21:00(年中無休)
                        </li>
                    </ul>
                    <div className="line">
                        <a href="" target="_blank" className="btn-line">
                            <img src="./public/img/top/header-line.png" alt="line" height={40} width={50} />
                        </a>
                        <a href="" className="btn-top">
                            <img src="./public/img/top/logo.svg" alt="logo" width={87} height={60} />
                        </a>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="container">
                    <a href="/privacy-policy" className="privacy">
                        プライバシーポリシー
                    </a>
                    <div className="copyright">
                        Copyrights(C) クイックマネープラス
                        <br className="br-sp" />
                        All Rights Reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Master;
