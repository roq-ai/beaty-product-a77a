const mapping: Record<string, string> = {
  bookings: 'booking',
  organizations: 'organization',
  reviews: 'review',
  users: 'user',
  vehicles: 'vehicle',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
