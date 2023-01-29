<template><div><h1 id="hello-vuepress" tabindex="-1"><a class="header-anchor" href="#hello-vuepress" aria-hidden="true">#</a> Hello VuePress</h1>
<h2 id="二级标题" tabindex="-1"><a class="header-anchor" href="#二级标题" aria-hidden="true">#</a> 二级标题</h2>
<h3 id="三级标题" tabindex="-1"><a class="header-anchor" href="#三级标题" aria-hidden="true">#</a> 三级标题</h3>
<table>
<thead>
<tr>
<th style="text-align:left">Left-aligned</th>
<th style="text-align:center">Center-aligned</th>
<th style="text-align:right">Right-aligned</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">git status</td>
<td style="text-align:center">git status</td>
<td style="text-align:right">git status</td>
</tr>
<tr>
<td style="text-align:left">git diff</td>
<td style="text-align:center">git diff</td>
<td style="text-align:right">git diff</td>
</tr>
</tbody>
</table>
<p><s>This was mistaken text</s></p>
<p><strong>This is bold text</strong></p>
<p><strong>This is bold text</strong></p>
<!-- 相对路径 -->
<p><RouterLink to="/">首页</RouterLink><br>
<RouterLink to="/reference/config.html">配置参考</RouterLink><br>
<RouterLink to="/getting-started.html">快速上手</RouterLink></p>
<!-- 绝对路径 -->
<p><RouterLink to="/zh/guide/">指南</RouterLink><br>
<RouterLink to="/zh/reference/config.html#links">配置参考 &gt; markdown.links</RouterLink></p>
<!-- URL -->
<p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
<p>VuePress 2 已经发布 🎉 ！
🙁</p>
<p>目录树</p>
<nav class="table-of-contents"><ul><li><router-link to="#二级标题">二级标题</router-link><ul><li><router-link to="#三级标题">三级标题</router-link></li></ul></li></ul></nav>
<p>代码块</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态资源</p>
<p><img src="/avatar.jpg" alt="图片"></p>
</div></template>


