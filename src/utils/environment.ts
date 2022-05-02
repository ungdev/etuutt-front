// This file parse and export all environment variables

export const apiUrl = (): string => process.env.NEXT_PUBLIC_API_URL || '';
