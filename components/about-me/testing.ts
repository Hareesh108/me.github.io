interface PizzaMenu {
    starter: string;
    pizza: string;
    beverage: string;
    dessert: string;
  }
  
  const simpleMenu: PizzaMenu = {
    starter: 'Salad',
    pizza: 'Pepperoni',
    beverage: 'Coke',
    dessert: 'Vanilla ice cream',
  };
  
  function adjustMenu(
    menu: PizzaMenu,
    menuEntry: keyof PizzaMenu,
    change: string,
  ) {
    menu[menuEntry] = change;
    console.log(simpleMenu);
    
  }
  
  // 👍
  adjustMenu(simpleMenu, 'pizza', 'Hawaii');
  // 👍
  adjustMenu(simpleMenu, 'beverage', 'Beer');
  
  adjustMenu(simpleMenu,"starter","New")
  
  // // 👎 Type - 'bevereger' is not assignable
  // adjustMenu(simpleMenu, 'bevereger', 'Beer');
  // // 👎 Wrong property - 'coffee' is not assignable
  // adjustMenu(simpleMenu, 'coffee', 'Beer');
  