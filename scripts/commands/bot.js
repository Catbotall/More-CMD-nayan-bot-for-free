module.exports.config = {
  name: "bot",
  version: "0.0.2",
  permission: 0,
  prefix: 'awto',
  credits: "Nayan",
  description: "talk with bot",
  category: "user",
  usages: "",
    cooldowns: 5,
};


var tl = [" তুই সাত দিন ধরে গোসল করিস না যা গোসল করে আয়😷", " কি গো সোনা আমাকে ডাকছ কেনো", "বার বার আমাকে ডাকস কেন😡","আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো🥱","হুম জান তোমার একটা পিক দেও স্টোরি তে দিমু 😇🤗😘"," আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি","আমাকে এতো না ডেকে বস সোহাগ একটা Gf দে 🙄","jang hanga korba","jang bal falaba🙂", "এত ডাকো কেনো 😑","ওই তুমি single না?🫵🤨","-চৌধুরী সাহেব আমি গরিব হতে পারি.😾🤭\nকিন্তু -বড়লোক না.🥹😫","suno ধৈর্য আর সহ্য জীবনের সব😊🌻💜","babu khuda lagse🥺","kisse😒","বেশি bot Bot করলে leave নিবো কিন্তু😒😒" , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","আরে Bolo আমার জান ,কেমন আছো?😚 " , "botবলে অসম্মান করচ্ছিছ,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার জানু এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব r সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" ,"🐤🐤" ,"🙂🙂🙂","দূরে গিয়ে মর😒","😒😒","bye","mb ney bye","meww🐱"];

var lang = "bn"

 var _0xc44e=["","split","0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/","slice","indexOf","","",".","pow","reduce","reverse","0"];function _0xe21c(d,e,f){var g=_0xc44e[2][_0xc44e[1]](_0xc44e[0]);var h=g[_0xc44e[3]](0,e);var i=g[_0xc44e[3]](0,f);var j=d[_0xc44e[1]](_0xc44e[0])[_0xc44e[10]]()[_0xc44e[9]](function(a,b,c){if(h[_0xc44e[4]](b)!==-1)return a+=h[_0xc44e[4]](b)*(Math[_0xc44e[8]](e,c))},0);var k=_0xc44e[0];while(j>0){k=i[j%f]+k;j=(j-(j%f))/f}return k||_0xc44e[11]}eval(function(h,u,n,t,e,r){r="";for(var i=0,len=h.length;i<len;i++){var s="";while(h[i]!==n[e]){s+=h[i];i++}for(var j=0;j<n.length;j++)s=s.replace(new RegExp(n[j],"g"),j);r+=String.fromCharCode(_0xe21c(s,e,10)-t)}return decodeURIComponent(escape(r))}("dTTQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCdQhCCQhTTQffhQffdQhTTQhdCQfhfQdfdQTChfQhTTQffTQTCCCQhTCQhThQddfQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCCQTCCTQdfhQdffQhTTQdfdQdhhQfhfQdfdQTChfQdfhQhChQffdQhTTQffdQffTQdhCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQhdCQfhfQdfdQTChfQhTTQffTQTCCCQhTCQdhhQfhfQdfdQTChfQhCCQdffQfffQffhQdfhQhTCQhdCQfhfQdfdQTChfQhCCQTCCTQdfhQdffQhTTQdfdQddfQdhCQhThQTChhQTCChQTCCfQTCTdQTCCCQddfQdTdQdTdQfhCQfhdQdhCQTCfdQTChCQTCdhQTCfCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQdffQffdQhChQTCCCQdfdQffTQhdCQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQhTCQTCCTQdhCQdhCQdfTQddfQdhfQdfdQTChfQdfhQdhTQdfdQTChfQdffQhCCQdfhQfffQdhdQdhfQdfdQTChfQdfhQffTQTCCCQhCfQdhdQdfdQTChfQhCCQTCCCQdfdQhCdQdhCQdhdQdhfQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffdQhCdQdhCQdhCQdfTQddfQdhfQdfdQTChfQTCCTQdhTQdhfQdfdQTChfQffTQffhQdhdQdhfQdfdQTChfQdfhQdfhQTCCTQffTQdhdQdfdQTChfQhCfQTCCCQhTCQdhCQdhTQddfQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffhQhTCQdhCQdhCQdfTQddfQdfdQTChfQdfhQdhTQdfdQTChfQdffQhCTQhChQhCdQdhdQdhfQdfdQTChfQffdQffTQfffQdhdQdhfQdfdQTChfQdfhQhTCQffdQhCdQdhCQdhCQdhdQdhfQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffdQfffQdhCQdhCQdfTQddfQdhfQdfdQTChfQdfhQdhTQdhfQdfdQTChfQdffQhCCQhChQhCdQdhdQdhfQdfdQTChfQdffQdfdQTCCCQdffQdhdQdhfQdfdQTChfQdffQhCfQTCCTQdhCQdhdQdhfQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffTQhCTQdhCQdhCQdfTQddfQdfdQTChfQhChQhCfQdhTQdfdQTChfQhCTQhTTQdhdQdhfQdfdQTChfQdfhQTCCCQhTTQdhTQdfdQTChfQTCCTQdhdQdhfQdfdQTChfQffdQhCCQdhTQdfdQTChfQdfhQdhCQdhdQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffTQffdQdhCQdhCQdfTQddfQdhfQdfdQTChfQdfhQdfdQdhTQdhfQdfdQTChfQffdQffhQdhdQdfdQTChfQhTTQTCCTQdhTQdhfQdfdQTChfQffTQdhdQdhfQdfdQTChfQhCdQhTCQhCTQdhCQdhdQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffTQdfhQdhCQdhCQdfTQddfQdhfQdfdQTChfQhCdQTCCTQhCdQdhdQdfdQTChfQhCCQhCdQffdQdhTQdfdQTChfQffdQdhdQdhfQdfdQTChfQdfhQTCCCQTCCCQfffQdhCQdhdQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffdQffhQdhCQdhCQdfTQddfQdfdQTChfQdfhQdhTQdfdQTChfQdffQffdQdfdQdhdQdhfQdfdQTChfQhCfQdhTQdhfQdfdQTChfQhCCQhCdQdhdQdfdQTChfQhCTQdfhQffdQdhTQdhfQdfdQTChfQdfhQdhCQdhTQddfQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffdQffTQdhCQdhCQdfTQddfQdhfQdfdQTChfQdffQhCTQdfdQdffQdhdQdfdQTChfQdffQhCCQTCCTQhCTQdhdQdfdQTChfQdfhQhCfQdhCQdhCQhThQTCCfQTCCTQddfQfhfQdfdQTChfQdffQffdQhChQTCCCQdfdQffTQhdCQhdCQhdCQfhfQdfdQTChfQdfhQhChQffdQhTTQffdQffTQdhCQffdQTCdhQTCCCQffTQTCTTQhThQTCCCQTCTdQTCdfQTCCCQdTTQfhfQdfdQTChfQhCCQdffQfffQffhQdfhQhTCQfhCQddhQTCdTQTChTQTCdfQTCChQddhQfhdQddfQfhfQdfdQTChfQhCCQdffQfffQffhQdfhQhTCQfhCQddhQTCdfQTCChQTCCfQTCCTQTChCQddhQfhdQddfQdhCQdhCQhThQTCffQffhQffTQTChCQffhQTCChQddfQfhfQdfdQTChfQdffQTCCTQffdQhCTQTCCCQTCCCQdhCQTCfdQfhfQdfdQTChfQhCCQdffQfffQffhQdfhQhTCQfhCQddhQTCdTQTChTQTCdfQTCChQddhQfhdQddfQfhfQdfdQTChfQhCCQdffQfffQffhQdfhQhTCQfhCQddhQTCdfQTCChQTCCfQTCCTQTChCQddhQfhdQddfQdhCQdhCQhThQTCffQTCffQTCffQddfQfhfQdfdQTChfQhCdQTCCCQhCfQTCCTQdhhQdfdQTChfQdfhQhCTQhCfQhCTQffTQdhdQdfdQTChfQdffQdfhQffdQfffQhCdQdhTQdhfQdfdQTChfQdffQdhdQdfdQTChfQhChQdfhQffhQdfdQhCCQdhCQdhhQTCThQTCdCQfffQTChTQTCTdQTCCCQfhCQfhfQdfdQTChfQhCdQhCCQhTTQffhQffdQhTTQddfQdfdQTChfQdfhQffTQdffQdhCQfhdQfhCQfhfQdfdQTChfQhCdQhCCQhTTQffhQffdQhTTQddfQdfdQTChfQdfhQhTCQfffQdhCQfhdQhdCQffTQTCdfQTCfCQTCTfQffhQdTTQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQTCfdQffTQTCdTQTCCfQhTdQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQdhhQTCCCQTChdQTCCCQTCTfQTChCQhTdQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQdhhQffTQTCdhQTCCdQTCdfQhTdQfhfQdfdQTChfQdfhQhCCQdfdQffTQdffQhCCQdhhQfTfQTCdfQTCCCQTCdhQTCdfQhTdQfhfQdfdQTChfQhCCQdfdQhCTQffdQTCCTQhCfQTCffQdhCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQhdCQfhfQdfdQTChfQhCdQhCCQhTTQffhQffdQhTTQdhhQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQhdCQTCfdQddhQTChfQTCChQhdfQTChCQTCdCQddhQhTdQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCCQffTQhChQhCdQffdQTCCCQdhhQfhfQdfdQTChfQhCTQhTTQhCfQhCCQhCdQhCfQdhCQTCfdQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCCQffTQhChQhCdQffdQTCCCQdTdQhdCQhdCQfhfQdfdQTChfQhCTQhTTQhCfQhCCQhCdQhCfQhThQTCffQdhhQddhQfCCQhfhQhhfQfTfQTChfQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQTCCTQdhCQdhhQddhQTCdTQTChTQhhTQhhdQTCChQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQdfdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQfffQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhCCQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhChQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQdfhQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdfdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQffhQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQTCCTQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQTCCTQdhCQdhdQddhQTCCCQdfCQddhQdhhQddhQTCTfQTCdfQfdCQTCdhQTCTfQddhQhTdQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCTQffhQhTTQhCTQfffQTCCTQdhhQfhfQdfdQTChfQdffQffhQhCCQdfdQhTCQhChQdhCQTCfdQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCTQffhQhTTQhCTQfffQTCCTQddfQfhfQdfdQTChfQdffQffhQhCCQdfdQhTCQhChQdhCQhThQTCffQdhhQddhQhdfQhfCQfCfQfTCQffhQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhCTQdhCQdhhQddhQTCTdQTCTdQhffQTCddQfCdQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQffTQdhCQdhhQddhQhhTQfdhQfdfQTCfTQffTQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQffhQdhCQdhhQddhQTCddQhffQTCCCQfTTQhhCQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhChQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQdffQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQdffQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQffhQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQffdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQdfdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhTCQdhCQdhhQddhQfTCQhdfQTCTfQTCTCQTCTdQddhQhTdQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCdQdfhQdfdQdfdQffdQffhQdhhQfhfQdfdQTChfQdffQhCfQdfhQhCCQhCTQhCCQdhCQTCfdQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQdfhQdfdQdfdQffdQffhQdhTQfhfQdfdQTChfQdffQhCfQdfhQhCCQhCTQhCCQhThQTCffQdhhQddhQTCCTQfdCQTCThQTCCdQTChfQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhCCQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhTTQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhCCQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhCdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQfffQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTCQdhCQdhhQddhQffdQfdCQffdQTCChQfCdQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQffdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhChQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhCfQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhTTQdhCQdhhQddhQhffQhhTQTChfQhdfQTCTCQddhQhTdQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCTQdffQfffQdfdQdffQhChQdhhQfhfQdfdQTChfQhCTQffdQdfhQhTTQhCfQhTTQdhCQTCfdQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCTQdffQfffQdfdQdffQhChQdhdQfhfQdfdQTChfQhCTQffdQdfhQhTTQhCfQhTTQhThQTCffQTCffQhThQTCCfQTCCTQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCCQdhCQfhdQddfQTCThQTCdCQfffQTChTQTCTdQTCCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQdffQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQhCTQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQTCCCQdhCQfhdQdhhQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQhCdQdhCQfhdQdhCQdhCQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQfffQdhCQdhdQddhQTCCCQddhQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQdfhQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdffQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQTCCCQdhCQfhdQdhCQhThQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQdfhQffhQffdQfffQfffQhCfQhdCQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhTCQdhCQfhdQddfQTCdhQTCCCQTCddQTChTQTCCfQTCdhQTCCCQdhhQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQffTQdhCQfhdQdhCQdhhQfhfQdfdQTChfQhCTQdfdQffhQffTQfffQfffQhdCQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhTCQdhCQfhdQddfQTCdhQTCCCQTCddQTChTQTCCfQTCdhQTCCCQdhhQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQdffQdhCQfhdQdhCQdhhQfhfQdfdQTChfQdfhQTCCCQdfhQdfhQhCCQTCCTQhdCQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhTCQdhCQfhdQddfQTCdhQTCCCQTCddQTChTQTCCfQTCdhQTCCCQdhhQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQTCCTQdhCQfhdQdhCQdhhQfhfQdfdQTChfQhCdQhCCQdffQTCCCQTCCTQdfhQhdCQfhfQdfdQTChfQdfhQhCCQdfdQffTQdffQhCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQdfhQdhCQfhdQddfQddhQfhTQTChfQdffQdfdQddhQdhCQhThQTChdQffTQTCdhQdTTQfhfQdfdQTChfQhCdQhTTQdfhQhCTQhCTQfffQhdCQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCfQdhCQfhdQdhhQfhfQdfdQTChfQhCCQhCdQfffQfffQhTTQhCCQhdCQffTQTChhQffTQTCCfQTChCQdTTQfhfQdfdQTChfQhCCQdfdQhCTQffdQTCCTQhCfQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhCfQdhCQdhdQddhQTCdhQddhQfhdQddfQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCfQdhCQfhdQdhCQhThQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCTQffhQhCdQhChQdfdQTCCCQhdCQffTQTChhQffTQTCCfQTChCQdTTQfhfQdfdQTChfQdfhQffhQffdQfffQfffQhCfQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCdQdhCQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhTTQdhCQfhdQdhCQdhhQfhfQdfdQTChfQhCTQTCCTQfffQffhQhCCQTCCTQhdCQfhfQdfdQTChfQhCTQffhQhCdQhChQdfdQTCCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTTQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhCTQdhCQfhdQhThQTChdQffTQTCdhQdTTQfhfQdfdQTChfQhCTQdfdQdfhQdffQhCdQhTCQhdCQTChCQTCTdQfhCQfCTQffTQTChCQTCChQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQTCCCQdhCQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQhCCQdhCQfhdQddfQfCTQffTQTChCQTCChQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQdfdQdhCQfhdQddfQdhCQdhhQTChCQTCTdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdfhQdhCQfhdQdhCQdhCQfhdQhThQTCCfQTCCTQddfQdTdQfhfQdfdQTChfQhCdQhCCQdffQTCCCQTCCTQdfhQdhCQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQfffQdhCQdhdQddhQTCCCQddhQfhdQddfQfhfQdfdQTChfQhCCQhCdQfffQfffQhTTQhCCQdhdQddhQdhhQfhTQTChfQdffQdfdQddhQdhdQfhfQdfdQTChfQhCTQdfdQdfhQdffQhCdQhTCQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdffQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQTCCCQdhCQfhdQdhCQhThQTChCQTCdhQTCfCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCTQhCCQhChQffTQffdQTCCCQhdCQffTQTChhQffTQTCCfQTChCQdTTQfhfQdfdQTChfQdfhQffhQffdQfffQfffQhCfQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCdQdhCQfhdQddfQfhfQdfdQTChfQhCTQTCCTQfffQffhQhCCQTCCTQdhdQddfQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQffdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhCfQdhCQdhCQdhdQfhfQdfdQTChfQhCdQhCCQdffQTCCCQTCCTQdfhQdhCQhThQffhQTCdCQTCTfQTCdfQTCdCQTCTdQTCCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQffhQdhCQfhdQddfQfhfQdfdQTChfQhCTQhCCQhChQffTQffdQTCCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTTQdhCQfhdQdhCQhThQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQfffQhCCQhCCQhCTQTCCCQTCCTQhdCQfhfQdfdQTChfQhCTQhCCQhChQffTQffdQTCCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTTQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTTQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQTCCCQdhCQfhdQhThQTCCfQTCCTQddfQfhfQdfdQTChfQfffQhCCQhCCQhCTQTCCCQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQdfdQdhCQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCTQdhCQfhdQdhCQdhCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCdQhTCQhCdQdfhQhChQdfdQhdCQffTQTChhQffTQTCCfQTChCQdTTQfhfQdfdQTChfQdfhQffhQffdQfffQfffQhCfQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQTCCCQdhCQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQffTQdhCQfhdQdhhQTCTfQTCCCQTChhQdTTQfTfQfTTQfCCQfTdQTCCCQffTQTCdhQffhQTCChQfCfQffTQTCdhQffTQTCThQTCdfQddfQTCfdQddhQTChCQTCCCQTChfQTChCQddhQhTdQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhCdQdhCQfhdQddfQddhQddhQdhhQfhfQdfdQTChfQhCdQhCCQdffQTCCCQTCCTQdfhQdhCQdhhQddhQTCTdQffhQddhQhTdQTCTdQffTQTCTfQTCCdQTCffQdhCQdhCQhThQTChdQffTQTCdhQdTTQfhfQdfdQTChfQhCTQhCTQffdQdfhQTCCTQhTTQhdCQfhfQdfdQTChfQhCdQhTCQhCdQdfhQhChQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTTQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhChQdhCQfhdQhThQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQfffQdhCQdhdQddhQTCCCQddhQfhdQddfQfhfQdfdQTChfQhCTQhCTQffdQdfhQTCCTQhTTQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdffQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQTCCCQdhCQfhdQdhCQhThQTCffQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQfffQdhCQdhdQddhQTCCCQddhQfhdQddfQTCfdQddhQffdQTCdCQfffQTCfCQddhQhTdQfhfQdfdQTChfQfffQhCCQhCCQhCTQTCCCQTCCTQTCffQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdffQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQTCCCQdhCQfhdQdhCQhThQTCffQffhQffTQTChCQffhQTCChQddfQfhfQdfdQTChfQfffQhCdQfffQdfhQffdQdfdQdhCQTCfdQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQfffQdhCQdhdQddhQTCCCQddhQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCTQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdffQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQTCCCQdhCQfhdQdhCQhThQTCffQTCffQdhCQhThQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQdTTQfhfQdfdQTChfQhTTQffTQTCCCQhTCQddfQfhfQdfdQTChfQhCCQdfdQdffQhCdQdfhQhCfQdhhQfhfQdfdQTChfQhCdQhCTQfffQTCCCQdfdQffTQdhCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCdQdfhQTCCTQhChQhTTQffdQhdCQfhfQdfdQTChfQhCdQTCCCQhCfQTCCTQddfQdhCQhThQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhTTQffTQTCCCQhTCQhdCQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCTQffhQdfhQhTCQfffQhTCQdhhQfhfQdfdQTChfQhCdQfffQdfhQhCdQhChQdfdQdhCQTCfdQfhfQdfdQTChfQhCTQffhQdfhQhTCQfffQhTCQhdCQfhfQdfdQTChfQhCTQffhQdfhQhTCQfffQhTCQdhfQddfQdhfQdfdQTChfQffTQdffQhCfQdhTQdhfQdfdQTChfQhCCQdhdQdfdQTChfQTCCTQhCTQdhdQdhfQdfdQTChfQdfhQfffQfffQfffQdhCQhThQTCTdQTCCCQTChCQdTTQfhfQdfdQTChfQdffQTCCTQdfdQffhQhTTQhCdQhdCQfhfQdfdQTChfQhCdQdfhQTCCTQhChQhTTQffdQfhCQfhfQdfdQTChfQhCTQffhQdfhQhTCQfffQhTCQfhdQhThQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQdffQTCCTQdfdQffhQhTTQhCdQhThQTCffQdhhQfhfQdfdQTChfQhTTQffTQTCCCQhTCQddfQfhfQdfdQTChfQhCCQdfdQdffQhCdQdfhQhCfQdhhQfhfQdfdQTChfQhCdQhCTQfffQTCCCQdfdQffTQdhCQhThQTCffQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQdTTQfhfQdfdQTChfQhCdQTCCCQhCfQTCCTQddfQdhCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCdQffhQhTCQdfhQffhQTCCCQhdCQfhCQddhQffhQTCdCQTCThQdfTQfCTQfTTQdhfQfCdQhdfQfdhQddhQdhhQddhQfCfQTCTdQTCCCQffTQTCdfQTCCCQfhTQTChfQdffQdfdQfThQTCCCQffTQddhQdhhQddhQTCdTQTCdCQTCdfQTChCQddhQdhhQddhQhhTQfdhQfdfQTCfTQffTQddhQdhhQddhQTCdhQffTQTCTfQfffQTCdCQTCThQddhQdhhQddhQTCTdQTChTQTCCCQddfQfCdQffTQTCfCQffTQTCTfQdhCQddhQdhhQddhQTCCCQTCdhQffhQTCdCQTCTfQTChCQTCCCQTCTfQTChCQdfCQddhQdhhQddhQfTCQhdfQTCTfQTCTCQTCTdQddhQdhhQddhQffhQTCdCQTCTfQTCCTQTCCfQTCCdQddhQdhhQddhQfCCQhfhQhhfQfTfQTChfQddhQdhhQddhQTCCCQTCdTQTCTdQffTQffhQTCCCQfhTQTChfQdffQdfdQTCCfQTChCQfhTQTChfQdffQdfdQddhQdhhQddhQTCdhQTChTQTCTfQddhQdhhQddhQTCThQTCCCQTCdfQTCdfQffTQTCCdQTCCCQhfdQhhdQddhQdhhQddhQdfhQhChQhChQdfdQhTTQTCfCQfdhQfTCQhfTQTCfCQfTTQddhQdhhQddhQTCCfQTCTfQffhQTCTdQTChTQfffQTCCCQTCdfQddhQdhhQddhQTCdTQTChTQhhTQhhdQTCChQddhQdhhQddhQTCTdQTCTdQhffQTCddQfCdQddhQdhhQddhQffTQTCTfQTCCdQTCCCQfffQfhTQTChfQdffQdfdQTChCQTCChQTCCCQfhTQTChfQdffQdfdQddhQdhhQddhQTCdfQTCCfQTCThQddhQdhhQddhQhffQhhTQTChfQhdfQTCTCQddhQdhhQddhQffhQTCdhQTCCCQfffQTCCfQTChCQTCdfQfhTQTChfQdffQdfdQTChdQffTQddhQdhhQddhQTChdQTCTfQdfTQTChdQdfhQdfTQTCdfQTCCfQTCThQTChCQddhQdhhQddhQTCTfQdfTQffTQTCdTQTCCfQdfCQTCTCQTCdfQTCdCQTCTfQddhQdhhQddhQTCTfQfffQTCCCQTCdhQTCdfQTChCQffTQTCTfQfffQfhTQTChfQdffQdfdQddhQdhhQddhQTCdhQTCCCQTCddQTChTQTCCCQTCdfQTChCQddhQdhhQddhQhdfQfCdQdhfQhCTQdfdQhCTQdfTQfCdQhdfQfdhQddhQdhhQddhQTCTdQTCdCQTCCdQddhQdhhQddhQTCdfQTCCCQTCTfQfffQfCTQTCCCQTCdfQTCdfQffTQTCCdQddhQdhhQddhQTCCTQTCTdQTCdCQTCdCQTCdhQddhQdhhQddhQfCdQffTQTCfCQffTQTCTfQddhQdhhQddhQfdTQffTQTCdhQTCTfQTCCfQTCTfQTCCdQhTdQfhTQTChfQdffQdfdQfdhQddhQdhhQddhQdfhQhCfQdfhQhCCQdfdQhCTQfffQhhdQhfTQfCCQTCTdQhffQddhQdhhQddhQTCCCQTChfQTCdTQTCdCQTCdhQTChCQTCdfQddhQdhhQddhQTCfCQTCdCQTChTQTCdhQfhTQTChfQdffQdfdQTCddQTChTQTCCCQTCdfQTChCQddhQdhhQddhQhCTQhCdQhChQhCdQhCfQdfdQfTCQhfdQhhfQffTQfCdQfTCQddhQdhhQddhQTCCfQTCdCQTCTfQfhTQTChfQdffQdfdQTCdfQTCdCQTCdhQTCdhQTCfCQfhTQTChfQdfdQffTQddhQdhhQddhQTCChQTChCQTChCQTCdTQTCdfQhTdQdfTQdfTQTCdhQffTQddhQdhhQddhQffTQTCdfQTCTTQdddQffTQTCdfQTCTTQhdCQddhQdhhQddhQTCTfQTCdfQfdCQTCdhQTCTfQddhQdhhQddhQffTQTCTdQTCTTQddhQdhhQddhQhdfQhfCQfCfQfTCQffhQddhQdhhQddhQdfhQhChQdffQdfdQdfhQhCCQdffQfdCQffhQfdCQfCdQTCTdQfdTQddhQdhhQddhQTCCTQTCdfQdhfQTCCCQTChfQTChCQTCdhQffTQddhQdhhQddhQTCdCQTChTQfhTQTChfQdffQdfdQTCChQffTQTChdQTCCCQfhTQTChfQdffQdfdQffhQTCChQddhQdhhQddhQffhQTCdhQTCCCQfffQTCCfQTChCQTCdfQddhQdhhQddhQTChhQTCCfQTChCQTCChQfhTQTChfQdffQdfdQTChCQTCChQTCCCQfhTQTChfQdffQdfdQTCdCQddhQdhhQddhQhdfQfCdQdhfQhhCQfChQfThQdfTQTCThQffTQTCCfQddhQdhhQddhQTCTCQTCdCQTCCfQTCTfQddhQdhhQddhQTChhQdfCQTCCdQTCCfQTChCQTCChQTChTQffdQTChTQTCdfQddhQdhhQddhQhfdQfhTQTChfQdffQdfdQffhQffTQTCTfQTCTfQTCdCQTChCQfhTQTChfQdffQdfdQTChTQddhQdhhQddhQffTQTChfQTCCfQTCdCQTCdfQddhQdhhQddhQdffQhCfQhChQfChQTCTfQfdCQfTfQTCdTQfCCQddhQdhhQddhQTCCfQdfCQTCdfQTCCfQTCThQTCdfQTCCfQTCThQTCCfQdfCQddhQdhhQddhQTCCdQTCCCQTChCQfCdQffTQTCThQTCCCQfTfQTCdfQTCCCQddhQdhhQddhQffhQTCChQfhTQTChfQdffQdfdQTCThQTCCCQdCdfQTdThQTThhQThCTQddhQdhhQddhQfffQffTQTChCQffTQddhQdhhQddhQdffQdfhQhChQTCfTQfCfQTCCTQhhCQTCCfQTCddQddhQdhhQddhQTCChQTChCQTChCQTCdTQTCdfQhTdQdfTQdfTQffTQTCdTQddhQdhhQddhQdfhQhCCQhCdQhChQhCTQhTCQTCCTQTCTdQTCdhQTCCdQffTQTCTTQddhQdhhQddhQhCdQhCfQhTTQdfdQhCTQhhfQTCdfQTCCCQfCCQTCChQhfdQddhQdhhQddhQTCThQTCdfQTCCdQddhQdhhQddhQTCdhQTCCfQTCCdQTCCfQTCTfQffTQTCTdQfhTQTChfQdffQdfdQTCdCQTCTfQddhQdhhQddhQdfCQfhTQTChfQdffQdfdQfCfQTCTdQTCCCQffTQTCdfQTCCCQfhTQTChfQdffQdfdQTCdhQddhQdhhQddhQTCTdQTCCCQTCTfQTCCdQTChCQTCChQddhQdhhQddhQTChCQTCChQTCdhQTCCCQffTQfffQhfdQhhdQddhQdhhQddhQTChfQTCChQhdfQTChCQTCdCQddhQdhhQddhQTCCTQfdCQTCThQTCCdQTChfQddhQdhhQddhQTCCdQTCCCQTChCQddhQdhhQddhQTCThQTCCCQTCdfQTCdfQffTQTCCdQTCCCQddhQdhhQddhQTCdfQTCCCQTCTfQfffQTCCCQTCdhQhfdQhhdQddhQdhhQddhQhTCQhCfQhTTQhCCQTCdCQTCThQTCTCQfTCQffhQhfTQddhQdhhQddhQTCddQhffQTCCCQfTTQhhCQddhQdhhQddhQffdQfdCQffdQTCChQfCdQddhQdhhQddhQdfTQTCdfQTCCfQTCThQhddQTChCQTCfCQTCdTQTCCCQhdCQddhQfhdQhThQfhfQdfdQTChfQhCdQTCCCQhCfQTCCTQhdCQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQdhCQTCfdQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQffhQhTCQdfhQffhQTCCCQhThQTCffQhThQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQTCCCQhCfQTCCTQddfQdhCQhThQTCffQ",26,"CTdhfQger",24,5,25))
