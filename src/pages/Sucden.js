import React from "react";
import SucdenImage from "../assets/Sucden.jpg";
import "../styles/Project.css";
function Sucden() {
return (
    <div className="about">
    <div
        className="aboutTop"
        style={{ backgroundImage: `url(${SucdenImage})` }}
    ></div>
    <div className="aboutBottom">
        <h1>Sucden OTC Onboarding</h1>
        <p><br></br></p>
        <h2>High-Level Architecture diagram:</h2>
    <table>
    <tr>
        <th>Component</th>
        <th>Description</th>
        <th></th>
    </tr>
    <tr>
        <td>SD Ingress</td>
        <td>Takes trade messages and reports from SD (Super Derivatives) SFTP site. Places a copy of everything into the archive. Publishes trade messages onto the Service Bus. 
            Publishes events indicating arrival of new reports to the archive onto the Service Bus (reports too large to publish directly to SB).</td>
        <td></td>
    </tr>
    <tr>
        <td>SD Egress</td>
        <td>Sends confirmation reports back to SD. These reports are acknowledgments or trade receipt required by SD.</td>
        <td></td>
    </tr>
    <tr>
        <td>Validation Service</td>
        <td>Receives trade messages. Summaries and stores them into the DB. </td>
        <td></td>
    </tr>
    <tr>
        <td>ISDS Service</td>
        <td>Responds to event from SD Ingress to indicate new ISDA file in the archive. Reads the file and populates the data into the DB</td>
        <td></td>
    </tr>
    <tr>
        <td>EOD Service</td>
        <td>Responds to event from SD Ingress to indicate new MTM file in the archive. Reads the file and populates the data into the DB. Then runs a Sanity Check report. </td>
        <td></td>
    </tr>
    <tr>
        <td>Report Scheduler</td>
        <td>The reports scheduler is in charge of triggering the generation of scheduled reports such as;
            • Exercise/Expire trigger - It runs 30 mins after each CUT code in UTC time.A CRON job runs every 15 mins and checks if it is 30 mins after a CUT time if not it sleeps until next scheduled wake.
            • Expiry Report trigger - It runs every day at 6am UTC time - using a CRON job.
            • Premium report trigger - It runs every day at 6am UTC time - using a CRON job.</td>
        <td></td>
    </tr>
    <tr>
        <td>Reporting Services</td>
        <td>This is the component to group together each report type. The reports are listed in the table below</td>
        <td></td>
    </tr>
    <tr>
        <td>Octopus-UI</td>
        <td>Out user interface. Used by internal middle office team in Sucden</td>
        <td></td>
    </tr>
    <tr>
        <td>OTC - API</td>
        <td>Our REST API. Used only by F2 system currently (F2 is an internal Sucden system that holds all trades within Sucden)</td>
        <td></td>
    </tr>
    <tr>
        <td>Client Data service</td>
        <td> Its job is to cache client data which we take from F2. This data changes rarely but is accessed frequently by reporting and UI.
            Without a cache in place a single user loading up the Client screen in the UI would trigger 100s/1000s of requests to F2 API, so we cache the data locally.</td>
        <td></td>
    </tr>
    <tr>
        <td>CosmosDB</td>
        <td>This is our central database store. We use the Mongo API for Cosmos DB which allows us to think of this a Mongo DB. You may occasionally hear devs/read documentation referring to Mongo, meaning this. </td>
        <td></td>
    </tr>
    <tr>
        <td>VPNGateway/LocalNetwork Gateway</td>
        <td>The VPN gateway  is the Azure component that provides VPN connection to the Sucden VPN device. This is a Site to site connection with a primary and backup connection.
            See https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-highlyavailable#multiple-on-premises-vpn-devices</td>
        <td></td>
    </tr>
    <tr>
        <td>Container Registry</td>
        <td>Our Container registry where pipelines places all of our docker images and from which AKS pulls images from. </td>
        <td></td>
    </tr>
    <tr>
        <td>AKS</td>
        <td>Out Kubernetes cluster. Note, various other components are created when this is setup. </td>
        <td></td>
    </tr>
    <tr>
        <td>External Load Balancer</td>
        <td>External Load Balancer associated with the Kubernetes cluster. Although we do not allow any external traffic into the cluster we do make connections outwards to SD SFTP site and the Mimecast service. 
            We therefore associate a Public IP address with the cluster through this Load Balancer and then ask SD to permission that IP address on their firewall. Currently Mimecast do not restrict access based on IP address. </td>
        <td></td>
    </tr>
    <tr>
        <td>Internal Load Balanacer</td>
        <td>As Sucden insisted on using a VPN for connections between our system and their internal systems it faced us with a problem. The VPN effectively means that our Kubernetes cluster is on the Sucden network.
            To expose a static IP address on our Kubernetes cluster that internal Sucden users could use to access our UI and API, we setup an Internal Load Balancer and associated it with our Nginx instance. For more info see https://docs.microsoft.com/en-us/azure/aks/internal-lb</td>
        <td></td>
    </tr>
    <tr>
        <td>Node Pool (a.k.a Virtual machine scale set)</td>
        <td>This is simply the pool of nodes (VMs) that are created during the initial creation of the Kubernetes cluster. It is unlikely we would ever need to make any changes here.
            If the system was to start seeing a lot more traffic we perhaps may need to add more nodes to the pool, however we have lots of head room provisioned based on current load. </td>
        <td></td>
    </tr>
    <tr>
        <td>Log Analytics Workspace</td>
        <td>This is where we tell Azure to gather logs. We can then query these logs through Azure Monitor.</td>
        <td></td>
    </tr>
    <tr>
        <td>VNet</td>
        <td>VNets are the main networking component used in Azure. Each of our Kubernetes (one per environment) clusters have their own VNet. We also host our VPN Gateway in a separate VNet. See here for more info around networking</td>
        <td></td>
    </tr>
    <tr>
        <td>Public IP Addresses</td>
        <td>Public IP Addresses (PIPs) are IP addresses that we can assign to components. When AKS is setup Azure will assign a default PIP to the AKS. However, if that AKS cluster had to be destroyed for any reason (for a rebuild) that IP address would be lost.
            Therefore we setup a separate PIP which is not initially associated with the cluster. Therefore, if the cluster is destroyed, the PIP will remain available for reuse. </td>
        <td></td>
    </tr>
    <tr>
        <td>Service Bus</td>
        <td>The service bus is used for all inter service communications. Services send/broadcast messages and events on topics and queues.
            We have 2 types of messages, trade messages (which are generally just refereed to as messages) and event messages (generally just refereed to as events. Technically speaking these are just messages too). </td>
        <td></td>
    </tr>
    <tr>
        <td>Storage Accounts</td>
        <td>This is our archive where we store all files which we receive in and send out of the system.</td>
        <td></td>
    </tr>
    </table>
    <h2>Reports</h2>
    <p>List of possible reports generating from the reporting services component</p>
    <table>
    <tr>
        <th>Report Name</th>
        <th>Triggered By</th>
        <th>Input</th>
        <th>Output</th>
        <th>Report Level</th>
    </tr>
    <tr>
        <td>Affirmation</td>
        <td>Lifecycle JSON from booked trade on SuperDerivatives</td>
        <td>Azure Service Bus: Lifecycle JSON</td>
        <td>Affirmation Report PDF Affirmation Report CSV Diff Table PDF (if Amend)</td>
        <td>Per Lifecycle</td>
    </tr>
    <tr>
        <td>KIKO</td>
        <td>Lifecycle JSON from booked trade on SuperDerivatives</td>
        <td>Azure Service Bus: Lifecycle JSON</td>
        <td>KIKO Report HTML embedded</td>
        <td>Per Lifecycle</td>
    </tr>
    <tr>
        <td>FEOMA/ISDA</td>
        <td>Validated trade on UI</td>
        <td>Azure Service Bus: trade_id</td>
        <td>FEOMA/ISDA Report PDF Diff Table PDF (if Amend)</td>
        <td>Per Lifecycle</td>
    </tr>
    <tr>
        <td>EQUITY (most important report!)</td>
        <td> 1. EOD Service finishes processing MTM<br></br>
        2. Published Clients on topic</td>
        <td>1. Azure Service Bus: MTM name<br></br>
            2. Azure Service Bus: client</td>
        <td>Equity Report PDF Option Position Summary CSV</td>
        <td>Per Client (many lifecycles)</td>
    </tr>
    <tr>
        <td>EQUITY SUMMARY</td>
        <td>1. EOD Service finishes processing MTM<br></br>
        2.Published Clients on topic</td>
        <td>1. Azure Service Bus: MTM name<br></br>
            2. Azure Service Bus: client</td>
        <td>Equity Summary Report XLS</td>
        <td>All Clients</td>
    </tr>
    <tr>
        <td>Expiry</td>
        <td>Report Scheduler event 7AM (UK) Mon-Fri</td>
        <td>Azure Service Bus: client</td>
        <td>Expiry Report HTML embedded</td>
        <td>Per Client</td>
    </tr>
    <tr>
        <td>Exercise Expire</td>
        <td>Report Scheduler event each CUT time per CLIENT (CUT: New York 10am = 3pm our time)</td>
        <td>Azure Service Bus: client and cut</td>
        <td>Exercise and Expire Report HTML embedded</td>
        <td>Per Client</td>
    </tr>
    <tr>
        <td>Premium Report</td>
        <td>Report Scheduler event 7AM (UK) Mon-Fri</td>
        <td>Azure Service Bus: string</td>
        <td>Premium Report XLSX</td>
        <td>All Clients per base currency</td>
    </tr>
    <tr>
        <td>FOBO Record</td>
        <td>Report Scheduler event 7AM (UK) Mon-Fri Description: identifies descrepencies between OTC and F2</td>
        <td>Azure Service Bus: string</td>
        <td>Fobo Record XLSX</td>
        <td></td>
    </tr>
    <tr>
        <td>Sanity Check Report</td>
        <td>EOD Service finishes processing MTM Description: identifies descrepencies between OTC and SD</td>
        <td>-</td>
        <td>Sanity_check_report XLSX</td>
        <td></td>
    </tr>
    <tr>
        <td>Only Service Bus (Reactive)</td>
        <td>Reporting Scheduler -&#62; Service Bus</td>
        <td>-</td>
        <td>-</td>
        <td>Per Lifecycle = For trade tracking, amendments etc</td>
    </tr>
    <tr>
        <td>FOBO Record</td>
        <td>Report Scheduler event 7AM (UK) Mon-Fri Description: identifies descrepencies between OTC and F2</td>
        <td>Azure Service Bus: string</td>
        <td>Fobo Record XLSX</td>
        <td></td>
    </tr>
    </table>
    <h2>Technical Access</h2>
    <h3>Environment List</h3>
    <table>
    <tr>
        <th>Environment</th>
        <th>Function</th>
    </tr>
    <tr>
        <td>Dev</td>
        <td>To test specific dev functional changes on all services and azure components</td>
    </tr>
    <tr>
        <td>QA</td>
        <td>To test changes with an environment as close as possible to production (reporting and connections to sucden components are enabled)</td>
    </tr>
    <tr>
        <td>Production</td>
        <td>Production environment</td>
    </tr>
    <tr>
        <td>Production Backup</td>
        <td>To startup in place of the production environment incase of a region failure on Azure.</td>
    </tr>
    </table>
    <h2>Points of Contact</h2>
    <h3>Key Stakeholders</h3>
    <b>Sucden</b>
    <table>
    <tr>
        <th>User</th>
        <th>Role</th>
        <th>Detail</th>
    </tr>
    <tr>
        <td>Pritesh.ruparel@sucfin.com</td>
        <td>Customer Manager</td>
        <td></td>
    </tr>
    <tr>
        <td>ben.conner@sucfin.com</td>
        <td>Customer Manager</td>
        <td></td>
    </tr>
    <tr>
        <td>George.Brown@sucfin.com</td>
        <td>Customer</td>
        <td>Can Raise Issues</td>
    </tr>
    <tr>
        <td>Michael.Humphrey@sucfin.com</td>
        <td>Customer</td>
        <td>Can Raise Issues</td>
    </tr>
    <tr>
        <td>justin.huang@sucfin.com</td>
        <td>Customer</td>
        <td>Can Raise Issues</td>
    </tr>
    <tr>
        <td>tracey.regan@sucfin.com</td>
        <td>Customer</td>
        <td>Can Raise Issues</td>
    </tr>
    </table>
    <p><br></br></p>
    <b>Version 1<br></br></b>
    <table>
    <tr>
        <th>User</th>
        <th>Role</th>
        <th>Detail</th>
    </tr>
    <tr>
        <td>Niall Maguire</td>
        <td>Platform Architect</td>
        <td></td>
    </tr>
    <tr>
        <td>David Malanaphy</td>
        <td>Developer</td>
        <td></td>
    </tr>
    <tr>
        <td>Stephen Walsh</td>
        <td>Developer</td>
        <td></td>
    </tr>
    <tr>
        <td>Prithviraj Chanel</td>
        <td>Developer</td>
        <td></td>
    </tr>
    <tr>
        <td>Jonathon McShane</td>
        <td>Developer</td>
        <td></td>
    </tr>
    </table>
    <p><br></br></p>
    </div>
    </div>
);
}

export default Sucden;
