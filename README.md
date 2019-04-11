# iis-htaccess-converter
This project converts an IIS ReWrite rule web.config file to rewrite rule .htaccess

In the text area copy and paste: 1 or more rules: 

You can also copy and paste the whole contents of a web.config file and the converter will extract the match url and action url of 
each rule for the conversion to .htaccess rules.

                <rule name="aaup" stopProcessing="true">
                    <match url="^aaup/?$" />
                    <conditions logicalGrouping="MatchAll" trackAllCaptures="false" />
                    <action type="Redirect" url="http://www.wcsuaaup.org" appendQueryString="false" />
                </rule>
                <rule name="academictesting" stopProcessing="true">
                    <match url="^academictesting/?$" />
                    <conditions logicalGrouping="MatchAll" trackAllCaptures="false" />
                    <action type="Redirect" url="/testing" appendQueryString="false" />
                </rule>
                
 Then click convert.
 
Result will be: 
RewriteRule ^aaup/?$   http://www.wcsuaaup.org [R=301,NC,L]
RewriteRule ^academictesting/?$   /testing [R=301,NC,L]

Rewrite rules for pdfs need to be worked on, but this works for any other rule.  
