import React from "react";
import CIEImage from "../assets/CIE.png";
import "../styles/Project.css";
function CIE() {
return (
    <div className="about">
    <div
        className="aboutTop"
        style={{ backgroundImage: `url(${CIEImage})` }}
    ></div>
    <div className="aboutBottom">
        <h1>CIE Monitoring</h1>
        <h2>Córas Iompair Éireann</h2>
        <h3>Summary</h3>
        <p>A public transport company in the South of Ireland, CIE uses QlikSense for business reporting. We have a support agreement to provide level 3 Qlik support to Qlik itself.
            The apps are written and supported by CIE themselves so we typically aren't brought in to work on those.</p>
        <p>Currently task failure notifications are turned off on the CIE and Irish Rail environments so our main tickets tend to be small change / upgrade requests or service requests.</p>
        <h3>Environment Links</h3>
        <table>
        <tr>
            <th>Environment</th>
            <th>Node Type</th>
            <th>Hostname</th>
            <th>IP</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>CIE-Development</td>
            <td>Central</td>
            <td>HCINCQLIKDEV</td>
            <td>10.111.1.169</td>
            <td></td>
        </tr>
        <tr>
            <td>CIE-NPrinting</td>
            <td>Central</td>
            <td>HCORIQLIKNPRINT</td>
            <td>10.111.1.168</td>
            <td>NPrinting Server for generating static reports for distribution</td>
        </tr>
        <tr>
            <td>CIE-Pre-Production</td>
            <td>Central</td>
            <td>HCINCQLIKPPROD</td>
            <td>10.111.1.172</td>
            <td>Production node 1 of 2</td>
        </tr>
        <tr>
            <td>CIE-Production</td>
            <td>Central</td>
            <td>HCORIQLIK01</td>
            <td>10.111.1.67</td>
            <td>Production node 1 of 2</td>
        </tr>
        <tr>
            <td>CIE-Production</td>
            <td>Rim</td>
            <td>HCINCQLIK02</td>
            <td>10.111.1.92</td>
            <td>Production node 2 of 2</td>
        </tr>
        <tr>
            <td>CIE-QA</td>
            <td>Central</td>
            <td>HCINCQLIKQA</td>
            <td>10.111.1.170</td>
            <td>Development Server</td>
        </tr>
        <tr>
            <td>IrishRail-Development</td>
            <td>Central</td>
            <td>IRCDCQLIKDEV</td>
            <td>10.111.1.163</td>
            <td>Development Server</td>
        </tr>
        <tr>
            <td>IrishRail-Production</td>
            <td>Central</td>
            <td>IRDUBQLIK01</td>
            <td>10.111.1.176</td>
            <td>Production node 1 of 2</td>
        </tr>
        <tr>
            <td>IrishRail-Production</td>
            <td>Rim</td>
            <td>IRDUBQLIK02</td>
            <td>10.111.1.177</td>
            <td>Production node 2 of 2</td>
        </tr>
        <tr>
            <td>IrishRail-QA</td>
            <td>Central</td>
            <td>IRCDCQLIKQA</td>
            <td>10.111.1.162</td>
            <td>QA Server</td>
        </tr>
        </table>
        <h2>Points of Contact</h2>
        <table>
        <tr>
            <th>Person</th>
            <th>Role</th>
            <th>Email</th>
        </tr>
        <tr>
            <td>Louise Ireson</td>
            <td>BI Lead</td>
            <td>Louise.Ireson@cie.ie</td>
        </tr>
        <tr>
            <td>CIE Service Desk</td>
            <td>Service Desk</td>
            <td>servicedesk@cie.ie</td>
        </tr>
        </table>
        <h2>How to Connect to CIE</h2>
        <p>Install the GlobalProtect client available here: https://www.dropbox.com/sh/4dugmoe1ny2pqor/AAAqO_mqLg_-OiuN6qWR9Bbza?dl=0</p>
        <p>Right Click the GlobalProtect Agent Icon in the Windows Notification Area and click “Connect” (don’t forget to disconnect when you’re done)</p>
        <p><img src="/CIEDocs/CIE1.png" alt="GlobalProtect Icon on Windows"/></p>
        <p>Enter your domain (access.cie.ie), username (whatever yours is, should be in the format “Surname_Fn”, for now, we only use David's creds from 1Password) and password and click “Connect”</p>
        <p><img src="/CIEDocs/CIE2.png" alt="GlobalProtect Login"/></p>
        <p>The red cross in the GlobalProtect Icon will vanish and the agent will establish a SSL VPN Tunnel into the office network. All applications can now be used as if the PC would be connected to the local network in the CIE office.
            Strangely, your IP appears to stay the same, but you can RD into their environments fine.</p>
        <p>The environments are: </p>
        <p>Development: hcincqlikdev - 10.111.1.169:2993 </p>
        <p>Production: hcoriqlik01 - 10.111.1.67:2993 </p>
        <p>When accessing the environments through RD, be sure to add the port number to the end of the IP (:2993, as shown above).</p>
        <p>When asked for a username and password by Windows Remote Desktop client, add your username with the prefix “holding_company\” and password.  Once you hit “Connect”, the RD client will open the environment. </p>
        <p><img src="/CIEDocs/CIE3.png" alt="Remote Desktop Connection Screen"/></p>
        <p>The correct method is to log-in using our personal username/password combinations (eg: Boylan_Eoin, IREl@nd22), then use admin credentials when asked for them:: </p>
        <p>Note: these credentials are currently autosaved so you shouldn't need to enter them</p>
        <p>Username: QlikAdmin </p>
        <p>Password: See 1Password</p>
        <p>So when you see a “You don’t currently have permission to access this folder” </p>
        <p><img src="/CIEDocs/CIE4.png" alt="Qlik File Share Access Warning"/></p>
        <p>Click continue and enter Username: QlikAdmin, Password: Summer18</p>
        <p><img src="/CIEDocs/CIE5.png" alt="Qlik Login Screen"/></p>
        <p>Usernames / Passwords</p>
        <table>
        <tr>
            <td>Frazer_S</td>
            <td>See 1Password</td>
        </tr>
        <tr>
            <td>Villagrana_J</td>
            <td>See 1Password</td>
        </tr>
        <tr>
            <td>Belanger_D</td>
            <td>See 1Password</td>
        </tr>
        </table>
        <p>Change Username Password</p>
        <p>In order to change a username password, log into one of the servers and open the on-screen keyboard.</p>
        <p>Press ctrl + alt on the physical keyboard and click del on the on-screen keyboard. Don't use the physical del key.</p>
        <p>A screen to change the username password will open.</p>
    </div>
    </div>
);
}

export default CIE;