import React from "react";
import SageTraderImage from "../assets/SageTrader.jpg";
import "../styles/Project.css";
function SageTrader() {
return (
    <div className="about">
    <div
        className="aboutTop"
        style={{ backgroundImage: `url(${SageTraderImage})` }}
    ></div>
    <div className="aboutBottom">
        <h1>Sage Trader Onboarding</h1>
        <p>Sage Trader is a company based in New York that provides flexible clearing and execution platforms to customers.</p>
        <p>Version 1 manage their SageTrader software platform. Responsibilities include:</p>
        <p>•Incident Management</p>
        <p>•Small Change / Bug fix</p>
        <p>•Monitoring daily Jenkins tasks (as part of L1 daily checks) and ensuring any failures are re-ran</p>
        <p>•Monitoring the Break Report each day and fixing breaks</p>
        <b>Service Level Agreement (SLA’s)</b>
        <table>
            <tr>
                <th>Severity</th>
                <th>Time to Resolution</th>
            </tr>
            <tr>
                <td>1 - Blocker</td>
                <td>12 Hours</td>
            </tr>
            <tr>
                <td>2 - Critical</td>
                <td>24 Hours</td>
            </tr>
            <tr>
                <td>3 - Major</td>
                <td>72 Hours</td>
            </tr>
            <tr>
                <td>4 - Minor</td>
                <td>72 Hours</td>
            </tr>
        </table>
        <b>Environment Links</b>
        <table>
            <tr>
                <th>Host</th>
                <th>Connection</th>
                <th>Note</th>
            </tr>
            <tr>
                <td>Sage Trader GUI</td>
                <td>https://sagetrader.neueda.com/admin/index</td>
                <td>*See 1Password</td>
            </tr>
            <tr>
                <td>Sage Trader Jenkins GUI</td>
                <td>https://sagetrader.neueda.com:8080/</td>
                <td>*See 1Password</td>
            </tr>
            <tr>
                <td>Gitlab Repository</td>
                <td>https://gitlab.com/neueda/finlake.git</td>
                <td></td>
            </tr>
            <tr>
                <td>Main RDP</td>
                <td>10.0.20.160</td>
                <td>*See 1Password</td>
            </tr>
            <tr>
                <td></td>
                <td>10.0.20.140</td>
                <td>*See 1Password</td>
            </tr>
        </table>
        <b>Points of Contact</b>
        <p>These are the customer points of contact</p>
        <table>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email Address</th>
                <th>Telephone Number</th>
            </tr>
            <tr>
                <td>Ryan Stipanich</td>
                <td>Chief Executive Officer</td>
                <td>ryan.stipanich@sagetrader.com</td>
                <td>646-405-1309</td>
            </tr>
            <tr>
                <td>Mike Forsythe</td>
                <td>Chief Operating Officer</td>
                <td>mike.forsythe@sagetrader.com</td>
                <td>646-663-1084</td>
            </tr>
            </table>
        <h2>How to Connect to Sage Trader</h2>
        <p>Note: you must be connected to Lanyon VPN (or be on the Lanyon network) to access any of these environments</p>
        <b>Web Interfaces</b>
        <table>
            <tr>
                <th>Host</th>
                <th>Connection</th>
                <th>Note</th>
            </tr>
            <tr>
                <td>Sage Trader GUI</td>
                <td>https://sagetrader.neueda.com/admin/index</td>
                <td>*See 1Password for credentials</td>
            </tr>
            <tr>
                <td>Sage Trader Jenkins GUI</td>
                <td>https://sagetrader.neueda.com:8080/</td>
                <td>*See 1Password for credentials</td>
            </tr>
        </table>
        <b>Ingest/Build Resources</b>
        <table>
            <tr>
                <th>Host</th>
                <th>Connection</th>
                <th>Note</th>
            </tr>
            <tr>
                <td>Gitlab Repository</td>
                <td>https://gitlab.com/neueda/finlake.git</td>
                <td></td>
            </tr>
            <tr>
                <td>S3 Instance</td>
                <td>https://s3.console.aws.amazon.com/s3/buckets/neueda-finlake-sagetrader/?region=us-east-1&#38;tab=overview</td>
                <td>Files are ingested from here. Sign in with your normal AWS credentials</td>
            </tr>
            <tr>
                <td>Cap Jenkins GUI for Builds</td>
                <td>https://capm.neueda.com/view/Finlake/</td>
                <td>Need to be on the Version 1 VPN to access</td>
            </tr>
        </table>
        <b>Gitlab</b>
        <p>URL - https://gitlab.com/neueda/finlake.git</p>
        <p>1. Clone this repo to your wsl instance into your desired directory. 
            Created a Projects folder in home directory for this mkdir ~/Projects/ (if you don’t have git installed, run sudo apt-get install git and make sure your gitlab has a valid ssh key added for your machine / your git config has your email and git username).</p>
        <p>2. Cd into the repo folder you just cloned and run git branch to see which branch you are on.  If you are on master, you want to move to staging.
            Change branch to the staging directory (this is where you will make / commit any changes) by typing git checkout break-report-staging and pressing enter.</p>
        <p>3. Run git status to make sure you are on the right branch and look for unstaged files.</p>
        <b>SSH Access to EC2 instances via Jump Box:</b>
        <p>Contact Sage Trader team to obtain the three necessary pem files</p>
        <p><img src="/SageTraderDocs/ST1.png" alt="List of PEM files"/></p><br></br>
        <p>Move the pem files to wsl instance using cp /mnt/c/Users/Username/Downloads/file-name.pem ~/.ssh/ repeating this for each pem file.</p>
        <p>Change permissions and owners of each pem file to match user creds</p>
        <p>They should look like this </p>
        <p><img src="/SageTraderDocs/ST2.png" alt="Screenshot of pem files within ssh instance"/></p><br></br>
        <p>Create a config file in .ssh folder vim ~/.ssh/config  Once the file opens, press ‘i’ to activate ‘insert mode’ and copy the following into your config file</p>
        <code>Host finlake-jumpbox<br></br>   
            HostName       18.213.219.173   <br></br>  
            User           ec2-user   <br></br>  
            IdentityFile   ~/.ssh/capm-finlake-jumpbox.pem <br></br>    
            ForwardAgent   Yes  <br></br>  <br></br>  

            Host sagetrader-public   <br></br>  
            HostName      172.1.0.133   <br></br>  
            User          ec2-user   <br></br>  
            IdentityFile  ~/.ssh/capm-finlake-sagetrader-public-vpc.pem <br></br>    
            ProxyCommand  ssh finlake-jumpbox -W %h:%p  <br></br>  <br></br>  

            Host sagetrader-master   <br></br>  
            HostName      172.1.1.145   <br></br>  
            User          ec2-user   <br></br>  
            IdentityFile  ~/.ssh/capm-finlake-sagetrader-private-vpc.pem   <br></br>  
            ProxyCommand  ssh finlake-jumpbox -W %h:%p  <br></br>  <br></br>  

            Host sagetrader-emr-master   <br></br>  
            HostName      172.1.1.171   <br></br>  
            User          ec2-user   <br></br>  
            IdentityFile  ~/.ssh/capm-finlake-sagetrader-private-vpc.pem   <br></br>  
            ProxyCommand  ssh finlake-jumpbox -W %h:%p<br></br>  </code>  
        <p>To save, press Esc, then type :wq   </p>
        <p>Change the permissions and owner of the config file if required (it should look like the ‘config’ file in the above screenshot)</p>
        <p>sudo chmod 600 ~/.ssh/config </p>
        <p>sudo chown ubuntu:ubuntu ~/.ssh/config</p>
        <p>Restart your wsl shell.</p>
        <p>You should then be able to ssh into the public, master or emr master by typing ssh sagetrader-servername eg ssh sagetrader-public  **must be connected to Lanyon VPN** </p>
        <p>Note: consider adding these to your ~/.bash_aliases file for ease of use</p>
        <b>RDS Instance</b>
        <p>The RDS instance is the db where accounts are mapped.</p>
        <p>NB: You will need to have a connection to sagetrader-master or sagetrader-emr-cluster open in order to use this.  You can do this by running the below which will open up a connection.</p>
        <p>ssh -N -L 3306:capm-finlake-sagetrader-db.c5yunviajcgr.us-east-1.rds.amazonaws.com:3306 sagetrader-master</p>
        <p>Download MySQL Workbench Community Edition</p>
        <p>Add new MySQL Connection</p>
        <p>Connection Name: Sagetrader RDS<br></br> 
        Hostname: 127.0.0.1<br></br> 
        Port: 3306<br></br> 
        Username: admin<br></br> 
        Password: Store in Vault – Copy from 1Password (RDS finlake-sagetrader-db)<br></br> </p>
        <p>Test Connection</p>
        <b>Windows Instances (RDP)</b>
        <p>For this you need to install and configure Shrewsoft vpn https://www.shrew.net/download</p>
        <p>Download the sagetrader_vpn.pcf file from confluence https://neueda.atlassian.net/wiki/spaces/MSKX/pages/745308301/VPN+Configs and import into Shrewsoft vpn once installed.  Credentials in 1Password.</p>
        <p>Connect to the vpn using the credentials in 1Password.</p>
        <p>**make sure you are not connected to any other vpns when you connect, including Lanyon vpn**</p>
        <p>Open Windows Remote Desktop Protocol (RDP) and type the IP you are trying to connect to.  Connect using the credentials in the table below (via 1Password).</p>
        <p><img src="/SageTraderDocs/ST3.png" alt="Remote Desktop Connection"/></p><br></br>
        <table>
            <tr>
                <th>Host</th>
                <th>Connection</th>
                <th>Note</th>
            </tr>
            <tr>
                <td>Main RDP</td>
                <td>10.0.20.160</td>
                <td>See 1Password for credentials</td>
            </tr>
            <tr>
                <td>Backup RDP</td>
                <td>10.0.20.140</td>
                <td>See 1Password for credentials</td>
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
        <p></p>

    </div>
    </div>
);
}

export default SageTrader;