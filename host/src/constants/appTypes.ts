// Constantes para los tipos de aplicaciones
export const APP_TYPES = {
  RICK_AND_MORTY: 'rick-and-morty',
  HARRY_POTTER: 'harry-potter',
} as const;

export type AppType = (typeof APP_TYPES)[keyof typeof APP_TYPES];
