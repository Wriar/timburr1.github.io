import{r as e,o as t,c as o,a as i,b as n,w as a,F as s,d as r}from"./app.554c1b80.js";const l={},u=i("h1",{id:"adding-your-bot-to-servers",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#adding-your-bot-to-servers","aria-hidden":"true"},"#"),r(" Adding your bot to servers")],-1),d=r("After you "),c=r("set up a bot application"),p=r(", you'll notice that it's not in any servers yet. So how does that work?"),h=i("p",null,"Before you're able to see your bot in your own (or other) servers, you'll need to add it by creating and using a unique invite link using your bot application's client id.",-1),b=i("h2",{id:"bot-invite-links",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#bot-invite-links","aria-hidden":"true"},"#"),r(" Bot invite links")],-1),y=i("p",null,"The basic version of one such link looks like this:",-1),g=i("div",{class:"language-text ext-text"},[i("pre",{class:"language-text"},[i("code",null,"https://discord.com/api/oauth2/authorize?client_id=123456789012345678&permissions=0&scope=bot%20applications.commands\n")])],-1),m=i("p",null,"The structure of the URL is quite simple:",-1),v=i("ul",null,[i("li",null,[i("code",null,"https://discord.com/api/oauth2/authorize"),r(" is Discord's standard structure for authorizing an OAuth2 application (such as your bot application) for entry to a Discord server.")]),i("li",null,[i("code",null,"client_id=..."),r(" is to specify "),i("em",null,"which"),r(" application you want to authorize. You'll need to replace this part with your client's id to create a valid invite link.")]),i("li",null,[i("code",null,"permissions=..."),r(" describes what permissions your bot will have on the server you are adding it to.")]),i("li",null,[i("code",null,"scope=bot%20applications.commands"),r(" specifies that you want to add this application as a Discord bot, with the ability to create slash commands.")])],-1),f=i("div",{class:"custom-container warning"},[i("p",{class:"custom-container-title"},"WARNING"),i("p",null,'If you get an error message saying "Bot requires a code grant", head over to your application\'s settings and disable the "Require OAuth2 Code Grant" option. You shouldn\'t enable this option unless you know why you need to.')],-1),k=i("h2",{id:"creating-and-using-your-invite-link",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#creating-and-using-your-invite-link","aria-hidden":"true"},"#"),r(" Creating and using your invite link")],-1),w=r("To create an invite link, head back to the "),A={href:"https://discord.com/developers/applications/me",target:"_blank",rel:"noopener noreferrer"},x=r("My Apps"),z=r(' page under the "Applications" section, click on your bot application, and open the OAuth2 page.'),B=i("p",null,[r("At the bottom of the page, you'll find Discord's OAuth2 URL generator. Select the "),i("code",null,"bot"),r(" and "),i("code",null,"applications.commands"),r(" options. Once you select the "),i("code",null,"bot"),r(" option, a list of permissions will appear, allowing you to configure the permissions your bot needs.")],-1),D=i("p",null,'Grab the link via the "Copy" button and enter it in your browser. You should see something like this (with your bot\'s username and avatar):',-1),O=i("p",null,[i("img",{src:"/assets/bot-auth-page.e624796f.png",alt:"Bot Authorization page"})],-1),C=i("p",null,'Choose the server you want to add it to and click "Authorize". Do note that you\'ll need the "Manage Server" permission on a server to add your bot there. This should then present you a nice confirmation message:',-1),R=i("p",null,[i("img",{src:"/assets/bot-authorized.a4595dbe.png",alt:"Bot authorized"})],-1),q=i("p",null,"Congratulations! You've successfully added your bot to your Discord server. It should show up in your server's member list somewhat like this:",-1),L=i("p",null,[i("img",{src:"/assets/bot-in-memberlist.3db1aa9b.png",alt:"Bot in server's member list"})],-1);l.render=function(r,l){const T=e("RouterLink"),Y=e("OutboundLink");return t(),o(s,null,[u,i("p",null,[d,n(T,{to:"/preparations/setting-up-a-bot-application.html"},{default:a((()=>[c])),_:1}),p]),h,b,y,g,m,v,f,k,i("p",null,[w,i("a",A,[x,n(Y)]),z]),B,D,O,C,R,q,L],64)};export{l as default};