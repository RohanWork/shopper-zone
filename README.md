# Shopper's Zone Web Application
- The introduced platform is an online shopping ecommerce website where the product is added by the seller and it is bought by online customer. This product includes all men’s and women’s wear. Prize and availability are clearly mention below the image of the product. User can search the product and can use filters to sort the products. User can also add the product to cart. Payment is done by online payment mode. Admin can manage sellers as well as customers orders.


# Technologies used:
- Java
- SpringBoot
- React
- MySQL


# Running on local system:
- If you want to execute/run this project in your local system follow these steps:
- Git clone this project using this link [right click and copy link address](https://github.com/RohanWork/shopper-zone.git)

***For backend part***
- After that open backend folder in spring tool suite (STS) or download from here [link](https://spring.io/tools)
- Let the import and buld maven project
- To execute in your system, you have to modify some code like follows
- Open MySQL and create a database called 'ecommerce'
- Got to shopper-zone ecomm-backend -> src -> main -> resources -> application.properties change the username and password with your MySQL credentials. 
- Add your gmail account at 'spring.mail.username'
- Lastly create folder structure like 'D:/server/uploads' to store your images eithout this you cannot see your upload images.

***For frontend part***
- Next open command prompt in frontend folder path (Goto frontend folder -> press shift and right click)
- Type command 'npm install', it will take some time to install npm modules
- After installing npm type command 'npm start'


***Bingo your are good to go...***
