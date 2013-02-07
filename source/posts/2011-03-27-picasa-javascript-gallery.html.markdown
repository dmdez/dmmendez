---
title: Pull a thumbnail gallery from Picasa's API
date: 2011-03-27
tags: picasa, thumbnails, gallery, api, javascript
---

You will notice (currently at the top) on my site that I have a small list of featured thumbnails which will link to each individual picture in my <a href="https://picasaweb.google.com/dmmendez" target="_blank">Picasa Web Album</a>.&nbsp; Just for reference, <a href="http://code.google.com/apis/picasaweb/docs/2.0/reference.html" target="_blank">Picasa has a nice api</a> where you can pull a myriad of feeds and different types of feeds.&nbsp; In my case, I just wanted to pull in six thumbnails from a specific album named &quot;Featured&quot; in a JSON format.

Starting off, here is the exact url I used to pull in my feed:

    https://picasaweb.google.com/data/feed/base/user/113822536772850233036/albumid/5587272886788976673?kind=photo&amp;max-results=6&amp;thumbsize=80&amp;alt=json&amp;fields=entry(link[@rel=&#39;alternate&#39;],media:group(media:thumbnail))

All of the numbers before the query string are just user and album id&#39;s you need from your album.&nbsp; You can find more information in the <a href="http://code.google.com/apis/picasaweb/docs/2.0/reference.html" target="_blank">API</a>.&nbsp; You can find these values easily by browsing your Picasa albums and looking at the url and RSS feeds.

Now, I&#39;ll break down each parameter just to simply show what I did (although the API does way more than what I&#39;m showing).

<table>
    <tbody>
        <tr>
            <td>kind</td>
            <td>photo</td>
            <td>Let&#39;s you request different kinds of feeds</td>
        </tr>
        <tr>
            <td>max-results</td>
            <td>6</td>
            <td>Maximun number of results</td>
        </tr>
        <tr>
            <td>thumbsize</td>
            <td>80</td>
            <td>Size of thumbnail, which is variable.</td>
        </tr>
        <tr>
            <td>alt</td>
            <td>json</td>
            <td>Type of feed, default is RSS</td>
        </tr>
        <tr>
            <td>fields</td>
            <td>
                <p>
                    entry(<br />
                    &nbsp;link[@rel=&#39;alternate&#39;],<br />
                    &nbsp;media:group(media:thumbnail)<br />
                    )</p>
            </td>
            <td>This option dictates what fields come through to your field.&nbsp; So if you don&#39;t want to clutter your feed with values you won&#39;t use, that can be controlled here.</td>
        </tr>
    </tbody>
</table>

My favorite option had to be the &quot;fields&quot; parameter, just because it allows me to really narrow my feeds down so it&#39;s not so cluttered with useless values.

Enjoy pulling your feeds from Picasa.
