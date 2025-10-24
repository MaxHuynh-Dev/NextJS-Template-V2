import { metadataConfig } from '@Constants/metadata';
import HomePage from '@Modules/HomePage';
import type { Metadata } from 'next';

export const metadata: Metadata = metadataConfig;

export default function Home() {
  return <HomePage />;
}
