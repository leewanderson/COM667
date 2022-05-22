import React from "react";
import SmartMeteringImage from "../assets/Energia.png";
import "../styles/Project.css";
function SmartMetering() {
return (
    <div className="about">
    <div
        className="aboutTop"
        style={{ backgroundImage: `url(${SmartMeteringImage})` }}
    ></div>
    <div className="aboutBottom">
        <h1>Smart Metering</h1>
        <h2>Service Hours</h2>
        <p>08:00am to 20:00pm Monday to Friday excluding NI and ROI public holidays</p>
        <p>An out of hours service is available for critical incident resolution. For the avoidance of doubt,
        the out of hours service shall be within the hours of 20:00pm and 08:00am Monday to Sunday including
        Northern Ireland and Republic of Ireland Bank Holidays. Time spent by the Supplier outside the Service Hours
        shall not be included in the calculation of Service Points and Service Credits.</p>
        <h2>Business Objective</h2>
        <p>Energia is a major energy provider in the north of Ireland. The smart meter project is a market wide initiative to enable households to send meter readings every 30 minutes to avail of more granular tariffs,
        e.g. cheaper electricity over night. </p>
        <p>The process starts with the ingestion of two market messages. The first MM343 records are the half-hourly consumption usage, which is used for smart metering.
        The second MM345, are EOD (end of the day) records, a meter reading that is used for reconciling the half-hourly consumption.</p>
        <p>The files then go through the processing suite and validation checks, to support billing and identify problems.</p>
        <p>A number of API’s are then provided for use by CC&#38;B, Energia’s billing system, allowing them to call our system and access aggregated data for all the usage readings.</p>
        <p>Qlik is integrated as a reporting tool and is also supported by the Version 1 Managed Service team.</p>
        <h2>Service Architecture</h2>
        <h3>High-Level Architecture Diagram</h3>
        <p><img src="/SmartMeteringDocs/SM1.png" alt="High-Level Architecture Diagram"/></p><br></br>
        <h2>Components</h2>
        <table>
            <tr>
                <th>Component</th>
                <th>Description</th>
                <th></th>
            </tr>
            <tr>
                <td>CC&#38;B</td>
                <td>Oracle Billing System managed and used by Energia &#38; Capita</td>
                <td></td>
            </tr>
            <tr>
                <td>Data Factory</td>
                <td>Azure processing module </td>
                <td></td>
            </tr>
            <tr>
                <td>APIM</td>
                <td>Azure manager of API connections and calls. Provides insights and throttling ability.
                    Azure API Management (APIM) acts as a 'gateway' between the various consumers and the core functionality (provided by the APIs) of the platform.
                    Among other benefits, API Management provides the APIs with security verification, usage telemetry, rate limitation, etc.</td>
                <td><img src="/SmartMeteringDocs/SM2.png" alt="APIM Layout"/></td>
            </tr>
            <tr>
                <td>Azure Active Directory</td>
                <td>AD in the Azure Cloud. Contain support personnel users. Synced with AD (for Energia users).</td>
                <td></td>
            </tr>
            <tr>
                <td>Support Monitoring</td>
                <td>Application Insights, Azure Monitor, Azure Alerts and Azure Dashboard shall be used to monitor the platform in production.
                    Application Insights can be used to monitor requests, response time, failures, etc., which can then be displayed in the Azure Dashboard.</td>
                <td></td>
            </tr>
            <tr>
                <td>QlikView</td>
                <td>QlikView integration – one each for Commercial and Domestic will be enabled to access the SQL Managed instance allowing for the building of more complex visual reports. </td>
                <td><img src="/SmartMeteringDocs/SM3.png" alt="QlikView Breakdown"/></td>
            </tr>
            <tr>
                <td>Data Lake Key Vault</td>
                <td>All secrets, such as database connection strings and keys, are securely stored in Azure Key Vault. This prevents accidental 'leakage' of sensitive values and the same keys can be easily shared by multiple services.</td>
                <td></td>
            </tr>
            <tr>
                <td>HVR Replication</td>
                <td>A SQL Managed instance is used to store relevant CC&#38;B data required for the aggregation calculations to be completed by the SMTE. This is copied to the system using HVR replication.</td>
                <td><img src="/SmartMeteringDocs/SM4.png" alt="HVR Breakdown"/></td>
            </tr>
            <tr>
                <td>Message ingestion</td>
                <td>This section details the components required to land market messages into ODP.</td>
                <td><img src="/SmartMeteringDocs/SM5.png" alt="Message Ingestion Breakdown"/><img src="/SmartMeteringDocs/SM6.png" alt="Message Ingestion Components Information"/></td>
            </tr>
            <tr>
                <td>Portals</td>
                <td>All users shall use the same client applications in production. This includes both business users and Smart Metering support staff. The client app will be provided as a Web App.</td>
                <td><img src="/SmartMeteringDocs/SM6.png" alt="Portals Breakdown"/></td>
            </tr>
        </table>
        <h3>Environments</h3>
        <p>The current Energia Group One Digital Platform (ODP) consists of 4 scaffolded environments:</p>
        <p>Development - Used by Energia Groups and third-party development houses to develop line of business solutions.</p>
        <p>UAT - Functional, non-functional and user acceptance testing environment.</p>
        <p>Pre-Production - Staging environment for final product testing and production like performance testing.</p>
        <p>Production - Full production environment.</p>
        <h3>Permissions</h3>
        <p>Version 1 Managed Service will have the following permissions within ODP for each environment as defined in the governance and security principles document:</p>
        <table>
            <tr>
                <th>Development</th>
                <th>UAT</th>
                <th>Pre-Production</th>
                <th>Production</th>
            </tr>
            <tr>
                <td>Owner / Contributor</td>
                <td>Owner / Contributor</td>
                <td>Reader / Contributor (via change control approval)</td>
                <td>Reader / Elevated privileges in exceptional circumstances (via change control approval)</td>
            </tr>
        </table>
        <h2>Points of Contact</h2>
        <table>
            <tr>
                <th>Case</th>
                <th>Contact</th>
                <th>Note</th>
            </tr>
            <tr>
                <td>Access requests</td>
                <td>Heather.Morton@energiagroup.com<br></br><br></br>
                conor.kealey@energiagroup.com 07825 380414</td>
                <td></td>
            </tr>
            <tr>
                <td>Azure Infrastructure Support</td>
                <td>RegionalServiceDesk@Capita.com</td>
                <td>For support needs involving, Data Factory, Data Lake, APIM</td>
            </tr>
            <tr>
                <td>Azure Bugs &#38; Issues</td>
                <td>Raise a ticket by email: eserviceshelp@trustmarque.com<br></br><br></br>
                Track your tickets online at https://support.trustmarque.com</td>
                <td>The email should contain the project name within Energia group, the tenantId:  50908038-218c-44e8-a019-0a66fbe9abcf </td>
            </tr>
            <tr>
                <td>Major Incident Communications</td>
                <td>RegionalServiceDesk@Capita.com</td>
                <td>Capita Service Desk</td>
            </tr>
            <tr>
                <td>Service Delivery Reports</td>
                <td>Heather.Morton@energiagroup.com</td>
                <td></td>
            </tr>
            </table>
        <br></br><br></br>
        <h2>How to Complete SMTE Daily Checks</h2>
        <p>L1 must complete daily checks on the Smart Metering Portal and provide a summary of the data to stephen.keane@energiagroup.com, SMTEApplicationSupport@neueda.com and simon.markey@neueda.com before 9 am each morning.</p>
        <p>Mondays: Send reports for last Friday, Saturday and Sunday.</p>
        <p>Summary Email to stephen.keane@energiagroup.com, and simon.markey@version1.com </p>
        <p>Hi Stephen, please see the stats for the Smart Service below;</p>
        <p>Number of SMTE Alerts:<br></br>
        Sev 0 (P1): 0<br></br>
        Sev 1 (P2): 0<br></br>
        Sev 2 (P3): 0<br></br>
        Sev 3 (P4): 0<br></br>
        Number of MPRNs: 0<br></br></p>
        <p>Number of 107 Type Actions and related MPRNS.</p>
        <p>Summary email to SMTEApplicationSupport@neueda.com and simon.markey@neueda.com pre - 9am &#38; 4pm</p>
        <p>SMTE Daily Check results below<br></br>
        Number of SMTE Alerts:<br></br>
        Sev 0 (P1): 0<br></br>
        Sev 1 (P2): 0<br></br>
        Sev 2 (P3): 0<br></br>
        Sev 3 (P4): 0<br></br>
        Number of MPRNs: 0<br></br>
        TIBCO Connectivity: OK / Error (Section 6)<br></br></p>
        <p>Smart Metering - Monitor Dashboard:</p>
        <p>•MM343 and MM345 Files Received: (Section 5)</p>
        <p>•Number of Files by Folder (Section 7)</p>
        <p>•Average MM343 Ingestion &#38; Data Checking Timings (Section 8)</p>
        <p>Function Apps Running Successfully: OK / Error (Section 10)</p>
        <p>Planned Maintenance/Service Health check (Section 11)</p>
        <p>The number of 107 Type Actions and related MPRNS. (Section 12)</p>
        <h3>Instructions</h3>
        <b>1. Number of Azure Alerts Raised</b>
        <p>Verify the number of Azure Alerts raised by the portal in the past 24 hours by visiting: Azure Portal &#62; Alerts &#62; Select Prod Subscription and taking note of which alerts have been raised in the last 24 hours and the number of each.</p>
        <p>Only include Smart Engine alerts that occur in the error catalogue. Do not include any for Gasmap at this time.</p>
        <p><img src="/SmartMeteringDocs/SM7.png" alt="Screenshot from Azure Monitoring"/></p>
        <p><img src="/SmartMeteringDocs/SM8.png" alt="Screenshot from Azure Monitoring"/></p>
        <b>2. No of MPRNs</b>
        <p>From the Energia Production Jumpbox (Either 172.31.49.197 or 172.31.49.198)</p>
        <p>Go to Windows Menu &#62; SQL Server Management Studio</p>
        <p>Make sure you are connected to the right Server name, and you are using ManagedServiceUser login:</p>
        <p><img src="/SmartMeteringDocs/SM9.png" alt="Connect to Server Login"/></p>
        <p>File &#62; New &#62; Query with current connection (Ctrl + N) and execute the following code:</p>
        <p>SELECT TOP (1000) [ID]
        ,[ReadingUtcEpoch]
        ,[MPRN]
        ,[RRVersion]
        ,[IsLatest]
        ,[MarketMessageFileID]
        ,[IsActual]
        ,[SerialNumber]
        ,[MeterCategoryCode]
        ,[RecipientID]
        ,[AlertFlag]
        ,[CheckedUtcDateTime]
        ,[TotalReading]
        FROM [SmartMetering].[dbo].[MM343Header]
        where ReadingUtcEpoch= &#60;enter the epoch of yesterday 00&#58;00 - see steps below &#62;* </p>
        <p>*Get your number from https://www.epochconverter.com/ using the day before at 00:00 (or 23:00 depending on British Summer Time check the red box illustrated below), or 1 day and 1 hour during BST. Example during BST:</p>
        <p><img src="/SmartMeteringDocs/SM10png" alt="Screenshot from Epoch Converter website"/></p>
        <b>3. Number of Actions</b>
        <p>In the Production Maintenance Portal, look at the stats for the current day and make a note of the number of Actions. Ignore action types 1, 100 and 107.</p>
        <p><img src="/SmartMeteringDocs/SM11.png" alt="Table containing Volume of Actions over last 7 days"/></p>
        <b>4. Failed Action Attempts</b>
        <p>Review any failed action attempts from the previous 24 hour period.</p>
        <p>Beyond Trust VIR-CUS-RDS-01 jumpbox &#62; RDP 172.31.49.197 (Prod) &#62; Maintenance Portal &#62; Action Errors</p>
        <p><img src="/SmartMeteringDocs/SM12.png" alt="Screenshot of the jumpbox"/></p>
        <b>MM343 and MM345 Files Received</b>
        <p>Verify that the number of 343 and 345 files received in the last 24 hours is comprobable to yesterday and the same day last week. To note – if we don’t show any MM343 files received this may indicate a problem with TIBCO, or the ingestion jobs.</p>
        <p>Make sure you take 2 different screenshots, one with Today numbers and the other with Yesterday numbers.</p>
        <p><img src="/SmartMeteringDocs/SM13.png" alt="Stats for MM343 and MM345 Files"/></p>
        <p></p>
        <p><img src="/SmartMeteringDocs/SM14.png" alt="Azure Data Factory Pipeline"/></p>
        <b>6. The option to test the connection to TIBCO is in Azure Data Factory pipelines:</b>
        <p>Azure &#62; Data Factories &#62; Prod Subscription &#62; dfac-eun-h1s04 &#62; Overview &#62; Author &#38; Monitor:</p>
        <p><img src="/SmartMeteringDocs/SM15.png" alt="Azure Data Factory Screenshot"/></p>
        <p>Author &#62; Datasets &#62; TIBCO_Energia_Files &#62; Test Connection:</p>
        <p><img src="/SmartMeteringDocs/SM16.png" alt="Azure Data Factory Resources Test Connection"/></p>
        <p><img src="/SmartMeteringDocs/SM17.png" alt="Azure Data Factory Resources Connection Successful"/></p>
        <b>7. Number of Files by Folder</b>
        <p>Review the number of files processed, recovered, and new. If any files sit in the invalid folder &#60; insert handling steps &#62;. If the processed folder and new folders are empty it suggests a problem with TIBCO or the ingestion jobs. If the processed folder is empty but the new folder has lots of files it suggests a problem with the processing jobs.</p>
        <p><img src="/SmartMeteringDocs/SM18.png" alt="Energia Smart Metering Monitor Dashboard"/></p>
        <p>Go back to point 3.1 to test the connection to TIBCO if necessary.</p>
        <b>8. Average MM343 ingestion &#38; Data Checking Timings</b>
        <p>Review the average ingestion and data checking times. These should be around:</p>
        <p>• 6 seconds per 343 file</p>
        <p>• 5 seconds for 345 files</p>
        <p>• With 1000 MPRNS - Around 6 seconds per 343 file; Around 5 seconds - 345 files</p>
        <p><img src="/SmartMeteringDocs/SM19.png" alt="Energia Smart Metering Maintenance Portal"/></p>
        <p>*If you get the error below it’s just a matter of refreshing the dashboard until it works. They are working on fixing this issue.</p>
        <p><img src="/SmartMeteringDocs/SM20.png" alt="Average MM343 Failure warning"/></p>
        <b>9. Number of Errors by Action Type</b>
        <p>Review the errors per action type with the service manager, looking at whether actions need to be rerun or if there are indications of a larger issue.</p>
        <b>10. Check Function Apps are running Successfully</b>
        <p>Azure portal &#62; App Services &#62; (Prod subscription) (Select one of the following Function Apps, all 3 need to be checked):</p>
        <p>smartmetering-housekeeping-fa &#62; Functions</p>
        <p>smartmetering-preprocessors-fa &#62; Functions</p>
        <p>smartmetering-reprocessors-fa &#62; Functions</p>
        <b>11. Planned Maintenance/Service Health check</b>
        <p>This Check should be done in the morning. Navigate to the Azure home page then search for Service Health</p>
        <p><img src="/SmartMeteringDocs/SM21.png" alt="Azure Service Health"/></p>
        <p>On this page select the production subscription and check the Service Health and Planned Maintenance tabs on the left.</p>
        <p><img src="/SmartMeteringDocs/SM22.png" alt="Azure Service Health Planned Maintenance"/></p>
        <b>12. No. of 107 Type Actions and related MPRNs</b>
        <p>Refer to section 3 for the number of 107 actions. In order to find the related MPRNs</p>
        <p>From the Energia Production Jumpbox (Either 172.31.49.197 or 172.31.49.198)</p>
        <p>• Go to Windows Menu &#62; SQL Server Management Studio</p>
        <p>• Make sure you are connected to the right Server name (SQL Managed instance), and you are using ManagedServiceUser login:</p>
        <p><img src="/SmartMeteringDocs/SM23.png" alt="SQL Server Log In"/></p>
        <p>• File &#62; New &#62; Query with current connection (Ctrl + N) and execute the following code:</p>
        <p>select distinct MPRN,<br></br>
        [CreatedUtcDateTime]<br></br>
        FROM [SmartMetering].[dbo].[Action]<br></br>
        where ActionTypeID= 107<br></br>
        and CreatedUtcDateTime &#62; 'The day of the reports Date'<br></br>
        order by CreatedUtcDateTime<br></br></p>
        <p><img src="/SmartMeteringDocs/SM24.png" alt="SQL Statement"/></p>
        <p>For weekends:</p>
        <p><img src="/SmartMeteringDocs/SM25.png" alt="SQL Statement for weekends"/></p>
        <h2>SMTE Alerts</h2>
        <p>There are 3 types of alerts, that have been set up to generate from the application platform in the case of an error. These are Data factory alerts, Metric Alerts, and Function app alerts (Custom exception mapping).
        The following section will list the alerts and describe the corresponding error and any action that should be taken.</p>
        <h3>Data Factory Alerts</h3>
        <p>Data factory will email an alert informing that a Pipeline has failed. However these errors should self-heal, and we will get another alert informing us that the error has been fixed.
        In the case that the error doesn't self-heal within a certain amount of time, there is something wrong with Data factory. Data factory is a PaaS (Platform as a service), so we should contact Capita notifying them of the difficulties and raise a ticket with Microsoft, as it is a service provided by Microsoft.</p>
        <table>
            <tr>
                <th></th>
                <th>Sev.</th>
                <th>Alert Name</th>
                <th>Description</th>
                <th>Action Required</th>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>SM_df_MM343 FileIngestionAlert</td>
                <td>The MM343FileIngestion Pipeline has Failed to run. This will impact new MM343 files being received until it runs again successfully. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>SM_df_MM345File IngestionAlert</td>
                <td>The MM345FileIngestion Pipeline has Failed to run. This will impact new MM345 files being received until it runs again successfully. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>3</td>
                <td>2</td>
                <td>SM_df_spMonitorMM343 BillingPeriodGapsAlert</td>
                <td>The Pipeline has failed to run. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>4</td>
                <td>2</td>
                <td>SM_df_spMonitorMM343 FindMissingMessageAlert </td>
                <td>The Pipeline has failed to run. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>5</td>
                <td>2</td>
                <td>SM_df_spProcessMM343 MissingMessageSearchAlert</td>
                <td>The Pipeline has failed to run. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>6</td>
                <td>2</td>
                <td>SM_df_spProcessMM343 PendingReconAlert</td>
                <td>The Pipeline has failed to run. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>7</td>
                <td>2</td>
                <td>SM_df_spProcessMM343 ReplacementAlert</td>
                <td>The Pipeline has failed to run. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>8</td>
                <td>2</td>
                <td>SM_df_TIBCO IngestionAlert</td>
                <td>The TIBCOIngestion Pipeline has Failed to run. This will impact new TIBCO files being copied to our Datalake until it runs again successfully. This does not impact billing. The pipeline runs every 15 minutes</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts. 
                    Then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun9the pipeline. Navigate to adf.azure.com &#62; Monitor &#62; Pipeline runs</td>
            </tr>
            <tr>
                <td>9</td>
                <td>3</td>
                <td>SM_df_spArchive ActionsAlert</td>
                <td>The Pipeline has failed to run. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>10</td>
                <td>2</td>
                <td>SM_df_spDBMaintenance ODPAlert</td>
                <td>The Pipeline has failed to run. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>11</td>
                <td>2</td>
                <td>SM_df_spDBMaintenance SMAlert</td>
                <td>The Pipeline has failed to run. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>12</td>
                <td>3</td>
                <td>SM_df_spRemoveUnused DataAlert</td>
                <td>The Pipeline has failed to run. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>13</td>
                <td>2</td>
                <td>SM_df_spUpdateToU LatestAlert</td>
                <td>The Pipeline has failed to run. This does not impact billing.</td>
                <td>This alert is self healing on the Azure platform - no resolution action should be needed. To validate the issue has been resolved - Check in to see if Azure has resolved the alert in Azure Monitor &#62; Alerts, then check the pipeline has run again successfully in DataFactory &#62; Monitor &#62; Pipeline runs here if required you can manually rerun the pipeline</td>
            </tr>
            <tr>
                <td>14</td>
                <td>2</td>
                <td>DF_IR_CPU_Alert</td>
                <td>IntegrationRuntimeCpuPercentage &#62; 70</td>
                <td>This alert is self healing on the Azure platform - no resolution should be needed</td>
            </tr>
        </table>
        <h3>Metric Alerts</h3>
        <p>APIM is also a self-healing Azure component, therefore, should alerts fail to self-heal we should contact Capita notifying them and raise a ticket with Microsoft, as it is a service provided by Microsoft.</p>
        <table>
            <tr>
                <th></th>
                <th>Sev.</th>
                <th>Resource</th>
                <th>Alert Name</th>
                <th>Description</th>
                <th>Action Required</th>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>APIM</td>
                <td>SM_API_Data AggregateAlert</td>
                <td>Maximum call duration &#62; 1 sec</td>
                <td>This alert is self-healing on the Azure platform - no resolution should be needed.
                Where the maximum call duration is &#62; 1 second;
                Confirm platform performance (detail what this means and where we verify)
                Continue to monitor for X time.
                If call duration does not reduce; 
                review whether this was a slow build due to increased data load, or a sudden change. 
                Look into remediative steps based on step 3.a</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>APIM</td>
                <td>SM_API_Bill AggregateAlert</td>
                <td>Maximum call duration &#62; 1 sec</td>
                <td>This alert is self healing on the Azure platform - no resolution should be needed
                Where the maximum call duration is &#62; 1 second;
                Confirm platform performance (detail what this means and where we verify)
                Continue to monitor for X time.
                If call duration does not reduce; 
                review whether this was a slow build due to increased data load, or a sudden change. 
                Look into remediative steps based on step 3.a
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>2</td>
                <td>SQL MI</td>
                <td>SM_SQLMI_ CPUAlert</td>
                <td>Avg CPU &#62; 70%</td>
                <td>This alert is self-healing on the Azure platform - no resolution should be needed
                Confirm CPU usage for past 24 hours
                Investigate contributing factors
                If required raise a request to Capita to increase CPU availability
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>2</td>
                <td>SQL MI</td>
                <td>SM_SQLMI_ DiskAlert</td>
                <td>Storage &#62; 90%</td>
                <td>If exceeding capacity - SQL MI will need to be size-increased - Capita should be contacted for this.
                Confirm CPU usage for past 24 hours
                Investigate contributing factors
                If required raise a request to Capita to increase Disk Sizing
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>2</td>
                <td>Integration Runtime 01</td>
                <td>SM_VM_IR1_ CPUAlert</td>
                <td>Max CPU &#62; 70%</td>
                <td>This alert is self-healing on the Azure platform - no resolution should be needed
                Confirm CPU usage for past 24 hours
                Investigate contributing factors
                If required raise a request to Capita to increase CPU availability
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>2</td>
                <td>Integration Runtime 02</td>
                <td>SM_VM_IR2_ CPUAlert</td>
                <td>Max CPU &#62; 70%</td>
                <td>Alerts - SM_VM_IR2_CPUAlert</td>
            </tr>
            <tr>
                <td>7</td>
                <td></td>
                <td>App Service Plan</td>
                <td>SM_ASP_ CPUAlert</td>
                <td>Avg CPU &#62; 70%</td>
                <td>This alert is self-healing on the Azure platform - no resolution should be needed
                Confirm CPU usage for past 24 hours
                Investigate contributing factors
                If required raise a request to Capita to increase CPU availability
                </td>
            </tr>
            </table>
            <h3>Function App Alerts</h3>
        <p>Function app alerts (Custom exception mapping): These alerts require further action to be taken in order to gather information on the root cause of the error. Peter Wightman should be contacted should any code fixes be required.</p>
        <table>
            <tr>
                <th></th>
                <th>Sev.</th>
                <th>Custom Exception Name</th>
                <th>Description</th>
                <th>Probable Issue Origin</th>
                <th>Probable Issue </th>
                <th>Action Required</th>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>CCnBRaiseAction Exception</td>
                <td>Unable to raise all CC&#38;B Actions. Gives the total number of Actions to be raised and the total of the failed Actions</td>
                <td>CCnB</td>
                <td>CCnB Issue</td>
                <td>Investigate using Azure App Insights to understand nature of issue</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>CustomerType Exception</td>
                <td>Customer Type Not Found in the Database i.e. recipientID in file is not recognised</td>
                <td>Market Message File</td>
                <td>Customer Type from Market Message File not found in the Database</td>
                <td>Confirm if recipientID field on Market Message File is a new value or a mistake</td>
            </tr>
            <tr>
                <td>3</td>
                <td>1</td>
                <td>DatabaseCredentials InvalidException</td>
                <td>Invalid Database Credentials used</td>
                <td>Database</td>
                <td>Database Credentials Invalid, database username and or password</td>
                <td>Alerts - SM_Database Credentials Invalid ExceptionAlert</td>
            </tr>
            <tr>
                <td>4</td>
                <td>2</td>
                <td>DataLakeUtilities Exception</td>
                <td>Any Exception thrown by Data Lake Utilities, file not found etc. This will cover both a problem connecting to Data Lake and a problem copying files etc. The message field will be specific to what the problem is</td>
                <td>Data Lake</td>
                <td>General Catch All</td>
                <td>Investigate in App Insights to understand nature of issue. Message will make it clear what area within data lake is experiencing the issue. Go from there.</td>
            </tr>
            <tr>
                <td>5</td>
                <td>3</td>
                <td>FileFailureReprocessor RepoException</td>
                <td>This exception is thrown by the file re-processor, when retrieving a Market Message File object from the database using a filename as a search parameter. All unknown exceptions caught in the general catch all block are transformed into this exception.</td>
                <td>Market Message File</td>
                <td>Market Message File ID of Filename not found</td>
                <td>As this is a catch-all impossible to say beforehand - read error and investigate</td>
            </tr>
            <tr>
                <td>6</td>
                <td>3</td>
                <td>FileFailureReprocessor ServiceException</td>
                <td>This exception is thrown by the file re-processor, when calculating a Market Message File context. All unknown exceptions caught in the general catch all block are transformed into this exception.</td>
                <td>Market Message File</td>
                <td>Market Message File Context not Found</td>
                <td>Review the file detailed in the error and compare to marketMessageFile table entry to figure out why context can't get set</td>
            </tr>
            <tr>
                <td>7</td>
                <td>3</td>
                <td>FunctionAppIngestion Exception</td>
                <td>This error will be thrown if the Ingestion Processor is down when called by the Reprocessors and will also be thrown if the returned status is not 200.</td>
                <td>Ingestion FA's</td>
                <td>Message Reprocessor failed to call Message Ingestion</td>
                <td>Investigate in portal to see If function app has stopped and restart it. Check in Azure Portal to see if the Ingestion function app/s are running and hasn't stopped and check environment variables are all as expected</td>
            </tr>
            <tr>
                <td>8</td>
                <td>1</td>
                <td>FunctionAppSettings Exception</td>
                <td>This exception is thrown by the file ingestion processor, when writing a row to the MM343Header, MM343, MM345Header and MM345 tables in the database. All unknown exceptions caught in the general catch all block are transformed into this exception.</td>
                <td>Settings FA</td>
                <td>Issue with Settings Function App</td>
                <td>Alerts - SM_Function AppSettings ExceptionAlert</td>
            </tr>
            <tr>
                <td>9</td>
                <td>2</td>
                <td>HeaderIntervalInsert Exception</td>
                <td>Thrown if unable to get the IngestionApp endpoint from the settings function app</td>
                <td>Market Message File</td>
                <td>Duplicate MM34X Header and MM34X consumption data ingested</td>
                <td>Catch all exception do just need to investigate. Duplicate consumption data ingested, confirm MarketMessageFile MPRN, ReadDate and version already exists in the database</td>
            </tr>
            <tr>
                <td>10</td>
                <td>3</td>
                <td>HttpHeaderArgument Exception</td>
                <td>Invalid Message Ingestion Header Parameters
                File header parameter not found
                File header parameter Extension not .xml
                File FilePath header parameter not found
                File Context header parameter not found
                File Context header parameter not 1, 2, 3, 4 or 5
                Not Found means its not part of the passed header parameters.</td>
                <td>Market Message File</td>
                <td>Malformed header in API call</td>
                <td>Based on description investigate and look for others</td>
            </tr>
            <tr>
                <td>11</td>
                <td>3</td>
                <td>IngestionUpdate ViolationException</td>
                <td>EF Core Exception, catching SQL Error Numbers;
                2627 (violation of primary key constraint),
                547 (statement conflicted with constraint),
                2601 (duplicate index values into a column or columns with a unique index)</td>
                <td>Market Message File</td>
                <td>SqlException for SQL Error Numbers 547, 2601 and 2627</td>
                <td>Likely a file has been wrongly re-submitted after having been loaded. Duplicate consumption data ingested, investigate SQL Error number</td>
            </tr>
            <tr>
                <td>12</td>
                <td>2</td>
                <td>MarketMessage InsertException</td>
                <td>This exception is thrown by the file ingestion processor, when writing a row to the MarketMessageFile table in the database. All unknown exceptions caught in the general catch all block are transformed into this exception.</td>
                <td>Market Message File</td>
                <td>Duplicate Market Message ingested or MarketMessageFileID of Filename not found</td>
                <td>Catch all exception do just need to investigate. Duplicate consumption data ingested, confirm MarketMessageFile property "TxRefNbr" already exists in the database</td>
            </tr>
            <tr>
                <td>13</td>
                <td>1</td>
                <td>MissingDataTable ColumnException</td>
                <td>Missing Data Column Creating API Json Response. SP doesn't respond as expected, column names missing in result set</td>
                <td>Database</td>
                <td>DataTable returned from Stored Procedure has missing column/s</td>
                <td>Alerts - SM_Missing DataTable ColumnException Alert</td>
            </tr>
            </table>
    </div>
    </div>
);
}

export default SmartMetering;