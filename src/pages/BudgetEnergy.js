import React from "react";
import BudgetEnergyImage from "../assets/BudgetEnergy.jpg";
import "../styles/Project.css";
function BudgetEnergy() {
return (
    <div className="about">
    <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BudgetEnergyImage})` }}
    ></div>
    <div className="aboutBottom">
        <h1>Budget Energy Onboarding</h1>
        <h3>Summary</h3>
        <p>Budget Energy is a Londonderry based electricity supplier. </p>
        <p>Version 1 provided two products to budget Energy; a customer relationship manager platform, and a Qlik analytics & reporting solution. The CRM runs on a Ubuntu 16.04 server hosted on AWS. The Qlik Server runs on a Windows host, also on AWS.</p>
        <p>Source code is controlled in GitLab and is a combination of PHP and Javascript extensions on the SuiteCRM product, python for scheduled tasks and Budget Energy specific operations. The CRM sits on a MariaDB MySQL database.
            Input comes through the CRM GUI and from Market Messages received through a TIBCO line from NIE. </p>
        <p>Budget Energy also includes iOS and Android mobile apps and links to the Budget Energy website https://budgetenergy.co.uk . Both the mobile apps and website integration is through a RESTful API. </p>
        <p>CRM - built on the SuiteCRM platform, the Budget Energy CRM is primarily PHP extended with java script with python and uses a MariaDB for all data. </p>
        <p>QLIK - Budget uses a QlikSense implementation to provide business analytics and reporting. </p>
        <h3>Hours of Cover</h3>
        <p>The hours of support are as follows</p>
        <p>Monday to Friday 8am to 8pm</p>
        <p>Out of hours (on-call):</p>
        <p>8am to 9pm Monday to Friday</p>
        <p>Saturday 11am to 4pm</p>
        <p>364 days per year (Christmas day excluded)</p>
        <h3>Service Level Agreement</h3>
        <table>
        <tr>
            <th>Priority</th>
            <th>Target Response Time</th>
            <th>Target Resolution Time</th>
        </tr>
        <tr>
            <td>1 - Blocker</td>
            <td>15 minutes</td>
            <td>8 hours</td>
        </tr>
        <tr>
            <td>2 - Critical</td>
            <td>1 hour</td>
            <td>24 hours</td>
        </tr>
        <tr>
            <td>3 - Major</td>
            <td>2 hours</td>
            <td>3 days</td>
        </tr>
        <tr>
            <td>4 - Minor</td>
            <td>2 hours</td>
            <td>5 days</td>
        </tr>
        <tr>
            <td>5 - Trivial</td>
            <td>2 hours</td>
            <td>10 days</td>
        </tr>
        </table>
        <h3>Managed Service Agreement</h3>
        <b>Items Included within Managed Service</b>
        <table>
        <tr>
            <th>Service Item</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Backup and recovery test</td>
            <td>Planning, design, implementation and annual testing of the backup &#38; recover processes</td>
        </tr>
        <tr>
            <td>Hosting Costs</td>
            <td>Hosting of the supported applications on a dedicated cloud instance</td>
        </tr>
        <tr>
            <td>On Call Costs (per hour)</td>
            <td>Out of hours (on call) support to a dedicated telephone number and incident management.</td>
        </tr>
        <tr>
            <td>Performance tests</td>
            <td>Periodic performance testing to ensure solution performance remains within acceptable levels given volume and client growth.  In addition this will include the regulatory requirements for annual performance testing.</td>
        </tr>
        <tr>
            <td>Service Management</td>
            <td>Overall service management including reporting, escalations and operations.</td>
        </tr>
        <tr>
            <td>ServiceProvision</td>
            <td>Application support, maintenance, management, capacity planning, minor modifications including hardware, software and hosting of the supported applications</td>
        </tr>
        </table>
        <h3>Points of Contact</h3>
        <table>
        <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Notes</th>
        </tr>
        <tr>
            <td>Darren Force</td>
            <td>IT Manager</td>
            <td>Darren.Force@BudgetEnergy.co.uk</td>
            <td></td>
        </tr>
        <tr>
            <td>Ian Curran</td>
            <td></td>
            <td>Ian.Curran@budgetenergy.co.uk</td>
            <td></td>
        </tr>
        <tr>
            <td>Seamus Ferry</td>
            <td></td>
            <td>seamus.ferry@BudgetEnergy.co.uk</td>
            <td></td>
        </tr>
        <tr>
            <td>Chris Tranter</td>
            <td></td>
            <td>chris.tranter@budgetenergy.co.uk</td>
            <td>To be included in emails in the event of an unplanned or planned outage.</td>
        </tr>
        <tr>
            <td>Comms Email address</td>
            <td></td>
            <td>comms@budgetenergy.co.uk</td>
            <td>To be included in emails in the event of an unplanned outage.</td>
        </tr>
        <tr>
            <td>Change Email address</td>
            <td></td>
            <td>change@budgetenergy.co.uk</td>
            <td>To be included in emails in the event of an planned outage.</td>
        </tr>
        </table>
        <h3>Development</h3>
        <p>The development environment runs </p>
        <table>
        <tr>
            <th>Repo</th>
            <th>Address</th>
        </tr>
        <tr>
            <td>Budget Energy CRM</td>
            <td>https://gitlab.com/neueda/budget_energy_crm.git</td>
        </tr>
        <tr>
            <td>Budget Energy App</td>
            <td>https://gitlab.com/neueda/budget_energy.git</td>
        </tr>
        </table>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>

    </div>
    </div>
);
}

export default BudgetEnergy;