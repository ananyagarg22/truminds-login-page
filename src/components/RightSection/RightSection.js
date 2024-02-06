import { LicenseSection } from './LicenseSection/LicenseSection';
import { LoginSection } from './LoginSection/LoginSection';

import './RightSection.css';

export function RightSection() {
    return(
        <div id='right'>
            <LoginSection />
            <LicenseSection />
        </div>

    );
}
