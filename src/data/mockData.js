// mock data for inventory items and categories

export const inventoryItems = [
    {
      id: 1,
      name: "Gildan T-Shirt - Red / M",
      color: "red",
      size: "M",
      currentStock: 13,
      targetStock: 24,
      unit: "PCS",
      status: "low"
    },
    {
      id: 2,
      name: "Gildan T-Shirt - Red / L",
      color: "red", 
      size: "L",
      currentStock: 46,
      targetStock: 24,
      unit: "PCS",
      status: "good"
    },
    {
      id: 3,
      name: "Gildan T-Shirt - Black / S",
      color: "black",
      size: "S", 
      currentStock: 21,
      targetStock: 24,
      unit: "PCS",
      status: "low"
    },
    {
      id: 4,
      name: "Gildan T-Shirt - Black / M",
      color: "black",
      size: "M",
      currentStock: 34,
      targetStock: 24,
      unit: "PCS", 
      status: "good"
    },
    {
      id: 5,
      name: "Gildan T-Shirt - Black / L",
      color: "black",
      size: "L",
      currentStock: 27,
      targetStock: 24,
      unit: "PCS",
      status: "good"
    },
    {
      id: 6,
      name: "Gildan T-Shirt - White / S",
      color: "white",
      size: "S",
      currentStock: 34,
      targetStock: 24,
      unit: "PCS",
      status: "good"
    },
    {
      id: 7,
      name: "Gildan T-Shirt - White / M", 
      color: "white",
      size: "M",
      currentStock: 51,
      targetStock: 24,
      unit: "PCS",
      status: "good"
    },
    {
      id: 8,
      name: "Gildan T-Shirt - White / L",
      color: "white",
      size: "L", 
      currentStock: 29,
      targetStock: 24,
      unit: "PCS",
      status: "good"
    }
  ];
  
  export const categories = [
    { id: 1, name: "Materials", active: true },
    { id: 2, name: "Products", active: false },
    { id: 3, name: "Fulfillment", active: false },
    { id: 4, name: "Integrations", active: false }
  ];