// mock data for inventory items and categories

export const inventoryItems = [
    {
      id: 1,
      name: "Gildan T-Shirt - Red / M",
      category: "Blanks",
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
      category: "Blanks",
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
      category: "Blanks",
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
      category: "Blanks",
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
      category: "Blanks",
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
      category: "Blanks",
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
      category: "Blanks",
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
      category: "Blanks",
      color: "white",
      size: "L", 
      currentStock: 29,
      targetStock: 24,
      unit: "PCS",
      status: "good"
    }
];
  
export const categories = [
    { id: 1, name: "Materials", active: true, subcategories: ["Blanks", "Finished Products"] },
    { id: 2, name: "Products", active: false, subcategories: [] },
    { id: 3, name: "Fulfillment", active: false, subcategories: [] },
    { id: 4, name: "Integrations", active: false, subcategories: [] }
];