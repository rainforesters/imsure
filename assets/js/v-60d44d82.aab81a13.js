"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[956],{6264:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-60d44d82",path:"/guide/typedesc.html",title:"类型描述",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"什么是类型描述",slug:"什么是类型描述",children:[]},{level:2,title:"基本类型描述",slug:"基本类型描述",children:[]},{level:2,title:"Struct 类型",slug:"struct-类型",children:[]},{level:2,title:"定义新类型",slug:"定义新类型",children:[{level:3,title:"结构体",slug:"结构体",children:[]},{level:3,title:"修饰类型",slug:"修饰类型",children:[]}]},{level:2,title:"初始化类型",slug:"初始化类型",children:[]}],filePathRelative:"guide/typedesc.md",git:{updatedTime:1630234208e3}}},5202:(n,s,a)=>{a.r(s),a.d(s,{default:()=>S});var p=a(6252);const e=(0,p.uE)('<h1 id="类型描述" tabindex="-1"><a class="header-anchor" href="#类型描述" aria-hidden="true">#</a> 类型描述</h1><h2 id="什么是类型描述" tabindex="-1"><a class="header-anchor" href="#什么是类型描述" aria-hidden="true">#</a> 什么是类型描述</h2><p>类型描述是：为类型添加描述规则，用来控制运行期间的行为。</p><p>类型的概念不再赘述。几乎所有语言都是由基本的几种类型构成的。</p><p>JavaScript 是动态语言，变量是没有类型的，然后有了 TypeScript 为变量表达类型。<br> 类型作为约束存在于静态检查期间，同样的，几乎所有的静态语言都会在编译期间进行类型擦除，类型的使命一般到此结束，不严格存在于运行期间。</p><p>可以看到，类型的主要作用就是在静态检查期间提供约束。</p><p>由于类型擦除，我们不能控制类型运行期间的行为，类型的意义被减弱了。<br> 比如，我们无法控制变量 <code>email: string</code> 只接收正确的字符串。 只能在接收到字符串后，再手动进行检查校验。 唯一的意义就是表明 <code>email</code> 只用于接收任何字符串，而不能是布尔、数值等其他类型的值。</p><p>所以，我们需要有一个在运行期间能够发挥效用的类型系统。<br> 类型描述，就是我们对此的实现，用来构造出这个有效的安全类型系统。</p><p>现在，我们可以<strong>安全</strong>的这样来使用了。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 首先，定义一个新的类型描述</span>\n<span class="token keyword">const</span> Email <span class="token operator">=</span> <span class="token keyword">type</span><span class="token function">def</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token string">&#39;@type&#39;</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// 修饰原始的 string</span>\n  <span class="token string">&#39;@verify&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 自定义校验</span>\n    <span class="token comment">// W3C Email Regex</span>\n    <span class="token keyword">const</span> <span class="token constant">RE</span> <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$</span><span class="token regex-delimiter">/</span></span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token constant">RE</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid email address.&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 定义结构体</span>\n<span class="token keyword">const</span> MyStruct <span class="token operator">=</span> <span class="token keyword">type</span><span class="token function">def</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  email<span class="token operator">:</span> Email<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// 实例化，然后设置邮箱</span>\n<span class="token keyword">const</span> myself <span class="token operator">=</span> <span class="token keyword">type</span><span class="token function">init</span><span class="token punctuation">(</span>MyStruct<span class="token punctuation">)</span>\nmyself<span class="token punctuation">.</span>email <span class="token operator">=</span> <span class="token string">&#39;amy@example.com&#39;</span> <span class="token comment">// It&#39;s ok.</span>\nmyself<span class="token punctuation">.</span>email <span class="token operator">=</span> <span class="token string">&#39;amy@example,com&#39;</span> <span class="token comment">// Throw the error.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>这样就能保障我们的数据，总是正确的，符合预期的。<br> 也因此，让我们能安全的构造大型程序。</p><div class="custom-container warning"><p class="custom-container-title">提示</p><p>这里我们不考虑运行期间的类型反射。</p></div><h2 id="基本类型描述" tabindex="-1"><a class="header-anchor" href="#基本类型描述" aria-hidden="true">#</a> 基本类型描述</h2><p>系统原生提供了几个最基本的类型描述。<br> 这就足以用来描述整个世界了。<br> 因为，我们可以通过再次修饰，来修饰出多样化的各种类型描述。</p><table><thead><tr><th>基本类型描述</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>unknown</td><td style="text-align:center;">未知类型</td></tr><tr><td>bool</td><td style="text-align:center;">布尔类型</td></tr><tr><td>int32</td><td style="text-align:center;">整型</td></tr><tr><td>float64</td><td style="text-align:center;">浮点型</td></tr><tr><td>string</td><td style="text-align:center;">字符串</td></tr></tbody></table><p>比如，我们可以很容易的修饰出一个 <code>int8</code> 类型描述。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> int8 <span class="token operator">=</span> <span class="token keyword">type</span><span class="token function">def</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token string">&#39;@type&#39;</span><span class="token operator">:</span> int32<span class="token punctuation">,</span>\n  <span class="token string">&#39;@verify&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> <span class="token operator">-</span><span class="token number">128</span> <span class="token operator">||</span> val <span class="token operator">&gt;=</span> <span class="token number">128</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token function">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;int8 overflow&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">提示</p><p>为方便阅读，后续的类型描述统一简称为类型。</p></div><h2 id="struct-类型" tabindex="-1"><a class="header-anchor" href="#struct-类型" aria-hidden="true">#</a> Struct 类型</h2><p>除了基本类型之外，我们提供了一个简单但强大的结构体类型。</p><p><strong>毫不客气的讲，这是数据结构化编程的灵魂。</strong></p><p><a href="./struct">我们在新的章节里详细学习它。</a></p><h2 id="定义新类型" tabindex="-1"><a class="header-anchor" href="#定义新类型" aria-hidden="true">#</a> 定义新类型</h2>',23),t=(0,p.Uk)("使用 "),o={href:"/api/#typedef",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("typedef"),l=(0,p.Uk)(" 来定义一个新的类型。"),r=(0,p._)("br",null,null,-1),i=(0,p.Uk)(" 定义的新类型分为两种，一种是结构体，一种是对原有类型的再次修饰类型。"),u=(0,p.uE)('<h3 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h3><p>结构体就是由一个或多个字段组成的集合。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> MyStruct <span class="token operator">=</span> <span class="token keyword">type</span><span class="token function">def</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  sex<span class="token operator">:</span> bool<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="修饰类型" tabindex="-1"><a class="header-anchor" href="#修饰类型" aria-hidden="true">#</a> 修饰类型</h3><p>对一个已经定义好的类型再次进行修饰，就是一个修饰类型。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> int8 <span class="token operator">=</span> <span class="token keyword">type</span><span class="token function">def</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token string">&#39;@type&#39;</span><span class="token operator">:</span> int32<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',6),k=(0,p.Uk)("可以看到，修饰类型和结构体的区别就是指定 "),d=(0,p.Uk)("@type"),b=(0,p.Uk)(" 描述符来表明原有的类型。"),m=(0,p.uE)('<p>当然了，我们也可以对结构体进行修饰。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> DecoratedStruct <span class="token operator">=</span> <span class="token keyword">type</span><span class="token function">def</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token string">&#39;@type&#39;</span><span class="token operator">:</span> MyStruct<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>不过，需要注意的是，一旦结构体被定义，那么字段就固定下来了，所以不能在修饰中添加新的字段。<br> 这是因为，我们要保证原有结构体的确定性。<br> 因为该结构体可能会被多次修饰，所以我们需要保证在经过多次修饰后，该结构体还是原来的样子。 这样才能放心安全的的使用。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果你熟悉继承，那么这里需要注意了，在这里没有任何的继承关系。<br> 如果你想扩展一个结构体，那么你应该重新定义一个新的结构体，采用组合的方式，将原结构体声明为一个字段。<br> 也正好，这种方式赋予了我们组合多个结构体的能力。并能保持简单清晰，这很有好处。</p></div><h2 id="初始化类型" tabindex="-1"><a class="header-anchor" href="#初始化类型" aria-hidden="true">#</a> 初始化类型</h2>',5),y=(0,p.Uk)("使用 "),g={href:"/api/#typeinit",target:"_blank",rel:"noopener noreferrer"},h=(0,p.Uk)("typeinit"),v=(0,p.Uk)(" 来初始化类型的值。"),f=(0,p._)("br",null,null,-1),w=(0,p.Uk)(" 主要用来初始化结构体。当然也可以直接初始化其他基本类型，但不常用。"),x=(0,p.uE)('<p>初始化结构体时，所有字段都会自动初始化为类型的默认值。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> myself <span class="token operator">=</span> <span class="token keyword">type</span><span class="token function">init</span><span class="token punctuation">(</span>MyStruct<span class="token punctuation">)</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myself<span class="token punctuation">)</span>\n<span class="token comment">// output: { name: &#39;&#39;, sex: false }</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>我们也可以在初始化的同时为字段赋值。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> myself <span class="token operator">=</span> <span class="token keyword">type</span><span class="token function">init</span><span class="token punctuation">(</span>MyStruct<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Amy&#39;</span><span class="token punctuation">,</span>\n  sex<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',4),S={render:function(n,s){const a=(0,p.up)("OutboundLink"),S=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,(0,p._)("p",null,[t,(0,p._)("a",o,[c,(0,p.Wm)(a)]),l,r,i]),u,(0,p._)("p",null,[k,(0,p.Wm)(S,{to:"/guide/descriptors.html#type"},{default:(0,p.w5)((()=>[d])),_:1}),b]),m,(0,p._)("p",null,[y,(0,p._)("a",g,[h,(0,p.Wm)(a)]),v,f,w]),x],64)}}}}]);