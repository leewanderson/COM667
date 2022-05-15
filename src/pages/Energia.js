import React from "react";
import EnergiaImage from "../assets/Energia.png";
import "../styles/Project.css";

function Energia() {
return (
    <div className="about">
        <div
            className="aboutTop"
            style={{ backgroundImage: `url(${EnergiaImage})` }}>
        </div>
        

<div className="aboutBottom">
<h1>Energia Monitoring</h1>
    <h2>Summary</h2>
    <p>Energia use QlikView for internal users and Qlik Sense for external users. Currently Neueda MS only supports their internal QlikView environments.</p>
<h2>Environment Links</h2>
How to connect:<br></br>

Servers:<br></br>
NB: All servers are accessed through the BeyondTrust access console
<table>
<tr>
    <th>Server</th>
    <th>Description</th>
    <th>Logs Location</th>
</tr>
<tr>
    <td>ENR-QLIK-AP1</td>
    <td>Live Access Point</td>
    <td>C:\ProgramData\QlikTech\&lt;name_of_service&gt;\</td>
</tr>
<tr>
    <td>ENR-QLIK-AP2</td>
    <td>Disaster Recovery Access Point</td>
    <td>C:\ProgramData\QlikTech\&lt;name_of_service&gt;\</td>
</tr>
<tr>
    <td>ENR-QLIK-DEV</td>
    <td>Dev Server</td>
    <td></td>
</tr>
<tr>
    <td>ENR-QLIK-PRINT</td>
    <td>NPrinting Server</td>
    <td></td>
</tr>
<tr>
    <td>ENR-QLIK-PUB1</td>
    <td>Live Publisher</td>
    <td>C:\ProgramData\QlikTech\&lt;name_of_service&gt;\</td>
</tr>
<tr>
    <td>ENR-QLIK-PUB2</td>
    <td>Disaster Recovery Publisher</td>
    <td>C:\ProgramData\QlikTech\&lt;name_of_service&gt;\</td>
</tr>
<tr>
    <td>ENR-QLIK-QWS</td>
    <td>Live Qlik Sense Server</td>
    <td></td>
</tr>
<tr>
    <td>ENR-QLIK-QWSDEV</td>
    <td>Dev Qlik Sense Server</td>
    <td></td>
</tr>
</table> 
<br></br><br></br>
<p>Once you have been set up on BeyondTrust by Energia (ie: received credentials), simply access the following link via your web browser: https://remote.energiagroup.com/login/ (as shown below).<br></br>If you don’t have credentials, contact Alfredo Barra or David Hernandez.</p><br></br>
<p><img src="/EnergiaDocs/Energia1.png" alt="BeyondTrust Login Screen"/></p><br></br>
<p>Enter your Energia AD account username (the username used to log into your computer at the Windows start-up screen on an Energia server), followed by the associated AD password.</p><br></br>
<p>If this is your first log-in you will be brought to a further login screen to authenticate your session, as follows:</p><br></br>
<p><img src="/EnergiaDocs/Energia2.png" alt="First-time login authentication screen"/></p><br></br>
<p>Users will need to download the Microsoft Authenticator app from the Google Play store (Android) and Apple Appstore (iOS). NB: Any authenticator app will do, eg: Authy</p><br></br>
<p>Once through the initial registration steps in the Authenticator app, users will be presented with a time-based one-time password (TOTP) that refreshes every 30 seconds.<br></br>
Open the app and scan the QR displayed on your computer browser screen (if applicable) and then input the six-digit TOTP shown in the smartphone app: (as shown below)</p><br></br>
<p><img src="/EnergiaDocs/Energia3.png" alt="Screenshot from Microsoft Authenticator app"/></p><br></br>
<h2>BeyondTrust Console Layout</h2>
<p>You will then be pulled through to the BeyondTrust console’s dashboard:</p><br></br>
<p><img src="/EnergiaDocs/Energia4.png" alt="Layout of the BeyondTrust Console"/></p><br></br>
<p>Initially, users can see their Account overview with options to access the following:</p><br></br>
<p>· Amend Email settings</p>
<p>· Launch Privileged Web Access Console</p><br></br>
<p>From the left-hand menu, users can access Configuration settings, where they can manage teams’ access and privileges, including:</p><br></br>
<p><img src="/EnergiaDocs/Energia5.png" alt="BeyondTrust menu, with My Account, Configuration, Jump and Reports"/></p><br></br>
<p>·Each team’s name and associated Code Name</p><br></br>
<p>·Team Members administration</p><br></br>
<p>·Including team roles (Manager, Lead, Member)</p><br></br>
<p><img src="/EnergiaDocs/Energia6.png" alt="Selection of Jump groups within BeyondTrust"/></p><br></br>
<p>Jump groups/sessions refer to the endpoints/servers that users have access to. To jump onto the endpoint, simply click the Jump button at the end of the Jump Group’s row.</p><br></br>
<p>Once connected to the endpoint, users will see the below display, demonstrating other uses who are presently accessing the endpoint:</p><br></br>
<p><img src="/EnergiaDocs/Energia7.png" alt="Display of users currently using the system"/></p><br></br>
<h2>Points of Contact</h2>
<p>For any queries relating to BeyondTrust, please reach out to the following points of contact:</p><br></br>
<p>·IT.Security@energiagroup.com – for general queries and end user navigation (tel:0800 5884100)</p><br></br>
<p>·Capita contacts for Set-up and assistance</p><br></br>
<p>·utilsd@capita.co.uk</p><br></br>
<p>·Michelle.Williamson@capita.co.uk</p><br></br>
<h2>Additional Resources</h2>
<p>·BeyondTrust’s Getting Started Documentation </p><br></br>
<p>https://www.beyondtrust.com/docs/privileged-remote-access/getting-started/index.htm  (as shown below)</p><br></br>
<p><img src="/EnergiaDocs/Energia8.png" alt="List of documents offered by BeyondTrust"/></p><br></br>
<p>BeyondTrust’s Demo Walkthrough: https://bomgar.wistia.com/medias/h4x5qkqomj</p><br></br>
<p><img src="/EnergiaDocs/Energia9.png" alt="Image of BeyondTrust's demo"/></p><br></br>
<h1>How To Re-Run Energia Task Failures</h1>
<p>Damien Burns has requested that we monitor the tasks on the Energia Production Environment and re-run them if / when they fail.</p><br></br>
<h2>Instructions</h2>
<p>Connect to server ENR-QLIK-PUB1 using the BeyondTrust portal, either via https://remote.energiagroup.com/login/challenge or via the Windows app if installed.
If you do not have credentials, you can use Eoin's (in 1Password, give him a shout over Teams or on his mobile for an auth code). </p><br></br>
<p>Once in the portal, log into ENR-QLIK-PUB1 using the same credentials.</p><br></br>
<p><img src="/EnergiaDocs/Energia10.png" alt="View of server inside the portal"/></p><br></br>
<p>You may need to click the CAD logo on the top left corner (screenshot below) if you see a blank screen</p><br></br>
<p><img src="/EnergiaDocs/Energia11.png" alt="View of CAD button within server"/></p><br></br>
<p>Open a web browser in the server and navigate to http://enr-qlik-pub1:4780/qmc/Default.htm for the QlikView Management Console.</p><br></br>
<p>Locate the failed app. You only need to worry about reloading the one in your ticket, even if other tasks are showing as failed. If it’s an NPrinting app consult the NPrinting section below. If not, click the ‘play’ icon to re-run.</p><br></br>
<p>Set the component as Task Failure.</p><br></br>
<h2>Power NI Reload Schedule Notes:</h2>
<p>CC&#38;B Trigger</p><br></br>
<p>The main CC&#38;B extract is triggered from a task a called Trigger UPD CCB</p><br></br>
<p><img src="/EnergiaDocs/Energia12.png" alt="View of Trigger UPD CCB"/></p><br></br>
<p>This is designed to check for CC&#38;B batch jobs to complete before Qlikview extracts begin.</p><br></br>
<p>It will only check for 3.5 hours, if CC&#38;B batch jobs are still incomplete then it will fail, this will trigger a second task, Trigger UPD 2 CCB that will do the same thing without any time limit.</p><br></br>
<p><img src="/EnergiaDocs/Energia13.png" alt="View of Trigger UPD 2 CCB"/></p><br></br>
<p>If the second task succeeds there is no need to rerun the 1st task, if it fails or runs for more than 3 hours then there is an issue.</p><br></br>
<p>In this case end the task and the issue needs to be raised with Capita, stephen.cousins@capita.co.uk should be able to help point to the right people,
if not then James Curran, James.Curran@energiagroup.com should be able to escalate. Once resolved the task can be started again.</p><br></br>
<p>(For background, this is set up like this so that if the 1st task fails it highlights that there may be an issue, if CC&#38;B batch jobs are just running longer then the second trigger can still kick off the extracts as soon as they are ready).</p><br></br>
<h2>Nprint Tasks</h2>
<p>We trigger many of our Nprint tasks from QMC. It frequently happens that the QMC task will fail even if there is no issue with the Nprint task – this can be checked on the Nprint task executions screen – 
if there are no issues here then there is no need to rerun the QMC task. These tasks should all have Nprint in the title so are easily identifiable</p><br></br>
<p>To log into the Nprinting Console, navigate to https://enr-qlik-print:4993/ (you can hit this from PUB1, no need to change servers) and log in by clicking Windows login. If asked, enter your domain credentials.</p><br></br>
<p><img src="/EnergiaDocs/Energia14.png" alt="View of NPrinting Console"/></p><br></br>
<p>Then navigate to Admin &#62; Task executions to view the tasks that have run. Find the one that matches the name and time of the failed QMC task. 
If it has completed successfully, no further action is necessary. If it has failed, re-run this task in the QMC.</p><br></br>
<p>Note: All Nprint triggers on the DR server are disabled.</p><br></br>
<p>Other notes:</p><br></br>
<p>The task Bank Rejection loader fails quite often and takes a long time to run for unknown reasons, possibly network issues. Just kick it off again if it does fail.</p><br></br>

<div><br></br></div>
</div>
</div>

);
}

export default Energia;
