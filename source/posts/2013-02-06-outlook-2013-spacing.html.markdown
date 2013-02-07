---
title: Outlook 2013 Email Space Rendering Issue
date: 2013-02-06
tags: outlook 2013, email
---

# Are you noticing extra spacing above images in Outlook 2013?

Well, there's yet another email hack that you'll have to apply to all of your HTML emails to address this issue.

## Here's how your markup probably currently looks like for the image

<pre><code>&lt;table border="0" cellspacing="0" cellpadding="0"&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;img src="../image.png" alt="Image" width="500" height="8" style="display: block;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;img src="../image.png" alt="Image" width="500" height="40" style="display: block;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>

The problem with Outlook is every table cell you use contains a specific line height which is probably defined by the email client.

So for most images, you might not see this extra space, but as in the example above, you'll see one of the images has a height of 8 pixels.  Most document line heights are going to be around 20 something pixels.  Since this image is smaller than the line-height, Outlook will use the line height to fill in the rest of that cell.

## Here's the fix

Add the <em>height</em> and <em>line-height</em> properties to the image's parent cell with the same value of the image's height.

<pre><code>&lt;table border="0" cellspacing="0" cellpadding="0"&gt;
    &lt;tr&gt;
        &lt;td <span class="highlight">style="height: 8px; line-height: 8px;"</span>&gt;&lt;img src="../image.png" alt="Image" width="500" height="8" style="display: block;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;img src="../image.png" alt="Image" width="500" height="40" style="display: block;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
