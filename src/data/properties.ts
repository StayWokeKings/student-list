export type Property = {
  id: string
  name: string
  type: 'Apartment' | 'Single Family' | 'Townhome' | 'Condo'
  neighborhood: string
  address: string
  price: number
  beds: number
  baths: number
  sqft: number
  available: string
  hue: number
  description: string
  amenities: string[]
  featured?: boolean
}

export const properties: Property[] = [
  {
    id: 'oakwood-loft-4b',
    name: 'Oakwood Loft 4B',
    type: 'Apartment',
    neighborhood: 'Oakwood',
    address: '412 Oakwood Ave, Unit 4B',
    price: 1650,
    beds: 2,
    baths: 1,
    sqft: 950,
    available: 'Aug 15, 2026',
    hue: 165,
    description:
      'A bright, updated loft in the heart of Oakwood with exposed brick, hardwood floors, and an in-unit washer/dryer. Walking distance to cafes and the greenway.',
    amenities: ['In-unit laundry', 'Hardwood floors', 'Central A/C', 'Pet friendly', 'Bike storage'],
    featured: true,
  },
  {
    id: 'riverside-commons-12',
    name: 'Riverside Commons #12',
    type: 'Condo',
    neighborhood: 'Riverside District',
    address: '88 Riverside Way, Unit 12',
    price: 2100,
    beds: 2,
    baths: 2,
    sqft: 1120,
    available: 'Now',
    hue: 195,
    description:
      'Riverfront condo with private balcony and unobstructed water views. Gated community with pool, gym, and secure parking garage.',
    amenities: ['Balcony', 'Pool access', 'Fitness center', 'Assigned parking', 'Elevator building'],
    featured: true,
  },
  {
    id: 'cedar-street-house',
    name: 'Cedar Street House',
    type: 'Single Family',
    neighborhood: 'Cedar Falls',
    address: '2207 Cedar St',
    price: 2650,
    beds: 4,
    baths: 2.5,
    sqft: 2100,
    available: 'Sep 1, 2026',
    hue: 30,
    description:
      'Spacious single-family home on a quiet cul-de-sac with a fenced backyard, attached two-car garage, and a fully updated kitchen.',
    amenities: ['Fenced yard', 'Two-car garage', 'Updated kitchen', 'Central A/C', 'Basement storage'],
    featured: true,
  },
  {
    id: 'downtown-flats-9c',
    name: 'Downtown Flats 9C',
    type: 'Apartment',
    neighborhood: 'Downtown',
    address: '150 Main St, Unit 9C',
    price: 1875,
    beds: 1,
    baths: 1,
    sqft: 780,
    available: 'Now',
    hue: 260,
    description:
      'High-rise one-bedroom with floor-to-ceiling windows and skyline views. Steps from restaurants, transit, and the arts district.',
    amenities: ['Skyline views', 'Rooftop deck', 'Concierge', 'In-unit laundry', 'Pet friendly'],
  },
  {
    id: 'maplewood-townhome-3',
    name: 'Maplewood Townhome #3',
    type: 'Townhome',
    neighborhood: 'Maplewood',
    address: '76 Maplewood Ln, Unit 3',
    price: 2200,
    beds: 3,
    baths: 2.5,
    sqft: 1550,
    available: 'Oct 1, 2026',
    hue: 100,
    description:
      'Two-story townhome with an attached garage, private patio, and community green space. Close to top-rated schools.',
    amenities: ['Attached garage', 'Private patio', 'Community green space', 'In-unit laundry'],
  },
  {
    id: 'birchwood-apartments-2a',
    name: 'Birchwood Apartments 2A',
    type: 'Apartment',
    neighborhood: 'Birchwood',
    address: '540 Birchwood Rd, Unit 2A',
    price: 1450,
    beds: 1,
    baths: 1,
    sqft: 680,
    available: 'Now',
    hue: 15,
    description:
      'Cozy ground-floor apartment with a private patio and dedicated parking spot. On-site laundry facility and package lockers.',
    amenities: ['Private patio', 'Dedicated parking', 'On-site laundry', 'Package lockers'],
  },
  {
    id: 'hillcrest-duplex-a',
    name: 'Hillcrest Duplex Unit A',
    type: 'Single Family',
    neighborhood: 'Hillcrest',
    address: '19 Hillcrest Ct, Unit A',
    price: 1950,
    beds: 3,
    baths: 2,
    sqft: 1400,
    available: 'Nov 1, 2026',
    hue: 220,
    description:
      'Half of a well-maintained duplex with a private entrance, small yard, and off-street parking for two vehicles.',
    amenities: ['Private entrance', 'Yard', 'Off-street parking', 'Storage shed'],
  },
  {
    id: 'south-park-studio-6',
    name: 'South Park Studio 6',
    type: 'Apartment',
    neighborhood: 'South Park',
    address: '312 Park Ave S, Unit 6',
    price: 1150,
    beds: 0,
    baths: 1,
    sqft: 480,
    available: 'Now',
    hue: 285,
    description:
      'Efficient studio layout perfect for a single tenant. Walkable to South Park and the farmers market. Utilities included.',
    amenities: ['Utilities included', 'Walkable location', 'On-site laundry'],
  },
]

export function getPropertyById(id: string) {
  return properties.find((p) => p.id === id)
}
