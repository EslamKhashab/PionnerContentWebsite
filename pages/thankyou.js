import Button from '../components/Button/Button';
const Thankyou = () => {
    return (
        <div id="notfound">
            {/* <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Button path='/' text="Go To Homepage" />
            </div> */}
            <div className="notfound">
                <div>
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                </div>
                <h1>شكرا لتسجيل بيانتك</h1>
                <p>سيقوم ممثلى خدمة العملاء بالتواصل معكم فى أسرع وقت</p>
                <br />
                <Button path='/' text="العودة الى الرئيسية" />
            </div>
        </div>
    )
}
export default Thankyou;