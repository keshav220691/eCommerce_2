export const SingleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
          { value: '200-500', label: '$200 to $500' },
          { value: '500-1000', label: '$500 to $1000' },
          { value: '1000-2000', label: '$1000 to $2000' },
          { value: '2000-3000', label: '$2000 to $3000' },
          { value: '3000-5000', label: '$3000 to $5000' }
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: '10', label: '10% and above' },
            { value: '20', label: '20% and above' },
            { value: '30', label: '30% and above' },
            { value: '40', label: '40% and above' },
            { value: '50', label: '50% and above' },
            { value: '60', label: '60% and above' },
            { value: '70', label: '70% and above' },
            { value: '80', label: '80% and above' },
            { value: '90', label: '90% and above' }
        ],
    },
    {
        id: "availability",
        name: "Availability",
        options: [
          { value: 'available', label: 'Available' },
          { value: 'not-available', label: 'Not Available' }
        ],
    },
]
  