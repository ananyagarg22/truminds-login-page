import './LicenseSection.css';
import uniphoresymbol from '../../../assets/uniphoresymbol.png'

export function LicenseSection() {
    return(
        <div id='License'>
            <p>
                © 2022 Uniphore. All rights reserved. <a href='https://www.uniphore.com/privacy-policy/' >Privacy Policy</a>. Q for sales's use and transfer to any other app of information received from Google APIs will adhere to the <a href='https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes'>Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>
            <div id='uniphore'>
                <p>Powered by: &nbsp; </p><img src={uniphoresymbol} alt='uniphore symbol' ></img>
            </div>
        </div>
    );
}