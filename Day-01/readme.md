<!-- 01. <script> in the <head> -->
= If we use the script tag in the head, at first it will download the HTML documents while 
  downloading HTML documents, it will see that there is a script file, and then executing 
  the script file immediately then go to the body for the html elements. In the end, it can't
  find the connection between the script file and elements from the body. Because the script 
  file is already executed before we go to the body elements.

<!-- 02. <script> at the end of the <body>-->
= This will do the work well like: downloading the whole HTML documents & building DOM > 
  download scripts > executing. But it also has a problem: when we use this method in
  a big project, Our script files will be bigger. So, after downloading the HTML documents
  and creating DOM> sites, this method has to wait a little longer for a response because 
  of downloading the heavy Script file on the browser.

<!-- 03. <script> with async in the <head> -->
= In this method, while downloading the HTML documents & building DOM, the browser also starts
  downloading the script files. So, if the browser downloaded the script file
  before the much-loaded HTML file, then the script will be executed before completing
  HTML document. So, we will use this ASYNC method only when we need any kinds of external scripts
  like: chatbot, social media msg popup, analytics scripts etc.

<!-- 04. <script> with defer in the <head> -->
= This is the perfect method for our uses. At first, defer will download HTML documents
  & building DOM, and also download the script file parallel but not execute this time
  immediately. After downloading the whole document and script file, it will execute!
  How great is this method! This will save us time and our sites will be way more
  responsive.