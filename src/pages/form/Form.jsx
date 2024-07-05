import React, { useState } from "react";

const messageValidate = {
    default: {
        empty: "text empty",
    },
    register_number: {
        empty: "radio empty",
    },
    card_brand: {
        empty: "select empty",
    },
    gender: {
        empty: "radio empty",
    },
    email: {
        email: "isn't email",
    },
    telephone: {
        empty: "number empty",
    },
    post1: {
        empty: "number empty",
    },
    post2: {
        empty: "number empty",
    },
    amount_money: {
        empty: "radio empty",
    },
    shopping_balance: {
        empty: "number empty",
    },
    suf_front: {
        empty: "file empty",
    },
};

const initForm = {
    register_number: {
        data: "",
        error: "",
    },
    card_brand: {
        data: "",
        error: "",
    },
    name: {
        data: "",
        error: "",
    },
    furigana: {
        data: "",
        error: "",
    },
    gender: {
        data: "",
        error: "",
    },
    email: {
        data: "",
        error: "",
    },
    telephone: {
        data: "",
        error: "",
    },
    post1: {
        data: "",
        error: "",
    },
    post2: {
        data: "",
        error: "",
    },
    pref: {
        data: "",
        error: "",
    },
    addr: {
        data: "",
        error: "",
    },
    address_home: {
        data: "",
        error: "",
    },
    amount_money: {
        data: "",
        error: "",
    },
    shopping_balance: {
        data: "",
        error: "",
    },
    suf_front: {
        data: "",
        error: "",
    },
    suf_after: {
        data: "",
        error: "",
    },
};

const Form = () => {
    const [dataForm, setDataForm] = useState(initForm);
    const onchangeInput = (e) => {
        const { value } = e.target;
        setDataForm({ ...dataForm, [e.target.name]: { ...dataForm[e.target.name], data: value } });
        validateForm(e);
    };
    const submitForm = (e) => {
        e.preventDefault();
        console.log(dataForm);
    };
    const validateForm = (e) => {
        dataForm[e.target.name].data === "" && setDataForm({ ...dataForm, [e.target.name]: { ...dataForm[e.target.name], error: messageValidate.default } });
    };
    return (
        <>
            <form id="form" className="container" onSubmit={(e) => submitForm(e)} action="" method="POST" encType="multipart/form-data" noValidate>
                <div className="all_cover" id="formarea">
                    <h1>買取お申し込み</h1>
                    <div className="warn">
                        <div className="content">
                            <h3>「ペイディApple専用枠」を選択されたお客様へのご案内</h3>
                            <p>
                                ペイディアップル枠のお振込は15:30までの
                                <br />
                                アップルへの注文で最短で翌日の商品到着の買取り、お振込になります。
                                <br />
                                即日のお振込は対応しておりません。
                                <br />
                                購入される商品(機種)により買取金額は変わってきます。
                                <br />
                                スタッフによる購入のサポート希望の方、申込前に詳しく内容をお聞きになられたい方は
                            </p>
                            <ul>
                                <li>
                                    <div className="title">電話番号でお問い合わせ</div>
                                    <a className="btn" href="tel:000-0000-0000">
                                        000-0000-0000
                                    </a>
                                </li>
                                <li>
                                    <div className="title">メールでお問い合わせ</div>
                                    <a href="" className="btn">
                                        お問い合わせはこちら
                                    </a>
                                </li>
                                <li>
                                    <div className="title">LINEでお問い合わせ</div>
                                    <a href="" target="_blank" className="btn">
                                        友だち追加はこちら
                                    </a>
                                </li>
                            </ul>
                            <p>
                                までお気軽にお問い合わせください。
                                <br />
                                上記内容でよろしければ↓そのままお申込みをお願い致します。
                            </p>
                        </div>
                    </div>
                    <div className="warn_not show">
                        <div className="title">お問い合わせ・ご相談先</div>
                        <a className="btn" href="tel:000-0000-0000">
                            000-0000-0000
                        </a>
                    </div>
                    <div className="form_cover">
                        <div className="tab current">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>
                                            <div className="title">
                                                申し込み回数<span className="gray">必須</span>
                                            </div>
                                        </th>
                                        <td>
                                            <ul className="outstanding">
                                                <li>
                                                    <label>
                                                        <input type="radio" name="register_number" id="register_number1" defaultValue="初回" required onChange={(e) => onchangeInput(e)} />
                                                        <span className="icon" />
                                                        <span className="text">初回</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="radio" name="register_number" id="register_number2" defaultValue="２回目以降" required onChange={(e) => onchangeInput(e)} />
                                                        <span className="icon" />
                                                        <span className="text">２回目以降</span>
                                                    </label>
                                                </li>
                                            </ul>
                                            {dataForm.register_number.error && <label className="error">{dataForm.register_number.error}</label>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div className="title">
                                                カードブランド選択<span className="gray">必須</span>
                                            </div>
                                        </th>
                                        <td>
                                            <select name="card_brand" id="card_brand" required onChange={(e) => onchangeInput(e)} defaultValue="">
                                                <option value="" disabled="">
                                                    選択してください
                                                </option>
                                                <option value="クレジットカード">クレジットカード</option>
                                                <option value="ペイディプラス">ペイディプラス</option>
                                                <option value="メルペイ">メルペイ</option>
                                                <option value="ペイディApple専用枠">ペイディApple専用枠</option>
                                                <option value="PayPay">PayPay</option>
                                                <option value="プリペイドカード(ドコモ、AU、Softbank)">プリペイドカード(ドコモ、AU、Softbank)</option>
                                                <option value="バンドル・キャッシュ">バンドル・キャッシュ</option>
                                            </select>
                                            {dataForm.card_brand.error && <label className="error">{dataForm.card_brand.error}</label>}
                                            <p className="sub">ご利用可能枠、及び残高がない方はサービスをご利用になれません。</p>
                                            <p className="sub">
                                                ペイディをご利用のお客様はアプリの案内に従って「本人確認」をしてペイディプラスにしてください。
                                                <br />
                                                ペイディアプリを開いて、左上にpaidyプラスとなっていることをご確認ください。
                                                <br />
                                                paidyプラスになっていれば、ご利用可能です。
                                            </p>
                                        </td>
                                    </tr>
                                    {/* Part 2 */}
                                    <tr>
                                        <th>
                                            <div className="title">
                                                氏名<span className="gray">必須</span>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="wrap-input">
                                                <input type="text" name="name" id="name" required onChange={(e) => onchangeInput(e)} />
                                                <span className="icon-valid" />
                                            </div>
                                            {dataForm.name.error && <label className="error">field empty</label>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div className="title">
                                                フリガナ<span className="gray">必須</span>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="wrap-input">
                                                <input type="text" name="furigana" id="furigana" required onChange={(e) => onchangeInput(e)} />
                                                <span className="icon-valid" />
                                            </div>
                                            {dataForm.furigana.error && <label className="error">{dataForm.furigana.error}</label>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div className="title">
                                                性別<span className="gray">必須</span>
                                            </div>
                                        </th>
                                        <td>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="radio" name="gender" id="gender1" defaultValue="男性" required onChange={(e) => onchangeInput(e)} />
                                                        <span className="icon" />
                                                        <span className="text not_bold">男性</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="radio" name="gender" id="gender2" defaultValue="女性" required onChange={(e) => onchangeInput(e)} />
                                                        <span className="icon" />
                                                        <span className="text not_bold">女性</span>
                                                    </label>
                                                </li>
                                            </ul>
                                            {dataForm.gender.error && <label className="error">{dataForm.gender.error}</label>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div className="title">
                                                メールアドレス<span className="gray">必須</span>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="wrap-input">
                                                <input type="email" name="email" id="email" placeholder="sample@sample.com" required onChange={(e) => onchangeInput(e)} />
                                                <span className="icon-valid" />
                                            </div>
                                            {dataForm.email.error && <label className="error">{dataForm.email.error}</label>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div className="title">
                                                携帯番号<span className="gray">必須</span>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="wrap-input">
                                                <input className="fix-byte fix-num" type="text" name="telephone" id="telephone" placeholder="09012345678" maxLength={11} inputMode="numeric" required onChange={(e) => onchangeInput(e)} />
                                                <span className="icon-valid" />
                                            </div>
                                            {dataForm.telephone.error && <label className="error">{dataForm.telephone.error}</label>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div className="title">
                                                郵便番号<span className="gray">必須</span>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="top">
                                                〒
                                                <span className="wrap-input">
                                                    <input className="fix-byte fix-num" type="text" name="post1" id="post1" inputMode="numeric" placeholder="123" required onChange={(e) => onchangeInput(e)} />
                                                    <span className="icon-valid" />
                                                </span>
                                                -
                                                <span className="wrap-input">
                                                    <input className="fix-byte fix-num" type="text" name="post2" id="post2" inputMode="numeric" placeholder="4567" required onChange={(e) => onchangeInput(e)} />
                                                    <span className="icon-valid" />
                                                </span>
                                            </div>
                                            {dataForm.post1.error && <label className="error">{dataForm.post1.error}</label>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div className="title">
                                                住所<span className="gray">必須</span>
                                            </div>
                                        </th>
                                        <td>
                                            <select name="pref" id="pref" required onChange={(e) => onchangeInput(e)} defaultValue="">
                                                <option value="" disabled="">
                                                    選択してください
                                                </option>
                                                <option value="北海道">北海道</option>
                                                <option value="青森県">青森県</option>
                                                <option value="岩手県">岩手県</option>
                                                <option value="宮城県">宮城県</option>
                                                <option value="秋田県">秋田県</option>
                                                <option value="山形県">山形県</option>
                                                <option value="福島県">福島県</option>
                                                <option value="茨城県">茨城県</option>
                                                <option value="栃木県">栃木県</option>
                                                <option value="群馬県">群馬県</option>
                                                <option value="埼玉県">埼玉県</option>
                                                <option value="千葉県">千葉県</option>
                                                <option value="東京都">東京都</option>
                                                <option value="神奈川県">神奈川県</option>
                                                <option value="新潟県">新潟県</option>
                                                <option value="富山県">富山県</option>
                                                <option value="石川県">石川県</option>
                                                <option value="福井県">福井県</option>
                                                <option value="山梨県">山梨県</option>
                                                <option value="長野県">長野県</option>
                                                <option value="岐阜県">岐阜県</option>
                                                <option value="静岡県">静岡県</option>
                                                <option value="愛知県">愛知県</option>
                                                <option value="三重県">三重県</option>
                                                <option value="滋賀県">滋賀県</option>
                                                <option value="京都府">京都府</option>
                                                <option value="大阪府">大阪府</option>
                                                <option value="兵庫県">兵庫県</option>
                                                <option value="奈良県">奈良県</option>
                                                <option value="和歌山県">和歌山県</option>
                                                <option value="鳥取県">鳥取県</option>
                                                <option value="島根県">島根県</option>
                                                <option value="岡山県">岡山県</option>
                                                <option value="広島県">広島県</option>
                                                <option value="山口県">山口県</option>
                                                <option value="徳島県">徳島県</option>
                                                <option value="香川県">香川県</option>
                                                <option value="愛媛県">愛媛県</option>
                                                <option value="高知県">高知県</option>
                                                <option value="福岡県">福岡県</option>
                                                <option value="佐賀県">佐賀県</option>
                                                <option value="長崎県">長崎県</option>
                                                <option value="熊本県">熊本県</option>
                                                <option value="大分県">大分県</option>
                                                <option value="宮崎県">宮崎県</option>
                                                <option value="鹿児島県">鹿児島県</option>
                                                <option value="沖縄県">沖縄県</option>
                                            </select>
                                            {dataForm.pref.error && <label className="error">{dataForm.pref.error}</label>}
                                            <div className="wrap-input">
                                                <input type="text" name="addr" id="addr" required onChange={(e) => onchangeInput(e)} placeholder="東京都〇〇〇市△△町1-2-3" />
                                                <span className="icon-valid" />
                                            </div>
                                            {dataForm.addr.error && <label className="error">{dataForm.addr.error}</label>}
                                            <div className="wrap-input">
                                                <input type="text" name="address_home" id="address_home" placeholder="ビル・マンション名〇〇号室" />
                                                <span className="icon-valid" />
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Part 3 */}
                                    <tr>
                                        <th>
                                            <div className="title">
                                                ご利用希望金額<span className="gray">必須</span>
                                            </div>
                                        </th>
                                        <td>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="radio" name="amount_money" id="amount_money2" defaultValue="2万円以上" required onChange={(e) => onchangeInput(e)} />
                                                        <span className="icon" />
                                                        <span className="text">2万円以上</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="radio" name="amount_money" id="amount_money1" defaultValue="2万円未満" required onChange={(e) => onchangeInput(e)} />
                                                        <span className="icon" />
                                                        <span className="text">2万円未満</span>
                                                    </label>
                                                </li>
                                            </ul>
                                            {dataForm.amount_money.error && <label className="error">{dataForm.amount_money.error}</label>}
                                            <p className="sub">
                                                HPからのお申込みの場合は
                                                <span className="sub_red">
                                                    <span className="changeVal">2</span>万円以上
                                                </span>
                                                からになります
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div className="title">
                                                ショッピング枠残高<span className="gray">必須</span>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="wrap-input">
                                                <span>
                                                    <input className="fix-byte fix-num" type="text" name="shopping_balance" id="shopping_balance" inputMode="numeric" required onChange={(e) => onchangeInput(e)} />
                                                    円
                                                    <span className="icon-valid" />
                                                </span>
                                            </div>
                                            {dataForm.shopping_balance.error && <label className="error">{dataForm.shopping_balance.error}</label>}
                                            <p className="sub">
                                                Paidyをご利用の場合、決済手数料2.2％加算された請求がPaidyからきます。
                                                <br />
                                                決済枠一杯でお申込みされますと、Paidy側の手数料が上乗せされるため決済枠を超えてしまいます。
                                                <br />
                                                余裕をもってお申込みください。
                                            </p>
                                        </td>
                                    </tr>
                                    <tr className="tr-file" style={{ display: "none" }}>
                                        <th>
                                            <div className="title">身分証明書添付</div>
                                        </th>
                                        <td>
                                            <div className="col_2">
                                                <div className="col">
                                                    <div className="file">
                                                        <span>
                                                            表面：
                                                            <br />
                                                            <span className="gray">必須</span>
                                                        </span>
                                                        <input type="file" name="suf_front" id="suf_front" accept="image/*" />
                                                        <br />
                                                        {dataForm.suf_front.error && <label className="error">{dataForm.suf_front.error}</label>}
                                                    </div>
                                                    <div className="file">
                                                        <span>裏面：</span>
                                                        <input type="file" name="suf_after" id="suf_after" accept="image/*" />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <span className="red sub">
                                                        身分証明書のアップロードのやり方がわからない方は
                                                        <br />
                                                        弊社スタッフがサポートさせて頂きますので
                                                        <br />
                                                        ・お電話：
                                                        <a href="tel:000-0000-0000" className="blue">
                                                            000-0000-0000
                                                        </a>
                                                        <br />
                                                        ・メール：
                                                        <a href="" className="blue">
                                                            mail
                                                        </a>
                                                        <br />
                                                        ・公式LINE：
                                                        <a href="" className="blue blue_line" target="_blank" />
                                                        <br />
                                                        までお気軽にご連絡下さい。
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="sub">
                                                「クレジットカード」「ペイディプラス」「ペイディApple専用枠」を
                                                <br />
                                                選択されたお客様は
                                                <span className="sub_red">初回に限り、身分証明書の写真をお送りください。</span>
                                            </p>
                                            <p className="sub">画像は文字数字など読み取れるように撮影して下さい。</p>
                                            <p className="sub">画像形式はJPG・PNG・GIF形式、5MB以内までのファイルとなります。</p>
                                            <br />
                                            <p className="sub_no">
                                                ■添付写真の条件に付きまして
                                                <br />
                                                ・顔写真付きの身分証明書の場合は「表面+裏面」が必要になります。
                                                <br />
                                                ・マイナンバーの場合は「表面のみ」が必要です。
                                                <br />
                                                ・保健書の場合は「ご本人様の住所記載の公共料金の領収書」「請求書」でも可能になります。
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="btn_cover">
                            <div className="btn_area">
                                {/* <button type="button" className="next btn btn-primary" area-disabled="true">
                                    確認する
                                </button>
                                <button type="button" className="previous btn btn-primary btn-back">
                                    前へ戻る
                                </button> */}
                                <button type="submit" className="btn-primary btn submit">
                                    送信する
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*//申込み*/}
            </form>
            <div className="popup popup_1">
                <div className="overlay" />
                <div className="content">
                    <span className="popup-close">
                        <svg width={24} height={24} viewBox="0 0 24 24 ">
                            <g strokeWidth={2}>
                                <line x1={12} y1={0} x2={12} y2={24} />
                                <line x1={0} y1={12} x2={24} y2={12} />
                            </g>
                        </svg>
                    </span>
                    <h3>２回目以降</h3>
                    <div className="bold">のお客様につきまして</div>
                    <p>
                        お申込み回数が<span>2回目以降</span>
                        <br />
                        または<span>再利用のお客様</span>につきまして
                        <br />
                        HPからではなく
                        <br />
                        <span>お電話、メールアドレス、LINE</span>の<br />
                        いずれから
                        <br />
                        <span>お名前、換金ご希望金額、カードブランド</span>の<br />
                        情報を送信お願い致します。
                        <br />
                        担当から折り返しご連絡させて頂きます。
                    </p>
                    <ul className="group-btn">
                        <li>
                            <div className="title">電話番号でお問い合わせ</div>
                            <a className="btn" href="tel:000-0000-0000">
                                000-0000-0000
                            </a>
                        </li>
                        <li>
                            <div className="title">メールでお問い合わせ</div>
                            <a href="" className="btn">
                                お問い合わせはこちら
                            </a>
                        </li>
                        <li>
                            <div className="title">LINEでお問い合わせ</div>
                            <a href="" target="_blank" className="btn">
                                友だち追加はこちら
                            </a>
                        </li>
                    </ul>
                    <div className="des">
                        お振込対応可能時間
                        <br />
                        7:00〜22:00(年中無休)
                    </div>
                    <div className="wrap-btn">
                        <button className="btn btn-application back">お申し込みへ戻る</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
