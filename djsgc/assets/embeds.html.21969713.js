import{r as n,o as s,c as a,b as e,w as t,a as p,F as o,d as c,f as l}from"./app.554c1b80.js";const i={},u=p("h1",{id:"embeds",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#embeds","aria-hidden":"true"},"#"),c(" Embeds")],-1),r=p("p",null,"If you have been around on Discord for a bit, chances are you have seen these special messages, often sent by bots. They can have a colored border, embedded images, text fields, and other fancy properties.",-1),d=p("p",null,"In the following section, we will explain how to compose an embed, send it, and what you need to be aware of while doing so.",-1),k=p("h2",{id:"embed-preview",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#embed-preview","aria-hidden":"true"},"#"),c(" Embed preview")],-1),m=p("p",null,"Here is an example of how an embed may look. We will go over embed construction in the next part of this guide.",-1),b=c(" Some description here "),h=c(" Some value here "),g=c(" ​ "),f=c(" Some value here "),v=c(" Some value here "),w=c(" Some value here "),y=p("span",null,"Some footer text here",-1),x=p("h2",{id:"using-the-embed-constructor",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#using-the-embed-constructor","aria-hidden":"true"},"#"),c(" Using the embed constructor")],-1),j=c("discord.js features the "),E=c(" utility class for easy construction and manipulation of embeds."),S=l('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// at the top of your file</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> MessageEmbed <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;discord.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// inside a command, event listener, etc.</span>\n<span class="token keyword">const</span> exampleEmbed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageEmbed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span><span class="token string">&#39;#0099ff&#39;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;Some title&#39;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setURL</span><span class="token punctuation">(</span><span class="token string">&#39;https://discord.js.org/&#39;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span><span class="token string">&#39;Some name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://i.imgur.com/AfFp7pu.png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://discord.js.org&#39;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">&#39;Some description here&#39;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setThumbnail</span><span class="token punctuation">(</span><span class="token string">&#39;https://i.imgur.com/AfFp7pu.png&#39;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">addFields</span><span class="token punctuation">(</span>\n\t\t<span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Regular field title&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&#39;Some value here&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;\\u200B&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&#39;\\u200B&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Inline field title&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&#39;Some value here&#39;</span><span class="token punctuation">,</span> inline<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Inline field title&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&#39;Some value here&#39;</span><span class="token punctuation">,</span> inline<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">addField</span><span class="token punctuation">(</span><span class="token string">&#39;Inline field title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Some value here&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setImage</span><span class="token punctuation">(</span><span class="token string">&#39;https://i.imgur.com/AfFp7pu.png&#39;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setFooter</span><span class="token punctuation">(</span><span class="token string">&#39;Some footer text here&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://i.imgur.com/AfFp7pu.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nchannel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> embeds<span class="token operator">:</span> <span class="token punctuation">[</span>exampleEmbed<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You don&#39;t need to include all the elements showcased above. If you want a simpler embed, leave some out.</p></div>',2),I=c("The "),T=p("code",null,".setColor()",-1),A=c(" method accepts a "),M=c(", e.g. an integer, HEX color string, an array of RGB values or specific color strings."),F=l('<p>To add a blank field to the embed, you can use <code>.addField(&#39;\\u200b&#39;, &#39;\\u200b&#39;)</code>.</p><p>The above example chains the manipulating methods to the newly created MessageEmbed object. If you want to modify the embed based on conditions, you will need to reference it as the constant <code>exampleEmbed</code> (for our example).</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> exampleEmbed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageEmbed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;Some title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>author<span class="token punctuation">.</span>bot<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\texampleEmbed<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span><span class="token string">&#39;#7289da&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="using-an-embed-object" tabindex="-1"><a class="header-anchor" href="#using-an-embed-object" aria-hidden="true">#</a> Using an embed object</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> exampleEmbed <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tcolor<span class="token operator">:</span> <span class="token number">0x0099ff</span><span class="token punctuation">,</span>\n\ttitle<span class="token operator">:</span> <span class="token string">&#39;Some title&#39;</span><span class="token punctuation">,</span>\n\turl<span class="token operator">:</span> <span class="token string">&#39;https://discord.js.org&#39;</span><span class="token punctuation">,</span>\n\tauthor<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tname<span class="token operator">:</span> <span class="token string">&#39;Some name&#39;</span><span class="token punctuation">,</span>\n\t\ticon_url<span class="token operator">:</span> <span class="token string">&#39;https://i.imgur.com/AfFp7pu.png&#39;</span><span class="token punctuation">,</span>\n\t\turl<span class="token operator">:</span> <span class="token string">&#39;https://discord.js.org&#39;</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\tdescription<span class="token operator">:</span> <span class="token string">&#39;Some description here&#39;</span><span class="token punctuation">,</span>\n\tthumbnail<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\turl<span class="token operator">:</span> <span class="token string">&#39;https://i.imgur.com/AfFp7pu.png&#39;</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\tfields<span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token punctuation">{</span>\n\t\t\tname<span class="token operator">:</span> <span class="token string">&#39;Regular field title&#39;</span><span class="token punctuation">,</span>\n\t\t\tvalue<span class="token operator">:</span> <span class="token string">&#39;Some value here&#39;</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span>\n\t\t\tname<span class="token operator">:</span> <span class="token string">&#39;\\u200b&#39;</span><span class="token punctuation">,</span>\n\t\t\tvalue<span class="token operator">:</span> <span class="token string">&#39;\\u200b&#39;</span><span class="token punctuation">,</span>\n\t\t\tinline<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span>\n\t\t\tname<span class="token operator">:</span> <span class="token string">&#39;Inline field title&#39;</span><span class="token punctuation">,</span>\n\t\t\tvalue<span class="token operator">:</span> <span class="token string">&#39;Some value here&#39;</span><span class="token punctuation">,</span>\n\t\t\tinline<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span>\n\t\t\tname<span class="token operator">:</span> <span class="token string">&#39;Inline field title&#39;</span><span class="token punctuation">,</span>\n\t\t\tvalue<span class="token operator">:</span> <span class="token string">&#39;Some value here&#39;</span><span class="token punctuation">,</span>\n\t\t\tinline<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">{</span>\n\t\t\tname<span class="token operator">:</span> <span class="token string">&#39;Inline field title&#39;</span><span class="token punctuation">,</span>\n\t\t\tvalue<span class="token operator">:</span> <span class="token string">&#39;Some value here&#39;</span><span class="token punctuation">,</span>\n\t\t\tinline<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\timage<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\turl<span class="token operator">:</span> <span class="token string">&#39;https://i.imgur.com/AfFp7pu.png&#39;</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\ttimestamp<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\tfooter<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\ttext<span class="token operator">:</span> <span class="token string">&#39;Some footer text here&#39;</span><span class="token punctuation">,</span>\n\t\ticon_url<span class="token operator">:</span> <span class="token string">&#39;https://i.imgur.com/AfFp7pu.png&#39;</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nchannel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> embeds<span class="token operator">:</span> <span class="token punctuation">[</span>exampleEmbed<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You don&#39;t need to include all the elements showcased above. If you want a simpler embed, leave some out.</p></div><p>If you want to modify the embed object based on conditions, you will need to reference it directly (as <code>exampleEmbed</code> for our example). You can then (re)assign the property values as you would with any other object.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> exampleEmbed <span class="token operator">=</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;Some title&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>author<span class="token punctuation">.</span>bot<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\texampleEmbed<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token number">0x7289da</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="attaching-images" tabindex="-1"><a class="header-anchor" href="#attaching-images" aria-hidden="true">#</a> Attaching images</h2>',9),R=c("You can upload images with your embedded message and use them as source for embed fields that support image URLs by constructing a "),D=c(" from them to send as message option alongside the embed. The attachment parameter takes a BufferResolvable or Stream including the URL to an external image."),_=l('<p>You can then reference and use the images inside the embed itself with <code>attachment://fileName.extension</code>.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you plan to attach the same image repeatedly, consider hosting it online and providing the URL in the respective embed field instead. This also makes your bot respond faster since it doesn&#39;t need to upload the image with every response depending on it.</p></div><h3 id="using-the-messageembed-builder" tabindex="-1"><a class="header-anchor" href="#using-the-messageembed-builder" aria-hidden="true">#</a> Using the MessageEmbed builder</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> MessageAttachment<span class="token punctuation">,</span> MessageEmbed <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;discord.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// ...</span>\n<span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageAttachment</span><span class="token punctuation">(</span><span class="token string">&#39;../assets/discordjs.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> exampleEmbed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageEmbed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;Some title&#39;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setImage</span><span class="token punctuation">(</span><span class="token string">&#39;attachment://discordjs.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nchannel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> embeds<span class="token operator">:</span> <span class="token punctuation">[</span>exampleEmbed<span class="token punctuation">]</span><span class="token punctuation">,</span> files<span class="token operator">:</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="using-an-embed-object-1" tabindex="-1"><a class="header-anchor" href="#using-an-embed-object-1" aria-hidden="true">#</a> Using an embed object</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> MessageAttachment <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;discord.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// ...</span>\n<span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageAttachment</span><span class="token punctuation">(</span><span class="token string">&#39;../assets/discordjs.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> exampleEmbed <span class="token operator">=</span> <span class="token punctuation">{</span>\n\ttitle<span class="token operator">:</span> <span class="token string">&#39;Some title&#39;</span><span class="token punctuation">,</span>\n\timage<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\turl<span class="token operator">:</span> <span class="token string">&#39;attachment://discordjs.png&#39;</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nchannel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> embeds<span class="token operator">:</span> <span class="token punctuation">[</span>exampleEmbed<span class="token punctuation">]</span><span class="token punctuation">,</span> files<span class="token operator">:</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If the images don&#39;t display inside the embed but outside of it, double-check your syntax to make sure it&#39;s as shown above.</p></div><h2 id="resending-and-editing" tabindex="-1"><a class="header-anchor" href="#resending-and-editing" aria-hidden="true">#</a> Resending and editing</h2><p>We will now explain how to edit embedded message content and resend a received embed.</p><h3 id="resending-a-received-embed" tabindex="-1"><a class="header-anchor" href="#resending-a-received-embed" aria-hidden="true">#</a> Resending a received embed</h3><p>To forward a received embed you retrieve it from the messages embed array (<code>message.embeds</code>) and pass it to the MessageEmbed can then be edited before sending it again.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>We deliberately create a new Embed here instead of just modifying <code>message.embeds[0]</code> directly to keep the cache valid. If we were not to do this, the embed in cache on the original message would diverge from what the actual embed looks like, which can result in unexpected behavior down the line!</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> receivedEmbed <span class="token operator">=</span> message<span class="token punctuation">.</span>embeds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> exampleEmbed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageEmbed</span><span class="token punctuation">(</span>receivedEmbed<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;New title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nchannel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> embeds<span class="token operator">:</span> <span class="token punctuation">[</span>exampleEmbed<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="editing-the-embedded-message-content" tabindex="-1"><a class="header-anchor" href="#editing-the-embedded-message-content" aria-hidden="true">#</a> Editing the embedded message content</h3><p>To edit the content of an embed you need to pass a new MessageEmbed structure or embed object to the messages <code>.edit()</code> method.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> exampleEmbed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageEmbed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;Some title&#39;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">&#39;Description after the edit&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmessage<span class="token punctuation">.</span><span class="token function">edit</span><span class="token punctuation">(</span><span class="token punctuation">{</span> embeds<span class="token operator">:</span> <span class="token punctuation">[</span>exampleEmbed<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>If you want to build the new embed data on a previously sent embed template, make sure to read the caveats in the previous section.</p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><ul><li>To display fields side-by-side, you need at least two consecutive fields set to <code>inline</code></li><li>The timestamp will automatically adjust the timezone depending on the user&#39;s device</li><li>Mentions of any kind in embeds will only render correctly within embed descriptions and field values</li><li>Mentions in embeds will not trigger a notification</li><li>Embeds allow masked links (e.g. <code>[Guide](https://discordjs.guide/ &#39;optional hovertext&#39;)</code>), but only in description and field values</li></ul><h2 id="embed-limits" tabindex="-1"><a class="header-anchor" href="#embed-limits" aria-hidden="true">#</a> Embed limits</h2><p>There are a few limits to be aware of while planning your embeds due to the API&#39;s limitations. Here is a quick reference you can come back to:</p><ul><li>Embed titles are limited to 256 characters</li><li>Embed descriptions are limited to 4096 characters</li><li>There can be up to 25 fields</li><li>A field&#39;s name is limited to 256 characters and its value to 1024 characters</li><li>The footer text is limited to 2048 characters</li><li>The author name is limited to 256 characters</li><li>The sum of all characters from all embed structures in a message must not exceed 6000 characters</li><li>Ten embeds can be sent per message</li></ul>',22),U=c("Source: "),N={href:"https://discord.com/developers/docs/resources/channel#embed-limits",target:"_blank",rel:"noopener noreferrer"},L=c("Discord API documentation");i.render=function(c,l){const i=n("DiscordEmbedField"),P=n("DiscordEmbedFields"),W=n("DiscordEmbed"),Y=n("DiscordMessage"),q=n("DiscordMessages"),B=n("DocsLink"),C=n("OutboundLink");return s(),a(o,null,[u,r,d,k,m,e(q,null,{default:t((()=>[e(Y,{profile:"bot"},{embeds:t((()=>[e(W,{"border-color":"#0099ff","embed-title":"Some title",url:"https://discord.js.org/",thumbnail:"https://i.imgur.com/AfFp7pu.png",image:"https://i.imgur.com/AfFp7pu.png","footer-icon":"https://i.imgur.com/AfFp7pu.png",timestamp:"01/01/2018","author-name":"Some name","author-icon":"https://i.imgur.com/AfFp7pu.png","author-url":"https://discord.js.org/"},{fields:t((()=>[e(P,null,{default:t((()=>[e(i,{"field-title":"Regular field title"},{default:t((()=>[h])),_:1}),e(i,{"field-title":"​"},{default:t((()=>[g])),_:1}),e(i,{inline:!0,"field-title":"Inline field title"},{default:t((()=>[f])),_:1}),e(i,{inline:!0,"field-title":"Inline field title"},{default:t((()=>[v])),_:1}),e(i,{inline:!0,"field-title":"Inline field title"},{default:t((()=>[w])),_:1})])),_:1})])),footer:t((()=>[y])),default:t((()=>[b])),_:1})])),_:1})])),_:1}),x,p("p",null,[j,e(B,{path:"class/MessageEmbed"}),E]),S,p("p",null,[I,T,A,e(B,{path:"typedef/ColorResolvable"}),M]),F,p("p",null,[R,e(B,{path:"class/MessageAttachment"}),D]),_,p("p",null,[U,p("a",N,[L,e(C)])])],64)};export{i as default};