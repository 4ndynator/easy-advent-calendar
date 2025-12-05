# Motivation
In order to learn Angular, I decided to create a simple advent calendar application to learn the core concepts and warm up with Angular.
The purpose of this app is to be able to share an advent calendar with a loved one or friend.
The content of the single doors can be anything. Think of something like: 
- Small exercises 
- Words of love
- Fun little facts
- Some habits they want to keep track on

# How it works
The idea was to make this work without a server. LocalStorage is utilized for the cards. Therefore, don't clean the storage of the browser, or add the content every time again.
You can create the Advent Calendar content under the `/create` path. There, simply enter the text for the 24 doors **chronologically**.
The content is then encoded with base64 so you can easily share it without revealing the final door.
The shared content then needs to be inserted by the other person.
Each day another door opens and hopefully another person gets to smile.
