function getInventoryValuation(inventory) {
    const result = {}
    for (const item of inventory){
        if(item.qty<=0)continue;
        if(!result[item.category])result[item.category]=0
        result[item.category] += item.qty *item.price;
    
    }
    return result;
}

// Test Code
const testInventory = [
    { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
    { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
    { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
    { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory)); 
