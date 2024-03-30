function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);

   function onClick() {
      const restaurants = parseRestaurantsData();
      const bestRestaurant = getBestRestaurant(restaurants);

      displayBestRestaurantInfo(bestRestaurant);
      displayRestaurantWorkers(bestRestaurant);
   }

   function parseRestaurantsData() {
      const newRestaurants = JSON.parse(document.querySelector("#inputs textarea").value);
      const restaurants = {};

      newRestaurants.forEach((restaurantData) => {
         const [restaurantName, workersData] = restaurantData.split(" - ");
         const workers = workersData.split(", ").map(worker => {
            const [workerName, salary] = worker.split(" ");
            return { name: workerName, salary: Number(salary) };
         });

         if (restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName].push(...workers);
         } else {
            restaurants[restaurantName] = workers;
         }
      });

      return restaurants;
   }

   function getBestRestaurant(restaurants) {
      let bestRestaurant = null;
      let bestAvgSalary = 0;

      for (const [name, workers] of Object.entries(restaurants)) {
         const avgSalary = workers.reduce((total, worker) => total + worker.salary, 0) / workers.length;

         if (avgSalary > bestAvgSalary || bestRestaurant === null) {
            bestAvgSalary = avgSalary;
            bestRestaurant = { name, workers, avgSalary, bestIndividualSalary: Math.max(...workers.map(worker => worker.salary)) };
         }
      }

      return bestRestaurant;
   }

   function displayBestRestaurantInfo(bestRestaurant) {
      const restaurantInfo = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestIndividualSalary.toFixed(2)}`;
      document.querySelector("#bestRestaurant p").textContent = restaurantInfo;
   }

   function displayRestaurantWorkers(bestRestaurant) {
      const sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
      const workerInfo = sortedWorkers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(" ");
      document.querySelector("#workers p").textContent = workerInfo;
   }
}