/* Create an array of user objects called users. 
Each user object should have an id, name, and email property.*/

let users = [
    {name: "Mike", id: 1, email: "mike@gmail.com"}, 
    {name: "Jessica", id: 22, email: "jessica@gmail.com"}, 
    {name: "Alexis", id: 3, email: "alexis@gmail.com"}, 
    {name: "Timothy", id: 44, email: "timothy@gmail.com"}
]

/*Implement a function called fetchUserById that accepts a user ID as an argument and returns a promise. 
The promise should resolve with the user object if the user with the given ID exists in the users array. 
Otherwise, it should reject with an error message. Simulate an asynchronous request by using setTimeout() to delay the resolution or rejection of the promise by 1 second.*/

function fetchUserById(id) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = users.find(user => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject("ERROR!");
            }
        }, 1000);
    });
}

/*Use the fetchUserById function to fetch the user with ID 1. 
Log the user object if the promise is fulfilled and the error message if the promise is rejected. 
Next, chain another fetchUserById call to fetch the user with ID 2. Log the user object if the promise is fulfilled and the error message if the promise is rejected.*/

fetchUserById(1)
.then ((user) => {
    console.log(user);
})
.catch ((error) => {
    console.log(error);
});

fetchUserById(2)
   .then ((user) => {
        console.log(user);
    })
  .catch ((error) => {
        console.log(error);
    });