import Button from '../components/Button/Button';
const Thankyou = ({lang}) => {
    return (
        <div id="notfound">
            {
                lang == 'ar' ?
                    <div className="notfound">
                        <div>
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                        </div>
                        <h1>شكرا لتسجيل بياناتك</h1>
                        <p>سيقوم ممثلى خدمة العملاء بالتواصل معكم فى أسرع وقت</p>
                        <br />
                        <Button path='/' text="العودة الى الرئيسية" />
                    </div>
                :
                    <div className="notfound en" dir='ltr'>
                        <div>
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                        </div>
                        <h1>Thanks For Registering Your Details</h1>
                        <p>Customer service representatives will contact you as soon as possible</p>
                        <br />
                        <Button path='/' text="Go To Homepage" />
                    </div>
            }
        </div>
    )
}
export default Thankyou;