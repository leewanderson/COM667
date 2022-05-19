import React from "react";
import InvestNIImage from "../assets/InvestNI.jpg";
import "../styles/Project.css";
function InvestNI() {
return (
    <div className="about">
    <div
        className="aboutTop"
        style={{ backgroundImage: `url(${InvestNIImage})` }}
    ></div>
    <div className="aboutBottom">
        <h1>Invest NI Onboarding</h1>
        <p>Invest NI are a government organisation that supports business in Northern Ireland.
        They run 7 websites that Version 1 supports. Hosted onsite in Invest NI data centres in Belfast and Newry, the websites are written in Drupal8 on Debian operating systems on a Windows Hyper-V cluster. The seven websites are: </p>
        <p>•[CON] https://www.niconnections.com</p>
        <p>•[INI] https://www.investni.com</p>
        <p>•[BUS] https://www.nibusinessinfo.com</p>
        <p>•[BUY] https://www.buynifood.com</p>
        <p>•[INV] https://www.innovateni.com</p>
        <p>•[BXT] https://brexit-tool.investni.com/</p>
        <p>•[TRA] Internal Invest NI Intranet</p>
        <p>Invest NI are in charge of the physical servers, while development of the sites is done in Drupal and sits with a company named BT48.
        Version 1 support the infrastructure of the servers, as well as deploying new code releases as part of the monthly release cycle / emergency changes.  The main technologies in the INI servers are:</p>
        <p>•Drupal 8</p>
        <p>•Nginx (web server)</p>
        <p>•Solr (search)</p>
        <p>•Ansible (for automated deployment)</p>
        <h3>Environment Links</h3>
        <table>
        <tr>
            <th>Server</th>
            <th>UAT</th>
            <th>Production</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>NIConnections</td>
            <td>172.18.0.38</td>
            <td>172.18.0.6</td>
            <td>LIVE</td>
        </tr>
        <tr>
            <td>BuyNIFood</td>
            <td>172.18.0.37</td>
            <td>172.18.0.5</td>
            <td>LIVE</td>
        </tr>
        <tr>
            <td>NIBusinessInfo</td>
            <td>172.18.0.39</td>
            <td>172.18.0.7</td>
            <td>Server Build Pending</td>
        </tr>
        <tr>
            <td>investni.com</td>
            <td>172.18.0.40</td>
            <td>172.18.0.8</td>
            <td>LIVE</td>
        </tr>
        <tr>
            <td>Intranet</td>
            <td>172.18.0.41</td>
            <td>172.18.0.9</td>
            <td>LIVE</td>
        </tr>
        <tr>
            <td>InnovateNI</td>
            <td>172.18.0.42</td>
            <td>172.18.0.10</td>
            <td>LIVE</td>
        </tr>
        <tr>
            <td>Brexit-Tool</td>
            <td>172.18.0.43</td>
            <td>172.18.0.15</td>
            <td>LIVE</td>
        </tr>
        <tr>
            <td>DB-Server-1 (master)</td>
            <td>172.18.0.47</td>
            <td>172.18.0.15</td>
            <td>LIVE</td>
        </tr>
        <tr>
            <td>DB-Server-2 (slave)</td>
            <td>172.18.0.48</td>
            <td>172.18.0.16</td>
            <td>LIVE</td>
        </tr>
        </table>
        <p><br></br></p>
        <h2>Points of Contact</h2>
        <table>
        <tr>
            <th>Person</th>
            <th>Role</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Notes</th>
        </tr>
        <tr>
            <td>Rodney McMullan</td>
            <td>Deputy Principal Campaigns Solutions and Digital Comms</td>
            <td>rodney.mcmullan@investni.com</td>
            <td>Direct:: +44 (0) 28 9069 8147 Mobile T: +447818077817</td>
            <td>Our main contact within INI, raises the majority of tickets and can help with most enquiries</td>
        </tr>
        <tr>
            <td>Invest NI Service Desk</td>
            <td>Internal Invest NI IT Service Desk</td>
            <td>servicedesk@investni.com</td>
            <td></td>
            <td>Include this address in emails to Adam to ensure issues are picked up if he is not available.</td>
        </tr>
        <tr>
            <td>Feargal O’Kane (BT48)</td>
            <td>Principal Software Developer (BT48)</td>
            <td>feargal@bt48.com</td>
            <td>07813917655</td>
            <td>Performs all code changes to the investNI Drupal sites.</td>
        </tr>
        <tr>
            <td>Daniel Pollock (Version 1)</td>
            <td>L2 support for Invest NI within Neueda</td>
            <td>daniel.pollock@version1.com </td>
            <td></td>
            <td>Performs releases and changes in server configuration</td>
        </tr>
        <tr>
            <td>Adam Dewitt</td>
            <td>Infrastructure Contact</td>
            <td>adam.dewitt@investni.com</td>
            <td></td>
            <td>Our contact when sites are down or when we experience high CPU usage / Firewall / DNS issues</td>
        </tr>
        </table>
        <h2>How to connect to InvestNI VMs</h2>
        <table>
        <tr>
            <th>Environment</th>
            <th>Username</th>
            <th>Password</th>
        </tr>
        <tr>
            <td>UAT</td>
            <td>testuser</td>
            <td>See 1Password</td>
        </tr>
        <tr>
            <td>Production</td>
            <td>drupaluser</td>
            <td>See 1Password</td>
        </tr>
        </table>
        <h2>InvestNI Process Flow</h2>
        <p><img src="/InvestNIDocs/INI1.png" alt="InvestNI Process Flow"/></p><br></br>
        <p><img src="/InvestNIDocs/INI2.png" alt="InvestNI Process Flow"/></p><br></br>

    </div>
    </div>
);
}

export default InvestNI;