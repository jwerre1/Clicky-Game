# React-Memory-Game
A click-based memory game built with React.

---

## Functionality

Upon visiting the [website](https://reverent-raman-ff1ebb.netlify.com/), the player sees a sticky navbar, header, and twelve images from the tv show 'South Park.' The header explaines how to play the game: 'Click on an image to earn points, but don't click on any more than once!' Initially, the navbar asks the player to, 'click an image to begin,' and also lists the player's current score and high score. 

![main-page](/images/imgOne.jpeg)

As the player selects images, the navbar displays an appropriate message if they earned a point, making the score counter grow by one point. With each selection, the images randomly shuffle.

![correct-selection](/images/imgTwo.jpeg)

If the player makes a duplicate, incorrect selection, the score counter resets, while the 'high score' counter is maintained. The message in the navbar changes and the images also shake.  

![correct-selection](/images/gifOne.gif)

If the player is able to select all twelve images without repeating any one, the navbar message updates and the game restarts.

![game-won](/images/imgThree.jpeg)

## Built With

* [React](https://reactjs.org/) - a JavaScript library for building user interfaces. 
* [Bootstrap](https://getbootstrap.com/) - a CSS framework.

## Authors
* **Jordan Werre**
