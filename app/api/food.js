export default function handler(req, res) {
  const foodData = [
    { name: "Boilded Egg", price: 10, text: "Lorem ipsum", image: "/images/egg.png", type: "breakfast" },
    { name: "RAMEN", price: 25, text: "Lorem ipsum", image: "/images/ramen.png", type: "lunch" },
    { name: "GRILLED CHICKEN", price: 45, text: "Lorem ipsum", image: "/images/chicken.png", type: "dinner" },
    { name: "CAKE", price: 18, text: "Lorem ipsum", image: "/images/cake.png", type: "breakfast" },
    { name: "BURGER", price: 23, text: "Lorem ipsum", image: "/images/burger.png", type: "lunch" },
    { name: "PANCAKE", price: 25, text: "Lorem ipsum", image: "/images/pancake.png", type: "dinner" }
  ];

  res.status(200).json(foodData);
}
