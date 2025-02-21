<!-- 01. <script> in the <head> -->
= if we use <Script> tag in the <head>, at first it will download the html documents,
  while downloading html documents, it will see that there is a <script> file and then
  executing script file immediately then go to the <body>  for the html elements. 
  At the end, it can't find the connection between script file and elements from the 
  <body>. Because already script file is executed before we going to the body elements.

<!-- 02. <script> at the end of the <body>-->
= This will do the work fine like: download the whole html documents & create DOM >
  download scripts > execute. But it has also problem, when we will use this method
  in a big project, Our script files will be bigger in size. So, in this method after
  downloading the html documents and create DOM> sites have to wait little bit longer
  for response properly because of downloading the heavy Script file on the browser.

<!-- 03. <script> with async in the <head> -->
= In this method, while downloading the html documents & create DOM, browser also starts
  download the script files at the same time. So, if browser downloaded the script file
  before the much loaded html file, then script will be executed before completing
  html document. So, we will use this ASYNC method only when we need any external scripts
  like: chatbot, social media msg popup, analytics scripts etc.

<!-- 04. <script> with defer in the <head> -->
= This is the perfect method for our uses. At first defer will download html documents
  & building DOM, also download the script file parallel but not executing this time
  immediately. After downloading the whole documents and scripts file, it will execute!
  How great is this method! This will save our times and our sites will be way more
  responsive.