"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2596],{9725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(4848),r=n(8453);const i={id:"build",sidebar_label:"Build",title:"Build and Test",slug:"/getting-started"},o=void 0,a={id:"getting-started/build",title:"Build and Test",description:"Clone from Sources",source:"@site/docs/getting-started/build.md",sourceDirName:"getting-started",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/getting-started/build.md",tags:[],version:"current",frontMatter:{id:"build",sidebar_label:"Build",title:"Build and Test",slug:"/getting-started"},sidebar:"garnetDocSidebar",previous:{title:"About Us",permalink:"/docs/welcome/about-us"},next:{title:"Configuration",permalink:"/docs/getting-started/configuration"}},l={},d=[{value:"Clone from Sources",id:"clone-from-sources",level:2},{value:"Build the Project",id:"build-the-project",level:2},{value:"Connect using a RESP Client",id:"connect-using-a-resp-client",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"clone-from-sources",children:"Clone from Sources"}),"\n",(0,s.jsx)(t.p,{children:"Clone the Garnet repo. Garnet is located on the main branch of that repo."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:microsoft/garnet.git\n"})}),"\n",(0,s.jsx)(t.h2,{id:"build-the-project",children:"Build the Project"}),"\n",(0,s.jsxs)(t.p,{children:["Make sure .NET 8 is installed, following instructions ",(0,s.jsx)(t.a,{href:"https://dotnet.microsoft.com/en-us/download",children:"here"}),". You can use either Linux or Windows; Garnet works equally well on both platforms."]}),"\n",(0,s.jsx)(t.p,{children:"Go to the root folder of the repo and build using dotnet, or open Garnet.sln and build using Visual Studio 2022 (we recommend the Preview version for the latest features). Make sure Visual Studio is up to date by checking for updates."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd garnet\ndotnet restore\ndotnet build -c Release\n"})}),"\n",(0,s.jsx)(t.h1,{id:"run-our-test-suite",children:"Run our Test Suite"}),"\n",(0,s.jsx)(t.p,{children:"As a sanity check, you can run our test suite. The command to run tests in Release mode for .NET 8 with verbose output to console is shown below (make sure you are in the root folder of the repo)."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'dotnet test -c Release -f net8.0 -l "console;verbosity=detailed"\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Tests that use Azure cloud storage are skipped, unless you set the environment variable ",(0,s.jsx)(t.code,{children:"RunAzureTests"})," to ",(0,s.jsx)(t.code,{children:"yes"})," and have Azurite running."]})}),"\n",(0,s.jsx)(t.h1,{id:"deploy-garnet-server",children:"Deploy Garnet Server"}),"\n",(0,s.jsx)(t.p,{children:"Now, you are ready to deploy the Garnet server. This is simple, run the below::"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd main/GarnetServer\ndotnet run -c Release --f net8.0\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"By default, Garnet listens to TCP port 3278, make sure to adjust your firewall settings when you need to access the server from remote machines."})}),"\n",(0,s.jsx)(t.p,{children:"To see the configurable options and their defaults, run the below command. You can configure index size, memory size, page size, data file paths and checkpoint paths, IP address to bind to, port number to run on, etc."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"dotnet run -c Release --f net8.0 -- --help\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"For running the server with an index size of 512MB (instead of the default), run this:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"dotnet run -c Release -f net8.0 -- -i 512m\n"})})]}),"\n",(0,s.jsx)(t.h2,{id:"connect-using-a-resp-client",children:"Connect using a RESP Client"}),"\n",(0,s.jsx)(t.p,{children:"Garnet uses the RESP protocol, so you can use any Redis client in your favorite client language to talk to the Garnet server. For C# applications, you can either use StackExchange.Redis or our own C# client, called GarnetClient."}),"\n",(0,s.jsxs)(t.p,{children:["On Windows, you can either install ",(0,s.jsx)(t.strong,{children:"redis-cli"})," on WSL (Linux), ",(0,s.jsx)("a",{href:"https://github.com/RedisInsight/RedisInsight",target:"_blank",children:"RedisInsight"})," which has a  graphical interface, or install\n",(0,s.jsx)("a",{href:"https://www.memurai.com/",target:"_blank",children:"Memurai"})," (which offers Redis on Windows) and use their ",(0,s.jsx)(t.strong,{children:"memurai-cli"})," command line tool."]}),"\n",(0,s.jsx)(t.p,{children:"With any of these clients, just make sure to use the correct port (e.g., 3278) when connecting to a Garnet server."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);