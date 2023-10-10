//A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
//They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. 
//In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

const froyoflavors = {
    flavors: ("vanilla", "strawberry", "coffee")
};

   console.log(Object.keys(froyoflavors));

   function froyoflavors() {
  
    const input = prompt("vanilla", "strawberry", "coffee",);

    const flavors = input.split(',');

    const flavorCount = {vanilla: 3,
        strawberry: 1,
        coffee: 2,
    };

    flavors.forEach(flavor => {
      flavors = flavors.trim();
      flavorCount[flavors] = (flavorCount[flavors] || 0) + 1;
    });

    console.table(flavorCount);
  }

  